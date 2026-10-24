import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const linkClassName = 'text-[#a84c37] underline underline-offset-4 hover:text-[#d66a4f]';

function LegalSection({ id, title, children }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-[#E5DCC8] py-8">
      <h2 id={`${id}-heading`} className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function EnglishLegal() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation isLegalPage={true} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms &amp; Privacy</h1>
            <p className="text-gray-600">OneThing 3.0 · Last updated: October 24, 2026</p>
            <p className="text-gray-700 mt-6">
              OneThing is a personal focus and journaling app. This page explains using the app,
              purchasing OneThing Plus, and how your information is handled.
            </p>
            <nav aria-label="Legal sections"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
              <a href="#terms" className={linkClassName}>Terms of use</a>
              <a href="#subscriptions" className={linkClassName}>Purchases &amp; subscriptions</a>
              <a href="#privacy" className={linkClassName}>Privacy policy</a>
              <a href="#contact" className={linkClassName}>Contact</a>
            </nav>
          </header>

          <LegalSection id="terms" title="Terms of use">
            <p>
              OneThing is provided by András Varga (AVDev). By using the app, you agree to these
              terms. Use it lawfully and respect the rights of others. You remain responsible
              for the content you choose to store or share.
            </p>
            <p>
              Your license to the app is governed by{' '}
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className={linkClassName}>Apple&apos;s Standard End User License Agreement (EULA)</a>.
              These terms provide additional information about OneThing and its purchases;
              they do not replace that license or limit rights you have under applicable law.
            </p>
            <p>
              Your focuses, reflections, journal entries, notes, tags, photos, and saved places
              belong to you. We do not claim ownership of your content.
            </p>
          </LegalSection>

          <LegalSection id="subscriptions" title="OneThing Plus purchases & subscriptions">
            <p>
              OneThing offers free features and optional paid Plus features. Plus is available
              through monthly or yearly auto-renewing subscriptions, or a one-time lifetime
              purchase where offered. Available features, plans, billing periods, and localized
              prices are shown in the app and Apple&apos;s purchase confirmation before you pay.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Payment is charged to your Apple Account when you confirm a purchase.
                Subscriptions renew automatically unless canceled at least 24 hours before
                the current period ends. Apple may charge for renewal within the 24 hours
                before the next period begins, at the applicable renewal price.
              </li>
              <li>
                If a free trial or introductory offer is available, its eligibility, duration,
                and subsequent price are shown before confirmation. A trial converts to a paid
                subscription unless canceled at least 24 hours before it ends.
              </li>
              <li>
                Manage or cancel through Manage Subscription in the app, or through device
                Settings → your name → Subscriptions. See{' '}
                <a href="https://support.apple.com/en-us/118428" className={linkClassName}>
                  Apple&apos;s cancellation instructions
                </a>. Deleting OneThing or clearing your journal does not cancel a subscription.
                For paid subscriptions, access generally continues until the paid period ends;
                Apple may end trial access immediately when a trial is canceled.
              </li>
              <li>
                Lifetime Plus is a one-time purchase without recurring billing for permanent
                Plus access in OneThing. It does not guarantee that the app or external services
                will operate indefinitely. Buying lifetime access does not automatically cancel
                an existing subscription; cancel its renewal separately through Apple.
              </li>
              <li>
                Use Restore Purchases in the app with the Apple Account used to purchase.
                Eligible previous paid-app owners receive Plus access after Apple verifies
                their original purchase under the app&apos;s migration eligibility rules.
              </li>
              <li>
                Apple handles billing and refund requests. You can request a refund at{' '}
                <a href="https://reportaproblem.apple.com/" className={linkClassName}>
                  reportaproblem.apple.com
                </a>. Eligibility is determined by Apple and applicable law. Canceling renewal
                does not itself request a refund. Refunded or revoked purchases may lose Plus access.
              </li>
            </ul>
            <p>
              When Plus expires, paid features become unavailable. Expiration does not itself
              delete existing journal entries or photos; existing entries remain accessible,
              and free-plan limits apply to adding content and using paid features. iCloud sync
              is available without Plus when iCloud is available on your device.
            </p>
            <p>
              Prices and offerings may change. Apple communicates subscription price changes
              and obtains consent where required. The terms shown at purchase and applicable
              Apple terms govern your billing.
            </p>
          </LegalSection>

          <LegalSection id="privacy" title="Privacy policy">
            <p>
              Your journal is stored on your device and, when available, synced through your
              Apple iCloud account using CloudKit and iCloud Drive. We do not operate a server
              that receives or stores your journal content. You do not need a separate
              OneThing account.
            </p>
            <p>The app processes the following information to provide its features:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Journal content: focuses, reflections, notes, tags, photos, dates, saved places,
                and drafts you create, along with preferences such as appearance and reminders.
              </li>
              <li>
                Purchase information: Apple&apos;s StoreKit supplies verified transaction and
                entitlement information, such as the purchased product, original purchase date,
                expiration, and revocation status, to unlock and restore access. We do not
                receive your payment card details.
              </li>
              <li>
                Optional location information: with your device permission, the app can obtain
                your current location for weather or to attach a place to an entry. A saved
                place may include precise coordinates, a name, and an address, and syncs with
                your journal. Place search and map lookups use Apple&apos;s mapping services.
                OneThing does not continuously track your location in the background.
              </li>
              <li>
                Weather requests: when location-based weather is fetched, coordinates are sent
                to WeatherAPI.com. That provider also receives network information such as
                your IP address. Your journal text and photos are not included in weather
                requests. See the{' '}
                <a href="https://www.weatherapi.com/privacy" className={linkClassName}>
                  WeatherAPI.com privacy policy
                </a>.
              </li>
              <li>
                Support correspondence: if you email us, we receive your email address and
                whatever information or attachments you send, and use them to respond to
                your request. Avoid sending private journal content unless needed for support.
              </li>
            </ul>
            <p>
              We do not sell your personal data, use your journal for advertising, or track
              you across other companies&apos; apps or websites. The app does not include a
              third-party advertising or analytics SDK. Apple may provide crash reports and
              usage diagnostics according to your Apple privacy settings.
            </p>
            <p>
              Apple processes iCloud, App Store, and map-service information under its own{' '}
              <a href="https://www.apple.com/legal/privacy/" className={linkClassName}>privacy policy</a>.
              These services and the weather provider may process information outside your
              country under their respective policies.
            </p>
          </LegalSection>

          <LegalSection id="permissions" title="Permissions, sharing & backups">
            <p>
              You control location, photo-library, camera, and notification permissions in
              your device Settings. Photos you choose or capture are stored as journal
              attachments. Notifications provide optional reminders. You can revoke permissions
              at any time; features that need them may stop working.
            </p>
            <p>
              Sharing and exporting are initiated by you using system tools. The apps,
              people, or storage providers you select receive the exported content and handle
              it under their own practices. Review exports before sharing, especially if
              they contain photos or saved locations.
            </p>
            <p>
              Backup files can contain your journal and photos. Keep them somewhere you trust.
              iCloud sync is not a substitute for a separate backup, and sync availability
              depends on your Apple Account, network connection, and available iCloud storage.
            </p>
          </LegalSection>

          <LegalSection id="data-control" title="Retention, deletion & your rights">
            <p>
              Journal content stays on your device and in your iCloud storage until you delete
              it. You can delete entries in the app or use Settings → Clear all data to remove
              journal entries, photos, and drafts, including synced entries in iCloud. Allow
              connected devices time to sync deletions.
            </p>
            <p>
              Uninstalling the app removes its local app data but does not necessarily remove
              iCloud content, device backups, exported files, or copies you shared. Manage
              iCloud storage and backups through Apple&apos;s settings, and delete exports
              separately. Apple retains purchase records under its own policies; clearing
              journal data does not erase those records or cancel billing.
            </p>
            <p>
              We retain support correspondence only as needed to resolve requests and meet
              applicable legal obligations. Depending on your location, you may have rights to
              access, correct, delete, restrict, or object to processing of personal information,
              obtain a copy, or complain to your local data protection authority. Contact us
              to exercise rights concerning information we hold. We cannot retrieve journal
              content stored only on your devices or in your personal iCloud account.
            </p>
          </LegalSection>

          <LegalSection id="children" title="Children">
            <p>
              OneThing is not directed to children under 13, and we do not knowingly collect
              their personal information. If you believe a child has sent us personal
              information, contact us so we can address it. Purchases by minors must follow
              Apple&apos;s account and parental approval requirements and applicable law.
            </p>
          </LegalSection>

          <LegalSection id="availability" title="Availability, responsibility & changes">
            <p>
              We aim to keep OneThing reliable, but uninterrupted or error-free operation and
              recovery of lost data cannot be guaranteed. Keep backups of content that matters
              to you. Weather and place information may be incomplete or inaccurate.
            </p>
            <p>
              To the extent permitted by law, the app is provided as available and without
              additional warranties, and our liability is limited as set out in Apple&apos;s
              Standard EULA. Nothing here excludes liability that cannot lawfully be excluded,
              or limits mandatory consumer rights, including applicable refund or withdrawal rights.
            </p>
            <p>
              Features and supported systems may evolve. Material changes affecting paid
              access will be communicated where required by law. We may update these terms
              and this privacy policy as the app or legal requirements change, and will update
              the date above. Material changes will be brought to your attention in the app
              or through another appropriate notice where required; consent will be requested
              where legally necessary.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="Contact">
            <p>
              For app support, purchase-access questions, or privacy requests, contact
              András Varga (AVDev) at{' '}
              <a href="mailto:avdev2024@gmail.com" className={linkClassName}>avdev2024@gmail.com</a>.
              For Apple billing, cancellation, or refunds, use the Apple links above.
            </p>
          </LegalSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
