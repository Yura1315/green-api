import { ChangeEvent, useEffect, useContext, useState } from 'react';
import { Button } from '@mui/material';
import InputField from '../InputField';
import { Form } from './style';
import { fetchApi } from '../../utils/fetchApi';
import { authContext } from '../../common/authContext';
import { useNavigate } from 'react-router-dom';
import { defaultAuth } from '../../common/const';
import { AuthType } from '../../common/types';

const Authorization = () => {
    const { auth, setAuth } = useContext(authContext);
    const [value, setValue] = useState<AuthType>(defaultAuth);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.apiTokenInstance || !value.idInstance) {
            setError('Не верные данные, попробуйте снова');
        } else {
            let url = `https://api.green-api.com/waInstance${value.idInstance}/getStateInstance/${value.apiTokenInstance}`;
            fetchApi(url)
                .then((data) => {
                    console.log(data);
                    if (data.stateInstance) {
                        setAuth(value);
                    }
                })
                .catch(() => setError('Нет такого пользователя'));
        }
    };

    const changeIdInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, idInstance: e.target.value }));
    };

    const changeApiTokenInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, apiTokenInstance: e.target.value }));
    };

    useEffect(() => {
        if (auth.idInstance) {
            navigate('/chat');
        }
    }, [auth]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputField placeholder='idInstance' value={value.idInstance} handle={changeIdInstance} />
                <InputField
                    placeholder='apiTokenInstance'
                    value={value.apiTokenInstance}
                    handle={changeApiTokenInstance}
                />
                <Button variant='contained' size='large' type='submit'>
                    Авторизоваться
                </Button>
            </Form>
            {error ? <div>{error}</div> : ''}
        </>
    );
};

export default Authorization;
