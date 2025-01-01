import { convertToCloudinaryUrl, convertToImageCDN, uploadFileToDiscord } from "@/lib/funcs";
import { ImageUpload } from "@/lib/getImageURL";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// OPTIONS handler for the upload route
export const OPTIONS = () => {
  return NextResponse.json({}, { headers: corsHeaders });
};

// POST handler for the upload route
export const POST = async (req) => {
  const url = new URL(req.url);

  try {
    // Parse the request body
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "File not provided" }, { status: 400, headers: corsHeaders });
    }

    let path = formData.get("path") || "./";
    let tags = formData.get("tags") ? formData.get("tags").split(",") : [];

    // Extract the bearer token
    const token = req.headers.get("Authorization");
    if (!token) {
      return NextResponse.json({ error: "Authorization header missing" }, { status: 401, headers: corsHeaders });
    }

    const apiKey = token.split(" ")[1];
    if (!apiKey) {
      return NextResponse.json({ error: "Bearer token malformed" }, { status: 401, headers: corsHeaders });
    }

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
      return NextResponse.json({ error: "API Key not found" }, { status: 401, headers: corsHeaders });
    }

    const userId = api.user.id;

    // check if the user quota is exceeded or not
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        quota: true,
        _count: {
          select: {
            images: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401, headers: corsHeaders });
    }

    // if the user quota is exceeded return an error
    if (user.quota <= user._count.images) {
      return NextResponse.json({ error: "User quota exceeded" }, { status: 401, headers: corsHeaders });
    }

    // Upload the file to Discord
    const filename = file.name;
    const imageUrl = await ImageUpload(formData);

    // Create response data
    let data = await prisma.image.create({
      data: {
        url: imageUrl,
        path: path,
        filename: filename,
        tagdata: tags.join(","),
        uniqueId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    data.url = `${"https://pics.shade.cool"}/api/images/${data.uniqueId}`;
    data.cdn = convertToImageCDN({url: data.url});

    // Return the response
    return NextResponse.json(data, { headers: corsHeaders });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
};

// GET handler for the upload route
export const GET = async () => {
  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World! See Docs at https://docs.pics.shade.cool/",
    },
  }, { headers: corsHeaders });
};
