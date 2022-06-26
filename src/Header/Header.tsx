import React, { FC } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  //<Nav.Item as="li"><Link to="/">Home</Link></Nav.Item>
  return (
    <Container
      fluid
      className={styles.Header}
    >
      <p>Run!</p>
      <Nav
        activeKey="/"
        as="ul"
      >
        <Nav.Item as="li"><Link to="pixi">Pixi</Link></Nav.Item>
      </Nav>
    </Container>
  )
};

export default Header;
