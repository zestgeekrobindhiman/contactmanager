import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './Contacts'
import Header from './layout/Header'
import Add from '../components/Add'
import EditContact from '../components/EditContact'
import About from '../components/pages/About'
import NotFound from '../components/pages/NotFound'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contactReducer from '../reducers/contactReducer'

const middleware = [thunk]

const store = createStore(contactReducer, applyMiddleware(...middleware))

export default class EntryPoint extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Header branding='Contacts Manager' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route path='/contact/add' component={Add} />
              <Route path='/contact/edit/:id' component={EditContact} />
              <Route path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
