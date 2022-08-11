import React from 'react'
import Dashboard from './Dashboard'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Calendar } from 'react-calendar';

const Lectures = () => {
  return (
    <div style={{ backgroundColor: 'lightgray' ,minHeight:'700px' }}>
      <Dashboard />
      <Card>
        <Card.Body style={{ fontWeight: '700', marginLeft: '50px', fontSize: '20px' }}>Lectures</Card.Body>
      </Card>
      <Card style={{ width: '90%', overflow: "hidden", margin: 'auto', marginTop: '60px', }}>
        <Card.Body>
          <Form>
            <Form.Group id='search' style={{ marginBottom: '15px' }}>
              <Form.Label>Title</Form.Label>
              <Form.Control type='search' placeholder='Search...' required></Form.Control>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
              <Form.Group id='lectures' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option value="1">Scrum</option>
                  <option value="2">General</option>
                  <option value="3">Skillathon</option>
                  <option value="4">Coding</option>
                  <option value="5">Problem</option>
                  <option value="6">Algo</option>
                  <option value="7">Project</option>
                  <option value="8">Dsa</option>
                  <option value="9">Csbt</option>
                </Form.Select>
              </Form.Group>
              <Form.Group id='type' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option value="1">Live</option>
                  <option value="2">Video</option>
                  <option value="3">Reading</option>
                </Form.Select>
              </Form.Group>
              <Form.Group id='instructor' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Instructors</Form.Label>
                <Form.Select>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
            <br></br><br></br>
            <div>
              <Form.Group id='instructor' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Scheduled</Form.Label>
                
              </Form.Group>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Lectures