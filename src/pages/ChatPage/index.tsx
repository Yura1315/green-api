import { useContext } from 'react';
import { authContext } from '../../common/authContext';
import { Chats } from '../../components/chats/Chats';

const ChatPage = () => {
    const { auth, setAuth, stateInstance, setStateInstance } = useContext(authContext);
    console.log(auth);
    return (
        <>
            <Chats />
        </>
    );
};

export default ChatPage;
