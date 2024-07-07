'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Label } from '@radix-ui/react-context-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');
  const [tags, setTags] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    formData.append('tags', tags);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer 9qhvnnzywbd6ddym4gvwn4`, // replace with actual API key
        },
      });

      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="file">File:</Label>
          <Input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <Label htmlFor="path">Path:</Label>
          <Input
            type="text"
            id="path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="tags">Tags (comma-separated):</Label>
          <Input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <Button type="submit">Upload</Button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && (
        <div>
          <h2>Upload Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
