'use server'
import { auth } from "@/auth";
import prisma from "@/prisma";





export const getImageCount = async () => {
    const session = await auth();
    try {
        const count = await prisma.image.count({
            where: {
                userId: session.user.userId,
            },
        });
        return count;
    } catch (error) {
        console.error("Error fetching image count:", error);
        throw error;
    }
}


export const getAPIKeysCount = async () => {
    const session = await auth();
    try {
        const count = await prisma.apiKey.count({
            where: {
                userId: session.user.userId,
            },
        });
        return count;
    } catch (error) {
        console.error("Error fetching API keys count:", error);
        throw error;
    }
}

export const getUser = async () => {
    const session = await auth();
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: session.user.userId,
            },
            //include everything except the password
            select: {
                id: true,
                email: true,
                name: true,
                username: true,
                createdAt: true,
                updatedAt: true,
                quota: true,
                //select the count of images and api keys
                _count: {
                    select: {
                        images: true,
                        apiKeys: true,
                    },
                },
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}
