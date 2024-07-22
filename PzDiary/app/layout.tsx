import AuthProvider from '@/components/AuthProvider';
import Nav from '@/components/Nav';
import HnContainer from '@/container/hn';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PzDiary',
  description: 'J처럼 살고 싶은 P의 하루',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <Nav>
            <AuthProvider>
              <HnContainer />
            </AuthProvider>
          </Nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
