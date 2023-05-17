import { IAuthContext } from "./types";

export const defaultAuth = {
    idInstance: '',
    apiTokenInstance: '',
};


export const initialState: IAuthContext = {
    auth: defaultAuth,
    setAuth: () => {},
};