'use client';

import IPhoneFrame from '@/components/IPhoneFrame';
import { useLanguage } from '@/components/LanguageProvider';
import ScrollAnimation from './ScrollAnimation';

export default function ScreenshotSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <IPhoneFrame
            src="/screenshots/onething2.png"
            alt={t('OneThing App Feature')}
            className="max-w-sm mx-auto"
            sizes="(max-width: 639px) 90vw, 384px"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}