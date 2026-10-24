import type { Metadata } from 'next';

import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Terms & Privacy | OneThing',
  description: 'Terms of use, OneThing Plus subscription information, and privacy policy for OneThing.',
};

export default function Legal() {
  return <LegalContent />;
}
