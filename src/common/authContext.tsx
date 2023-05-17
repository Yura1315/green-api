import { createContext, useState } from 'react';
import { AuthType, ChildrenProps, IAuthContext } from './types';
import { defaultAuth, initialState } from './const';

export const authContext = createContext<IAuthContext>(initialState);

export const AppProvider = ({ children }: ChildrenProps) => {
    const [auth, setAuth] = useState<AuthType>(defaultAuth);

    return <authContext.Provider value={{ auth, setAuth }}>{children}</authContext.Provider>;
};
