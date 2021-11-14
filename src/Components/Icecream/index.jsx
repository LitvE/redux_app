import React from 'react'

function IceCream() {
    const [type, setType] = useState('Lakomka');
    const {temperature, setTemperature} = useState('-5');
    
    return (
        <div>
            <h1>{type}</h1>
            <h2>{temperature}</h2>
        </div>
    )
}

export default IceCream;
