import React from 'react';
import { connect } from 'react-redux';
import MainView from '../components/MainView';

interface Props {
  appName: string;
}
  
const mapStateToProps = (state) => {
  return {
    appName: state.common.appName
  };
}
  
const mapDispatchToProps = dispatch => ({});

class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainView appName={this.props.appName} />   
      </div>
    );
  }
}
// <MainView appName={this.props.appName} />
export default connect(mapStateToProps, mapDispatchToProps)(Home);

//export default Home;