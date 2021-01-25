import React, { useMemo } from 'react';
import { Container } from './styles';

interface Props {
    onClick(): void
    isAllUsersDisplayed: boolean;
}

const AllUsersButton: React.FC<Props> = ({ onClick, isAllUsersDisplayed }) => {
    const text = useMemo(() => {
        return isAllUsersDisplayed ? 'See only your friends' : 'See all users';
    }, [isAllUsersDisplayed]);

    return <Container onClick={onClick}>
        {text}
    </Container>;
}

export default AllUsersButton;