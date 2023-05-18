import React, { ChangeEvent } from 'react';
import { StyledInput } from './style';

type InputFieldType = {
    placeholder: string;
    value: string;
    handle: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ placeholder, value, handle }: InputFieldType) => {
    const handleFocus = () => {};

    return <StyledInput placeholder={placeholder} value={value} onChange={handle} />;
};

export default InputField;
