import styled from 'styled-components';
import colors from 'utils/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 905px) {
    justify-content: center;
    margin-left: 1.2rem;
  }
  justify-content: flex-start;
  margin-left: 2.85rem;
  margin-right: 1rem;
`;

export const Card = styled.div`
  max-width: 40.75rem;
  margin-top: 1.75rem;
  background: ${colors.white};
  border-radius: 0.3125rem;
  width: 99%;
  padding: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media (max-width: 493px) {
    flex-direction: column;
  }
  flex-direction: row;
  transition: transform 0.2s;
  &:hover {
    transform: translateX(0.625rem);
  }
  img {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 0.3125rem;
  }
  div {
    margin-left: 1rem;
    margin-top: 1rem;
    align-self: flex-start;
    strong {
      font-size: 1.25rem;
      color: ${colors.darkBlueShade};
    }
    p {
      font-size: 1.125rem;
      color: ${colors.gray};
      margin-top: 0.25rem;
    }
  }
`;
