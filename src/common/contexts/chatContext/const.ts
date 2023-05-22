import { IChatContext } from "./types";

export const defaultChat = {
    chatId: '',
    chatName: '',
    avatar: '',
} 

export const initialStateChats: IChatContext = {
    chat: defaultChat,
    setChat: () => {},
};