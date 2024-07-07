'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Label } from '@radix-ui/react-context-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UploadUI } from '@/components/upload-ui';
import { ToastAction } from '@/components/ui/toast';
import Link from 'next/link';
import { set } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

const UploadForm = () => {
    const { toast } = useToast();
  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');
  const [tags, setTags] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPath("./images/"+e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    
    if (!file) {
      setError('Please select a file');
      return;
    }
    

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    formData.append('tags', tags);

    try {
      const response = await axios.post('/api/upload-ui', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        //   'Authorization': `Bearer 9qhvnnzywbd6ddym4gvwn4`, // replace with actual API key
        },
      });

      setResult(response.data);
      console.log(result, response.data);
    //   toast({
    //     title: "Image Uploaded",
    //     description: `Your image has been uploaded successfully`,
    //     action: (
    //       <>
    //       <ToastAction altText="Close">Close</ToastAction>
    //       <ToastAction altText="View Image"><Link href={"/dashboard/image-details/"+result.uniqueId}>View Image</Link></ToastAction>
    //       </>
    //     )
    //   })
      setUploading(false);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      alert(err.response?.data?.error);
      setResult(null);
    }
  };

  return (
    <>
    <UploadUI 
        setFile={setFile}
        setPath={setPath}
        setTags={setTags}
        setResult={setResult}
        setError={setError}
        file={file}
        path={path}
        tags={tags}
        result={result}
        error={error}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        uploading={uploading}
        
    />
    </>
  );
};

export default UploadForm;
