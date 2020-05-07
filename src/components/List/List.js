import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../../components/Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';
import {subPageContents} from '../../data/dataStore';


class List extends React.Component {
    // state = {
    //   columns: this.props.columns || [],
    // }
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
    // addColumn(title) {
    //   this.setState(state => (
    //     {
    //       columns: [
    //         ...state.columns,
    //         {
    //           key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
    //           title,
    //           icon: 'list-alt',
    //           cards: [],
    //         },
    //       ],
    //     }
    //   ));
    // }
    render() {
      const {description, columns, addColumn, title} = this.props;
      return (
        <section className={styles.component}>
          <Container>
            <h2><Hero titleText={title} imageText={subPageContents.info.image} /></h2>
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn} />
            </div>
          </Container>
        </section>
      );
    }
}

export default List;
