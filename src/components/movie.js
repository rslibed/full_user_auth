import React from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

const MovieQuotes = props => {
    props.getQuotes();
    return (
        <div>
            <h1 className="center-align">Movie Quotes</h1>
            <p>I'll be back!</p>
        </div>
    )
}

export default connect(null, { getQuotes })(MovieQuotes);