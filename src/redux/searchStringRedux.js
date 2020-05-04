// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'selectedCards';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE_CARD = createActionName('CHANGE_CARD');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE_CARD });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_CARD:
      return action.payload;
    default:
      return statePart;
  }
}

