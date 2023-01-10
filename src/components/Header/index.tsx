import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>      
      <nav>
        <a href="/">Listagem</a>
        {/* <Link to="/import">Importar</Link> */}
      </nav>
    </header>
  </Container>
);

export default Header;