import React from 'react';
import './UserCard.css'

const UserCard = props => {
  return (
    <div className="user-card">
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default UserCard;
