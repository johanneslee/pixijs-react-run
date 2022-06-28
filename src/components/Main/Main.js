import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Pixi from '../Pixi/Pixi';

const Main = () => (
  <div className={styles.Main}>
    <Pixi />
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
