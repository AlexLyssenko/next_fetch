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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
          <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
