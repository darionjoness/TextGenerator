import React from 'react'

const Button = ({ onClick }) => {
  return (
    <div>
        <button onClick={onClick} className='btn'>Generate Text</button>
    </div>
  )
}

export default Button