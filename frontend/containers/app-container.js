import { connect } from 'react-redux';
import Main from '../components/main';

const mapStateToProps = (state, props) => {
  return {
    contentLoaded: state.loaded,
    activeTab: state.activeTab
  }
};

export default connect(mapStateToProps)(Main);
