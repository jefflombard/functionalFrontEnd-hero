import React, { Component } from 'react';

const UserCard = props => {
  return (
    <div>
      <p>First Name: {this.props.firstName}</p>
      <p>Last Name: {this.props.lastName}</p>
      <p>Email: {this.props.email}</p>
    </div>
  )
}

export default UserCard;
