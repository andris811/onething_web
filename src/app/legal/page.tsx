import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation isLegalPage={true} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">OneThing</h1>
            <p className="text-gray-600">Last updated: 2026.01.09.</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8 text-center">
              OneThing is designed to be simple, intentional, and private.<br />
              By using the app, you agree to the terms and practices described below.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Using OneThing</h2>
            <p className="text-gray-700 mb-6">
              OneThing is for personal, non-commercial use.<br />
              You use the app to choose a daily focus, reflect, journal, and review your past entries.
            </p>
            <p className="text-gray-700 mb-8">
              Please use the app respectfully and lawfully.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Content</h2>
            <p className="text-gray-700 mb-6">
              Everything you create in OneThing — including focuses, reflections, notes, and photos — belongs to you.
            </p>
            <p className="text-gray-700 mb-6">
              We do not claim ownership of your content.
            </p>
            <p className="text-gray-700 mb-8">
              You are responsible for what you choose to store in the app.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data & Privacy</h2>
            <p className="text-gray-700 mb-4">
              OneThing collects only what is necessary for the app to work.
            </p>
            <p className="text-gray-700 mb-4">
              This may include:
            </p>
            <ul className="text-gray-700 mb-6 ml-6">
              <li>• Daily focuses</li>
              <li>• Reflections and journal entries</li>
              <li>• Notes and photos you add</li>
              <li>• App preferences (such as reminders)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Your data is used only to provide OneThing&apos;s features.
            </p>
            <p className="text-gray-700 mb-8">
              We do not:<br />
              • Sell your data<br />
              • Share your data with third parties<br />
              • Track you across apps or websites<br />
              • Use your data for advertising
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage</h2>
            <p className="text-gray-700 mb-6">
              Your data is stored:<br />
              • Locally on your device, and/or<br />
              • Securely using Apple&apos;s system services (such as iCloud, if enabled)
            </p>
            <p className="text-gray-700 mb-8">
              We do not operate our own external servers to store your personal content.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing</h2>
            <p className="text-gray-700 mb-6">
              Your content remains private unless you choose to share it.
            </p>
            <p className="text-gray-700 mb-8">
              When you use sharing features, content is shared using Apple&apos;s system share tools. We do not receive or store shared content.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics</h2>
            <p className="text-gray-700 mb-6">
              OneThing does not track you for marketing purposes.
            </p>
            <p className="text-gray-700 mb-8">
              If basic, anonymous analytics are used, they exist only to improve stability and performance and cannot be used to identify you.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Availability & Changes</h2>
            <p className="text-gray-700 mb-6">
              We aim to keep OneThing reliable and enjoyable, but the app is provided &ldquo;as is.&rdquo;
            </p>
            <p className="text-gray-700 mb-6">
              Features may change, improve, or be removed over time.
            </p>
            <p className="text-gray-700 mb-8">
              This Terms & Privacy document may be updated occasionally. Any updates will be reflected in the app or its official listing.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Responsibility</h2>
            <p className="text-gray-700 mb-6">
              We are not responsible for:<br />
              • Lost data<br />
              • App interruptions<br />
              • Damages resulting from use of the app
            </p>
            <p className="text-gray-700 mb-8">
              You use OneThing at your own discretion.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children</h2>
            <p className="text-gray-700 mb-6">
              OneThing is not intended for children under the age of 13.<br />
              We do not knowingly collect personal data from children.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Control</h2>
            <p className="text-gray-700 mb-6">
              You are always in control of your data.
            </p>
            <ul className="text-gray-700 mb-6 ml-6">
              <li>• You can delete entries at any time</li>
              <li>• Removing the app removes locally stored data</li>
            </ul>
            <p className="text-gray-700 mb-8">
              Nothing is forced. Nothing is judged.
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-6">
              If you have questions or concerns about these terms or your privacy, you can contact us at:
            </p>
            <p className="text-gray-700 mb-8">
              <a href="mailto:avdev2024@gmail.com" className="text-[#E5745A] hover:text-[#d66a4f]">
                avdev2024@gmail.com
              </a>
            </p>

            <hr className="my-8 border-[#E5DCC8]" />

            <div className="text-center">
              <p className="text-gray-700 font-medium">
                OneThing<br />
                One focus. One day. That&apos;s enough.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}