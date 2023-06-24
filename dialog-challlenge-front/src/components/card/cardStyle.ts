import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 280px;
  min-height: 420px;
  background-color: #022a4f;
  border-radius: 5px;
  align-items: start;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 32px;
`;

export const CardImage = styled.img`
  border: 1px solid #011528;
  border-radius: 5px;
  width: 200px;
  height: 200px;
`;

export const ContainerDetails = styled.div`
  justify-content: center;
  display: flex;
  grid-gap: 16px;
  align-items: center;
`;
export const CardSubTitle = styled.div`
  color: #f8f7f9;
  font-weight: bold;
  font-size: 16px;
`;

export const CardSubTitleProps = styled.div`
  width: 144px;
  color: #f8f7f9;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
