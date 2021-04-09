import { runMiddleware } from "@lib/utils/api-middleware";
import { ensureDirectoryExistence } from "@lib/utils/static-comics/utils";
import multer from "multer";
import { optimize } from "../../scripts/image-optimization/utils";

const inputOutputDir = "public/image-optimization/input-output";
export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.multerDestination);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const multerInstance = multer({
  storage,
});

// TODO:
// return list of relative file locations so FE can render it
// FE button to upload images
// add aws cli
// add endpoint to upload images into target folders in s3q
// deleting files - deletes reference, not s3 file
export default async function handler(req, res) {
  try {
    const time = new Date().getTime();
    req.multerDestination = `${inputOutputDir}/${time}`;
    ensureDirectoryExistence(`${req.multerDestination}/newFile.png`);
    await runMiddleware(req, res, multerInstance.array("images", 30));

    const optimizedResult = await optimize(
      `/${req.multerDestination}`,
      parseInt(req.body?.maxDimension) || 1500,
      500000
    );
    return res.status(200).json(optimizedResult);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Failed to optimize images");
  }
}
