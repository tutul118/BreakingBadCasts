import React, { useState } from 'react';

export default function Search({ getQuery }) {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <secton className='search'>
            <form>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Search Characters'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </secton>
    )
}
