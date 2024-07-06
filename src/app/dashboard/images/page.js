"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteIcon, EyeIcon } from "lucide-react";
import { getImages } from "./actions";
import { useEffect, useState } from "react";
import { convertToImageCDN, parseDate } from "@/lib/funcs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export function ImageTable() {
  const [images, setImages] = useState([]);
  const limit = 20;
  useEffect(() => {
    getImages({ limit, skip: 0 }).then((images) => {
      setImages(images);
    });
  }, []);

  const handleLoadMore = () => {
    getImages({ limit, skip: images.length }).then((newImages) => {
      setImages([...images, ...newImages]);
    });
  }


  return (
    <>
    <Table>
      <TableCaption>List of User Uploaded Images</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Path</TableCell>
          <TableCell>Modified</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {images.map((image) => (
          <TableRow key={image.id}>
            <TableCell className="flex gap-2">
              {" "}
              <img
                alt={(image.filename)}
                src={convertToImageCDN({url:"https://pics.shade.cool"+"/api/images/" + image.uniqueId+""})+"?height=20&width=20"}
                width={23}
                height={20}
                />{" "}
              {image.filename}
            </TableCell>
            <TableCell className=" underline ">
              <Link href={"/api/images/" + image.uniqueId}>{image.uniqueId}</Link>
            </TableCell>
            <TableCell>{image.path}</TableCell>
            <TableCell>{parseDate(image.createdAt)}</TableCell>
            <TableCell className="flex gap-2">
              <EyeIcon className="cursor-pointer mr-2" />
              <DeleteIcon className="cursor-pointer" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className=" ">
        <TableRow  className="">
          <TableCell colSpan={5}>Total Images</TableCell>
          <TableCell className="text-right">{images.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <div>
      <Button onClick={() => handleLoadMore()}>Load More</Button>
    </div>
        </>

  );
}

export default function ImagesPage() {
  return (
    <div>
      <ImageTable />
    </div>
  );
}
