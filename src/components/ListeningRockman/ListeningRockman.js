import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListeningRockman.module.scss';
import { Sprite } from '@inlet/react-pixi';

const ListeningRockman = () => {
  return (
    <Sprite
      x={-40}
      y={-40}
      width={80}
      height={80}
      image="/images/chara-run.png"
    />
  );
}

ListeningRockman.propTypes = {};

ListeningRockman.defaultProps = {};

export default ListeningRockman;
