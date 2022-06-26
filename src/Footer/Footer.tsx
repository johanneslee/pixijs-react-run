import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Container
    fluid
    className={styles.Footer}
  >
    <p>2022 © Run!</p>
  </Container>
);

export default Footer;
