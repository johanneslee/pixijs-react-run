import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FlyingRockman.module.scss';
import { Sprite, useTick } from '@inlet/react-pixi'

const FlyingRockman = () => {
  const reducer = (motion, action) => motion = action.data;
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
      width={40}
      height={40}
      image="/images/chara-run.png"
      {...motion}
    />
  );
};
 
FlyingRockman.propTypes = {};

FlyingRockman.defaultProps = {};

export default FlyingRockman;
