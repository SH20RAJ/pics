import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
    redirect('https://docs.pics.shade.cool/wordpress-plugin');
  return (
    <div>
      Redirecting to docs...
    </div>
  )
}
