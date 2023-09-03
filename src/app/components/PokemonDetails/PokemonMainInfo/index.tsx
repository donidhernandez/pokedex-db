import type { Badges } from '@/app/utils/enums';
import Badge from '../../Badge';
import type { Pokemon, PokemonSpecie } from '@/types';

interface IPokemonDetails {
    pokemon: Pokemon;
    pokemonSpecies: PokemonSpecie;
}

const PokemonMainInfo = ({ pokemon, pokemonSpecies }: IPokemonDetails) => {
    return (
        <div className="flex flex-col">
            <h1 className="capitalize font-bold text-8xl mb-6">
                {pokemon.name}
            </h1>
            <p className="text-2xl font-light">
                {pokemonSpecies.flavor_text_entries[1].flavor_text}
            </p>
            <div className="flex gap-2 mt-3">
                {pokemon.types.map(
                    (type: { type: { name: string } }, index: number) => {
                        return (
                            <Badge
                                key={index}
                                type={type.type.name as Badges}
                            />
                        );
                    },
                )}
            </div>
            <div className="flex gap-2 mt-3">
                <p>
                    <span className="text-2xl mr-1">Base XP:</span>
                    <span className="font-light text-xl">267</span>
                </p>
                <p>
                    <span className="text-wxl mr-1">Weight:</span>
                    <span className="font-light text-xl">905kg</span>
                </p>
                <p>
                    <span className="text-2xl mr-1">Height:</span>
                    <span className="font-light text-xl">17 inch</span>
                </p>
            </div>
        </div>
    );
};

export default PokemonMainInfo;
