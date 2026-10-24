'use client';

import { ArrowLeft, CircleHelp, CreditCard, Images, Layers3, Mail, Menu, ShieldCheck, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useLanguage } from '@/components/LanguageProvider';

interface NavigationProps {
  isLegalPage?: boolean;
}

export default function Navigation({ isLegalPage = false }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
      }
    }, { rootMargin: '-15% 0px -55% 0px' });
    for (const id of ['hero', 'why-onething', 'features', 'screenshots', 'pricing', 'contact']) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  const navItems = isLegalPage
    ? [{ href: '/#top', label: t('Back to Home'), icon: ArrowLeft }]
    : [
        { href: '#why-onething', label: t('Why OneThing'), icon: CircleHelp },
        { href: '#features', label: t('Features'), icon: Layers3 },
        { href: '#screenshots', label: t('Screenshots'), icon: Images },
        { href: '#pricing', label: t('Pricing'), icon: CreditCard },
        { href: '#contact', label: t('Contact'), icon: Mail },
        { href: '/legal', label: t('Terms & Privacy'), icon: ShieldCheck },
      ];

  function closeMenu(href: string) {
    setActiveHref(href);
    setIsMenuOpen(false);
  }

  function renderLinks(mobile = false) {
    return navItems.map(({ href, label, icon: Icon }) => {
      const active = href.startsWith('#') ? activeHref === href : pathname === href;
      const className = [
        'inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2.5 text-sm font-medium',
        'transition-all duration-200',
        mobile ? 'w-full rounded-xl px-4 py-3' : 'hover:-translate-y-0.5',
        active
          ? 'border-[#E5745A] bg-[#E5745A] text-white shadow-sm'
          : 'border-[#E5DCC8] bg-white/70 text-[#61564a] hover:border-[#E5745A]/50 hover:bg-[#F9E8DE] hover:text-[#a84c37]',
      ].join(' ');
      const content = <><Icon size={16} aria-hidden="true" />{label}</>;
      return (
        <li key={href}>
          {href.startsWith('#') ? (
            <a href={href} className={className} aria-current={active ? 'location' : undefined}
              onClick={() => closeMenu(href)}>{content}</a>
          ) : (
            <Link href={href} className={className} aria-current={active ? 'page' : undefined}
              onClick={() => closeMenu(href)}>{content}</Link>
          )}
        </li>
      );
    });
  }

  return (
    <nav aria-label={language === 'en' ? 'Main navigation' : '主导航'}
      className="sticky top-0 z-50 border-b border-[#E5DCC8] bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/#top" onClick={() => closeMenu('#top')}
            className="flex shrink-0 items-center gap-3">
            <Image src="/onething_logo.png" alt={t('OneThing Logo')}
              width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold text-[#E5745A]">OneThing</span>
          </Link>
          <ul className="ml-auto hidden items-center gap-2 min-[1150px]:flex">{renderLinks()}</ul>
          <div className="ml-auto flex shrink-0 items-center gap-2 min-[1150px]:ml-0">
            <button type="button"
              onClick={() => setLanguage(language === 'en' ? 'zh-CN' : 'en')}
              aria-label={language === 'en' ? '切换到简体中文' : 'Switch to English'}
              title={language === 'en' ? '简体中文' : 'English'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DCC8] bg-white/70 text-2xl transition-colors hover:bg-[#F9E8DE]">
              <span aria-hidden="true">{language === 'en' ? '🇨🇳' : '🇬🇧'}</span>
            </button>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('Toggle menu')} aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DCC8] bg-white/70 text-[#61564a] hover:bg-[#F9E8DE] min-[1150px]:hidden">
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation"
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-[#E5DCC8] bg-[#FAF7F2] p-3 shadow-xl sm:left-auto sm:w-80 min-[1150px]:hidden">
            <ul className="space-y-2">{renderLinks(true)}</ul>
          </div>
        )}
      </div>
    </nav>
  );
}
