import React from 'react';
import { MdNotifications } from 'react-icons/md'
import ReactTooltip from 'react-tooltip';
import { Search, Switch } from '../../../modules/components'
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ text, toggleTheme }) => {

  return (
    <Container>
      <Link to="/">
        <h1>{text}</h1>
      </Link>
      <div>
        <Switch toggleTheme={toggleTheme} />
        <div className="notifications-icon">
          <MdNotifications data-tip="We're testing a new feature. <br />Would you like to see notifications here? <br />Just click and help us!" size="2rem" />
          <ReactTooltip place="bottom" multiline={true} type="dark" effect="float" />
          <div className="badge" >6</div>
        </div>
        <Search className="search" text="Searching for..." />
      </div>
    </Container>
  );
};

export default Header;
