import Users from '../components/Users';
import Regions from '../components/Regions';
// import Stores from '../components/Stores';
// import Games from '../components/Games';
import AddUser from '../components/AddUser';
import EditUserForm from '../components/EditUserForm';
import Login from './Login';
import Signup from './Signup';
import React, {Component} from 'react';

export default function Home() {
  return (
    <div>
          {/* <Regions /> */}
          {/* if logged in as manager, show tasks and schedules in nav bar */}
          {/* if logged in as employee, show schedule in nav bar */}
      {/* <Users /> */}
      {/* <AddUser /> */}
      <Login />
      {/* <Signup /> */}
      {/* <EditUserForm/> */}
    </div>
  )
}
