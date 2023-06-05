import { ChangeEvent, useEffect, useState } from "react";
import { fetchApi, EFetchTypes } from "../../../utils/fetchApi";
import { ChatsWrapper, UserInfoWrapper } from "./style";
import { ChatCard } from "./ChatCard/ChatCard";
import { CustomAvatar } from "../../CustomAvatar/CustomAvatar";
import { IUser } from "./types";
import { ChatSearch } from "./ChatSearch/ChatSearch";
import { ChatSearchResult } from "./ChatSearchResult/ChatSearchResult";

export const Chats = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [search, setSearch] = useState<string>("");
	const { idInstance, apiTokenInstance, name, avatar } = JSON.parse(
		localStorage.user
	);
	let url = `https://api.green-api.com/waInstance${idInstance}/getChats/${apiTokenInstance}`;

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleFilter = (entities: IUser[], search: string) => {
		return entities.filter((item) => item.id.includes(search));
	};

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
			<UserInfoWrapper>
				<CustomAvatar src={avatar} />
				<p style={{ marginLeft: "10px" }}>{name}</p>
			</UserInfoWrapper>
			<ChatSearch value={search} handleSearch={handleSearch} />
			<ChatSearchResult
				search={search}
				entities={handleFilter(users, search)}
			/>
			{users && !search
				? users.map((user: IUser) => {
						if (!user.id.includes("g.us"))
							return <ChatCard key={user.id} id={user.id} />;
				  })
				: ""}
		</ChatsWrapper>
	);
};
