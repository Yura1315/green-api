import {ReactNode} from 'react'

export type AuthType = {
	chatId: any;
    idInstance: string;
    apiTokenInstance: string;
};

export type ChildrenProps = {
    children: ReactNode;
};

export interface IAuthContext {
    auth: AuthType;
    setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}