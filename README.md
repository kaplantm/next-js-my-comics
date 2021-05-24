## To Dev:

git clone
nvm use
npm install
npm run dev

## To add content:

Add new issue or series
http://localhost/debug/new/

Edit issue
http://localhost/series/Batman%20Volume%201/issues/404/debug/edit/
Add issue images
http://localhost/series/Batman%20Volume%201/issues/404/debug/edit/images/

Edit series
http://localhost/series/Azrael%20Volume%201/debug/edit/
Add series images
http://localhost/series/Azrael%20Volume%201/debug/edit/images

Add category images
http://localhost/panels/ears/debug/edit/images

- to add a new category page, do it manually (create a new folder in the public/static/panels directory)
- to rename a series or change an issue number, do it manually (rename the folder in the public/static/series directory)
- to remove a image, remove the path from the images.json file. If the file is not used elsewhere and you want to remove the file from s3, do it manually using the s3 console or aws cli

## To push to production

npm run export
npm run publish (will require aws cli to be setup)

## Additional Info

Site S3: comics.tonarie.com
Images S3: comicassets.tonarie.com
Live site: http://comics.tonarie.com/

// Notes to self

All images should have this metadata: `Cache-Control: max-age=31536000`

#### TODO:

- some images are in the panels section and will need to also be put in their issue section when it is added:

in ears, to add to actual comics when they are added:
shadow of the bat 48 1_354x800.jpeg
batman_529_587x502.jpeg
batman_1_529_2_510x756.jpeg
batman_1_529_3_594x1008
batman_1_529_4_175x467.jpeg
Batman Legends of the Dark Knight 119 1_IMG_0451_352x800.jpeg

- remove command line versions of image optimization and move utils into src

#### Miscellaneous

copy whole s3 locally
aws s3 sync s3://comicassets.tonarie.com .

To revert S3:
https://github.com/angeloc/s3-pit-restore
Copy locally, then empty bucket in S3, then upload all (make sure to public and cache control metadata)
s3-pit-restore -b comicassets.tonarie.com -d restored-bucket-local -t "04-09-2021 20:30:50 -5"

How we incorporate next and cloudfront (2018-04-21)
https://gist.github.com/rbalicki2/30e8ee5fb5bc2018923a06c5ea5e3ea5
https://stackoverflow.com/a/33087418 How do you set a default root object for subdirectories for a statically hosted website on Cloudfront? (index.html in subdirectory)
