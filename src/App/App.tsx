import React, { FC } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
);

export default App;
