/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KEH2cq2Oxad
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { CopyIcon, FilePenIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

export default function UploadMain() {
  return (
      <main className="flex-1   py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-2xl font-bold">Image Gallery</h2>
              <p className="text-gray-500">Upload images for Free</p>
              <p>Login to <Link href={'/dashboard'} className=" underline ">Dashboard</Link> to Use API to upload Images and Save your Images</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Button size="sm">Upload Images</Button>
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
                    {
                      Array(9).fill(0).map((i,j)=> <ImageRow key={i}/>)
                    }
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </main>
      
  )
}




export const ImageRow = ({ image }) => {
  return (
    <TableRow>
    <TableCell>
      <img src="/placeholder.svg" alt="Image" width={100} height={100} className="rounded-md" />
    </TableCell>
    <TableCell>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value="https://example.com/image.jpg"
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
  )
}