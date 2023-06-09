import { styled } from "@mui/material";

export const ChatCardWrapper = styled("div")({
	display: "flex",
	alignItems: "center",
	borderBottom:'1px solid #f0f2f5',
	cursor: 'pointer',
	"&:hover": {
		backgroundColor: "#f0f2f5",
	},
});

export const UserDataWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
	padding: '15px',
	fontSize: "12px",
	borderBottom: "1px solid #f0f2f5",
	"& :nth-of-type(1n)": {
		margin: "5px",
	},
});

export const contactStyle ={
	width: "50px",
	height: "50px",
	borderRadius: "10px",
	marginLeft: "15px",
}


export const ContactName = styled("div")({
	fontSize: '16px',
	fontWeight: 400
});