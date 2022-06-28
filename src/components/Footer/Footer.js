import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <p className={styles.copyright}>© 2022 https://pixijs-react-run.vercel.app</p>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
