import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/dm-sans';
import '@fontsource/space-mono/400.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
  title: 'Sivaram S — Full Stack Developer',
  description: 'Sivaram S is a full-stack developer in Chennai, building responsive websites, web applications, and connected digital experiences.',
  openGraph: { title: 'Sivaram S — Turning Your Ideas into Reality', description: 'Full-stack development, creative interfaces, and practical engineering.', type: 'website', images: ['/og.svg'] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
