import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {


    render() {

        const responseGoogle = (response) => {
            console.log(response);
          }

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
              </Modal.Title>
                </Modal.Header>
                <GoogleLogin
                    clientId="518612170346-p3frpb7brkfkt3d17l3t382isnglbp32.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                <Form>
                    <Modal.Body>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" >Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}

export default Login