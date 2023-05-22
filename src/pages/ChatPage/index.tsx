import { ChatsProvider } from '../../common/contexts/chatContext/chatContext';
import { ChatWindow } from '../../components/chatWindow/ChatWindow';

const ChatPage = () => {
    return (
        <>
            <ChatsProvider>
                <ChatWindow />
            </ChatsProvider>
        </>
    );
};

export default ChatPage;
