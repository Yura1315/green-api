import {ReactNode} from 'react'

export type AuthType = {
    idInstance: string;
    apiTokenInstance: string;
};

export type InstanceType = {
    stateInstance: string;
};


export type ChildrenProps = {
    children: ReactNode;
};

export interface IAuthContext {
    stateInstance: InstanceType;
    auth: AuthType;
    setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
    setStateInstance: React.Dispatch<React.SetStateAction<InstanceType>>;
}