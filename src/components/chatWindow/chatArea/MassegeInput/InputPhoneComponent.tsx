import { useContext, useState } from "react";
import { InputWrapper, inputStyle } from "./style";
import { Button } from "@mui/material";
import { EFetchTypes, fetchApi } from "../../../../utils/fetchApi";
import { chatContext } from "../../../../common/contexts/chatContext/chatContext";

interface I {
	valueOp:any
}

export const InputMassegeComponent = ({valueOp}:I) => {
	const { chat } = useContext(chatContext);
	const [value, setValue] = useState("");
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	const dataBody = {
		chatId: chat.chatId,
		message: value,
	};
	const  fetching = async() => {
	await	 fetchApi({
			path: EFetchTypes.SEND_MESSAGE,
			token: {
				idInstance: idInstance,
				apiTokenInstance: apiTokenInstance,
			},
			method: "POST",
			data: dataBody,
		});
		setValue("");
		setTimeout(()=>valueOp.setValue(value),3000)
		chat.avatar =''
	};
	return (
		<div>
			<InputWrapper>
				<input
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
					value={value}
					type="text"
					placeholder="Отправьте сообщение"
					style={inputStyle}
				></input>
				<Button sx={{ color: "red" }} onClick={fetching}>
					Отправить
				</Button>
			</InputWrapper>
		</div>
	);
};
