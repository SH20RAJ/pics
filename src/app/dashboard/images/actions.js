'use server';
import { auth } from "@/auth";
import prisma from "@/prisma";

export const getImages = async ({ limit = 10, skip = 0 }) => {
  const session = await auth();

  if (!session || !session.user || !session.user.userId) {
    throw new Error("User not authenticated");
  }

  const images = await prisma.image.findMany({
    where: {
      userId: session.user.userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
    skip: skip,
  });

  return images;
};

export const deleteImage = async ({ image }) => {
  const session = await auth();
  const deletedImage = await prisma.image.delete({
    where: {
      id: image.id,
      userId: session.user.userId,
    },
  });
  return deletedImage;
};
