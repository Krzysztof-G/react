import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';



class Header extends React.Component {
  render(){
    return (  
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.header.icon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>

            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string,
};

export default Header;