import React from 'react';
import spinner from '../img/spinner.gif';

export default function Spinner() {
    return (
        <img
            src={spinner}
            className='spinnerImg'
            alt='loading'
        />
    )
}
