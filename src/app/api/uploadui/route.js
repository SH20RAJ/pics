import { convertToCloudinaryUrl, uploadFileToDiscord } from "@/lib/funcs";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// POST handler for the upload route
export const POST = async (req) => {
  try {
    // Parse the request body
    const formData = await req.formData();
    const file = formData.get("file");
    let path = formData.get("path") || "./";
    let tags = formData.get("tags") ? formData.get("tags").split(",") : [];

    // get the barear token api key and from the api key get the user id
    const token = req.headers.get("Authorization");
    const apiKey = token.split(" ")[1];
    const api = await prisma.apiKey.findUnique({
      where: {
        key: apiKey,
      },
      select: {
        user: {
          select: {
            id: true,
          },
        },
      },
    });

    // if the api key is not found return an error
    if (!api) {
      return NextResponse.json({ error: "API Key not found" }, { status: 401 });
    }
    
    const userId = api.user.id;

    // check if the user quota is exceeded or not
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        quota: true,
        // select images count only
        _count: {
          select: {
            images: true,
          },
        },
      },
    });

    // if the user quota is exceeded return an error
    if (user.quota < user._count.images) {
      return NextResponse.json({ error: "User quota exceeded" }, { status: 401 });
    }


    // if the user is not found return an error
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    //if user has 

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
            id: userId,
          },
        },
      },
    });

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
