import { Chats } from "./chats/Chats";
import { ChatArea } from "./chatArea/ChatArea";
import { ChatWindowWrapper } from "./style";

export const ChatWindow = () => {
	return (
		<ChatWindowWrapper>
			<Chats />
			<ChatArea />
		</ChatWindowWrapper>
	);
};
