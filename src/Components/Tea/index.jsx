import React, { useState } from 'react'

function Tea(props) {
    const [type, setType] = useState('green');
    const {temperature, setTemperature} = useState('+60');

    return (
        <div>
          <h1>{type}</h1>
          <h2>{temperature}</h2>
        </div>
    )
}

export default Tea;
