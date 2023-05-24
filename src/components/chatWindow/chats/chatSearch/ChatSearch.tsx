import { Button } from '@mui/material';
import { InputWrapper, inputStyle } from './style';
import { ChangeEvent } from 'react';

type ChatSearchPropsType = {
    value: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ChatSearch = ({ value, handleSearch }: ChatSearchPropsType) => {
    return (
        <InputWrapper>
            <input
                type='text'
                placeholder='Поиск или новый чат'
                style={inputStyle}
                value={value}
                onChange={handleSearch}></input>
            <Button>Search</Button>
        </InputWrapper>
    );
};
