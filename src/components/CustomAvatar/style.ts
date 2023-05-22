import { styled } from "styled-components";

export const AvatarWrapper = styled("div")({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginLeft: '10px'
});


export const AvatarImg = styled("img")({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});