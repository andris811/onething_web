import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#FBF8F3] via-[#F5F1E8] to-[#EFE9DD] text-gray-900 overflow-hidden border-b border-[#E5DCC8]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMjksMTE2LDkwLDAuMDgpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-left">
            <p className="inline-flex rounded-full border border-[#E5745A]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#a84c37] mb-6">Introducing OneThing 3.0</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              One Meaningful Thing.
              <span className="block text-[#E5745A]">A Day Worth Remembering.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Set an intention or capture a memory. Bring your days together with photos, personal reflections, and a journal that feels like you.
            </p>
            <a
              href="https://apps.apple.com/hu/app/onething-daily/id6757373350"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E5745A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d66a4f] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
          </div>
          <div className="opacity-0 animate-fade-in-right flex justify-center lg:justify-end">
            <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl w-full max-w-[280px] sm:max-w-[320px]">
              <div className="aspect-[1320/2868] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/screenshots/onething1.png"
                  alt="OneThing 3.0 Home with today’s focus, reflection, and a photo journal of previous days"
                  width={1320}
                  height={2868}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}