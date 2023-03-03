
import { useContext, useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '..'; 
import Switch from 'react-switch'; 
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'; 


interface Props {
  toggleTheme(): void; 
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext); 
  return (
    <>   
    <Container>
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.1, colors.primary)}
        offColor={colors.secundary}
      />
    </Container>
    </>
  )
}

export default Header
