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

- Falcone and Maroni are rival crime bosses. Falcone’s thugs beat up DA Harvey Dent. Dent, bats and Gordon make a pact to end Falcones reign.
- Johnny Viti (Falcone’s nephew) is killed on Halloween. A jack o lantern is left behind. Tipped off by Cats, Bats and Dent set fire to the Falcones money stash.
- Falcone hires "The Irish" gang for revenge on Dent. Bomb his house, Dent and his wife live.
- The holiday killings continue for months. The killer is dubbed "Holiday" and believed to be a Falcone rival.
- On New Year's Eve, Batman stops the Joker from killing everyone in Gotham Square, as the Joker, as the Joker say that there is not enough room for two homicidal maniacs.
- Dent's assistant Vernon Fields finds evidence linking Falcone to Wayne. BW dad was a doctor, saved Falcone. Case dismissed.
- Falcone's son Alberto is killed by Holiday on New Year's.
- Holiday stars killing Maronis, starts gang war.  Falcone turns to Riddler and Poison Ivy for help. Poison ensnares Bruce Wayne on Valentine's Day, coercing him into laundering money for Falcone. Cats figures out what happened and frees him.
- Sal Maroni offers to testify against Falcone after his father was killed on Father's Day. During the trial, he throws a vial of acid, given to him by Vernon (paid off), at Dent, disfiguring half of Dent's face. Sal was convince Dent involved with the death of his father and/pr didn’t pursue holiday since victims were gang members. Dent is rushed to a hospital, but stabs his surgeon and escapes to the sewers.
- Gordon thinks Dent may be Holiday, but Bats doesn’t believe it.
- Bats questions Julian Gregory Day, the Calendar Man. Day suggests that, since it is Labor Day, Holiday will try to kill Maroni. They stage a setup to catch him. Holiday is then unmasked as Alberto Falcone. He confesses to all the holiday murders (too piss off his dad i guess?)
- On Halloween, Two-Face releases Arkham based on a coin flip, and kills both Falcone and Vernon despite Bats attempts to stop him.
- His revenge complete, Two-Face turns himself in, he is sent to Arkham. He also claims there were two Holidays.
- On Christmas Eve, Gilda is packing boxes to move away from Gotham as she thinks about how she started the Holiday killings to try to end Falcone's hold on Gotham and reduce her husband's workload. She believes Dent took up the killings on New Year’s Eve and that Alberto is lying to the police with his confession. Knowing that Dent is not really insane and can be cured, Gilda states she still believes in Harvey Dent.

Batman: The Long Halloween #1

- Falcone and Maroni are rival crime bosses. Falcone’s thugs beat up DA Harvey Dent, who was snooping around trying to catch Falcone.
- Dent, Batman and Gordon make a pact to end Falcones reign (withou breaking the law themselves).
- Johnny Viti kills Richard Daniel (banker who bent to Bruce's insistence to keep Falcone's dirty money out of the bank).
- Johnny Viti (Falcone’s nephew) is killed on Halloween. A jack o lantern is left behind.
- Tipped off by Catwoman, Batam and Dent set fire to the Falcones money stash.
- On Halloween night a package arrives at the Dent's home. Its a bomb, and the home is blown to pieces.

Batman: The Long Halloween #2

- It is Thanksgiving. GCPD in interrogates Mickey Sullivan (from "The Irish" gane) about the bombing at Dent's place, but he won't talk about who hired him. However, he tells them that Harvey Dent might be the man who murdered Johnny Viti.
- Gordon sends Micky back to his cell. On the way there, the lights go down and when they come back, something changed in Mickey.
- Elsewhere, Carla Viti demands action for the murder of her son Johnny Viti. Carmine Falcone say that he has already taken care of it.
- Mickey tries to get his accomplices to just give up who hired then rather than give their rehearsed confessions, but they refuse. The gang confesses to the bombing without revealing who hired them.
- Later, Mickey is back in Gordon's office but this time, he pulls off his face and reveals that he is Harvey Dent in disguise. It was all planned between him, Gordon and Batman, in order to make the crew incriminate Falcone, but the plan failed.
- On Thanksgiving night, Harvey Dent spends the night at the hospital near his wife's bed. James Gordon arrives home late and misses Thanksgiving dinner. Batman brings dinner to Solomon Grundy.
- Meanwhile, in The Astoria Towers Hotel, Mickey and his gang (out on bail) are having dinner and celebrating in the name of "The Roman".
- Moments later, someone breaks into the room where Mickey and his gang are eating and shoots them all with a similar gun as the one used to kill Johnny Viti. The murderer leaves the gun and a cornucopia in the crime scene.

