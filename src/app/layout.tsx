import type { Metadata } from 'next';

import { Handjet } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Providers from '@/app/components/Providers';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    description: 'An awesome web app to show all the pokemon available',
    title: 'Pokedex DB',
};
const handjet = Handjet({
    display: 'swap',
    fallback: ['system-ui', 'arial'],
    subsets: ['latin'],
    variable: '--font-handjet',
    weight: ['200', '400', '600'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={handjet.variable} lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Toaster richColors />
                </Providers>
            </body>
        </html>
    );
}
