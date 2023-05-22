import { useContext, useEffect, useState } from 'react';
import { EFetchTypes, fetchApi } from '../../../utils/fetchApi';
import { ChatAreaWrapper, ChatAreaTitle } from './style';
import { Message } from '../message/Message';
import { chatContext } from '../../../common/contexts/chatContext/chatContext';
import { CustomAvatar } from '../../CustomAvatar/CustomAvatar';

export const ChatArea = () => {
    const { chat } = useContext(chatContext);
    const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
    const [massages, setMassages] = useState<any>([]);
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
            setMassages((prevContact: any) => (prevContact = data));
        });
    }, [apiTokenInstance, chat, idInstance]);

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
            {massages.length > 0 ? (
                massages.map((message: any) => {
                    return <Message text={message.textMessage} key={message.idMessage} type={message.type} />;
                })
            ) : (
                <p>'Пусто'</p>
            )}
        </ChatAreaWrapper>
    );
};
