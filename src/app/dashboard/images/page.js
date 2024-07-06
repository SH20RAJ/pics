

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { DeleteIcon, EyeIcon } from "lucide-react"
  
  const images = [
    {
        id: 1,
        name: "image1.jpg",
        path : "/images/image1.jpg",
        modified: "2021-09-01",
    },
    {
        id: 2,
        name: "image2.jpg",
        path : "/images/image2.jpg",
        modified: "2021-09-01",
    },
    {
        id: 3,
        name: "image3.jpg",
        path : "/images/image3.jpg",
        modified: "2021-09-01",
    },
    {
        id: 4,
        name: "image4.jpg",
        path : "/images/image4.jpg",
        modified: "2021-09-01",
    },
    {
        id: 5,
        name: "image5.jpg",
        path : "/images/image5.jpg",
        modified: "2021-09-01",
    },
    {
        id: 6,
        name: "image6.jpg",
        path : "/images/image6.jpg",
        modified: "2021-09-01",
    },
    {
        id: 7,
        name: "image7.jpg",
        path : "/images/image7.jpg",
        modified: "2021-09-01",
    },
    {
        id: 8,
        name: "image8.jpg",
        path : "/images/image8.jpg",
        modified: "2021-09-01",
    },
    {
        id: 9,
        name: "image9.jpg",
        path : "/images/image9.jpg",
        modified: "2021-09-01",
    },
    {
        id: 10,
        name: "image10.jpg",
        path : "/images/image10.jpg",
        modified: "2021-09-01",
    }
]


  
  export function ImageTable() {
    return (
      <Table>
        <TableCaption>List of User Uploaded Images</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Path</TableCell>
            <TableCell>Modified</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
            {images.map((image) => (
                <TableRow key={image.id}>
                <TableCell>{image.name}</TableCell>
                <TableCell>{image.path}</TableCell>
                <TableCell>{image.modified}</TableCell>
                <TableCell className="flex gap-2">
                    <EyeIcon className="cursor-pointer mr-2" />
                    <DeleteIcon className="cursor-pointer" />
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Images</TableCell>
            <TableCell className="text-right">{images.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }

  
export default function ImagesPage() {
  return (
    <div>
      <ImageTable />
    </div>
  )
}