Batman: The Long Halloween #3

- It is Christmas and The Joker is on the loose. As he is terrorizing a family, he see a newspaper headline about the serial killer now labeled as "Holiday" and feels rage.
- In Arkham Asylum, James Gordon and Batman talk to Calendar Man (Julian Day) about the Holiday killer. Day doesn't seem very helpful, he says the killer is a woman but at the same time a man?
- Gordon notes theres more and stranger criminals now that Batman is around.
- Batman leaves to deal with the Joker.
- At Sal Maroni's restaurant, Maroni is having dinner when one of his henchmen suddenly dies of Joker venom. Joker appears and points a gun at Maroni. Joker asks him about the Holiday killer and Maroni say he doesn't know anything. Joker leaves.
- Batman arrives at the scene. Batman asks Maroni what happened. Maroni tells him. Maroni also points out that the city is filled with lunatics since Batman appeared.
- Elsewhere, Harvey and Gilda Dent arrive at their new house, but the Joker is already there. Joker warns Harvey that if he finds out that the rumors about him being the holiday killer are true, he won't be as forgiving the next. Joker leaves.
- Later, at Falcone's penthouse, Carmine Falcone is awakened by The Joker. Joker tells Falcone to find the holiday killer, or he'll Gotham until he finds out who is it. Joker Leaves.
- Someone shoots Milos Grapa, Falcone's personal bodyguard. The killer leaves the gun and a snow globe in the crime scene.
- Batman arrives. He sees the gun, snow globe and playing cards, and promises to capture the Joker.

Batman: The Long Halloween #4

- On New Year's Eve, Batman stops the Joker from killing everyone in Gotham Square, as the Joker says that there is not enough room for two homicidal maniacs.
- Harvey is working late on the Holiday case at his office. A new employee, Vernon Wells, gives him new information about a new person involved in Falcone's business: Bruce Wayne.
- At the Gotham Harbor, Carmine Falcone is having a New Year's Eve partyh. He talks to Sal and Carla Maroni. After talking to Sal Maroni and his sister Carla, Carmine wants to talk to his son Alberto. Carla goes to find him.
- Carla hears a gunshot, and sees Alberto's blood in the water. On the boat, a gun and a flute of champagne are left behind.
- Harvey goes home to Gilda. She notices that Harvey's hair is wet before taking him to the living room, where James and Barbara Gordon (Wife) are waiting for him. Harvey seems upset, he and Gordon go to talk in the kitech. Harvey tells the commissioner that they need to talk about Bruce Wayne.

Batman: The Long Halloween #5

- Valentine's Day, Gordon and Dent arrive at Wayne Manor. Alfred lets them inside, but Bruce isn't home. Alfred redirects their questioning about Falcone to remind them in Valentines Day, and Bruce likely will not be in. They leave, realizing they forgot the holiday.
- At the Gotham Cemetery, Carmine Falcone leaves a rose in his son Alberto's tombstone. Batman appears, Carmine points a gun at him but Catwoman disarms him. Batman chases catwoman are she leaves, asking her why was she nearby and she says that she was just saving his life.
- Later, Bruce Wayne meets with his date Selina Kyle at the Opera.
- At Maroni's restaurant, Sal Maroni makes a deal with Vernon Wells, the man who works for Harvey Dent. Suddenly, Maroni's henchmen who were waiting are killed by the Holiday killer, and the gun and a box of chocolates a left behind.
- Maroni see what Holiday has done and he declares war on him.
- James Gordon and Harvey Dent their wives chocolates for Valentine's Day.
- Bruce arrives at Wayne Manor, still holding the rose he bought earlier at the Opera. He is in a trance, and is guided by a voice to the backyard, where Poison Ivy embraces him.

