import { Join } from '@/components/join'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <div>
            <Link href={"/"} className=''>
            <Button variant="ghost" className=" m-4">
                <ChevronLeft/>
                Go back
            </Button>
            </Link>
        </div>
      <Join/>
    </div>
  )
}
