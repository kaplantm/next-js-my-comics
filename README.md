## To Dev:

git clone
nvm use
npm install
npm run dev

## To add content:

Add new issue or series
http://localhost/debug/new/

Edit issue
http://localhost/series/Batman Volume 1/issues/404/debug/edit/
Add issue images
http://localhost/series/Batman Volume 1/issues/404/debug/edit/images/

Edit series
http://localhost/series/Azrael Volume 1/debug/edit/
Add series images
http://localhost/series/Azrael Volume 1/debug/edit/images

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

Synopsis for "Year One"

- Two Face has hear rumors about Batman's new sidekick and is curious.
- Alfred Pennyworth worries about Dick Grayson vigilante involvement, but the butler cannot deny the positive influence the lighthearted boy has on Bruce.
- After attending a dinner party for Generalissimo Singh Manh Lee of Rheelasia, Batman and Robin meet Captain James Gordon who informs them about a string of kidnappings.
- Behind the kidnappings is actually the Mad Hatter who has been enticing teenage girls with free headsets he uses to hypnotize them. His plan is to sell the captive girls to Generalissimo Singh Manh Lee.
- Dick sees the Mad Hatter kidnap a girl from his school. Because Bruce is attending another party at night - on the yacht of the Generalissimo - Robin decides to stop the villain on his own (with a little support by Alfred).
- Dick finds out that the Mad Hatter is delivering the girls to the Generalissimo on his yacht. Robin sneaks aboard, fights through a horde of goons, rescues the girls and exposes the Mad Hatter's plot. The General uses his diplomatic immunity to get away though.
- Bruce is at first angry with Dick for going at the Mad Hatter alone, but he still is proud of his accomplishments.

Synopsis for "Book Two"

- Following the Mad Hatter's arrest, Batman and Robin defeat several more would-be supervillains, such as the Cluemaster, Firefly, Killer Moth, and Blockbuster. Robin grows more and more confident with each victory, heedless of Batman's warnings that Gotham's more elite criminals will not be so easily beaten.
- True to these warnings, Two-Face soon reemerges and kidnaps Lawrence Watkins, the judge who had permitted and presided over the appeal trial of mobster Vincent Moroni. Since this trial gave Moroni the chance to scar Dent with acid, Two-Face's twisted logic holds Watkins responsible for "murdering" Dent. Revenge on Watkins, however, is only a small part of Two-Face's goal; his main targets are none other than Batman and Robin.
- Despite Batman's precautions, the Dynamic Duo are eventually captured by Two-Face as well, and forced into a mock trial. After declaring all the defendants guilty, Two-Face places Batman and Watkins into a custom-built double gallows, and dares Robin to appeal for their lives. A desperate Robin plays along, calling for neither man to hang if Two-Face's next two coin-flips both come up clean. Both flips land in Robin's favor, and Two-Face cuts Watkins free, only to reveal a trapdoor in the gallows that allows him to drown the judge instead.
- As Robin reels over Watkins' death, Two-Face savagely beats him with a baseball bat, all while Batman is forced to watch. An enraged Batman breaks his bonds and beats Two-Face and his men unconscious, before rushing the badly-injured Robin back to the Batcave.

Synopsis for "Book Three"

- Captain James Gordon interrogates Two-Face and he learns that Robin might be dead. So Gordon tells his men to look into the hospitals in search of the dead body. But Robin is not dead yet. After some first aid by Alfred Pennyworth he is brought to Dr. Thompkins, a free medic who has the trust of Bruce Wayne. While Robin is taken care of, Batman takes off to talk to Gordon. He assures the Captain that Robin still lives, but will no longer act as Batman's partner. Of course, Dick Grayson is less enthusiastic as he learns of Bruce's decision to retire him.
- Over the following days Dick works hard on the rehabilitation of his body. As Dr. Thompkins makes some final test using the equipment of the General Hospital, Mister Freeze enters the building and raids the hospital's blood bank. Dick secretly follows him outside and picks up some clues which might lead to the hide-out of Mister Freeze. While Dick leaves a written message for Bruce, Mister Freeze tries to blackmail the city because in winter the blood reserves tend to diminish quickly.
- Dick successfully finds Mister Freeze and is also able to defeat him right before Captain Gordon arrives. Dick confirms that his days as a vigilante are over. And the letter he left at the mansion indicates that he will never come back.
- In front of a TV store, Dick watches the news that Two-Face was able to escape the police station. Suddenly, he is surrounded by some teenagers wearing black clothes. They attack him and Dick shows off his martial arts skills. A man who calls himself Shrike comes out of the shadows and invites Dick to become one of his pupils.

Synopsis for "Book Four"

- Dick's new "mentor" turns out to be none other than Shrike, a member of the League of Assassins responsible for contracts in Gotham City. Under the name "Freddie Loyd", Dick continues to train alongside Shrike's other teenage mercenaries; eventually, Shrike reveals their first genuine job will be the assassination of Two-Face.
- Shrike's "pupils" successfully find and invade Two-Face's latest hideout, but are stymied by Two-Face himself, who takes one of them hostage. Dick is once again dared to flip for an innocent life, but refuses; this causes Two-Face to fly into a rage, allowing Dick to knock him off-balance and steal his gun. Unable to stomach cold-blooded murder, Dick spares Two-Face and flees, leaving his would-be victim vowing revenge.
- Dick briefly returns to the Batcave and reports his findings in another letter, causing Batman - along with Two-Face - to scour the city for Shrike. Eventually, all parties converge inside Shrike's hideout, sparking a three-way battle that kills Shrike and gravely injures Batman. Upon finding himself outnumbered, Two-Face flees, while Batman reconciles with Dick.
- In following days, Dick returns to Wayne Manor and is allowed to continue as Robin, on the condition that he never again question Batman's orders. Dick agrees, and shortly after, the reinstated Robin finally brings Two-Face to justice.
