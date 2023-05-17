import { Avatar } from "@mui/material";
import { ChatCardWrapper, UserDataWrapper } from "./style";

interface CardProps {
	avatar: string;
	name: string;
	lastMassege: string;
}

export const ChatCard = ({ avatar, name, lastMassege }: CardProps) => {
	return (
		<ChatCardWrapper>
			<Avatar sx={{ margin: "20px" }}>{avatar}</Avatar>
			<UserDataWrapper>
				<p>{name}</p>
				<p>{lastMassege}</p>
			</UserDataWrapper>
		</ChatCardWrapper>
	);
};
