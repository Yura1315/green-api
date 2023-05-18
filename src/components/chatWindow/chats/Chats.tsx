import Button from "@mui/material/Button";
import { useContext, useEffect, useRef } from "react";
import { authContext } from "../../../common/authContext";
import { fetchApi } from "../../../utils/fetchApi";
import { ChatsWrapper, InputWrapper, inputStyle } from "./style";
import { ChatCard } from "./chatCard/ChatCard";

export const Chats = () => {
	const { auth } = useContext(authContext);
	const arr = useRef([]);
	useEffect(() => {
		let url = `https://api.green-api.com/waInstance${auth.idInstance}/getChats/${auth.apiTokenInstance}`;
		fetchApi(url).then((data) => {
			return arr.current = data;
			
		});
	}, [auth.apiTokenInstance, auth.idInstance]);

	console.log(arr.current);
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

			{arr.current ? (
				arr.current.map((user: any) => {
					return <ChatCard key={user.id} id={user.id} />;
				})
			) : (
				<p>popka</p>
			)}
		</ChatsWrapper>
	);
};
