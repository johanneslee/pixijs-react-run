import React, { FC } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <Container
    fluid
    className={styles.Header}
  >
    <Link
      to="/"
      className="logo"
    >Run!</Link>
    <Nav
      activeKey="/"
      as="ul"
    >
      <Nav.Item as="li"><Link to="/">Home</Link></Nav.Item>
      <Nav.Item as="li"><Link to="/pixi">Pixi</Link></Nav.Item>
    </Nav>
  </Container>
);

export default Header;
