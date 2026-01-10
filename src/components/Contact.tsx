import ScrollAnimation from './ScrollAnimation';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-[#F5F1E8] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about OneThing? We&apos;d love to hear from you
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-2xl mx-auto">
          <ScrollAnimation delay={200}>
            <div className="bg-white border border-[#E5DCC8] rounded-2xl p-8 hover:shadow-2xl hover:border-[#E5745A]/50 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex p-4 bg-[#E5745A]/10 rounded-full mb-4">
                  <svg className="h-8 w-8 text-[#E5745A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 mb-4">Need help? Contact our support team</p>
                <a
                  href="mailto:avdev2024@gmail.com"
                  className="text-[#E5745A] hover:text-[#d66a4f] font-medium transition-colors"
                >
                  avdev2024@gmail.com
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}