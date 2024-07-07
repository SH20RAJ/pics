"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { DeleteIcon, EyeIcon } from "lucide-react";

import { convertCDN, parseDate } from "@/lib/funcs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { deleteImage } from "./actions";

export default function ImageSheet({ image }) {
  const handleView = () => {
    console.log("Viewing image", image);
    window.open("/api/images/" + image.uniqueId);
    return;
  };

  const handleDelete = () => {
    let confirm = window.confirm("Are you sure you want to delete this image?", image.filename);
    if (confirm) {
      deleteImage({ image }).then((deletedImage) => {
        console.log("Image deleted", deletedImage);
      });
    }
    return;
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="secondary">View</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>File Name: {image.filename}</SheetTitle>
            <SheetDescription>
              This image was uploaded on {parseDate(image.createdAt)}
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <img
              alt={image.filename}
              src={convertCDN(image.uniqueId)}
              width={"100%"}
              height={400}
            />
            <div className="mt-4 w-full">
              <Button className="w-full m-2" variant="" onClick={handleView}>
                <EyeIcon className="mr-2" />
                View
              </Button>
              <Button className="w-full m-2" variant="destructive" onClick={handleDelete}>
                <DeleteIcon className="mr-1" />
                Delete
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
