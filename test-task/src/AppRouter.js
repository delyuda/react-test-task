import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AsteroidForm from "./components/AsteroidForm/AsteroidForm";
import AsteroidDetails from "./components/AsteroidDetails/AsteroidDetails";

export default class AppRouter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            asteroidData: {
                name: '',
                nasa_jpl_url: '',
                is_potentially_hazardous_asteroid: ''
            }
        }

        this.update = this.update.bind(this);
    }

    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' AsteroidForm>
                        <AsteroidForm updated={this.update}></AsteroidForm>
                    </Route>
                    <Route path='/asteroid'>
                        <AsteroidDetails data={this.state.asteroidData}></AsteroidDetails>
                    </Route>
                </Switch>
            </Router>
        )
    }

    update (data) {
        this.setState({
            asteroidData: data
        });
        this.props.router.redirect('/asteroid')
    }

}