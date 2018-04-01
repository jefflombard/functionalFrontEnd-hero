import React, { Component } from 'react';
import './App.css';

import UserContainer from './components/UserContainer.jsx'



class App extends Component {
  render() {
    
    const sampleUsers = [
      {
        firstName: "Bill",
        lastName: "Lumberg",
        email: "bill@initech.com"
      },
      {
        firstName: "Peter",
        lastName: "Gibbins",
        email: "peter@initech.com"
      },
      {
        firstName: "Samir",
        lastName: "Nagheenanajar",
        email: "Samir@initech.com"
      },
      {
        firstName: "Michael",
        lastName: "Bolton",
        email: "mbolton@initech.com"
      }
    ];

    return (
      <div className="App">
        <UserContainer users={sampleUsers}/>
      </div>
    );
  }
}

export default App;
