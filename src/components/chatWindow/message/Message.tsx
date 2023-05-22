import { MessageText, MessageWrapper, MessageContainer } from './style';

type MessagePropsType = {
    text: string;
    type: string;
};

export const Message = ({ text, type }: MessagePropsType) => {
    return type === 'outgoing' ? (
        <MessageContainer style={{ justifyContent: 'flex-end' }}>
            <MessageWrapper>
                <MessageText>{text}</MessageText>
            </MessageWrapper>
        </MessageContainer>
    ) : (
        <MessageContainer>
            <MessageWrapper>
                <MessageText>{text}</MessageText>
            </MessageWrapper>
        </MessageContainer>
    );
};
