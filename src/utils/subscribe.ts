import { EFetchTypes, FetchApiType } from "./fetchApi";

export const subscribe = async ({
	url = EFetchTypes.BASE_URL,
	method = "GET",
	data,
	path,
	token: { idInstance, apiTokenInstance },
}: FetchApiType): Promise<any> => {
    let token = {
        idInstance: idInstance,
        apiTokenInstance: apiTokenInstance
    }
    url = url + idInstance + "/" + path + "/" + apiTokenInstance;
    try {
        // url = url + idInstance + "/" + path + "/" + apiTokenInstance;
        console.log(url, token, method)
        const response = await fetch(url, {
			method: method,
			body: JSON.stringify(data),
		});
        if(response.status === 502) {
            await subscribe({url, path, token: {idInstance,apiTokenInstance}, data, method})
        } else if(response.status !== 200) {
            console.log(response.statusText)

            await new Promise(resolve => setTimeout(resolve, 5000));
            await subscribe({url, path, token: {idInstance,apiTokenInstance}, data, method})
        } else {
            let message = await response.json();

            console.log(message)
            return message
        }


    } catch (err) {
        console.log('err')
    }
}