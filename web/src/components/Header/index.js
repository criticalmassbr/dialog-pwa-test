import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import { Container} from './styles';


import logo from '../../assets/images/logo.png';

export default function Header({ setUserSearch }) {

  return (
    <Container>
      <Link to={"/"}>
        <img src={logo} alt="dialog" />
      </Link>
      <Search  setUserSearch={ setUserSearch}/>
    </Container>
  );
}
