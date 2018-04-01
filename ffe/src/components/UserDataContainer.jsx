import React, { Component } from 'react';
import './UserContainer.css';

import UserContainer from './UserContainer.jsx';

class UserDataContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      users: []
    };

    fetch(props.endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState( (prevState,props) => {
          return {
            users: json.results
          }
        })
      })
  }

  render(){

    if (!this.state.users){
      return <div>Loading</div>
    }

    return <UserContainer users={this.state.users} />;
  }
}

export default UserDataContainer;
