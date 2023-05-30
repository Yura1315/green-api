import { useEffect, useState } from 'react';
import { IUser } from '../types';
import { EFetchTypes, fetchApi } from '../../../../utils/fetchApi';
import { ChatCard } from '../chatCard/ChatCard';

type ChatSearchResultPropsType = {
    search: string;
    entities: IUser[];
};

export const ChatSearchResult = ({ entities, search }: ChatSearchResultPropsType) => {
    const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
    const [newContact, setNewContact] = useState<string>('');

    useEffect(() => {
        if (!entities.length) {
            fetchApi({
                path: EFetchTypes.CHECK_WHATSAPP,
                method: 'POST',
                token: {
                    idInstance: idInstance,
                    apiTokenInstance: apiTokenInstance,
                },
                data: { phoneNumber: search },
            }).then((checkWhatsApp) => {
                if (checkWhatsApp.existsWhatsapp) {
                    let newContact = search + '@c.us';
                    console.log(newContact, checkWhatsApp);
                    setNewContact(newContact);
                } else {
                    setNewContact('');
                }
            });
        }
    }, [newContact, entities, search]);

    return (
        <>
            {search && entities.length > 0
                ? entities.map((user: IUser) => {
                      return <ChatCard key={user.id} id={user.id} />;
                  })
                : ''}
            {newContact ? <ChatCard id={newContact} /> : ''}
        </>
    );
};
