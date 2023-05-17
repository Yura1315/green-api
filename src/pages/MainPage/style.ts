import { styled } from "@mui/material";


export const MainPageWrapper = styled('div') ({
    padding: '64px',
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '0 17px 50px 0 rgba(11,20,26,.19),0 12px 15px 0 rgba(11,20,26,.24)',
    zIndex: 2,
    marginTop: '-130px',
    borderRadius: '3px', 
    justifyContent: 'center'
})

export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '200px',
    margin: '0 auto',
    justifyContent: 'space-between'
})