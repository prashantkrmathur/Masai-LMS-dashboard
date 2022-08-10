import React from 'react'
import SignUp from './SignUp'
import { Container } from "react-bootstrap"
import AuthProvider from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Lectures from './Lectures'
import Assigment from './Assigment'

const App = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Dashboard } />
              <Route path='/login' component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path='/lectures' component={Lectures} />
              <Route path='/assignments' component={Assigment} />
            </Switch>
        </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App