'use client';

import { useState } from 'react';
import { uploadImageToImgur } from '@/lib/uploadImage';

export default function Page() {
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Image = reader.result.split(',')[1];
            const url = await uploadImageToImgur(base64Image);
            setImageUrl(url);
            console.log('Uploaded Image URL:', url);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <h1>Upload Image to Imgur</h1>
            <input type="file" onChange={handleFileChange} />
            {imageUrl && (
                <div>
                    <p>Image uploaded successfully: <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a></p>
                    <img src={imageUrl} alt="Uploaded Image" />
                </div>
            )}
        </div>
    );
}
