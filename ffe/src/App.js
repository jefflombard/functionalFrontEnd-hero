import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from './actions/index';
import { bindActionCreators } from 'redux';

import './App.css';

import UserDataContainer from './components/UserDataContainer.jsx';

class App extends Component {

  constructor(){
    super()

    const { dispatch } = props;
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="App">
        <UserDataContainer />
      </div>
    );
  }
}

export default App;

// export default connect(mapStateToProps,mapDispatchToProps)(App);
