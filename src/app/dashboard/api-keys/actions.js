'use server'
import { auth } from '@/auth'
import prisma from '@/prisma'





export const generateAPIKey = async (keyName, description) => {
    console.log(keyName, description); // Uncomment for debugging
    // Ensure keyName is correct and not accidentally set to "name" or undefined
    
    const session = await auth(); // Assuming auth() function is correctly implemented
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    try {
        const apikey = await prisma.apiKey.create({
            data: {
                name: keyName, // Ensure keyName is correctly passed and not undefined
                description,
                key,
                user: {
                    connect: {
                        id: session.user.userId,
                    },
                },
            },
        });

        return apikey;
    } catch (error) {
        console.error("Error creating API key:", error);
        throw error; // Handle or propagate the error as needed
    }
};


export const getAPIKeys = async () => {
    const session = await auth(); // Assuming auth() function is correctly implemented

    try {
        const apikeys = await prisma.apiKey.findMany({
            where: {
                userId: session.user.userId,
            },
        });

        return apikeys;
    } catch (error) {
        console.error("Error fetching API keys:", error);
        throw error; // Handle or propagate the error as needed
    }
}