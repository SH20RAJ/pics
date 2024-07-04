import {getKindeServerSession}  from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

export default async function page() {
    let { getUser } =  getKindeServerSession()
  return (
    <div>
      {
JSON.stringify(await getUser())
      }
    </div>
  )
}
