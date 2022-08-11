import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await logout();
      history.push('/login')
    } catch (error) {
      setError('Failed to log out')
    }
  }
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Navbar.Brand href="/dashboard">
        <img style={{ height: '55px', marginLeft: '20px' }} src='data:image/png;base64,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' alt='masai-logo'></img>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/lectures">Lectures</Nav.Link>
            <Nav.Link href="/assigments">Assigment</Nav.Link>
            <Nav.Link href="/quizzes">Quizzes</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/discussion">Discussion</Nav.Link>
            <Nav.Link href="/notifications">Notifications</Nav.Link>
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href="/electives">Electives</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={currentUser && currentUser.email} id="basic-nav-dropdown">
              <NavDropdown.Item disabled={true}>Manage account</NavDropdown.Item>
              <NavDropdown.Item href="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/logout" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Dashboard;