import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { fetchApi, EFetchTypes } from "../../../utils/fetchApi";
import { ChatsWrapper, InputWrapper, inputStyle } from "./style";
import { ChatCard } from "./chatCard/ChatCard";
import { IUser } from "./types";



export const Chats = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	let url = `https://api.green-api.com/waInstance${idInstance}/getChats/${apiTokenInstance}`;
	useEffect(() => {
		fetchApi({
			path: EFetchTypes.GET_CHATS,
			token: {
				idInstance: idInstance,
				apiTokenInstance: apiTokenInstance,
			},
		}).then((data) => {
			setUsers((prevUsers) => (prevUsers = data));
		});
	}, [apiTokenInstance, idInstance, url]);
	
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
				users.map((user: IUser) => {
					return <ChatCard key={user.id} id={user.id} />;
				})
			) : (
				<p>Пусто</p>
			)}
		</ChatsWrapper>
	);
};
