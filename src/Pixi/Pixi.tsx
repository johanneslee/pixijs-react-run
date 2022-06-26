import { Sprite, Stage, useTick } from '@inlet/react-pixi';
import React, { FC, useReducer, useRef } from 'react';
import styles from './Pixi.module.scss';

interface PixiProps {}

interface Action {
  type: string,
  data: object
}

const Pixi: FC<PixiProps> = () => {
  const reducer = (motion: object, action: Action) => motion = action.data;
  const Rockman = () => {
    const [motion, dispatch] = useReducer(reducer, {});
    const iter = useRef(0);
    useTick((delta) => {
      const i = (iter.current += 0.05 * delta);
      dispatch({
        type: 'update',
        data: {
          x: (Math.sin(i) * 100) + 160,
          y: (Math.sin(i / 1.5) * 100) + 160,
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
      <div className={styles.Frame}>
        <Stage
          width={320}
          height={320}
        >
          <Rockman />
        </Stage>
      </div>
    </div>
  )
};

export default Pixi;
