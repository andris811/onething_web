'use client';

import { usePathname } from 'next/navigation';
import {
  createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore,
} from 'react';
import type { ReactNode } from 'react';

import { chineseTranslations } from '@/lib/translations';

type Language = 'en' | 'zh-CN';
const storageKey = 'onething-language';
const changeEvent = 'onething-language-change';
let currentLanguage: Language = 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribe(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function getSnapshot(): Language {
  try {
    const storedLanguage = window.localStorage.getItem(storageKey);
    return storedLanguage === 'zh-CN' || storedLanguage === 'en'
      ? storedLanguage : currentLanguage;
  } catch {
    return currentLanguage;
  }
}

function setLanguage(language: Language) {
  currentLanguage = language;
  try {
    window.localStorage.setItem(storageKey, language);
  } catch {
    // Keep language switching available when browser storage is disabled.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, () => 'en' as const);
  const pathname = usePathname();
  const t = useCallback((text: string) => (
    language === 'zh-CN' ? chineseTranslations[text] ?? text : text
  ), [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pathname === '/legal'
      ? (language === 'en' ? 'Terms & Privacy | OneThing' : '使用条款与隐私政策 | OneThing')
      : t('OneThing 3.0 — One Meaningful Thing Each Day');
    const description = pathname === '/legal'
      ? (language === 'en'
        ? 'Terms of use, OneThing Plus subscription information, and privacy policy for OneThing.'
        : '了解 OneThing 的使用条款、Plus 订阅与购买规则，以及隐私和数据处理方式。')
      : t('A personal photo journal for one meaningful thing each day. Set intentions, capture memories, reflect, and revisit your days with OneThing 3.0.');
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [language, pathname, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
