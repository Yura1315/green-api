import { styled } from "@mui/material";

export const ChatsWrapper = styled("div")({
	background: "white",
	overflowY: 'scroll',
	width: '480px'
});


export const UserInfoWrapper = styled("div")({
	position: 'sticky',
	top: 0,
	left: 0,
	display:'flex',
    alignItems:'center',
	background: "#f0f2f5",
    marginBottom: '5px',
	paddingLeft: '10px',
	minHeight: '53px',
	zIndex: 999,
	borderRight: '1px solid #e7e4e4'
});

