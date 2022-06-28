import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.scss';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
