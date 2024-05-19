import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: '../fonts/Satoshi-Regular.ttf',
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Created by Aguss',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${satoshi.variable}`}>{children}</body>
    </html>
  );
}
