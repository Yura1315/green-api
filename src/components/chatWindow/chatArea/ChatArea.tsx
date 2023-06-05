import { SetStateAction, useContext, useEffect, useState } from "react";
import { EFetchTypes, fetchApi } from "../../../utils/fetchApi";
import { ChatAreaWrapper, ChatAreaTitle, AreaContainer } from "./style";
import { IMessages } from "./types";
import { chatContext } from "../../../common/contexts/chatContext/chatContext";
import { CustomAvatar } from "../../CustomAvatar/CustomAvatar";
import { Message } from "../Message";
import { InputMassegeComponent } from "./MassegeInput/InputPhoneComponent";

export const ChatArea = () => {
	const { chat } = useContext(chatContext);
	const [i,setI] = useState('')
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	const [messages, setMassages] = useState<IMessages[]>([]);
	useEffect(() => {
		const test = { chatId: chat.chatId, count: 30 };
		fetchApi({
			path: EFetchTypes.GET_MESSAGES,
			token: {
				idInstance: idInstance,
				apiTokenInstance: apiTokenInstance,
			},
			method: "POST",
			data: test,
		}).then((data) => {
			setMassages(
				(prevMessage: SetStateAction<IMessages[]>) => (prevMessage = data)
			);
		});
	}, [apiTokenInstance, chat.chatId, idInstance,i ]);

	return (
		<ChatAreaWrapper>
			{chat.chatId ? (
				<ChatAreaTitle>
					<CustomAvatar src={chat.avatar} />
					<p style={{ marginLeft: "10px" }}>{chat.chatName}</p>
				</ChatAreaTitle>
			) : (
				<ChatAreaTitle />
			)}
			<AreaContainer>
				{messages.length > 0 ? (
					messages
						.sort((item, prevItem) => {
							return prevItem.timestamp - item.timestamp;
						})
						.map((message: IMessages) => {
							return (
								<Message
									
									key={message.idMessage}
									type={message.type}
									text={message.textMessage}
								/>
							);
						})
				) : (
					<p>'Пусто'</p>
				)}
			</AreaContainer>
			<InputMassegeComponent valueOp={
									{	value:i,
										setValue: setI,}
									}/>
		</ChatAreaWrapper>
	);
};
