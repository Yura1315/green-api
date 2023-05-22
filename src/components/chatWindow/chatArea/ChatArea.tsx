import { SetStateAction, useContext, useEffect, useState } from "react";
import { EFetchTypes, fetchApi } from "../../../utils/fetchApi";
import { authContext } from "../../../common/authContext";
import { ChatAreaWrapper, ChatAreaTitle } from "./style";
import { IMassages } from "./types";



export const ChatArea = () => {
	const { auth } = useContext(authContext);
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	const [massages, setMassages] = useState<IMassages[]>([]);
	useEffect(() => {
		const test = { chatId: auth.chatId, count: 10 };
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
				(prevMassege: SetStateAction<IMassages[]>) => (prevMassege = data)
			);
		});
	}, [apiTokenInstance, auth, idInstance]);
	console.log(massages);

	return (
		<ChatAreaWrapper>
			<ChatAreaTitle>
				<p>Имя Пользователя</p>
			</ChatAreaTitle>
			{massages.length > 0 ? (
				massages.map((massage: IMassages) => {
					return <div key={massage.idMessage}>{massage.textMessage}</div>;
				})
			) : (
				<p>'Пусто'</p>
			)}
		</ChatAreaWrapper>
	);
};
