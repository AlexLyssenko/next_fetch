import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Fetch demo',
    template: 'Fetch demo',
  },
  description: 'Demo app description',
  openGraph: {
    title: 'Demo app',
    description: 'Demo description',
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    "google-site-verification": "A_WMxsHStyuT_xuG0Wj6tzpFxeQqSAD0YyCCk27OgLI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
    <meta name="msvalidate.01" content="D131A4DC4BABA108E2607C4F1B370F25" />
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
          <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
