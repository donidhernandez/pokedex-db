'use client';

import getItemDetails from '@/app/queries/items/getItemDetails';
import { Info } from '@/types';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Loader from '../../Loader';

interface IItemCard {
    itemName: string;
}

const ItemCard = ({ itemName }: IItemCard) => {
    const { data: item, isLoading } = useQuery({
        queryFn: () => getItemDetails(itemName),
        queryKey: ['item', itemName],
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        item && (
            <article className="flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-300 hover:shadow-slate-800 rounded-md p-5 max-w-xs h-full justify-between">
                <div className="flex justify-between ">
                    <Image
                        alt={itemName}
                        height={60}
                        src={item.sprites.default}
                        width={60}
                    />
                    <h3 className="text-3xl font-bold capitalize">
                        {item?.names[7]?.name ?? item.name}
                    </h3>
                </div>
                <div className="mb-2">
                    <h4 className="text-lg text-gray-600">Effect: </h4>
                    <p>{item.effect_entries[0].short_effect}</p>
                </div>
                <div>
                    <h4>
                        <span className="text-lg text-yellow-600">Cost: </span>
                        <span className="text-md">{item.cost}</span>
                    </h4>
                    <h4>
                        <span className="text-lg text-blue-800">
                            Category:{' '}
                        </span>
                        <span className="text-md">{item.category.name}</span>
                    </h4>
                </div>
                <div className="flex flex-col w-full justify-end border border-gray-900 border-opacity-80 p-4 rounded-lg">
                    <h4 className="text-lg text-green-600">Attributes</h4>
                    <div className="grid grid-cols-2 grid-flow-row">
                        {item.attributes.map((attribute: Info) => (
                            <h5 className="text-xl" key={attribute.name}>
                                {attribute.name}
                            </h5>
                        ))}
                    </div>
                </div>
            </article>
        )
    );
};

export default ItemCard;
