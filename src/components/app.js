import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Nav from './nav';
import { Route } from 'react-router-dom';
import Home from './home';
import Movie from './movie';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';
import redirect from '../hoc/redirect';

const App = () => (
    <div>
        <div className="app">
            <Nav/>
            <h1 className="center-align">User Auth Demo</h1>
            <div className="container">
                <Route path="/" exact component={Home}/>
                <Route path="/movie-quotes" component={auth(Movie)}/>
                <Route path="/sign-in" component={redirect(SignIn, '/movie-quotes')}/>
                <Route path="/sign-up" component={redirect(SignUp, '/movie-quotes')}/>
            </div>
        </div>
    </div>
);

export default App;
