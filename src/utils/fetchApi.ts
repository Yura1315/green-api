
export const fetchApi = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('ups')
    }
}