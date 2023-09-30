export default async function getMoveDetails(name: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_POKE_API_URL}/api/v2/move/${name}`,
    );

    if (!res.ok) {
        throw new Error('Failed to fetch the move data');
    }

    return await res.json();
}
