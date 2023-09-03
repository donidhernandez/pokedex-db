import type { Move } from '@/types';

interface IPokemonMoves {
    moves: Move[];
}

const PokemonMoves = ({ moves }: IPokemonMoves) => {
    return (
        <section className="mt-6 border-4 border-slate-900 border-solid rounded-lg p-6 border-opacity-80 shadow-xl">
            <h2 className="text-4xl mb-10 font-semibold">Moves</h2>
            <section className="grid w-full grid-cols-2 grid-flow-row capitalize text-5xl font-light gap-4 ">
                {moves.map(move => (
                    <div key={move.move.name}>
                        <p>{move.move.name}</p>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default PokemonMoves;
