import { SetStateAction, useContext, useEffect, useState } from 'react';
import { EFetchTypes, fetchApi } from '../../../utils/fetchApi';
import { ChatAreaWrapper, ChatAreaTitle, AreaContainer } from './style';
import { IMessages } from './types';
import { chatContext } from '../../../common/contexts/chatContext/chatContext';
import { CustomAvatar } from '../../CustomAvatar/CustomAvatar';
import { Message } from '../message';

export const ChatArea = () => {
    const { chat } = useContext(chatContext);
    const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
    const [messages, setMassages] = useState<IMessages[]>([]);
    useEffect(() => {
        const test = { chatId: chat.chatId, count: 10 };
        fetchApi({
            path: EFetchTypes.GET_MESSAGES,
            token: {
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
            },
            method: 'POST',
            data: test,
        }).then((data) => {
            setMassages((prevMessage: SetStateAction<IMessages[]>) => (prevMessage = data));
        });
    }, [apiTokenInstance, chat.chatId, idInstance]);
    console.log(messages);

    return (
        <ChatAreaWrapper>
            {chat.chatId ? (
                <ChatAreaTitle>
                    <CustomAvatar src={chat.avatar} />
                    <p style={{ marginLeft: '10px' }}>{chat.chatName}</p>
                </ChatAreaTitle>
            ) : (
                <ChatAreaTitle />
            )}
            <AreaContainer>
                {messages.length > 0 ? (
                    messages.map((message: any) => {
                        return <Message key={message.idMessage} type={message.type} text={message.textMessage} />;
                    })
                ) : (
                    <p>'Пусто'</p>
                )}
            </AreaContainer>
        </ChatAreaWrapper>
    );
};
