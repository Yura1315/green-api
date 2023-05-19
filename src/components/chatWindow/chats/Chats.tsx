import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../common/authContext";
import { fetchApi } from "../../../utils/fetchApi";
import { ChatsWrapper, InputWrapper, inputStyle } from "./style";
import { ChatCard } from "./chatCard/ChatCard";

export const Chats = () => {
	const [users, setUsers] = useState([]);
	const { auth } = useContext(authContext);
	let url = `https://api.green-api.com/waInstance${auth.idInstance}/getChats/${auth.apiTokenInstance}`;
	useEffect(() => { 	
		fetchApi(url).then((data) => {
			setUsers((prevUsers) => (prevUsers = data));
		});
	}, [url]);
	console.log(users)
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
			{users ? (
				users.map((user: any) => {
					return <ChatCard key={user.id} id={user.id} />;
				})
			) : (
				<p>Пусто</p>
			)}
		</ChatsWrapper>
	);
};
