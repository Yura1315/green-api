import { styled } from "@mui/material";

export const ChatsWrapper = styled("div")({
	background: "white",
});

export const InputWrapper = styled("div")({
	padding: "5px",
	borderBottom: "1px solid #a0f2f5",
	"& :hover": {
		background: "#f0f2f5",
		transitionDuration: '1s',
	},
});

export const inputStyle = {
	border: "none",
	background: "#f0f2f5",
	borderRadius: "5px",
	padding: "10px",
	outline:'none',
}

