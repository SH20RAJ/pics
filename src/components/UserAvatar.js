'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';

export default function UserAvatar() {
let session = useSession();
let user = session?.data?.user;
  return (
    <>
      <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Image
                  src={user?.image || "/placeholder.svg"}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/dashboard/settings"}><DropdownMenuItem>Settings</DropdownMenuItem></Link>
              <Link href={"/support"}><DropdownMenuItem>Support</DropdownMenuItem></Link>
              <DropdownMenuSeparator />
              <Link href={"/logout"}><DropdownMenuItem>Logout</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
    </>
  )
}
