import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchBar extends Component {

    state = {
        searchTerm: ""
    }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.onSearchClick(this.state.searchTerm)
    }

    render() {
        return (
            <div className="centered">
                <div id="container" className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="info-form">
                                <Form className="form-inlin justify-content-center" onChange={this.handleSearch}>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Search" />
                                    </FormGroup>
                                    <Button type="submit" variant="secondary" onClick={this.handleClick}>okay, go!</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SearchBar