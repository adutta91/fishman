import { connect } from 'react-redux';


const mapStateToProps = (state, props) => {
  return {
    contentLoaded: state.loaded
  }
}

export default connect(mapStateToProps)();
