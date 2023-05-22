import { Avatar } from '@mui/material';
import { AvatarImg, AvatarWrapper } from './style';

type AvatarPropsType = {
    src: string;
};

export const CustomAvatar = ({ src }: AvatarPropsType) => {
    return src ? (
        <AvatarWrapper>
            <AvatarImg src={src} />
        </AvatarWrapper>
    ) : (
        <Avatar sx={{ marginLeft: '10px' }}></Avatar>
    );
};
