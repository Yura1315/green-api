import { styled } from "styled-components";


export const MessageContainer = styled("div")({
    display: 'flex',
    paddingLeft: '10px',
	paddingRight: '10px',
});


export const MessageWrapper = styled("div")({
    padding: '10px',
    marginBottom: '3px',
    backgroundColor: '#ffff',
    borderRadius: '7.5px',
    maxWidth: '40%'
});

export const MessageText = styled("p")({
    padding: 0,
    margin: 0,
    wordBreak: 'break-all'
});