import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { Form, Button, Card, Alert } from "react-bootstrap";

const Assigment = () => {
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [instructor, setInstructor] = useState('')
  const [option, setOption] = useState('');
  const [title, setTitle] = useState('')


  const handleBtnClick = () => {
    console.log('btn clicked');
    setDate('');
    setType('');
    setCategory('');
    setInstructor('');
    setOption('');
  }
  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: '700px' }}>
      <Dashboard />
      <Card>
        <Card.Body style={{ fontWeight: '700', marginLeft: '50px', fontSize: '20px' }}>Assigments</Card.Body>
      </Card>
      <Card style={{ width: '90%', overflow: "hidden", margin: 'auto', marginTop: '60px', }}>
        <Card.Body>
          <Form>
            <Form.Group id='search' style={{ marginBottom: '15px' }}>
              <Form.Label>Title</Form.Label>
              <Form.Control value={title} onChange={(event) => setTitle(event.target.value)} type='search' placeholder='Search...' required></Form.Control>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
              <Form.Group id='lectures' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Category</Form.Label>
                <Form.Select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option value='0'>Choose</option>
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
                <Form.Select value={type} onChange={(event) => setType(event.target.value)}>
                  <option value='0'>Choose</option>
                  <option value="1">Live</option>
                  <option value="2">Video</option>
                  <option value="3">Reading</option>
                </Form.Select>
              </Form.Group>
              <Form.Group id='instructor' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Instructors</Form.Label>
                <Form.Select value={instructor} onChange={(event) => setInstructor(event.target.value)}>
                  <option value='0'>Choose</option>
                  <option value="1">Swanand</option>
                  <option value="2">Prabharanjan</option>
                  <option value="3">Dhaval </option>
                  <option value="4">Albert</option>
                  <option value="5">Lohit</option>
                  <option value="6">Yogesh</option>
                  <option value="7">Abhishek</option>
                  <option value="8">Venu</option>
                  <option value="9">Ankush</option>
                  <option value='10'>Nrupul</option>
                </Form.Select>
              </Form.Group>
            </div>
            <br></br><br></br>
            <div style={{ display: 'flex' }}>
              <Form.Group controlId="duedate" style={{ width: '375px', marginRight: '20px' }}>
                <Form.Label>Scheduled</Form.Label>
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group id='option' style={{ marginBottom: '15px', minWidth: '32%' }}>
                <Form.Label>Options</Form.Label>
                <Form.Select value={option} onChange={(event) => setOption(event.target.value)}>
                  <option value="1">Choose</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </Form.Select>
              </Form.Group>
            </div>
          </Form>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <Button onClick={handleBtnClick}>Reset filter</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Assigment