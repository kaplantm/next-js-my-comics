import AWS from "aws-sdk";
import { promises } from "fs";
import { exec } from "child_process";
const { readFile, writeFile } = promises;

AWS.config.credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

const bucketName = process.env.S3_URL.split("https://s3.amazonaws.com/")[1];

const s3 = new AWS.S3({ apiVersion: "latest" });

export default async function handler(req, res) {
  const { paths, folder, jsonPath } = req.body;
  if (!paths || !folder || !jsonPath) {
    return res
      .status(400)
      .json("Missing required param. Required params: paths, folder, jsonPath");
  }
  if (!paths.length) {
    return res.status(400).json("Paths array cannot be empty");
  }

  const uploadedImages = [];
  try {
    await Promise.all(
      paths.map(async (imagePath) => {
        const pathInS3 = `${folder}/${imagePath.split("/").slice(-1)}`;
        const file = await readFile(`public${imagePath}`);
        const objectParams = {
          Bucket: bucketName,
          Key: pathInS3,
          Body: file,
          ACL: "public-read",
          CacheControl: "max-age=31536000",
        };
        await s3.putObject(objectParams).promise();
        uploadedImages.push(pathInS3);
      })
    );

    const imagesJsonFilePath = `public${jsonPath}`;

    let imagesArrayFileData = [];
    try {
      imagesArrayFileData = JSON.parse(
        await readFile(imagesJsonFilePath, "utf8")
      );
    } catch (e) {
      imagesArrayFileData = [];
    }
    await writeFile(
      imagesJsonFilePath,
      JSON.stringify([...imagesArrayFileData, ...uploadedImages])
    );
    exec(`npm run prettier "${imagesJsonFilePath}"`, () => {});

    return res.status(200).json({
      filePaths: uploadedImages.map(
        (pathInS3) => `${process.env.S3_URL}/${pathInS3}`
      ),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Failed to optimize images");
  }
}
