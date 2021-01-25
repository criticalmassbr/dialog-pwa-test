import styled from 'styled-components';

export const Container = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    padding: 10px 0 10px 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.color}
`;