'use client';

import { BookOpen, CircleDot, Heart, ShieldCheck } from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import ScrollAnimation from '@/components/ScrollAnimation';

const reasons = [
  {
    icon: CircleDot,
    title: 'One intention, a little more clarity.',
    text: 'Instead of maintaining a growing task backlog, choose one meaningful thing for today. Give it your attention, then let tomorrow be tomorrow.',
  },
  {
    icon: BookOpen,
    title: 'A focus and a journal, together.',
    text: 'A task list tells you what to do. A blank page asks where to begin. OneThing gives you a daily starting point and room for the photos, places, and stories around it.',
  },
  {
    icon: Heart,
    title: 'Room for days that go differently.',
    text: 'Finished it, made some progress, or changed direction? Reflect on what happened. Your day is worth remembering even when it did not go to plan.',
  },
  {
    icon: ShieldCheck,
    title: 'Your memories, under your control.',
    text: 'No separate OneThing account. Your journal lives on your device and syncs with your own iCloud when available. Keep an independent backup whenever you want.',
  },
];

export default function WhyOneThing() {
  const { t } = useLanguage();

  return (
    <section id="why-onething" aria-labelledby="why-heading"
      className="border-t border-[#E5DCC8] bg-[#F5F1E8] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <ScrollAnimation>
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#a84c37]">
              {t('Why OneThing?')}
            </p>
            <h2 id="why-heading" className="mb-6 text-balance text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {t('Your day is more than a checklist.')}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              {t('OneThing brings a daily intention and a photo journal into one quiet place. Make space for what matters today, and keep a little of it for tomorrow.')}
            </p>
            <a href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D9C6B2] bg-white/60 px-5 py-3 text-sm font-medium text-[#a84c37] transition-colors hover:bg-white">
              {t('See what is free and what is Plus')} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </ScrollAnimation>
        <div className="space-y-8">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <ScrollAnimation key={title} delay={index * 80}>
              <div className="flex gap-5 border-b border-[#E5DCC8] pb-8 last:border-b-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E5DCC8] bg-[#FAF7F2] text-[#a84c37]">
                  <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{t(title)}</h3>
                  <p className="leading-relaxed text-gray-600">{t(text)}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
