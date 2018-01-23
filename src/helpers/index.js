import React from 'react';

export function renderInput ( {input, placeholder, meta: { error, touched }} ) {
    return (
        <div className="input-field">
            <input{ ...input } type="text" placeholder={placeholder}/>
            <p className="red-text">{ touched && error }</p>
        </div>
    )
}