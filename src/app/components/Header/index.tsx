'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row w-full bg-gray-900 text-white font-sans md:text-4xl items-center justify-center gap-3 py-5">
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

            <div className="relative h-14 w-44">
                <Image
                    alt="Pokemon Logo"
                    layout="fill"
                    objectFit="fit"
                    src="/pokemon.png"
                />
            </div>

            <Link
                className="hover:text-yellow-500 hover:underline cursor-pointer transition-all duration-300 ease-in-out"
                href="/machines"
            >
                Machines
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
