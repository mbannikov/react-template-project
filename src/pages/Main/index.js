import { connect } from 'react-redux';

import MainPage from './Main';
import { fetchUsers } from 'src/store/actions/users.actions';

const mapStateToProps = state => {
  const {
    isLoading,
    errMsg,
    list
  } = state.users.toJS();

  return {
    users: {
      isLoading,
      errMsg,
      list
    }
  };
};

const dispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, dispatchToProps)(MainPage);
