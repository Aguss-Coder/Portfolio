import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const gilroy = localFont({
  src: '../fonts/Gilroy-Light.ttf',
  display: 'swap',
  variable: '--font-gilroy',
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
      <body className={`${gilroy.variable}`}>{children}</body>
    </html>
  );
}
