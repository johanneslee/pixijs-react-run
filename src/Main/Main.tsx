import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import Home from '../Home/Home';
import Pixi from '../Pixi/Pixi';

interface MainProps { }

const Main: FC<MainProps> = () => {
  //<Route path="/" element={<Home />} />
  return (
    <div className={styles.Main}>
      <Routes>
        <Route path="/"element={<Navigate to="/pixi" />} />
        <Route path="pixi" element={<Pixi />} />
      </Routes>
    </div>
  )
};

export default Main;