Batman: The Long Halloween #6

- Sofia Gigante, Falcone's daughter, is released from Gotham Penitentiary.
- Under Poison Ivy's control, Bruce Wayne addresses the board of the Gotham City Bank, and notifies them, contrary to how he felt beforehand, and now feels that Carmine Falcone should be allowed to invest his money with the Bank.
- Selena caches a glimpse of Poison Ivy, and realizes something is up with Bruce.
- Sofia visits her aunt Carla Viti. Sofia reveals that they plan to hit Maroni on St Patricks Day, since they believe he either knows something about the Holiday killer.
- At Wayne Manor, Catwoman frees Bruce from Ivy's spell. Poison Ivy is revealed to have slipps away.
- On St Patrick's Day, Holiday strikes again with another mass killing, leaving a statue of a leprechaun behind. As Sofia arrives to make her move on Maroni, she realises that Holiday's latest hit was indeed Maroni's safehouse. Maroni see's Sofia's car and assumes she is Holiday.
- Batman thanks Catwoman for coming to the aid of his 'friend' Bruce Wayne. He asks why she helped. She cryptically responds that he will find out soon.
- At Falcone's office, Carmine pays Poison Ivy for the help she provided with Bruce Wayne.

Batman: The Long Halloween #7

- April Fool's Day, Carmine Falcone hires The Riddler to solve the mystery of the Holiday killer. Based on the siez of the gun, Riddler suggests it might be a woman.
- Meanwhile in the Batcave, Batman investigates the evidence left at Holiday's crime scenes. He theorizes the killer could be Sal Maroni, since he benefits from the death of the Falcone empire. However, Alfred suggests that the killer might be someone who pursues justice a little too far.
- Batman analyzes the possibility that James Gordon or Harvey Dent might be the holiday killer. In the end, he comes to the conclusion that Gordon couldn't have done any of the murders, but Dent could.
- At that moment, Dent and Gordon decide they will arrest Bruce Wayne for his involvement with Falcone and his dirty money.
- Falcone is tired of The Riddler's guesses. He demands an answer. The Riddler supposes the holiday killer is Falcone himself. The answer is so ludicrous that Falcone and Sofia laugh at him. When the Riddler leaves the building, Holiday shoots his gun several times near the Riddler, leaving behind the gun and his umbrella. Riddler wonders why Holiday didn't murder him.

Batman: The Long Halloween #8

- Mother's day. Batman is question Calendar Man in Arkham Asylum about the Holiday killer when Scarecrow escapes. Batman attempts to stop him, but fails, inhaling some fear gas in the process.
- Meanwhile, James Gordon and some GCPD Officers stand outside Wayne Manor, talking to Alfred. Gordon wants to arrest Bruce for his involvement with Carmine Falcone. Alfred asks Gordon to consider Bruce's need for privacy on a date like mother's day.
- Elsewhere, Sofia Falcone interrogates a man about the origins of the weapons used by Holiday. The man gives her a name and an address in Chinatown. Then she drops him off a bridge.
- Holiday breaks in Chong's Tea House in Chinatown and murders the man only known as gunsmith. Sofia arrives too late and finds only a corpse, murder weapon, and a mothers day flower ornament.
- After the incident in Arkham, Bruce goes to Crime Alley to leave a rose where his parents died. Gordon and some other officers approach him. However, Bruce is still affected by Scarecrow's fear gas and all he sees is Joe Chill coming towards him. Bruce runs away in fear and Gordon gives the order to follow. Bruce runs to Gotham Cemetery, where Gordon and the officers find him crying at his mother's tombstone

Batman: The Long Halloween #9

