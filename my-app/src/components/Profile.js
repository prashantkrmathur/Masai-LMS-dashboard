import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Dashboard from './Dashboard'

const Profile = () => {
    const handleSubmit = () => {        
    }
    return (
        <div style={{ backgroundColor: 'lightgray' }}>
            <Dashboard />
            <Card>
                <Card.Body style={{ fontWeight: '700', marginLeft: '50px' }}>Profile</Card.Body>
            </Card>
            <div className='profile-main'>
                <div>
                    <h6>Profile information</h6>
                    <p>Update your account's profile information and email address.</p></div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='name' style={{ marginBottom: '15px' }}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name' value='' required></Form.Control>
                            </Form.Group>
                            <Button className='w-20' type='submit'>Save</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div className='profile-main'>
                <div>
                    <h6>Update Password</h6>
                    <p>Ensure your account is using a long, random password to stay secure.</p></div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='password' style={{ marginBottom: '15px' }}>
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control type='password' value='' required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password' style={{ marginBottom: '15px' }}>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type='password' value='' required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password' style={{ marginBottom: '15px' }}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='password' value='' required></Form.Control>
                            </Form.Group>
                            <Button className='w-20 float-right' type='submit'>Save</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    )
}

export default Profile