"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CopyIcon, DeleteIcon, EyeIcon } from "lucide-react";

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
    let confirm = window.confirm(
      "Are you sure you want to delete this image?",
      image.filename
    );
    if (confirm) {
      deleteImage({ image }).then((deletedImage) => {
        console.log("Image deleted", deletedImage);
      });
    }
    return;
  };

  return (
    <>
      <Sheet className=" overflow-y-auto">
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
              <Button
                className="w-full m-2"
                variant="destructive"
                onClick={handleDelete}
              >
                <DeleteIcon className="mr-1" />
                Delete
              </Button>
            </div>
            <div className="mt-4">
              <div className="text-sm font-bold">Image Details</div>
              <div className="mt-4">
                <div className="text-sm">File Name: {image.filename}</div>
                <div className="text-sm">File Type: {image.mimetype}</div>
                <div className="text-sm">File Size: {image.size} bytes</div>
              </div>
            </div>
            <div className=" mt-4">
              {/* copy imaege url and  image tag */}
              <div className="text-sm font-bold">Image URL</div>
              <span className="flex mt-4 overflow-x-auto marker:first-letter:bg-blue-100 no-scrollbar">
                <div className="text-sm">{convertCDN(image.uniqueId)}</div>
                {/* Copy URL Button */}
                <div
                  className="mr-1 right-0 fixed bg-primary text-white p-1 rounded cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(convertCDN(image.uniqueId));
                  }}
                >
                  <CopyIcon />
                </div>
              </span>
            </div>
            {/* copy image tag with url and markdown mormat */}
            <div className=" mt-4">
              <div className="text-sm font-bold">Image Tag</div>
              <span className="flex mt-4 overflow-x-auto marker:first-letter:bg-blue-100 no-scrollbar">
                <div className="text-sm">
                  {'<img src="'+convertCDN(image.uniqueId)+'" alt="'+image.filename+'" />'}
                </div>
                <div
                  className="mr-1 right-0 fixed bg-primary text-white p-1 rounded cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `<img src="${convertCDN(image.uniqueId)}" alt="${image.filename}" />`
                    );
                  }}
                >
                  <CopyIcon />
                </div>
              </span>
              </div>
              {/* mardown format  */}
              <div className=" mt-4">
              <div className="text-sm font-bold">Markdown</div>
              <span className="flex mt-4 overflow-x-auto marker:first-letter:bg-blue-100 no-scrollbar">
                <div className="text-sm">
                  {'![alt text]('+convertCDN(image.uniqueId)+')'}
                </div>
                <div
                  className="mr-1 right-0 fixed bg-primary text-white p-1 rounded cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `![alt text](${convertCDN(image.uniqueId)})`
                    );
                  }}
                >
                  <CopyIcon />
                </div>
              </span>
              </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
