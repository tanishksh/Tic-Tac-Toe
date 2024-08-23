

import React from 'react'

export default function Squares(props) {

    return (
        <div className='square'

            onClick={props.onClick}

            style={{ border: "1px solid ", height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <h4>{props.value}</h4>


        </div>
    )
}
