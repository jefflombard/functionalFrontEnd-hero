import React from 'react';
import './UserContainer.css';

import UserCard from './UserCard.jsx'

const UserContainer = props => {
  const users = props.users.map( (user,index) => {
    const {email} = user;
    const firstName = user.name.first;
    const lastName = user.name.last;
    
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
