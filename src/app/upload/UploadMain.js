import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { useToast } from '@/components/ui/use-toast';

export default function UploadMain() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadProgress, setUploadProgress] = useState({});
  const apiKey = process.env.NEXT_PUBLIC_PICS_SHADE_API_KEY;
  const { toast } = useToast();

  const onDrop = async (acceptedFiles) => {
    if (!apiKey) {
      toast({
        title: 'API Key is required',
        description: 'Please provide an API Key to upload images',
        status: 'error',
      });
      return;
    }

    // Show uploading images toast
    const uploadingToastId = toast({
      title: 'Uploading images',
      description: 'Please wait while we upload your images',
      status: 'info',
    });

    try {
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
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percentCompleted = Math.round((loaded * 100) / total);
              setUploadProgress(prevProgress => ({
                ...prevProgress,
                [file.name]: percentCompleted,
              }));
            },
          });

          const result = await response.json();
          return { file, url: result.cdn, cdn: result.cdn };
        })
      );

      setImages((prevImages) => [...prevImages, ...uploadedImages]);

      // Show success toast
      toast({
        title: 'Upload successful',
        description: 'Your images have been uploaded successfully',
        status: 'success',
      });
    } catch (error) {
      // Show error toast
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your images. Please try again.',
        status: 'error',
      });
    } finally {
      // Dismiss uploading toast
      // toast.dismiss(uploadingToastId);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const filteredImages = images.filter(image =>
    image.file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-12 rounded-lg cursor-pointer w-full">
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <div className="ml-4">
                <Input
                  type="search"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Filename</TableHead>
                    <TableHead>URL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredImages.map((image, index) => (
                    <ImageRow key={index} image={image} />
                  ))}
                </TableBody>
              </Table>
              {Object.keys(uploadProgress).length > 0 && (
                <div className="mt-4">
                  {Object.keys(uploadProgress).map((fileName) => (
                    <div key={fileName} className="mb-2">
                      <p>{fileName}</p>
                      <div className="w-full bg-gray-200 rounded-full">
                        <div
                          className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                          style={{ width: `${uploadProgress[fileName]}%` }}
                        >
                          {uploadProgress[fileName]}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const ImageRow = ({ image }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(image.url);
  };

  return (
    <TableRow>
      <TableCell>
        <img src={image.url} alt="Image" width={100} height={100} className="rounded-md" />
      </TableCell>
      <TableCell>{image.file.name}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={image.url}
            readOnly
            className="px-2 py-1 border rounded-md flex-1"
          />
          <Button size="sm" variant="outline" onClick={copyToClipboard}>
            <CopyIcon className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
