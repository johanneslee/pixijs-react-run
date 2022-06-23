import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import Home from '../Home/Home';
import Pixi from '../Pixi/Pixi';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className={styles.Main}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pixi" element={<Pixi />} />
    </Routes>
  </div>
);

export default Main;
