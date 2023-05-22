import { IAuthContext } from "./types";

export const defaultAuth = {
    idInstance: '',
    apiTokenInstance: '',
    name: '',
    avatar: ''
};


export const initialState: IAuthContext = {
    auth: defaultAuth,
    setAuth: () => {},
};