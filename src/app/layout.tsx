import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReduxProvider } from '@/redux/provider';

import '@/scss/globals.scss';

import Header from '@/components/Header/Header';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GamesRent - Аренда игр',
  description:
    'Игровой магазин GamesRent: У нас вы можете арендовать аккаунты с играми от платформ Steam, Epic Games и различные другие сервисы. Начните играть в любимые игры уже сегодня!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
