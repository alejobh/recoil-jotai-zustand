import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RecoilWrapper } from './RecoilWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    
  }
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrapper>{children}</RecoilWrapper>
        </body>
    </html>
  );
}
