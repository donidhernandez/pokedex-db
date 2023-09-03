import type { Move } from '@/types';

interface IPokemonMoves {
    moves: Move[];
}

const PokemonMoves = ({ moves }: IPokemonMoves) => {
    return (
        <section className="mt-6 border-4 border-slate-900 border-solid rounded-lg p-6 border-opacity-80 shadow-xl">
            <h2 className="text-4xl mb-10 font-semibold">Moves</h2>
            <section className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row capitalize font-light gap-8">
                {moves.map(move => (
                    <div key={move.move.name}>
                        <h3 className="text-4xl">{move.move.name}</h3>
                        <p className="text-xl">
                            <span className="text-gray-500">
                                Learned at level:{' '}
                            </span>
                            {move.version_group_details[0].level_learned_at}
                        </p>
                        <p className="text-xl">
                            <span className="text-gray-500">
                                Move learned method:{' '}
                            </span>
                            {
                                move.version_group_details[0].move_learn_method
                                    .name
                            }
                        </p>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default PokemonMoves;
