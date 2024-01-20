import React from 'react'

export const InputFields = (props) => {
  return (
    <div className='p-6'>
        <input
        className='p-3 lg:w-full w-full h-full rounded-lg text-lg border'
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e)=>{props.handleChange(e.target.value,props.id)}}
        required
        />
    </div>
  )
}
