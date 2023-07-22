import { Poppins } from 'next/font/google';
import '@/styles/global.css';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
