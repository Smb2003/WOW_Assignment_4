import React from 'react'

import {Link} from "react-router-dom";
import { Heading } from './Heading'
import { Input } from './Input'
import { SignIn } from '../SignIn/SignIn'
export const SignUp = ({data,setData}) => {
  return (
    <div className='SignUp'>
        <Heading heading="Sign Up"/>
        <Input  data={data} setData={setData}/>
        <h5>If you have already SignUp, then { 
      <Link to="/SignIn" className='text-md font-medium hover:text-red-600'>CLICK HERE</Link>
   }</h5>
    </div>
  )
}
