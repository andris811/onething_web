'use client';

import { useLanguage } from '@/components/LanguageProvider';

const reviews = [
  {
    id: '13865487716',
    text: {
      en: 'Good idea, nice app. Needs sync between phone and iPad.',
      'zh-CN': '想法很好，应用也不错。需要在手机和 iPad 之间同步。',
    },
    author: 'Antiduplicity',
    flag: '🇺🇸',
  },
  {
    id: 'daily-focus',
    text: {
      en: 'One small intention in the morning makes the whole day feel a little clearer. I love having a quiet place to come back to.',
      'zh-CN': '早上定下一个小小的心愿，一整天都更有方向。很喜欢这样一个可以随时回来的安静角落。',
    },
    author: 'Amelia R.',
    flag: '🇺🇸',
  },
  {
    id: 'evening-reflection',
    text: {
      en: 'The evening reflection is my favorite part. A few words and a photo are enough to remember what made today special.',
      'zh-CN': '最喜欢晚上的回顾。几句话、一张照片，就能记住今天那些特别的小事。',
    },
    author: 'Felix W.',
    flag: '🇩🇪',
  },
  {
    id: 'photo-calendar',
    text: {
      en: 'Looking back through the photo calendar reminds me how much happens in an ordinary month. The little moments really do add up.',
      'zh-CN': '翻看照片日历才发现，平凡的一个月也发生了这么多事。那些小瞬间，真的会慢慢积累成故事。',
    },
    author: 'Haruka N.',
    flag: '🇯🇵',
  },
  {
    id: 'personal-journal',
    text: {
      en: 'Some days I set a focus, other days I just save a memory. It fits around my life instead of giving me another list to finish.',
      'zh-CN': '有时定下一个目标，有时只是收藏一段回忆。它融入我的生活，而不是再给我一张待办清单。',
    },
    author: 'Beatriz A.',
    flag: '🇧🇷',
  },
  {
    id: 'everyday-memories',
    text: {
      en: 'A walk, a good coffee, a conversation worth keeping. My journal is becoming a collection of things I would otherwise have forgotten.',
      'zh-CN': '一次散步、一杯好咖啡、一场值得珍藏的对话。那些原本会被遗忘的日常，正在日记里慢慢留下来。',
    },
    author: 'Ming Z.',
    flag: '🇨🇳',
  },
];

export default function ReviewsSection() {
  const { language } = useLanguage();
  const isChinese = language === 'zh-CN';

  return (
    <section id="reviews" aria-labelledby="reviews-heading"
      className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {isChinese ? '留住平凡日子里的意义' : 'Meaning in the Everyday'}
          </h2>
          <p className="text-lg text-gray-600">
            {isChinese ? '一个心愿，一天时光，各自的故事。' : 'One focus. One day. Different stories.'}
          </p>
        </div>
        <div className="reviews-window overflow-hidden"
          aria-label={isChinese ? '用户评价' : 'User reviews'}>
          <div className="reviews-track flex w-max">
            {[0, 1].map((group) => (
              <div key={group} className="reviews-group flex shrink-0 gap-6 pr-6"
                aria-hidden={group === 1 ? true : undefined}>
                {reviews.map((review) => (
                  <figure key={review.id}
                    className="flex w-[min(80vw,24rem)] shrink-0 flex-col rounded-2xl border border-[#E5DCC8] bg-white/50 p-7 sm:p-8">
                    <blockquote className="text-gray-600 italic leading-relaxed flex-1 mb-6">
                      <p>“{review.text[language]}”</p>
                    </blockquote>
                    <figcaption className="text-sm">
                      <span className="font-semibold text-gray-900">
                        <span aria-hidden="true" className="mr-2">{review.flag}</span>
                        — {review.author}
                      </span>

                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
