import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import RestaurantCard from '../Components/RestaurantCard'

class RestaurantList extends Component {
    render() {
        console.log(this.props.allRestaurants)
        return (
            <CardDeck className="card-deck">
                {this.props.allRestaurants.map(restaurant =>
                    <RestaurantCard
                        restaurantObj={restaurant}
                        key={restaurant.place_id}
                        handleCardClick={this.props.handleCardClick}
                    />
                )}
            </CardDeck>
        )
    }
}

export default RestaurantList