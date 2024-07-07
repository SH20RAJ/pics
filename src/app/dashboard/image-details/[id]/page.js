import { convertCDN } from '@/lib/funcs';
import React from 'react'

export default function page({params}) {
  const {id} = params;


  
  return (
    <div>
      <img src={convertCDN(id)} alt="image" />
    </div>
  )
}
