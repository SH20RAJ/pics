/**
 * @see https://v0.dev/t/HRa5j3xGK2J
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export function UploadUI({setFile, uploading, setPath, setTags, setResult, setError, file, path, tags, result, error, handleFileChange, handleSubmit}) {
  return (
    <div className="flex   flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <div className="grid gap-4">
          <label htmlFor="upload">
            <div className="flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-muted transition-colors hover:border-primary">
              <div className="space-y-2 text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h2 className="text-2xl font-bold">
                  Drag and drop your image here
                </h2>
                <p className="text-muted-foreground">
                  or <span className="font-medium">browse</span> to upload
                </p>
              </div>
            </div>
          </label>
          <Input type="file" id="upload" 

          onChange={handleFileChange}
          className="sr-only" />
          <div className="grid gap-2">
            <Label htmlFor="path">Upload Path</Label>
            <Input id="path" type="text" placeholder="/images/my-image.jpg" value={path} onChange={(e)=>setPath(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags</Label>
            <Textarea
              id="tags"
              placeholder="Enter tags separated by commas"
              className="min-h-[100px]"
              value={tags}
              onChange={(e) => setTags(e.target.value)}

            />
          </div>
        </div>
        <Button disabled={!file } className="w-full" onClick={handleSubmit}>Upload</Button>
      </div>
      {/* for uploading more use api keys upload dynamically for your website image hosting see docs */}
      <p className=" text-white opacity-30 mt-4 hover:opacity-100 cursor-pointer ">

        <a href="/docs" className="text-blue-500">Learn more</a> about uploading images efficiently with API keys

      </p>
    </div>
  );
}
