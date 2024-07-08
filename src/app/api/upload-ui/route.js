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
    const filename = file.name;
    const imageUrl = convertToCloudinaryUrl(await uploadFileToDiscord(file, `Uploaded with tags: ${tags.join(", ")}`));

    console.log(imageUrl, path, tags);
    tags = tags.join(",");
    // Create response data
    const data = await prisma.image.create({
      data: {
        url: imageUrl,
        path: path,
        filename: filename,
        tagdata: tags,
        uniqueId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        user: {
          connect: {
            id: session.user.userId,
          },
        },
      },
    });

    data.url = `${"https://pics.shade.cool"}/api/images/${data.uniqueId}`;
    data.cdn = convertToImageCDN({url: data.url});
    
    // Return the response
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
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
