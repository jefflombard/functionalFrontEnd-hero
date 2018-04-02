import React, {Component} from 'react';
import { connect } from 'react-redux';

import './UserContainer.css';
import UserContainer from './UserContainer.jsx'

class UserDataContainer extends Component {
  render(){
    return (
      <UserContainer users={this.props.users} />
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserDataContainer);
