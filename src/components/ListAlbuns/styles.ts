import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const List = styled.ul`
  text-align: center;
  list-style: none;
`;

export const Item = styled.li`
  width: 180px;
  height: 210px;
  margin: 20px;
  padding: 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  border: solid 1px #ccc;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.span`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
