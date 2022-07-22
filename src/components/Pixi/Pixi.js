import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pixi.module.scss';
import { Container, Stage } from '@inlet/react-pixi'
import FlyingRockman from '../FlyingRockman/FlyingRockman';
import Background from '../Background/Background';

const Pixi = () => {
  //init();
  return (
    <div className={styles.Pixi}>
      <Stage
        width={320}
        height={320}
        options={{ backgroundColor: 0x4e4e4e }}
      >
        <Container
          x={160}
          y={160}
        >
          <Background />
          <FlyingRockman />
        </Container>
      </Stage>
    </div>
  );
};

Pixi.propTypes = {};

Pixi.defaultProps = {};

export default Pixi;
