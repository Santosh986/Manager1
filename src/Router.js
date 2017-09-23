import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login"></Scene>
        </Scene>

        <Scene key="main">
          <Scene key="employeeList" rightTitle="Add" onRight={() => Actions.employeeCreate()} component={EmployeeList} title="Employee List" initial></Scene>
          <Scene key="employeeCreate" title="Create Employees" component={EmployeeCreate} ></Scene>
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
