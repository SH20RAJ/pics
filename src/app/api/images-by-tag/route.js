import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// GET handler to fetch images by tags
export const GET = async (req) => {
  const session = await auth();
  const { searchParams } = new URL(req.url);
  const tags = searchParams.get("tags") ? searchParams.get("tags").split(",") : [];

  try {
    // Find all images associated with the given tags for the authenticated user
    const images = await prisma.image.findMany({
      where: {
        userId: session.user.userId,
        tags: {
          some: {
            tag: {
              name: {
                in: tags,
              },
            },
          },
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Return the images in the response
    return NextResponse.json(images);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
