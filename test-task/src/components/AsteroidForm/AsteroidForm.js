import React from 'react';
import './AsteroidForm.css';
import { withRouter } from 'react-router';

import AsteroidService from "../../services/asteroidService";
const asteroidService = new AsteroidService();

class AsteroidForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            asteroidId: ''
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.getAsteroid = this.getAsteroid.bind(this);
        this.getRandomAsteroid = this.getRandomAsteroid.bind(this);
    }

    render () {
        return (
            <form className='asteroid-form'>
                <input type='text'
                       value={this.state.asteroidId}
                       onChange={this.inputHandler}
                       placeholder='Enter Asteroid ID'
                       className='asteroid-form__input' />
                <button type='button'
                        onClick={this.getAsteroid}
                        disabled={!this.state.asteroidId || !this.state.asteroidId.trim().length}
                        className='asteroid-form__submit-btn btn'>Submit</button>
                <div>
                    <button type='button'
                            onClick={this.getRandomAsteroid}
                            className='asteroid-form__random-btn btn'>Random Asteroid</button>
                </div>
                { this.state.error ? <div>Oooops... Somethimg wrong.</div> : '' }
            </form>
        )
    }

    inputHandler (e) {
        this.setState({
            asteroidId: e.target.value,
            error: false
        });
    }

    getAsteroid (e, id = this.state.asteroidId) {
        if (e) e.preventDefault();
        asteroidService.getAsteroid(id)
            .then( response => {
                this.props.updated(response.data);
                this.props.history.push('/asteroid')
            })
            .catch( error => {
                this.setState({
                    error: true
                });
            });
    }

    getRandomAsteroid (e) {
        e.preventDefault();
        asteroidService.getRandomAsteroid()
            .then( response => {
                this.getRandomId(response.data.near_earth_objects);
            })
            .catch( error => {
                this.setState({
                    error: true
                });
            })
    }

    getRandomId (data = []) {
        let randomIndex = Math.floor(Math.random() * (data.length - 1));

        this.getAsteroid(null, data[randomIndex].id);
    }
}

export default withRouter(AsteroidForm);