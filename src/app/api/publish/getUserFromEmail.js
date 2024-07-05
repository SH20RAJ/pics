



export const getUserFromEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email },
    });
    return user;
    }