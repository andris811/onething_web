import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function ScreenshotSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <div className="aspect-[1290/2796] max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="/screenshots/onething2.png"
              alt="OneThing App Feature"
              width={1290}
              height={2796}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}