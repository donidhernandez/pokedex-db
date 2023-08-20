import { Info } from '../../../types';
import PokemonCard from '../PokemonCard';

interface IPokemonList {
    pokemons: Info[];
}

export const PokemonList = ({ pokemons }: IPokemonList) => {
    return (
        <section className="flex flex-wrap gap-3 w-full">
            {pokemons.map(pokemon => {
                return (
                    <div key={pokemon.name}>
                        <PokemonCard pokemonName={pokemon.name} />
                    </div>
                );
            })}
        </section>
    );
};
