

'use server'

import { auth } from "@/auth"
import prisma from "@/prisma"


export const getImages = async ({ limit , skip }) => {
    if(!limit) limit = 10
    if(!skip) skip = 0
    const session = await auth()
    const images  = await prisma.image.findMany({
        where : {
            userId : session.user.userId
        },
        orderBy : {
            createdAt : 'desc'
        },
        //set limit to 10
        take : limit,
        skip : skip,

    })
    return images
}