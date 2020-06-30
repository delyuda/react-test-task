import React from 'react';
import './AsteroidForm.css';

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
                <button onClick={this.getAsteroid}
                        disabled={!this.state.asteroidId || !this.state.asteroidId.trim().length}
                        className='asteroid-form__submit-btn btn'>Submit</button>
                <div>
                    <button onClick={this.getRandomAsteroid}
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

    getAsteroid (id = this.state.asteroidId) {
        asteroidService.getAsteroid({id: id})
            .then( response => {
                console.log('response',response)
                this.props.updated(response);
            })
            .catch( error => {
                this.setState({
                    error: true
                });
            });
    }

    getRandomAsteroid () {
        asteroidService.getRandomAsteroid()
            .then( response => {
                console.log('response')
                this.getRandomId(response);
            })
            .catch( error => {
                this.setState({
                    error: true
                });
            })
    }

    getRandomId (data) {
        let randomIndex = Math.floor(Math.random() * (data.length - 1));

        this.getAsteroid(data[randomIndex].id);
    }
}

export default AsteroidForm;