import { ChatCardWrapper, UserDataWrapper } from "./style";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../common/authContext";

interface CardProps {
	id: string;
}

export const ChatCard = ({ id }: CardProps) => {
	const { auth } = useContext(authContext);
	const [contact, setContact] = useState<any>([]);
	useEffect(() => {
		const test = JSON.stringify({ chatId: id });
		fetch(
			`https://api.green-api.com/waInstance${auth.idInstance}/GetContactInfo/${auth.apiTokenInstance}`,
			{
				method: "POST",
				body: test,
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setContact((prevContact: any) => (prevContact = data));
			});
	}, [auth.apiTokenInstance, auth.idInstance, id]);
	console.log(contact);
	return (
		<ChatCardWrapper>
			{contact ? (
				<>
					<img
						src={contact.avatar || null}
						alt={"Нет аватара"}
						style={{ width: "50px", height: "50px", borderRadius: "10px",marginLeft:'15px' }}
					/>
					<UserDataWrapper>
						<p>{contact.name}</p>
						<p>{}</p>
					</UserDataWrapper>
				</>
			) : null}
		</ChatCardWrapper>
	);
};
