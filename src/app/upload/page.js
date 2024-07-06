'use client'
import React, { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');
  const [tags, setTags] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    formData.append('tags', tags);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setResult(`File uploaded successfully! URL: ${result.url}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
        <label htmlFor="file">Choose file:</label>
        <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} required />
        <label htmlFor="path">Path:</label>
        <input type="text" id="path" name="path" placeholder="folder1/folder2" value={path} onChange={(e) => setPath(e.target.value)} required />
        <label htmlFor="tags">Tags (comma separated):</label>
        <input type="text" id="tags" name="tags" placeholder="tag1, tag2" value={tags} onChange={(e) => setTags(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default UploadImage;
