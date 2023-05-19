import { ErrorWrapper } from './style';

type ErrorTextPropsType = {
    error?: string;
};

export const ErrorText = ({ error }: ErrorTextPropsType) => {
    return <ErrorWrapper>{error}</ErrorWrapper>;
};
