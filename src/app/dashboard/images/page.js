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
import useSWRInfinite from 'swr/infinite';
import { useState } from "react";
import { convertToImageCDN, parseDate } from "@/lib/funcs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageSheet from "./ImageSheet";
import { getImages } from "@/app/dashboard/images/actions";

const fetcher = async (key) => {
  const params = new URLSearchParams(key);
  const limit = parseInt(params.get('limit'));
  const skip = parseInt(params.get('skip'));
  return await getImages({ limit, skip });
};

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `limit=20&skip=${pageIndex * 20}`; // API endpoint with pagination
};

export function ImageTable() {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const images = data ? [].concat(...data) : [];

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
                <img
                  alt={image.filename}
                  src={
                    convertToImageCDN({
                      url: `https://pics.shade.cool/api/images/${image.uniqueId}`,
                    }) + "?height=20&width=20"
                  }
                  width={23}
                  height={20}
                />{" "}
                {image.filename}
              </TableCell>
              <TableCell className="underline">
                <Link href={`/api/images/${image.uniqueId}`}>
                  {image.uniqueId}
                </Link>
              </TableCell>
              <TableCell>{image.path}</TableCell>
              <TableCell>{parseDate(image.createdAt)}</TableCell>
              <TableCell className="flex gap-2">
                <ImageSheet setImages={true} images={images} image={image} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Images</TableCell>
            <TableCell className="text-right">{images.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div>
        <Button onClick={handleLoadMore}>Load More</Button>
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
