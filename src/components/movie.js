import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

class MovieQuotes extends Component {
    componentDidMount () {
        if (this.props.auth) {
            this.props.getQuotes();
        }
    }
    render () {
        return (
            <div>
                <h1 className="center-align">Movie Quotes</h1>
                <p>{ this.props.movieQuote }</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        movieQuote: state.movie.quote,
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { getQuotes })(MovieQuotes);