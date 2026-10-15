import { BookOpen, Camera, CalendarDays } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const updates = [
  { icon: BookOpen, title: 'Two ways to keep a day', text: 'Start with a focus, or save a memory in Journal mode. There is room for both.' },
  { icon: Camera, title: 'A more personal home', text: 'Your cover photo, today’s intention, and a visual timeline of the days behind you.' },
  { icon: CalendarDays, title: 'Your story at a glance', text: 'A photo calendar and journal overview bring your words, days, and photos together.' },
];

export default function VersionSection() {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-sm font-semibold tracking-widest uppercase text-[#a84c37] mb-3">A new chapter · Version 3.0</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Small moments. A fuller story.</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          {updates.map(({ icon: Icon, title, text }, index) => (
            <ScrollAnimation key={title} delay={index * 100}>
              <div className="border-t border-[#E5DCC8] pt-6">
                <Icon className="text-[#E5745A] mb-4" size={28} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
