import React, { Component } from 'react';
import './App.css';

import UserDataContainer from './components/UserDataContainer.jsx'



class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDataContainer endpoint='https://randomuser.me/api/?results=5'/>
      </div>
    );
  }
}

export default App;
