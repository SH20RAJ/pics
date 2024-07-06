import { auth } from "@/auth";
import { convertToCloudinaryUrl, uploadFileToDiscord } from "@/lib/funcs";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// POST handler for the upload route
export const POST = async (req) => {
  const session = await auth();
  try {
    // Parse the request body
    const formData = await req.formData();
    const file = formData.get("file");
    let path = formData.get("path") || "./";
    let tags = formData.get("tags") ? formData.get("tags").split(",") : [];

    // Upload the file to Discord
    const imageUrl = convertToCloudinaryUrl(await uploadFileToDiscord(file, `Uploaded with tags: ${tags.join(", ")}`));

    console.log(imageUrl, path, tags);
    tags = tags.join(",");

    // Create response data
    let data = await prisma.image.create({
      data: {
        url: imageUrl,
        path: path,
        user: {
          connect: {
            id: session.user.userId,
          },
        },
      },
    });

    // Return the response
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// GET handler for the upload route
export const GET = async () => {
  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World! See Docs at https://docs.pics.shade.cool/",
    },
  });
};