- Many years ago, Vincent Falcone took his wounded son, Carmine to Wayne Manor. Dr. Thomas Wayne to saved his son's life.
- It's father's day in the present and Bruce Wayne is imprisoned for supposedly helping Carmine Falcone and his mafia business. Alfred stands in trial and Harvey Dent is the prosecutor. Harvey questions Alfred about his employer and Falcone's relation but Alfred replies that it is nonexistent.
- Sal Maroni visits his father Luigi Maroni. Luigi regrets not having eliminated Carmine Falcone when he could and advices his son to stand against his enemies. From the bushes nearby, Holiday shoots and kills Luigi Maroni. Holiday leaves the gun and a father's day present, a tie, at the scene.
- At Carmine Falcone's penthouse, Sofia Falcone gives him a present for father's day. Catwoman watches the scene from afar.
- James Gordon arrives home and receives a gift his wife and son made for him.
- Meanwhile, at the Dent's house, Gilda finds Harvey alone in the basement. Harvey went to visit his father, who gave him a gift - a lucky coin. Harvey reflects on the recent events and he believes that the justice system is controlled by chance rather than ethics and hard work. He also feels bitter towards Bruce Wayne and the high society which he represents.
- Meanwhile, in the Gotham Central Park, Carmine has recruited Scarecrow and The Mad Hatter to take care of the Gotham City Bank business.
- Back in Wayne Manor, Bruce wonders what would have happened if his father refused to help Carmine Falcone all those years ago.
- Late that night, Vernon Wells urgently calls Harvey Dent to the D.A.'s office. When he enters, Sal Maroni is there, and offers Harvey a deal in order to stop Carmine Falcone once and for all.

Batman: The Long Halloween #10

- The 4th of July. Holiday strikes again and murders the Gotham City Coroner, leaving his gun and a mini replica of the Statue of Liberty.
- Bruce Wayne is on a date with Selina Kyle at Wayne Manor. Selina is curious why Bruce doesn't leave Gotham after all that's happened to him, but he is unable to answer. They share a tender moment until the Bat-Signal is activated.
- Batman arrives at the GCPD Headquarters to meet Dent, who says he made a mistake blaming Bruce Wayne and that he has arranged a deal with Sal Maroni, who is going to confess against Carmine Falcone in the next trial. Dent say he is planning to leave the city after Falcone is arrested.
- Sal Maroni is in Gotham Jail, waiting for the trial in which he will confess against Falcone. Sofia Falcone visits him and reminds him that she never betrayed him. Sal and Sofia kiss and Sofia tells Sal that the Dent is their common enemy.
- Meanwhile, at Gordon's house, Gilda Dent tells Barbara that she is worried for Harvey, who has become obsessed with the "Roman case". Shes wants her Harvey back.
- At the Gotham Docks, Gordon and Batman examine the crime scene but find nothing. Catwoman watches from afar. They see some explosions on the skyline, and Batman goes to investigate. It was remote controlled rockets spreading Scarecrow's Fear Toxin.
- One of the rockets explodes at the front door of the Bank Deposit. Scarecrow and The Mad Hatter get inside and being stealing money. Batman arrives and beats up Scarecrow. Catwoman intervenes before the Mad Hatter can shoot Batman. Catwoman doesn't answer when asked why she was following him. Instead she asks Batman to go away with her, but he refuses; he has a job to do. Disappointed, Catwoman leaves.

Batman: The Long Halloween #11

- Gilda finds a .22 gun in the basement and she asks Harvey about it. Harvey tells her it is only evidence from the "Holiday case".
- Batman is looking for The Riddler and finds him drunk in a pub. Batman ask him about Holiday's identity but Riddler doesn't know.
- Its day of Sal Maroni's trial, in which he told Dent he is going to confess against the Falcones. Sal Maroni is released from his cell and brought to into the Courthouse. On his way there, Vernon Wells, the corrupt assistant of Dent, gives Maroni a bottle of Antacid supposedly sent by Dent himself. Maroni doubts at first, but in the end he accepts the bottle, because of his "ulcer".
- Dent calls Maroni to the stand and questions him about his connections with Carmine Falcone. Maroni starts coughing and reaches for the antacid bottle in his pocket. Bruce, disguised among the courthouse crowd, realizes something is wrong.
- At the same time, Falcone is celebrating his birthday in his penthouse with all his family. As Carmine Falcone blows his birthday candles and makes a wish, Sal Maroni hurls bottle towards Dent's face. He falls to the ground, screaming in pain from what was, in fact, acid. Maroni is apprehended by the court guards.
- Later, on the Gotham Hospital, Gilda, Barbara and James updates about Harvey's conditions. But the doctor comes out says that Harvey is gone - he escaped from the hospital. Then, the doctor falls dead, revealing that he has been stabbed in the back.
- Carla Viti sneaks into the Gotham City Coroner Office and starts searching for the police records on the Holiday case. Holiday shoots her, leaving her dead body among the files on his case.

