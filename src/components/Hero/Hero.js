import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
        <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.imageText} />
      </header>
    )

export default Hero;
Hero.popTypes = {
    titleText: PropTypes.node.isRequired,
};

// funkcja strzałkowa czemu wyswietla blad przy znaku = ?

/* class Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" />
      </header>
) */