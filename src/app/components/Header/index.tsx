'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row w-full bg-gray-900 text-white font-sans md:text-4xl text-2xl items-center gap-3 py-5 md:px-4">
            <Image
                alt="Pokemon Logo"
                width={100}
                height={80}
                src="/pokemon.png"
            />

            <Link
                className="hover:text-yellow-500 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
                href="/"
            >
                Pokemons
            </Link>
            <Link
                className="hover:text-yellow-500 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
                href="/items"
            >
                Items
            </Link>
            <Link
                className="hover:text-yellow-500 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
                href="/moves"
            >
                Moves
            </Link>
        </header>
    );
};

export default Header;
