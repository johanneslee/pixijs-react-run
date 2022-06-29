import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.scss';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const App = () => (
  <div className={styles.App}>
    <Header />
    <Main />
    <Footer />
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
