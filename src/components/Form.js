/*
    Omar Johnson
    Form components
    Created on: 1/27/25

    Preset form React components
 */

import React, { useState } from 'react';

function OptionsField(props)
{
    const [selectedOption, setSelectedOption] = useState(0);

    const { prompt, name } = props;

    const handleClick = (event) => {
        setSelectedOption(event.target.getAttribute('i'));
    };

    return (
        <label htmlFor="type" className="text-xl w-full">{prompt}
            { /* Special choice buttons */ }
            <span className="flex flex-row flex-wrap gap-x-4">
            {
                props.options.map((o, index) => (
                        <label className="p-2">
                            <input type="radio" name={name} className="m-2" value={o.value} checked={selectedOption === index ? 'checked' : null} i={index} onClick={handleClick} />{o.text}
                        </label>
                        ))
            }
            </span>
        </label>
    );
}

export { OptionsField };