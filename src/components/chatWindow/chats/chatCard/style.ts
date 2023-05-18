import { styled } from "@mui/material";

export const ChatCardWrapper = styled("div")({
	display: "flex",
	alignItems: "center",
	"&:hover": {
		backgroundColor: "#f0f2f5",
	},
});

export const UserDataWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
	fontSize: "12px",
	borderBottom: "1px solid #f0f2f5",
	"& :nth-of-type(1n)": {
		margin: "5px",
	},
});
