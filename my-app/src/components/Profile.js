import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Dashboard from './Dashboard'
import { TbDeviceDesktop } from "react-icons/tb";
import "./Style.css"
import { useAuth } from "../context/AuthContext"

const Profile = () => {
    const { currentUser } = useAuth()
    const handleSubmit = () => {    
            
    }
    return (
        <div style={{ backgroundColor: 'lightgray' }}>
            <Dashboard />
            <Card>
                <Card.Body style={{ fontWeight: '700', marginLeft: '50px' }}>Profile</Card.Body>
            </Card>
            <div className='profile-main' >
                <div>
                    <h6>Profile information</h6>
                    <p>Update your account's profile information and email address.</p></div>
                <Card style={{ minWidth: '600px' }}>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='name' style={{ marginBottom: '15px' }}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name' value="Prashant Kumar" required></Form.Control>
                            </Form.Group>
                            <Button className='w-20' type='submit'>Save</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div className='profile-main'>
                <div>
                    <h6>Update Password</h6>
                    <p>Ensure your account is using a long, random password to stay  <br></br> secure.</p></div>
                <Card style={{minWidth:'600px'}}>
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
            <div className='profile-main'>
                <div>
                    <h6>Browser Sessions</h6>
                    <p>Manage and log out your active sessions on other browsers<br></br>  and devices.</p></div>
                <Card style={{ minWidth: '600px' }}>
                    <Card.Body>
                        <div className='inputss'>
                            <p className='browserp'>If necessary, you may log out of all of your other browser<br></br> sessions across all of your devices. Some of your <br></br> recent sessions are listed below; however, this list may <br></br> not be exhaustive. If you feel your account has been <br></br>compromised, you should also update your password.</p>
                            <div className='browsertap'>
                                </div>
                        <div className='browsertap'>
                            <div>
                                <TbDeviceDesktop className='tbdevice' />
                            </div>
                            <div className='browserdivtext'>
                                <p>Windows - Chrome</p>
                                <p className='browpp'>157.48.163.85, <span className='browspan' >This device</span></p>
                            </div>

                        </div>
                        <button type="Submit" className='btns'>LOG OUT OTHER BROWSER SESSIONS</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    )
}

export default Profile