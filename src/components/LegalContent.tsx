'use client';

import ChineseLegal from '@/components/ChineseLegal';
import EnglishLegal from '@/components/EnglishLegal';
import { useLanguage } from '@/components/LanguageProvider';

export default function LegalContent() {
  const { language } = useLanguage();
  return language === 'zh-CN' ? <ChineseLegal /> : <EnglishLegal />;
}
