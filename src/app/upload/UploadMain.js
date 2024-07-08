import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { CopyIcon, FilePenIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export default function UploadMain() {
  const [images, setImages] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_PICS_SHADE_API_KEY;

  const onDrop = async (acceptedFiles) => {
    const uploadedImages = await Promise.all(
      acceptedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://pics.shade.cool/api/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`
          },
          body: formData,
        });

        const result = await response.json();
        return { file, url: result.cdn, cdn : result.cdn };
      })
    );

    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <main className="flex-1 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-2xl font-bold">Image Gallery</h2>
            <p className="text-gray-500">Upload images for Free</p>
            <p>Login to <Link href={'/dashboard'} className="underline">Dashboard</Link> to use the API to upload images and save your images</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-6 rounded-lg cursor-pointer">
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <div>
                <Input type="search" placeholder="Search images..." className="px-4 py-2 border rounded-md" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {images.map((image, index) => (
                    <ImageRow key={index} image={image} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const ImageRow = ({ image }) => {
  return (
    <TableRow>
      <TableCell>
        <img src={image.url} alt="Image" width={100} height={100} className="rounded-md" />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={image.url}
            readOnly
            className="px-2 py-1 border rounded-md flex-1"
          />
          <Button size="sm" variant="outline">
            <CopyIcon className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <FilePenIcon className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline">
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
