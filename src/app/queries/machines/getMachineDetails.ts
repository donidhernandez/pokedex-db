export default async function getMachineDetails(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch the machine data');
    }

    return await res.json();
}
