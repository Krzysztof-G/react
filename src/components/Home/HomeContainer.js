import { connect } from 'react-redux';
import Home from './Home';
import { getListsForApp, createActionAddList } from '../../redux/listsRedux.js';
 
const mapStateToProps = (state, props) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForApp(state, props.id),
});
 
const mapDispatchToProps = (dispatch, props) => ({
  addList: (title) =>
    dispatch(
      createActionAddList({
        appId: props.id,
        title,
      })
    ),
});
// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export default connect(mapStateToProps, mapDispatchToProps)(Home);