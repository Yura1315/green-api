import { useState } from "react";
import { InputWrapper, inputStyle } from "../chats/style";
import { Button } from "@mui/material";
import { EFetchTypes, fetchApi } from "../../../utils/fetchApi";

export const InputPhoneComponent = () => {
	const [value, setValue] = useState("");
		const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
    const fetching =()=>{fetchApi({
        path: EFetchTypes.GET_STATE_INSTANCE,
        token: {
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance,
        },
        method: "POST",
        data: {
            "chatId": "79097307774@c.us",
            "message": "Твой кругляшок это эмодзи"
        },
    })}
	return (
		<div>
			<InputWrapper>
				<input
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
					type="text"
					placeholder="Отправьте сообщение"
					style={inputStyle}
				></input>
				<Button sx={{ color: "red" }} onClick={fetching}>Search</Button>
			</InputWrapper>
		</div>
	);
};
