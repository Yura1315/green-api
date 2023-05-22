import { useEffect, useState, useContext } from "react";
import { fetchApi, EFetchTypes } from "../../../../utils/fetchApi";
import { authContext } from "../../../../common/authContext";
import { ChatCardWrapper, UserDataWrapper } from "./style";
import { Avatar } from "@mui/material";
import { ICardProps, IContact } from "./types";

export const ChatCard = ({ id }: ICardProps) => {
	const { setAuth } = useContext(authContext);
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	const [contact, setContact] = useState<IContact>();
	useEffect(() => {
		const test = { chatId: id };
		fetchApi({
			path: EFetchTypes.GET_CONTACT_INFO,
			token: {
				idInstance: idInstance,
				apiTokenInstance: apiTokenInstance,
			},
			method: "POST",
			data: test,
		}).then((data) => {
			setContact((prevContact) => (prevContact = data));
		});
	}, [apiTokenInstance, idInstance, id]);

	return (
		<ChatCardWrapper
			onClick={() => {
				setAuth((prev) => ({ ...prev, chatId: contact?.chatId }));
			}}
		>
			{contact ? (
				<>
					{contact.avatar ? (
						<img
							src={contact.avatar || undefined}
							alt={"Нет аватара"}
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "10px",
								marginLeft: "15px",
							}}
						/>
					) : (
						<Avatar sx={{ marginLeft: "15px" }}>A</Avatar>
					)}
					<UserDataWrapper>
						<p>{contact.name}</p>
						<p>{}</p>
					</UserDataWrapper>
				</>
			) : null}
		</ChatCardWrapper>
	);
};
