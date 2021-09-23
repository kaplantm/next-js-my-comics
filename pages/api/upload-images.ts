import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { paths } = req.body;

  if (!paths.length) {
    return res.status(400).json({
      error: {
        message: 'Paths  is required  and cannot be empty',
      },
    });
  }

  const uploadedImages = [
    'Batman: The Long Halloween/1/bats batman_106x66.png',
    'Batman: The Long Halloween/1/agreed_154x56.png',
    'Batman: The Long Halloween/1/thank you_112x132.png',
    'Batman: The Long Halloween/1/trick or treat halloween_184x84.png',
  ];
  try {
    // TODO: uncomment to do upload
    // await Promise.all(
    //   paths.map(async imagePath => {
    //     const pathInS3 = `${folder}/${imagePath.split('/').slice(-1)}`;

    //     const imageType = pathInS3.split('.').slice(-1);
    //     const file = await readFile(`public${imagePath}`);
    //     const objectParams = {
    //       Bucket: bucketName,
    //       Key: pathInS3,
    //       Body: file,
    //       ACL: 'public-read',
    //       CacheControl: 'max-age=31536000',
    //       ContentType: `image/${imageType}`,
    //     };
    //     await s3.putObject(objectParams).promise();
    //     uploadedImages.push(pathInS3);
    //   })
    // );

    const imageCollectionId = 1;
    // create images in comic collection
    // make additional connections (add ui options for uploading to other collections)

    const result = await prisma.imageCollection.update({
      where: {
        id: imageCollectionId,
      },
      data: {
        images: {
          create: uploadedImages.map(imageUrl => ({ imageUrl })),
        },
      },
    });

    return res.status(result ? 200 : 500).json(
      result
        ? {
            filePaths: uploadedImages.map(
              pathInS3 => `${process.env.S3_URL}/${pathInS3}`
            ),
          }
        : { error: { message: 'Something went wrong}' } }
    );
  } catch (e) {
    return res.status(500).json({
      error: {
        message: e?.message,
        meta: e?.meta,
        code: e?.code,
      },
    });
  }
}
