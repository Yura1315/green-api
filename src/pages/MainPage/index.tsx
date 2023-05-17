import { ChangeEvent, useEffect, useContext, useCallback } from 'react';
import { Button } from '@mui/material';
import { Form, MainPageWrapper } from './style';
import InputField from '../../components/InputField';
import { fetchApi } from '../../utils/fetchApi';
import { authContext } from '../../common/authContext';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const { auth, setAuth, stateInstance, setStateInstance } = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let url = `https://api.green-api.com/waInstance${auth.idInstance}/getStateInstance/${auth.apiTokenInstance}`;
        fetchApi(url).then((data) => setStateInstance(data));
    };

    const changeIdInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setAuth((prev) => ({ ...prev, idInstance: e.target.value }));
    };

    const changeApiTokenInstance = (e: ChangeEvent<HTMLInputElement>) => {
        setAuth((prev) => ({ ...prev, apiTokenInstance: e.target.value }));
    };

    useEffect(() => {
        if (stateInstance.stateInstance === 'authorized') {
            navigate('/chat');
        }
    }, [stateInstance]);

    return (
        <MainPageWrapper>
            <Form onSubmit={handleSubmit}>
                <InputField placeholder='idInstance' value={auth.idInstance} handle={changeIdInstance} />
                <InputField
                    placeholder='apiTokenInstance'
                    value={auth.apiTokenInstance}
                    handle={changeApiTokenInstance}
                />
                <Button variant='contained' size='large' type='submit'>
                    Авторизоваться
                </Button>
            </Form>
        </MainPageWrapper>
    );
};

export default MainPage;
