import styled from "styled-components";

export const Container = styled.div`

    padding: 10px;
    display: grid;
    grid-gap: 0.5rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); 
    }
`;