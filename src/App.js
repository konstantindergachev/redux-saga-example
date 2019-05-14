import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import UserCreate from './components/users/user-create/UserCreate';
import UsersItem from './components/users/users-item/UsersItem';
import UsersList from './components/users/users-list/UsersList';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch >
            <Route exact path='/' component={UsersList} />
            <Route exact path='/create' component={UserCreate} />
            <Route exact path='/user/:id' component={UsersItem} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
