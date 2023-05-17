import Button from "@mui/material/Button";
import { ChatsWrapper, InputWrapper, inputStyle } from "./style";
import { ChatCard } from "./chatCard/ChatCard";
import { users } from "../../common/mocks/userMocks";

export const Chats = () => {
	return (
		<ChatsWrapper>
			<InputWrapper>
				<input
					type="number"
					placeholder="Поиск или новый чат"
					style={inputStyle}
				></input>
				<Button>Search</Button>
			</InputWrapper>
			{users.map((user) => {
				return (
					<ChatCard
						avatar={user.avatarName}
						name={user.name}
						lastMassege={user.lastMassege}
					/>
				);
			})}
		</ChatsWrapper>
	);
};
