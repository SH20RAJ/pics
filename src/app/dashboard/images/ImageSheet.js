"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CopyIcon, DeleteIcon, EyeIcon, CheckIcon } from "lucide-react";
import { convertCDN, parseDate } from "@/lib/funcs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { deleteImage } from "./actions";

const actions = [
  {
    label: "View",
    icon: EyeIcon,
    onClick: (image) => window.open("/api/images/" + image.uniqueId),
  },
  {
    label: "Delete",
    icon: DeleteIcon,
    variant: "destructive",
    onClick: (image) => {
      if (window.confirm("Are you sure you want to delete this image?", image.filename)) {
        deleteImage({ image }).then((deletedImage) =>
          console.log("Image deleted", deletedImage)
        );
      }
    },
  },
];

const copyToClipboard = async (text, setCopied) => {
  await navigator.clipboard.writeText(text);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

const getImageSize = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return (blob.size / 1024).toFixed(2); // Size in KB
};

const ImageSheet = ({ image }) => {
  const [imageSize, setImageSize] = useState(0);
  const [copied, setCopied] = useState({
    url: false,
    imgTag: false,
    markdown: false,
  });

  useEffect(() => {
    getImageSize(convertCDN(image.uniqueId)).then(setImageSize);
  }, [image.uniqueId]);

  const imageUrl = convertCDN(image.uniqueId);
  const copyActions = [
    { label: "Image URL", content: imageUrl, key: "url" },
    { label: "Image Tag", content: `<img src="${imageUrl}" alt="${image.filename}" />`, key: "imgTag" },
    { label: "Markdown", content: `![alt text](${imageUrl})`, key: "markdown" },
    { label: "Original", content: `https://pics.shade.cool/api/images/${image.uniqueId}`, key: "original" },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="secondary">View</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto p-4">
        <SheetHeader>
          <SheetTitle>File Name: {image.filename}</SheetTitle>
          <SheetDescription>
            This image was uploaded on {parseDate(image.createdAt)}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex flex-col items-center overflow-y-auto">
          <img
            alt={image.filename}
            src={imageUrl}
            className="w-full h-auto max-w-md"
          />
          <div className="mt-4 w-full flex flex-col items-center">
            {actions.map(({ label, icon: Icon, onClick, variant = "" }) => (
              <Button
                key={label}
                className="w-full m-2 flex items-center justify-center"
                variant={variant}
                onClick={() => onClick(image)}
              >
                <Icon className="mr-2" />
                {label}
              </Button>
            ))}
          </div>
          <hr />
          <div className="mt-4 w-full ">
            <div className="font-bold text-center text-xl ">Image Details</div>
            <div className="mt-2 text-sm">File Name: {image.filename}</div>
            <div className="mt-2 text-sm">File Size: {imageSize} KB</div>
            <div className="mt-2 text-sm">
              Created At: {parseDate(image.createdAt)}
            </div>
          </div>
          <hr />
          {copyActions.map(({ label, content, key }) => (
            <div key={label} className="mt-4 w-full">
              <div className="text-sm font-bold">{label}</div>
              <div className="mt-2 flex items-center justify-between p-2 rounded bg-accent">
                <div className="text-sm break-all">{content}</div>
                <div
                  className={`ml-2 p-1 rounded cursor-pointer ${
                    copied[key] ? "bg-green-500 text-accent-foreground" : "bg-primary"
                  }`}
                  onClick={() => copyToClipboard(content, (state) =>
                    setCopied({ ...copied, [key]: state })
                  )}
                >
                  {copied[key] ? <CheckIcon /> : <CopyIcon />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ImageSheet;
