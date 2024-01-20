import React from 'react'

export const Button = (props) => {
  return (
    <div>
       <button className='button' onClick={props.handleButton}>{props.label}</button>
    </div>
  )
}
