import React, { FC } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className="w-100 h-100">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
);

export default App;
