import { useEffect, useState, useContext } from 'react';
import { fetchApi, EFetchTypes } from '../../../../utils/fetchApi';
import { ChatCardWrapper, UserDataWrapper, ContactName } from './style';
import { Avatar } from '@mui/material';
import { chatContext } from '../../../../common/contexts/chatContext/chatContext';
import { CustomAvatar } from '../../../CustomAvatar/CustomAvatar';
import { ICardProps, IContact } from './types';

export const defaultContact: IContact = {
    avatar: '',
    category: '',
    chatId: '',
    description: '',
    email: '',
    isArchive: false,
    isDisappearing: false,
    isMute: false,
    lastSeen: '',
    messageExpiration: 0,
    muteExpiration: '',
    name: '',
    products: [],
};

export const ChatCard = ({ id }: ICardProps) => {
    const { setChat } = useContext(chatContext);
    const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
    const [contact, setContact] = useState<IContact>(defaultContact);
    useEffect(() => {
        const test = { chatId: id };
        fetchApi({
            path: EFetchTypes.GET_CONTACT_INFO,
            token: {
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
            },
            method: 'POST',
            data: test,
        }).then((data) => {
            setContact((prevContact: any) => (prevContact = data));
        });
    }, [apiTokenInstance, idInstance, id]);

    return (
        <ChatCardWrapper
            onClick={() => {
                setChat((prev) => ({
                    ...prev,
                    chatId: contact.chatId,
                    chatName: contact.name,
                    avatar: contact.avatar,
                }));
            }}>
            {contact ? (
                <>
                    {contact.avatar ? (
                        <CustomAvatar src={contact.avatar} />
                    ) : (
                        <Avatar sx={{ marginLeft: '10px' }}></Avatar>
                    )}
                    <UserDataWrapper>
                        <ContactName>{contact.name}</ContactName>
                    </UserDataWrapper>
                </>
            ) : null}
        </ChatCardWrapper>
    );
};
