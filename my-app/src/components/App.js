import React, { useEffect } from 'react'
import SignUp from './SignUp'
import AuthProvider from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Lectures from './Lectures'
import Assigment from './Assigment'
import Ticket from './Ticket'
import Discussion from './Discussion'
import Notification from './Notification'
import Message from './Message'
import Quizzes from './Quizzes'
import Elective from './Elective'
import Courses from './Courses'
import Profile from './Profile'
import "./Style.css"
import DashboardData from './DashboardData'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path="/signup" component={SignUp} />
          <Route path='/lectures' component={Lectures} />
          <Route path='/assigments' component={Assigment} />
          <Route path='/quizzes' component={Quizzes} />
          <Route path='/tickets' component={Ticket} />
          <Route path='/discussion' component={Discussion} />
          <Route path='/notifications' component={Notification} />
          <Route path='/messages' component={Message} />
          <Route path='/electives' component={Elective} />
          <Route path='/courses' component={Courses} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App