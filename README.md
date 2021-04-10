// TODO
fix images by series for all issues (issues missing covers)

missing robin series cover
remove duplicate images (.e.g in panels and elsewhere)

azreal- done
one shots - done
catwoman - done
robin - done
nightwing - done
batman chronicles - done
legends - done
shadow - done
detective comics - done
batman - done

funny
ear
reacts

<!-- TODO: dev and deployment instructions -->

Cache-Control: max-age=31536000

some images are in the panels section and will need to also be put in their issue section when it is added

in ears, to add to actual comics when they are added:
shadow of the bat 48 1_354x800.jpeg
batman_529_587x502.jpeg
batman_1_529_2_510x756.jpeg
batman_1_529_3_594x1008
batman_1_529_4_175x467.jpeg
Batman Legends of the Dark Knight 119 1_IMG_0451_352x800.jpeg

copy whole s3 locally
aws s3 sync s3://comicassets.tonarie.com .

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

To revert S3:
https://github.com/angeloc/s3-pit-restore
Copy locally, then empty bucket in S3, then upload all (make sure to public and cache control metadata)
s3-pit-restore -b comicassets.tonarie.com -d restored-bucket-local -t "04-09-2021 20:30:50 -5"
