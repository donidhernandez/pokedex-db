import { type Stat } from '@/types';

interface IPokemonStats {
    stats: Stat[];
}

const PokemonStats = ({ stats }: IPokemonStats) => {
    return (
        <section className="mt-6">
            <h2 className="text-4xl">Base Stats</h2>
            <section className="grid grid-cols-3 gap-4 mt-6 grid-flow-row w-full">
                {stats.map(stat => (
                    <div
                        className="flex gap-1 items-baseline"
                        key={stat.stat.name}
                    >
                        <p className="text-2xl capitalize font-light">
                            {stat.stat.name}:{' '}
                        </p>
                        <p className="text-3xl text-yellow-500">
                            {stat.base_stat}
                        </p>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default PokemonStats;
