import React, { Component } from 'react';
import '../App.css';
import MyNav from './MyNav'
import SearchBar from '../Components/SearchBar'
import RestaurantList from './RestaurantList'
import RestaurantInfo from '../Components/RestaurantInfo'
import { Route, Switch } from 'react-router-dom'
// const searchURL = 'http://localhost:4000/api/v1/restaurants?searchtype=textsearch&query='
// const detailsURL = ''

class App extends Component {

  state = {
    allRestaurants: [],
    clicked: null,
    currentCard: {}
  }

  onSearchClick(queryString) {
    const uriEncode = encodeURIComponent(queryString)
    fetch(`http://localhost:4000/api/v1/restaurants?searchtype=textsearch&query=${uriEncode}`)
      .then(res => res.json())
      .then(restaurantData => {
        this.setState({
          allRestaurants: restaurantData.results
        })
      })
  }

  onCardClick(placeId) {
    fetch(`http://localhost:4000/api/v1/restaurants?searchtype=details&placeid=${placeId}`)
      .then(res => res.json())
      .then(details => {
        let photoPromises = details.result.photos.map(photoObj =>
          fetch(`http://localhost:4000/api/v1/restaurants?searchtype=photo&photoreference=
              ${photoObj.photo_reference}&maxwidth=800`)
        );
        Promise.all(photoPromises).then(photos => {
          details.photoURLs = photos;
          this.setState({
            clicked: true,
            currentCard: details
          })
        })
      })
  }

  addNewReview = () => {

  }

  render() {
    return (
      <div>
        <MyNav />
        <Route exact={true} path="/" render={() =>
          <SearchBar
            onSearchClick={this.onSearchClick.bind(this)}
          />
        } />
        {!this.state.clicked ?
          <RestaurantList
            allRestaurants={this.state.allRestaurants}
            handleCardClick={this.onCardClick.bind(this)}
          />
          :
          <RestaurantInfo
            currentCard={this.state.currentCard}
          />
        }
      </div>
    )
  }
}

export default App;
