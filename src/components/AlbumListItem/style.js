import styled, { css } from 'styled-components';

export const boxStyle = css`
  background-color: #282828;
  border-radius: 0.8rem;
  display: flex;
  padding: 2rem;
`;

export const Container = styled.div`
  ${boxStyle}
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
  height: auto;
  max-width: 100%;
`;

export const Name = styled.div`
  color: #fff;
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 1.5rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
