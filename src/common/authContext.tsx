import { createContext, useState } from 'react';
import { AuthType, ChildrenProps, IAuthContext, InstanceType } from './types';
import { defaultAuth, defaultInstance, initialState } from './const';

export const authContext = createContext<IAuthContext>(initialState);

export const AppProvider = ({ children }: ChildrenProps) => {
    const [auth, setAuth] = useState<AuthType>(defaultAuth);
    const [stateInstance, setStateInstance] = useState<InstanceType>(defaultInstance);

    return (
        <authContext.Provider value={{ auth, stateInstance, setAuth, setStateInstance }}>
            {children}
        </authContext.Provider>
    );
};
