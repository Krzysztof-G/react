import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator.js';
// import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
    // state = {
    //   cards: this.props.cards || [],
    // }
    static propTypes = {
    //   title: PropTypes.string,
    //   icon: PropTypes.string,
      cards: PropTypes.array,
    //   addCard: PropTypes.func,
    }
    // static defaultProps = {
    //   icon: settings.defaultColumnIcon,
    // }
    

    // addCard(title) {
    //   this.setState(state => (
    //     {
    //       cards: [
    //         ...state.cards,
    //         {
    //           key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
    //           title,
    //         },
    //       ],
    //     }
    //   ));
    // }
    

    render() {
      const {cards} = this.props;

      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>
              {/* <span className={styles.icon}><Icon name={icon} /></span>
            {title} */}
            </h3>
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
            {/* <div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div> */}
          </section>
        </Container>
      );
    }
}
export default SearchResults;

