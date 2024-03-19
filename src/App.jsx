import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import userData from './components/Data/userData.json';
import Profile from './components/Profile/Profile';
import friends from './components/Data/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/Data/transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
