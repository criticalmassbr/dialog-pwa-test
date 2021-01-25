import React, { useContext } from 'react';
import { MdBrightness4, MdBrightness2 } from 'react-icons/md';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade, lighten } from 'polished';
import { OnIcon, OffIcon } from './styles';

interface Props {
  toggleTheme(): void
}

const Switch: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ReactSwitch
      onChange={toggleTheme}
      checked={title === 'dark'}
      height={25}
      width={60}
      handleDiameter={25}
      onHandleColor={lighten(0.25, colors.alterColor)}
      offHandleColor={colors.alterColor}
      offColor={shade(0.25, colors.alterColor)}
      onColor={lighten(0.25, colors.background)}
      uncheckedIcon={
        <OnIcon>
          <MdBrightness2 />
        </OnIcon>
      }
      checkedIcon={
        <OffIcon>
          <MdBrightness4 />
        </OffIcon>
      }
    />
  );
}

export default Switch;