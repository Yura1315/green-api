import React from 'react';

export type ChatContextType = {
    chatId: string;
    chatName: string;
    avatar: string;
}

export interface IChatContext {
    chat: ChatContextType
    setChat: React.Dispatch<React.SetStateAction<ChatContextType>>;
}