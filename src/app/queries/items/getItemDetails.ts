export default async function getItemDetails(name: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_POKE_API_URL}/api/v2/item/${name}`,
    );

    if (!res.ok) {
        throw new Error('Failed to fetch the item data');
    }

    return await res.json();
}
