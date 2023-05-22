type FetchApiType = {
	url?: string;
	method?: string;
	data?: object;
	path: string;
	token: {
		idInstance: string;
		apiTokenInstance: string;
	};
};

export enum EFetchTypes {
	BASE_URL = "https://api.green-api.com/waInstance",
	ACCOUNT_STATE = "getStateInstance",
	SEND_MESSAGE = "sendMessage",
	GET_CHAT_HISTORY = "getChatHistory",
	GET_CHATS = "getChats",
	GET_CONTACT_INFO = "getContactInfo",
	GET_MESSAGES='getChatHistory',
	GET_SETTINGS='getSettings'
}

export const fetchApi = async ({
	url = EFetchTypes.BASE_URL,
	method = "GET",
	data,
	path,
	token: { idInstance, apiTokenInstance },
}: FetchApiType) => {
	try {
		url = url + idInstance + "/" + path + "/" + apiTokenInstance;
		const response = await fetch(url, {
			method: method,
			body: JSON.stringify(data),
		});

		if (response.status >= 200 && response.status <= 300) {
			const data = await response.json();
			return data;
		}

		return {
			status: response.status,
			message: response.statusText,
		};
	} catch (err) {
		console.log(err);
	}
};
