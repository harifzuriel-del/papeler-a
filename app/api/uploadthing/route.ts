import { createUploadthing, type FileRouter } from "uploadthing/next";
import { createRouteHandler } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  fileUploader: f({
    pdf: { maxFileSize: "10MB" },
    image: { maxFileSize: "5MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("Archivo subido:", file.url);
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;

export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});