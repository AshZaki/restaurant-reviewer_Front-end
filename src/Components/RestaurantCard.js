import React, { Component, Fragment } from 'react'
import { Card, Modal } from 'react-bootstrap';

class RestaurantCard extends Component {

    
    render() {
        // console.log(this.props)
        return (
            <Card onClick={(e) => this.props.handleCardClick(this.props.restaurantObj.place_id)}>
                <Card.Img variant="top" src={this.props.restaurantObj.photo} />
                <Card.Body>
                    <Card.Title>{this.props.restaurantObj.name}</Card.Title>
                    <Card.Text>
                        Rating: {this.props.restaurantObj.rating}
                    </Card.Text>
                    <Card.Text>
                        Address: {this.props.restaurantObj.address}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default RestaurantCard