import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const screenshots = [
  { title: 'Home', description: 'Your daily focus and a timeline of moments worth keeping.', image: 1, alt: 'Home showing a personal cover, today’s completed focus, and previous journal entries' },
  { title: 'Overview', description: 'Explore your photo calendar, journal statistics, tags, and bookmarks.', image: 2, alt: 'Overview with word, day, and photo counts above a calendar filled with journal photos' },
  { title: 'Reflection', description: 'Check in with your intention, add photos, and write about your day.', image: 3, alt: 'Reflection editor with Focus and Journal modes, outcomes, photos, and reflection notes' },
  { title: 'Entry', description: 'Revisit the photo, feeling, and story behind one meaningful day.', image: 4, alt: 'A saved running entry with a cover photo, completed outcome, reflection, and tags' },
];

export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20 sm:py-24 lg:py-32 bg-[#FAF7F2] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet OneThing 3.0</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From a daily intention to a memory you can return to.</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {screenshots.map((screenshot, index) => (
            <ScrollAnimation key={screenshot.image} delay={index * 100}>
              <figure className="max-w-[280px] mx-auto">
                <div className="bg-gray-900 p-1.5 rounded-[2.25rem] shadow-xl mb-6">
                  <Image
                    src={`/screenshots/onething${screenshot.image}.png`}
                    alt={screenshot.alt}
                    width={1320}
                    height={2868}
                    sizes="(max-width: 639px) 280px, (max-width: 1023px) 45vw, 25vw"
                    className="w-full h-auto rounded-[1.9rem]"
                  />
                </div>
                <figcaption className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{screenshot.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
                </figcaption>
              </figure>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
