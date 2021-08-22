import React from 'react'
import { Card } from './card'

export const Layout = (props) => {
  return <div className='container w-100 lg:w-4/5 mx-auto flex flex-col'>
    <Card {...props}/>
  </div>
}