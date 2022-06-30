import React from 'react';
import PropTypes from 'prop-types';
import styles from './Background.module.scss';
import { Sprite } from '@inlet/react-pixi'

const Background = () => (
  <Sprite
    x={-160}
    y={-160}
    width={320}
    height={320}
    image="/images/grid.png"
  />
);

Background.propTypes = {};

Background.defaultProps = {};

export default Background;
