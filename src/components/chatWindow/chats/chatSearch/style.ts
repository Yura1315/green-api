import { styled } from "styled-components";

export const InputWrapper = styled("div")({
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '10px',
	borderBottom: "1px solid #e7e4e4",
	height: '50px',
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
	width: '250px',
}