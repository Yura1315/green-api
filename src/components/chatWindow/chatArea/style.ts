import { styled } from "@mui/material";


export const ChatAreaWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
	background: "#f0f2f5",
	width: "100%",
	backgroundImage: `url(https://kartinkin.net/pics/uploads/posts/2022-08/1659996558_21-kartinkin-net-p-fon-vatsap-standartnii-krasivo-21.jpg)`,
	backgroundSize: 'contain',
});

export const ChatAreaTitle = styled("div")({
	position: 'sticky',
	top: 0,
	left: 0,
    display:'flex',
    alignItems:'center',
	background: "#f0f2f5",
    marginBottom: '5px',
	paddingLeft: '10px',
	minHeight: '53px',
	zIndex: 999
});

export const AreaContainer = styled("div")({
	display: 'flex',
	flexDirection: 'column-reverse',
	height: '100%',
	overflowY: 'scroll',
});
