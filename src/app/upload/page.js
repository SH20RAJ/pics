"use client";

import { Upload } from "lucide-react";
import React from "react";
import UploadNavBar from "./UploadNavBar";
import UploadMain from "./UploadMain";
import UploadFooter from "./UploadFooter";

export default function UploadPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <UploadNavBar />
        <UploadMain />
        <UploadFooter />
      </div>
    </>
  );
}
