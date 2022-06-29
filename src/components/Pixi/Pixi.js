import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pixi.module.scss';
import { Container, Sprite, Stage } from '@inlet/react-pixi'
import FlyingRockman from '../FlyingRockman/FlyingRockman';
import ListeningRockman from '../ListeningRockman/ListeningRockman';


const Pixi = () => {
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
          <Sprite
            x={-160}
            y={-160}
            width={320}
            height={320}
            image="/images/grid.png"
          />
          <FlyingRockman />
          <ListeningRockman />
        </Container>
      </Stage>
    </div>
  );
};

Pixi.propTypes = {};

Pixi.defaultProps = {};

export default Pixi;
