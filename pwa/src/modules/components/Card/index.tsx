import React, { useCallback } from 'react';
import { MdPerson, MdWork, MdCall } from 'react-icons/md'
import Button from '../Button';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  user_id: any;
  name: string;
  age: number;
  company: string;
  phone: string;
  picture: string;
}

const Card: React.FC<Props> = ({ user_id, name, age, company, phone, picture }) => {
  return (
    <Container>
      <Link
        to={{
          pathname: `/user/${name}`,
          state: {
            user_id
          }
        }}
      >
        <div className="picture" >
          <img src={picture} />
          <div className="cover">SEE MORE</div>
        </div>
      </Link>
      <div className="content" >
        <div className="user">
          <MdPerson size="1.6rem" />
          <span>{name}, {age}</span>
        </div>
        <div className="company">
          <MdWork size="1rem" />
          <span>Works at {company}</span>
        </div>
        <div className="phone">
          <MdCall size="1rem" />
          <span>{phone}</span>
        </div>
        <Link
          to={{
            pathname: `/user/${name}`,
            state: {
              user_id
            }
          }}
        >
          <Button>SEE MORE</Button>
        </Link>
      </div>
    </Container >
  );
}

export default Card;