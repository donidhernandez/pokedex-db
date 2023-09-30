export const getItems = async ({
    url = null,
    offset = 0,
    limit = 20,
}: {
    url?: string | null;
    offset?: number;
    limit?: number;
}) => {
    const urlToFetch =
        url ??
        `${process.env.NEXT_PUBLIC_POKE_API_URL}/api/v2/item?offset=${offset}&limit=${limit}`;
    const res = await fetch(`${urlToFetch}`);
    if (!res.ok) {
        throw new Error('Could not fetch items');
    }

    return res.json();
};
