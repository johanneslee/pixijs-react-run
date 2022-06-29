import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Pixi.module.scss';
import { Container, Sprite, Stage, useTick } from '@inlet/react-pixi'


const Pixi = () => {
  const reducer = (motion, action) => motion = action.data;
  const Rockman = () => {
    const [motion, dispatch] = useReducer(reducer, {});
    const iter = useRef(0);
    useTick((delta) => {
      const i = (iter.current += 0.05 * delta);
      dispatch({
        type: 'update',
        data: {
          x: (Math.sin(i) * 60),
          y: (Math.sin(i / 1.5) * 60),
          rotation: Math.sin(i) * Math.PI,
          anchor: Math.sin(i / 2)
        }
      });
    });

    return (
      <Sprite
        image="/images/chara-run.png"
        width={40}
        height={40}
        {...motion}
      />
    )
  }

  return (
    <div className={styles.Pixi}>
      <Stage
        width={320}
        height={320}
      >
        <Container
          x={160}
          y={160}
        >
          <Rockman />
        </Container>
      </Stage>
    </div>
  );
};

Pixi.propTypes = {};

Pixi.defaultProps = {};

export default Pixi;
