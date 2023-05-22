import { ChangeEvent, useEffect, useContext, useState } from 'react';
import { Button } from '@mui/material';
import { Form } from './style';
import { EFetchTypes, fetchApi } from '../../utils/fetchApi';
import { authContext } from '../../common/contexts/authContext/authContext';
import { useNavigate } from 'react-router-dom';
import { utilizeLocalStorage } from '../../utils/saveToLocalStorage';
import { ErrorText } from './ErrorText';
import { InputField } from '../InputField';
import { AuthType } from '../../common/contexts/authContext/types';
import { defaultAuth } from '../../common/contexts/authContext/const';

export const Authorization = () => {
    const { auth, setAuth } = useContext(authContext);
    const [value, setValue] = useState<AuthType>(defaultAuth);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.apiTokenInstance || !value.idInstance) {
            setError('Поля не могут быть пустыми');
        } else {
            fetchApi({
                path: EFetchTypes.ACCOUNT_STATE,
                token: { idInstance: value.idInstance, apiTokenInstance: value.apiTokenInstance },
            })
                .then((data) => {
                    if (data.stateInstance !== 'authorized') {
                        setError('Мы не смогли найти пользователя:(');
                    }
                })
                .then((data) => {
                    fetchApi({
                        path: EFetchTypes.GET_SETTINGS,
                        token: { idInstance: value.idInstance, apiTokenInstance: value.apiTokenInstance },
                    }).then((data) => {
                        const chatId = { chatId: data.wid };
                        fetchApi({
                            method: 'POST',
                            path: EFetchTypes.GET_CONTACT_INFO,
                            token: { idInstance: value.idInstance, apiTokenInstance: value.apiTokenInstance },
                            data: chatId,
                        }).then((data) => {
                            let user = {
                                idInstance: value.idInstance,
                                apiTokenInstance: value.apiTokenInstance,
                                name: data.name,
                                avatar: data.avatar,
                            };

                            utilizeLocalStorage('user', user);
                            setAuth(user);
                        });
                    });
                });
        }
        setValue((prev) => ({ ...prev, idInstance: '', apiTokenInstance: '' }));
    };

    const changeIdInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, idInstance: e.target.value }));
    };

    const changeApiTokenInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, apiTokenInstance: e.target.value }));
    };

    const handleFocus = () => {
        setError('');
    };

    useEffect(() => {
        if (auth.idInstance) {
            navigate('/chat');
        }
    }, [auth]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputField
                    placeholder='idInstance'
                    value={value.idInstance}
                    handle={changeIdInstance}
                    handleFocus={handleFocus}
                />
                <InputField
                    placeholder='apiTokenInstance'
                    value={value.apiTokenInstance}
                    handle={changeApiTokenInstance}
                    handleFocus={handleFocus}
                />
                <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    disabled={!value.idInstance || !value.apiTokenInstance}>
                    Авторизоваться
                </Button>
            </Form>
            {error ? <ErrorText error={error} /> : ''}
        </>
    );
};
