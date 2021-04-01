import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 15px;
    }

    > strong {
      font-size: 12px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      align-self: center;
    }

    > strongName {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      align-self: center;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;