Batman: The Long Halloween #12

- Harvey Dent has been missing for a month. Harvey is now hiding in the sewers after having suffered a mental breakdown.
- On Labor Day, James Gordon and Batman discover that Harvey Dent was carrying a .22 gun in his briefcase along with a ledger with Falcone's names. This leads to the conclusion that Dent is the Holiday killer. Gordon wants to find Harvey but Batman can't believe that Dent committed all those crimes.
- Batman goes to the penthouse of Carmine Falcone and asks him about Dent. Falcone doesn't know and he blames Batman and the police for the deaths of his family members. Batman leaves the place just when Sofia Falcone entered the penthouse.
- Batman noticed that he was being spied all the time and he confronts Catwoman, who was just a few buildings across. Batman wants to know the truth about why she is always nearby Falcone. Catwoman tricks Batman and she leaves the man alone, wondering about her real motivation.
- Time grows short and Batman is desperately looking for Dent. He goes to Dent's house and finds Gilda Dent. He asks her about her husband's whereabouts but she doesn't know. Batman tells her that Dent is Holiday and that there is enough evidence to prove it. Gilda is worried and asks Batman to find "her" Harvey.
- Batman decides to go to Arkham Asylum to ask Calendar Man any kind of help. Batman wants to know where Harvey Dent is, and Calendar Man suggests that as Labor Day comes to an end, Holiday will likely kill someone under Batman's custody.
- Sal Maroni has been in prison since the trial in which he hurled acid towards Harvey Dent and as a result he was shot three times by the guards in the courtroom. However, the damage wasn't serious and Maroni is recovering in his cell when Gordon arrives and tells Maroni that he is being moved. Batman told Gordon that Dent might attack Maroni and they're moving him in order to save the man. Gordon and an armored guard escort Maroni through the prison but a few moments later, Maroni is shot twice from behind and killed.
- The armored guard leaps towards the man who shot Maroni, who is in fact the Holiday killer. Holiday shoots the guard several rounds in the chest and the guard falls down to the ground. Gordon grabs his flashlight and points it towards Holiday, revealing the killer's true identity: Alberto Falcone.

Batman: The Long Halloween #13

