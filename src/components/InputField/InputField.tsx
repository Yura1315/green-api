import React, { ChangeEvent } from 'react';
import { StyledInput } from './style';

type InputFieldType = {
    placeholder: string;
    value: string;
    handle: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFocus?: () => void;
};

export const InputField = ({ placeholder, value, handle, handleFocus }: InputFieldType) => {
    return <StyledInput placeholder={placeholder} value={value} onChange={handle} onFocus={handleFocus} />;
};
