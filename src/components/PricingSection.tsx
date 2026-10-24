'use client';

import { ArrowUpRight, Check, Cloud, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/components/LanguageProvider';
import ScrollAnimation from '@/components/ScrollAnimation';

// Launch USD prices confirmed against Configuration/OneThingPlus.storekit.
const plans = [
  {
    name: 'Free', price: '0', period: 'no subscription',
    description: 'The everyday essentials.',
    details: ['Daily focus, journaling, tags & bookmarks', 'One photo per entry',
      'New entries for today and the previous 3 days', 'iCloud sync and backup & restore'],
    action: 'Get OneThing',
  },
  {
    name: 'Plus Monthly', price: '2.99', period: 'per month',
    description: 'A little more room, month by month.',
    details: ['All Plus features', 'Billed US$2.99 each month', 'Renews automatically until canceled'],
    action: 'Choose in the app',
  },
  {
    name: 'Plus Yearly', price: '19.99', period: 'per year',
    description: 'A year of memories, one annual bill.',
    details: ['All Plus features', 'Billed US$19.99 each year', 'Renews automatically until canceled'],
    action: 'Choose in the app', featured: true,
  },
  {
    name: 'Plus Lifetime', price: '49.99', period: 'one-time purchase',
    description: 'Make it yours with a single purchase.',
    details: ['All Plus features', 'One payment for permanent Plus access', 'No recurring subscription'],
    action: 'Choose in the app',
  },
];

const plusFeatures = ['Up to 10 photos per entry', 'Create entries for any past day',
  'Photo calendars, yearly reviews & posters', 'All widgets, accent colors & custom covers'];

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" aria-labelledby="pricing-heading"
      className="border-t border-[#E5DCC8] bg-[#F5F1E8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#a84c37]">
              {t('Simple, upfront pricing')}
            </p>
            <h2 id="pricing-heading" className="mb-5 text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {t('Start free. Make more room with Plus.')}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {t('The same Plus features, three ways to pay. Choose the plan that fits your days.')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col rounded-3xl border p-6 sm:p-7 ${
              plan.featured ? 'border-[#E5745A] bg-[#FFF9F4] shadow-[0_12px_36px_rgba(165,91,58,0.08)]'
                : 'border-[#E5DCC8] bg-white/70'
            }`}>
              <div className="mb-5 flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{t(plan.name)}</h3>
                {plan.featured && <Sparkles size={19} className="text-[#a84c37]" aria-hidden="true" />}
              </div>
              <p className="whitespace-nowrap text-4xl font-semibold tracking-tight text-gray-900">
                <span className="mr-1 text-base font-medium tracking-normal text-gray-500">US$</span>
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-gray-600">{t(plan.period)}</p>
              <p className="mb-6 mt-5 text-sm leading-relaxed text-gray-600">{t(plan.description)}</p>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                    <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-[#a84c37]" />
                    {t(detail)}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/app/id6757373350" target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-3 text-sm font-semibold transition-colors ${
                  plan.featured ? 'border-[#E5745A] bg-[#E5745A] text-white hover:bg-[#d66a4f]'
                    : 'border-[#D9C6B2] text-[#a84c37] hover:bg-[#F9E8DE]'
                }`}>
                {t(plan.action)} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-[#E5DCC8] bg-[#FAF7F2] p-6 sm:p-8">
          <h3 className="mb-5 text-lg font-semibold text-gray-900">{t('Every Plus plan includes')}</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plusFeatures.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-[#a84c37]" />
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-6 text-sm leading-relaxed text-gray-600 md:grid-cols-2">
          <div className="space-y-3">
            <p>{t('Prices are shown in US dollars. Local currency, regional pricing, and applicable taxes are shown by Apple before you confirm a purchase.')}</p>
            <p>{t('Monthly and yearly plans renew automatically. Cancel in Apple Settings → your name → Subscriptions at least 24 hours before renewal. Lifetime is a one-time purchase; buying it does not cancel an existing subscription.')}</p>
            <Link href="/legal#subscriptions"
              className="inline-flex items-center gap-1 text-[#a84c37] underline underline-offset-4">
              {t('Read the purchase, cancellation & refund terms')} <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="space-y-3">
            <p className="flex gap-2.5">
              <Cloud size={19} className="mt-0.5 shrink-0 text-[#a84c37]" aria-hidden="true" />
              {t('iCloud sync is included in Free. If Plus ends, existing entries and photos stay accessible. Free limits apply to new content; existing entries remain editable.')}
            </p>
            <p>{t('Already bought the paid app? Eligible previous owners receive permanent Plus access after Apple verifies the original purchase. Use Restore Purchases in the app.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
