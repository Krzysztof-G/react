import React from 'react';
import styles from './App.scss';
import List from '../../components/List/ListContainer';
// import { pageContents, listData } from '../../data/dataStore';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../../components/Creator/Creator.js';
import Search from '../../components/Search/SearchContainer';


class App extends React.Component {

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
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>
      </main>
    );
  }
}

export default App;
