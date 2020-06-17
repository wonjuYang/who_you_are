import React from 'react';
import PropTypes from 'prop-types';

function user({ userName }){
    console.log({userName})
    const user = {
        userName: {userName},
        Q_first: null,
        Q_second: null,
        Q_third: null,
        Q_forth: null,
        Q_fifth: null,
    };
    return <h1>{userName}</h1>
}

user.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default user;