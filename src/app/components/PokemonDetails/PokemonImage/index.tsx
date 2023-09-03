import Image from 'next/image';

interface IPokemonImage {
    name: string;
    image: string;
}

const PokemonImage = ({ name, image }: IPokemonImage) => {
    return (
        <div className="relative md:w-[500px] md:h-[500px] w-40 h-40">
            <Image alt={name} layout="fill" objectFit="fill" src={image} />
        </div>
    );
};

export default PokemonImage;
