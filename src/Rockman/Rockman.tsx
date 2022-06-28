import { Sprite, useTick } from '@inlet/react-pixi';
import React, { FC, useReducer, useRef } from 'react';
import styles from './Rockman.module.scss';

interface RockmanProps {}

interface Action {
  type: string,
  data: object
}

const Rockman: FC<RockmanProps> = () => {
  const reducer = (motion: object, action: Action) => motion = action.data;
  const [motion, dispatch] = useReducer(reducer, {});
  const iter = useRef(0);
  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);
    dispatch({
      type: 'update',
      data: {
        x: (Math.sin(i) * 70) + 160,
        y: (Math.sin(i / 1.5) * 70) + 160,
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
};

export default Rockman;
