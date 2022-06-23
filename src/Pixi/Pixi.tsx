import React, { FC } from 'react';
import styles from './Pixi.module.scss';

interface PixiProps {}

const Pixi: FC<PixiProps> = () => (
  <div className={styles.Pixi}>
    Pixi Component
  </div>
);

export default Pixi;
