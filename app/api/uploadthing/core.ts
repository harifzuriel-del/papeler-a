import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Imagen:", file.ufsUrl);
    }),

  fileUploader: f({ blob: { maxFileSize: "8MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Archivo:", file.ufsUrl);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;