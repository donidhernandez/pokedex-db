import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex w-full font-bold bg-gray-900 text-white font-sans text-4xl items-center justify-center gap-3 py-5">
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

            <Image
                alt="Pokemon Logo"
                height={150}
                src="/pokemon.png"
                width={200}
            />
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
