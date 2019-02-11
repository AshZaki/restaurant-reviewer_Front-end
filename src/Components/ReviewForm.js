import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

class ReviewForm extends Component {

    state = {
        reviewTerm: ""
    }

    // onTypingChange = (e) => {
    //     this.setState({
    //         reviewTerm: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.addNewReview(this.state.)
    //     e.target.reset()
    // }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.currentCard.result.name}
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group controlId="ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="What do you think?" name="reviewTerm" /> 
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" >Review</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}

export default ReviewForm