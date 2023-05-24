import Button from '@mui/material/Button';
import {  useEffect, useState } from 'react';
import { fetchApi, EFetchTypes } from '../../../utils/fetchApi';
import { ChatsWrapper, InputWrapper, UserInfoWrapper, inputStyle } from './style';
import { ChatCard } from './chatCard/ChatCard';
import { CustomAvatar } from '../../CustomAvatar/CustomAvatar';
import { IUser } from './types';

export const Chats = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const { idInstance, apiTokenInstance, name, avatar } = JSON.parse(localStorage.user);
    let url = `https://api.green-api.com/waInstance${idInstance}/getChats/${apiTokenInstance}`;
    useEffect(() => {
        fetchApi({
            path: EFetchTypes.GET_CHATS,
            token: {
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
            },
        }).then((data) => {
            setUsers((prevUsers) => (prevUsers = data));
        });
    }, [apiTokenInstance, idInstance, url]);
    return (
        <ChatsWrapper>
            <UserInfoWrapper>
                <CustomAvatar src={avatar} />
                <p style={{ marginLeft: '10px' }}>{name}</p>
            </UserInfoWrapper>
            <InputWrapper>
                <input type='text' placeholder='Поиск или новый чат' style={inputStyle}></input>
                <Button>Search</Button>
            </InputWrapper>
            {users ? (
                users.map((user: IUser) => {
                    return <ChatCard key={user.id} id={user.id} />;
                })
            ) : (
                <p>Пусто</p>
            )}
        </ChatsWrapper>
    );
};
