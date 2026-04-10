"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface UploaderProps {
  onUpload: (url: string) => void;
}

export default function Uploader({ onUpload }: UploaderProps) {
  return (
    <div className="text-center">
      <UploadButton<OurFileRouter, "fileUploader">
        endpoint="fileUploader"
        onClientUploadComplete={(res) => {
          const url = res?.[0]?.ufsUrl || res?.[0]?.url;

          if (url) {
            onUpload(url);
            alert("Archivo subido 🚀");
          }
        }}
        onUploadError={(error) => {
          alert(error.message);
        }}
      />
    </div>
  );
}