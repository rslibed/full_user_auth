import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Nav from './nav';
import { Route } from 'react-router-dom';
import Home from './home';
import Movie from './movie';
import SignIn from './sign_in';
import SignUp from './sign_up';

const App = () => (
    <div>
        <div className="app">
            <Nav/>
            <h1 className="center-align">User Auth Demo</h1>
            <div className="container">
                <Route path="/" exact component={Home}/>
                <Route path="/movie-quotes" component={Movie}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
            </div>
        </div>
    </div>
);

export default App;
