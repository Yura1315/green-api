import React from "react";
import Button from "@mui/material/Button";
import { ChatsWrapper } from "./style";

export const Chats = () => {
	return (
		<ChatsWrapper>
			<input
				type="text"
				placeholder="Поиск или новый чат"
				style={{ border: "none" }}
			></input>
			<Button>Search</Button>
		</ChatsWrapper>
	);
};
