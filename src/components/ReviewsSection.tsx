'use client';

import ScrollAnimation from './ScrollAnimation';

export default function ReviewsSection() {
  const reviews = [
    {
      text: "OneThing has completely changed how I approach my days. The simplicity is genius!",
      author: "Sarah M.",
      flag: "🇺🇸",
      rating: 5
    },
    {
      text: "Finally, an app that doesn't overwhelm me with features. Just focus and get things done.",
      author: "Mike R.",
      flag: "🇬🇧",
      rating: 5
    },
    {
      text: "The daily reflection feature helps me stay mindful and intentional. Highly recommend!",
      author: "Emma L.",
      flag: "🇨🇦",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Users
            </h2>
            <p className="text-lg text-gray-600">
              See what our community has to say
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-white border border-[#E5DCC8] p-8 rounded-2xl hover:shadow-2xl hover:border-[#E5745A]/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  <span>{review.flag}</span>
                  <span>- {review.author}</span>
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}