import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
// import { pageContents, listData } from '../../data/dataStore';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';


class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    search: PropTypes.array,
  }
  
  render() {
    const {title, subtitle,lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* <List {...listData} /> */}
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>
      </main>
    );
  }
}

export default Home;
