import { IAuthContext } from "./types";

export const defaultAuth = {
    idInstance: '',
    apiTokenInstance: '',
};


export const defaultInstance = {
    stateInstance: '',
};

export const initialState: IAuthContext = {
    stateInstance: defaultInstance,
    auth: defaultAuth,
    setAuth: () => {},
    setStateInstance: () => {},
};