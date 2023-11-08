import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { ReduxProvider } from '@/redux/provider';

import '@/scss/globals.scss';

import Header from '@/components/Header/Header';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'YouPlay - Аренда игр',
  description:
    'Игровой магазин GamesRent: У нас вы можете арендовать аккаунты с играми от платформ Steam, Epic Games и различные другие сервисы. Начните играть в любимые игры уже сегодня!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {/* <ReduxProvider> */}
        {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
