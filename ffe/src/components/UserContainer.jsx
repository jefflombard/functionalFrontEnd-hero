import React from 'react';
import './UserContainer.css';

import UserCard from './UserCard.jsx'

const UserContainer = props => {
  const users = props.users.map( (user,index) => {
    const {firstName, lastName, email} = user;
    return (
        <UserCard
          key={index}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
    );
  });

  return (
    <div className='user-container'>
      {users}
    </div>
  )
}

export default UserContainer;
