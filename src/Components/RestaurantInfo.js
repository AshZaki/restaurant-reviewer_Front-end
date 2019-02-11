import React, { Component, Fragment } from 'react'
import ReviewForm from './ReviewForm'
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';

class RestaurantInfo extends Component {

    state = {
        modalShow: false
    }


    render() {
        let modalClose = () => this.setState({ modalShow: false });

        console.log(this.props)
        return (
            <div className="d-flex justify-content-center">
                <div className="details-container">
                    <Carousel>
                        {
                            this.props.currentCard.photoURLs.map(urlObj =>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={urlObj.url}
                                        alt="First slide"
                                        width="800"
                                        height="500"
                                    />
                                </Carousel.Item>
                            )}

                    </Carousel>
                    <p>Name: {this.props.currentCard.result.name}</p>
                    <p>Rating: {this.props.currentCard.result.rating}</p>
                    <p>Address: {this.props.currentCard.result.formatted_address}</p>
                    <p>Phone number: {this.props.currentCard.result.formatted_phone_number}</p>
                    <p>Website: {this.props.currentCard.result.website}</p>
                    <ButtonToolbar>
                        <Button
                            variant="primary"
                            onClick={() => this.setState({ modalShow: true })}>
                            Review ME!
                        </Button>
                        <ReviewForm
                            show={this.state.modalShow}
                            onHide={modalClose}
                            currentCard={this.props.currentCard}
                            />
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default RestaurantInfo