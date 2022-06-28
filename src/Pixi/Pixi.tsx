import { Stage } from '@inlet/react-pixi';
import React, { FC } from 'react';
import Rockman from '../Rockman/Rockman';
import styles from './Pixi.module.scss';

interface PixiProps {}

const Pixi: FC<PixiProps> = () => {

  return (
    <div className={styles.Pixi}>
      <div className={styles.Title}>
        <p>Hello Rockman!</p>
      </div>
      <div className={styles.Frame}>
        <Stage
          width={320}
          height={320}
          options={{ backgroundColor: 0x4e4e4e }}
        >
          <Rockman />
        </Stage>
      </div>
    </div>
  )
};

export default Pixi;
