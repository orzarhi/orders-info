import React from 'react'

const ButtonInfo = ({ title, sum, icon, style }) => {
    return (
        <div className='square-info' style={{ backgroundColor: style }} >
            <h1>{icon}</h1>
            <h4>{sum}</h4>
            <span>{title}</span>
        </div>
    )
}

export default ButtonInfo