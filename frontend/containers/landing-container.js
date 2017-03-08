import { connect } from 'react-redux';
import Landing from '../components/landing';

const mapStateToProps = (state, props) => {
  return {
    contentLoaded: state.loaded,
    activeTab: state.activeTab,
    song: state.song
  }
};

export default connect(mapStateToProps)(Landing);