- Alberto Falcone reveals himself as Holiday and prepares to shoot James Gordon. The fallen guard rises and attacks Falcone, beats him to a pulp and when he is done, he takes off his armor and reveals himself as Batman. Gordon arrests Alberto for the murder of Salvatore Maroni.
- When the word is known about the identity of Holiday, Carmine Falcone visits his son Alberto in prison and offers him help getting out with no consequences. Alberto refuses, given the fact that he has made a name for himself and that he is now bigger than any member of the Falcone Crime Family. Gordon and Batman analyze the situation and realize that it all makes sense: Alberto faked his own death to throw them off while he continued killing people. However, Batman feels guilty because he always suspected his friend, the district attorney, Harvey Dent.
- On Halloween night, James and Barbara visit Gilda at her home. The woman is still worried for his husband, as there has been no signs of him.
- Later, in Arkham Asylum, someone is setting some of the most dangerous inmates free. The mysterious man approaches Calendar Man's cell and flips a coin to decide wether to set him free or not. In the end, the man leaves Calendar Man in his cell.
- A few moments later, at Falcone's Penthouse, Carmine is furious because Alberto has been sentenced to die and sill he refused his father's help. On the outside, someone is taking out all the Falcone guards by killing them. The power in the whole building is gone and Carmine is left with his daughter Sofia to confront whoever has entered his building. They follow the trail of dead security guards bodies until they arrive at Carmine's office, where they are confronted by a group of what Falcone would call "freaks". Solomon Grundy, The Mad Hatter, Joker, Penguin, Poison Ivy, Scarecrow, Catwoman and the mysterious man are waiting for Carmine to get inside. Carmine points his gun towards the mysterious man, who is leading the rest of them and demands an answer. The leader of the gang rises and reveals himself as Harvey Dent, only that he is different now. The left half of his face is completely scarred and he calls himself Two-Face. Joker urges Two-Face to kill Carmine so they can split the city between them. At that moment, a smoke bomb is thrown inside through a vent in the roof. Batman comes down on top of Grundy and knocks him down as he releases more smoke bombs. Batman then takes the enemies one by one, from the most dangerous to the less threatening. First Grundy and Joker, then Ivy, Hatter and Penguin and in the end Scarecrow. Batman asks Catwoman whose side is she on and she replies that she is on the same side as always. Batman didn't noticed Two-Face and the man has taken Carmine Falcone as a hostage. Batman recognizes Harvey but Two-Face explains him that Harvey is gone. Batman tries to make Harvey think his actions but Two-Face tells him that no matter how many times they send people like Falcone to jail, they'll come out and it will be and endless vicious cycle and that justice can be decided like a flip of a coin. Two-Face tosses his coin and it lands on the scarred side and thus Two-Face shots Falcone twice in the head. Sofia is enraged to see what Two-Face has done and tries to attack him while Catwoman tries to hold her. Their struggle lead them to the window when Sofia stumbles and crushes it with her weight. Catwoman tries to save her but Sofia falls down from the building. Batman tries to make Harvey surrender, but Two-Face tricks him and knocks him down with the weapon.
- Two-Face goes to the District Attorney's office and confronts Vernon Wells, his corrupt assistant. Two-Face realized that Wells was the person who gave Maroni the acid the day of the trial and with a flip of his coin, Harvey kills Vernon. After recovering, Batman arrives late at the scene and finds only Two-Face's coin at the same time that the Bat-Signal is lightened in the sky.
- Batman arrives at the GCPD Headquarters and finds Two-Face waiting for him. Two-Face tells him that he did what was needed to be done. James Gordon appears in the rooftop and Two-Face explains them that he just did what the city needed to be rid of the organized crime once and for all. Gordon tells him that despite the goal, Dent betrayed everything he believed in and Two-Face tells him that it is not true. He turns himself and tells Gordon to arrest him in order to let the system decide his fate. Before Two-Face is taken away, he tells Batman and Gordon that there were two holiday killers all the time. Gordon and Batman try to make sense of what Two-Face said. Gordon explains that Alberto confessed to be the author of all the crimes and Batman tells him that Dent is obsessed with the number two and that it might be just a delusion, but that considering that Two-Face killed Falcone with a .22 gun on Halloween, in the end, Two-Face was holiday too. Gordon and Batman realize that they achieved their promise, to get rid of Falcone once and for all, but the price they had to paid seemed to be quite extreme.
- Gordon goes to his family, where he decides that despite the events, he must go on his mission to make Gotham a better city by telling himself "I believe in Gotham City".
- Batman is sure that what he is doing is of consequence and he won't give up on the promise made to his parents. Batman tells himself "I believe in Batman".
- Two-Face is send to Arkham Asylum, where the only thing he can think of is his wife, Gilda...
- On Christmas Eve, Gilda is packing up boxes for her move away from Gotham, but before she leaves, she takes a box down the basement furnace. She describes aloud to herself how she read in Harvey's case files about the removal of the serial numbers of guns and how baby bottle nipples could be used as silencers. She then removes from the box a .22 pistol and drops it into the flames of the heater, along with a familiar-looking hat and coat. And she claims that she took it upon herself to start the Holiday killings, in an attempt to end the Roman's hold on Gotham and thus lighten Harvey's caseload so that they could have a child. Her belief is that Harvey took up the killings on New Year's Eve and that Alberto is lying to the police with his confession. She also says that she knows Harvey will eventually be alright and that they will reconcile as she tells herself "I believe in Harvey Dent".
