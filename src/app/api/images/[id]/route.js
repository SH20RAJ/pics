import { NextResponse } from 'next/server';
import prisma from '@/prisma'; // Adjust the import according to your project structure

async function getImageData(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error('Error fetching image data:', error);
    throw error;
  }
}

export async function GET(req, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Image ID not provided' }, { status: 400 });
  }

  try {
    const image = await prisma.image.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const imageData = await getImageData(image.url);
    const mimeType = image.mimeType;

    return new NextResponse(imageData, {
      headers: {
        'Content-Type': mimeType,
      },
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
