import React, { Component } from 'react'
import Login from '../Components/Login'
import { Navbar, Nav, Button, ButtonToolbar,  } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class MyNav extends Component {
    state = {
        modalShow: false
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Restaurant Reviewer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Search</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                        <Button
                            variant="primary"
                            onClick={() => this.setState({ modalShow: true })}>
                            Login
                        </Button>
                        <Login
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyNav