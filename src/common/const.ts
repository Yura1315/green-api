import { IAuthContext } from "./types";

export const defaultAuth = {
    idInstance: '',
    apiTokenInstance: '',
    chatId:'',
};


export const initialState: IAuthContext = {
    auth: defaultAuth,
    setAuth: () => {},
};