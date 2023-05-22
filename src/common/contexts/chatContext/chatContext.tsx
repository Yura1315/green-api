import React, { createContext, useState } from 'react';
import { ChatContextType, IChatContext } from './types';
import { defaultChat, initialStateChats } from './const';
import { ChildrenProps } from '../authContext/types';

export const chatContext = createContext<IChatContext>(initialStateChats);

export const ChatsProvider = ({ children }: ChildrenProps) => {
    const [chat, setChat] = useState<ChatContextType>(defaultChat);

    return <chatContext.Provider value={{ chat, setChat }}>{children}</chatContext.Provider>;
};
