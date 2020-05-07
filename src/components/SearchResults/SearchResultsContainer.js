import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.id),
});

// const mapDispatchToProps = (dispatch, props) => ({
//   addCard: title => dispatch(createActionAddCard({
//     columnId: props.id,
//     title,
//   })),
// });


// export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(SearchResults);