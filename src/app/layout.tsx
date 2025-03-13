import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import pathName from '@/constants/pathName';
import Text from '@/components/Text';
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'League Dex',
  description: 'League of Legends unofficial information site'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="py-4 bg-secondary text-primary text-2xl flex items-center justify-around">
          <Link href={pathName.HOME}>
            <Text>홈</Text>
          </Link>
          <Link href={pathName.CHAMPIONS}>
            <Text>챔피언</Text>
          </Link>
          <Link href={pathName.ITEMS}>
            <Text>아이템</Text>
          </Link>
          <Link href={pathName.ROTATIONS}>
            <Text>로테이션</Text>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
