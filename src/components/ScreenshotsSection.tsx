import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function ScreenshotsSection() {
  const screenshots = [
    {
      title: 'Daily Details',
      description: 'Your one thing with notes and memories',
      image: '/screenshots/onething4.png'
    },
    {
      title: 'Your History',
      description: 'Browse past days with month selector and search',
      image: '/screenshots/onething2.png'
    },
    {
      title: 'Daily Reflection',
      description: 'How did it go? Capture your thoughts',
      image: '/screenshots/onething3.png'
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#FAF7F2] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the simplicity and power of focused productivity
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollAnimation delay={0}>
            <div className="flex flex-col max-w-xs mx-auto lg:max-w-none">
              <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl mb-6">
                <div className="aspect-[1290/2796] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src={screenshots[0].image}
                    alt={screenshots[0].title}
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {screenshots[0].title}
              </h3>
              <p className="text-gray-600 text-center">
                {screenshots[0].description}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="flex flex-col max-w-xs mx-auto lg:max-w-none">
              <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl mb-6">
                <div className="aspect-[1290/2796] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src={screenshots[1].image}
                    alt={screenshots[1].title}
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {screenshots[1].title}
              </h3>
              <p className="text-gray-600 text-center">
                {screenshots[1].description}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="flex flex-col max-w-xs mx-auto lg:max-w-none">
              <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl mb-6">
                <div className="aspect-[1290/2796] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src={screenshots[2].image}
                    alt={screenshots[2].title}
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {screenshots[2].title}
              </h3>
              <p className="text-gray-600 text-center">
                {screenshots[2].description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}