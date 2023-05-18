import { Avatar } from "@mui/material";
import { ChatCardWrapper, UserDataWrapper } from "./style";
import { useContext, useEffect, useRef } from "react";
import { authContext } from "../../../../common/authContext";
interface CardProps {
	id: string;
}

export const ChatCard = ({ id }: CardProps) => {
	const { auth } = useContext(authContext);
	const user:any = useRef({});
	useEffect(() => {
		const test = JSON.stringify({ chatId: id });
		fetch(
			`https://api.green-api.com/waInstance${auth.idInstance}/GetContactInfo/${auth.apiTokenInstance}`,
			{
				method: "POST",
				body: test,
			}
		)
			.then((response) => response.json())
			.then((commits) => {
				return user.current = commits
			});
	}, [auth.apiTokenInstance, auth.idInstance, id]);

	console.log(user.current);
	
	return (
		<ChatCardWrapper>
			<Avatar sx={{ margin: "20px" }}>{}</Avatar>
			<img src={user.current.avatar} alt="user"  style={{width:'50px',height:'50px'}}/>
			<UserDataWrapper>
				<p>{}</p>
				<p>{}</p>
			</UserDataWrapper>
		</ChatCardWrapper>
	);
};
