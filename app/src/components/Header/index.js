import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import Switch from 'react-switch';

import { Container } from './styles';
import ToggleContext from '~/contexts/ToggleContext';

export default function Header() {
  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleContext);

  return (
    <Container>
      <span>Album finder</span>

      <nav>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={35}
          handleDiameter={20}
          onColor={colors.secondary}
          offColor={shade(0.15, colors.primary)}
        />
      </nav>
    </Container>
  );
}
