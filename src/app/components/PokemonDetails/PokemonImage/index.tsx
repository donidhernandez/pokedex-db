import Image from 'next/image';

interface IPokemonImage {
    name: string;
    image: string;
}

const PokemonImage = ({ name, image }: IPokemonImage) => {
    return (
        <div className="md:w-[500px] md:h-[500px] w-[400px] h-[400px] md:sticky md:top-7 relative">
            <Image alt={name} layout="fill" objectFit="fill" src={image} />
        </div>
    );
};

export default PokemonImage;
