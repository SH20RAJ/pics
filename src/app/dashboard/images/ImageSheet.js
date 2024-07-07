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

export default function ImageSheet({ image , setImages, images}) {
  const handleView = () => {
    console.log("Viewing image", image);
    window.open("/api/images/" + image.uniqueId);
    return;
  };

  const handleDelete = () => {
    //prompt user to confirm deletion or not
    let confirm = window.confirm("Are you sure you want to delete this image?",image.filename);
    if (confirm) {
        deleteImage({ image : image }).then((deletedImage) => {
          console.log("Image deleted", deletedImage);
          //remove the image from the state
          setImages(images.filter((img) => img.id !== deletedImage.id));
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
          </SheetHeader>{" "}
          <div className=" mt-4 ">
            <img
              alt={image.filename}
              src={
                convertCDN(image.uniqueId)
                // + "?height=20&width=20"
              }
              width={"100%"}
              height={400}
            />{" "}
            <div className="mt-4 w-full">
              <Button className=" w-full m-2" variant="">
                <EyeIcon
                  className="cursor-pointer mr-2"
                  onClick={handleView}
                />{" "}
                View
              </Button>
              <Button className=" w-full m-2" variant="destructive">
                <DeleteIcon
                  className="cursor-pointer mr-1"
                  onClick={()=>handleDelete()}
                />{"  "} Delete
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
