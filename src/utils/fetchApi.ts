
export const fetchApi = async (url: string) => {
    try {
        const response = await fetch(url,{headers:{
            'Access-Control-Allow-Origin':'*'
        },
    });
        return await response.json();
    } catch (error) {
        console.log('ups')
    }
}