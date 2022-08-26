import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
let states = ["Haryana", "Punjab", "Himachal Pardesh", "Bihar", "Jharkhand"]
const UserForm = () => {
    const [userData, setUserData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
    }
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} style={{ background: "#c9c6cc", padding: "2rem", borderRadius: "5px", boxShadow: "0px 0px 13px 7px rgba(140,139,143,1)" }}>
                <Row className="mb-3" >
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Name" />
                    </Form.Group>

                </Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='my-3' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserForm