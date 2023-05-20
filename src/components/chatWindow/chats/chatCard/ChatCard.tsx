import { ChatCardWrapper, UserDataWrapper } from "./style";
import { useEffect, useState } from "react";
import { fetchApi, EFetchTypes } from "../../../../utils/fetchApi";
import { Avatar } from "@mui/material";
interface CardProps {
	id: string;
}

export const ChatCard = ({ id }: CardProps) => {
	const { idInstance, apiTokenInstance } = JSON.parse(localStorage.user);
	const [contact, setContact] = useState<any>([]);
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
			setContact((prevContact: any) => (prevContact = data));
		});
	}, [apiTokenInstance, idInstance, id]);
	console.log(contact);
	return (
		<ChatCardWrapper>
			{contact ? (
				<>
					{contact.avatar ? (
						<img
							src={contact.avatar || null}
							alt={"Нет аватара"}
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "10px",
								marginLeft: "15px",
							}}
						/>
					) : (
						<Avatar sx={{marginLeft:'15px'}}>A</Avatar>
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
