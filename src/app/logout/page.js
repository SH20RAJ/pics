'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <Link href='/dashboard'>
    <Button variant="ghost" className=" m-4 mt-4" >
      {"<"}  Dashboard
      </Button>
    </Link>
    <div className=' h-screen flex justify-center items-center self-center'>
      <Button variant="ghost" onClick={()=>signOut()}>
        Logout
      </Button>
    </div>
    </>
  )
}
