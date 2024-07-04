'use server';

export async function uploadImageToImgur(imageData) {
    const clientId = '6db47bd7029562d';
    const url = 'https://api.imgur.com/3/image';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Client-ID ${clientId}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: imageData,
                type: 'base64'
            }),
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Image uploaded successfully:', result.data.link);
            return result.data.link;
        } else {
            console.error('Error uploading image:', result);
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
