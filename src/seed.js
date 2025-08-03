import { collection, addDoc, getDocs } from "firebase/firestore";

export async function seedDatabase(db) {
  // Check if data already exists
  const seriesSnapshot = await getDocs(collection(db, "series"));
  const filmsSnapshot = await getDocs(collection(db, "films"));
  
  // If data already exists, don't seed again
  if (!seriesSnapshot.empty || !filmsSnapshot.empty) {
    console.log("Database already seeded, skipping...");
    return;
  }
  
  console.log("Seeding database with initial data...");
  
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  // Create all series documents
  const seriesData = [
    {
      id: getUUID(),
      title: "Tiger King",
      description: "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      genre: "documentaries",
      maturity: "18",
      slug: "tiger-king",
    },
    {
      id: getUUID(),
      title: "Amanda Knox",
      description: "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
      genre: "documentaries",
      maturity: "12",
      slug: "amanda-knox",
    },
    {
      id: getUUID(),
      title: "Citizenfour",
      description: "Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.",
      genre: "documentaries",
      maturity: "12",
      slug: "citizenfour",
    },
    {
      id: getUUID(),
      title: "Super Size Me",
      description: "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
      genre: "documentaries",
      maturity: "12",
      slug: "super-size-me",
    },
    {
      id: getUUID(),
      title: "Man on Wire",
      description: "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: "documentaries",
      maturity: "12",
      slug: "man-on-wire",
    },
    {
      id: getUUID(),
      title: "The Office",
      description: "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
      genre: "comedies",
      maturity: "15",
      slug: "the-office",
    },
    {
      id: getUUID(),
      title: "Arrested Development",
      description: "The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.",
      genre: "comedies",
      maturity: "15",
      slug: "arrested-development",
    },
    {
      id: getUUID(),
      title: "Curb Your Enthusiasm",
      description: "Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.",
      genre: "comedies",
      maturity: "15",
      slug: "curb-your-enthusiasm",
    },
    {
      id: getUUID(),
      title: "Family Guy",
      description: "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
      genre: "comedies",
      maturity: "15",
      slug: "family-guy",
    },
    {
      id: getUUID(),
      title: "South Park",
      description: "Four young, school-going boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.",
      genre: "comedies",
      maturity: "15",
      slug: "south-park",
    },
    {
      id: getUUID(),
      title: "Peppa Pig",
      description: "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
      genre: "children",
      maturity: "0",
      slug: "peppa-pig",
    },
    {
      id: getUUID(),
      title: "Dora The Explorer",
      description: "Dora, a seven-year-old girl of Latin heritage, embarks on numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun, interactive tools.",
      genre: "children",
      maturity: "0",
      slug: "dora-the-explorer",
    },
    {
      id: getUUID(),
      title: "PAW Patrol",
      description: "Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.",
      genre: "children",
      maturity: "0",
      slug: "paw-patrol",
    },
    {
      id: getUUID(),
      title: "Arthur",
      description: "Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.",
      genre: "children",
      maturity: "0",
      slug: "arthur",
    },
    {
      id: getUUID(),
      title: "SpongeBob",
      description: "A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab, lives in the Pacific Ocean. He may be simple but he's not stupid.",
      genre: "children",
      maturity: "0",
      slug: "spongebob",
    },
    {
      id: getUUID(),
      title: "Making a Murderer",
      description: "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
      genre: "crime",
      maturity: "18",
      slug: "making-a-murderer",
    },
    {
      id: getUUID(),
      title: "Long Shot",
      description: "An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.",
      genre: "crime",
      maturity: "18",
      slug: "long-shot",
    },
    {
      id: getUUID(),
      title: "The Confession Killer",
      description: "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people, but he claimed to have killed hundreds of individuals.",
      genre: "crime",
      maturity: "18",
      slug: "the-confession-killer",
    },
    {
      id: getUUID(),
      title: "The Innocent Man",
      description: "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people, but he claimed to have killed hundreds of individuals.",
      genre: "crime",
      maturity: "18",
      slug: "the-innocent-man",
    },
    {
      id: getUUID(),
      title: "The Staircase",
      description: "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon.",
      genre: "crime",
      maturity: "18",
      slug: "the-staircase",
    },
    {
      id: getUUID(),
      title: "Good Will Hunting",
      description: "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychologist Dr Sean Maguire, who helps him recover.",
      genre: "feel-good",
      maturity: "15",
      slug: "good-will-hunting",
    },
    {
      id: getUUID(),
      title: "Forrest Gump",
      description: "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
      genre: "feel-good",
      maturity: "15",
      slug: "forrest-gump",
    },
    {
      id: getUUID(),
      title: "Juno",
      description: "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
      genre: "feel-good",
      maturity: "15",
      slug: "juno",
    },
    {
      id: getUUID(),
      title: "Midnight In Paris",
      description: "A romantic comedy about a family traveling to the French capital for business. The party includes a young engaged couple forced to confront the illusion that a life different from their own is better.",
      genre: "feel-good",
      maturity: "15",
      slug: "midnight-in-paris",
    },
    {
      id: getUUID(),
      title: "School of Rock",
      description: "Dewey Finn, an unemployed rock guitarist, decides to earn a few extra bucks by posing as a substitute teacher at a prestigious prep school. There he turns a class of straight-A students into a rock band.",
      genre: "feel-good",
      maturity: "15",
      slug: "school-of-rock",
    }
  ];

  // Create all films documents
  const filmsData = [
    {
      id: getUUID(),
      title: "The Prestige",
      description: "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
      genre: "drama",
      maturity: "15",
      slug: "the-prestige",
    },
    {
      id: getUUID(),
      title: "Fight Club",
      description: "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman, and soon finds himself living in his parasite's lair.",
      genre: "drama",
      maturity: "18",
      slug: "fight-club",
    },
    {
      id: getUUID(),
      title: "Kings Speech",
      description: "King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.",
      genre: "drama",
      maturity: "15",
      slug: "kings-speech",
    },
    {
      id: getUUID(),
      title: "The Revenant",
      description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      genre: "drama",
      maturity: "18",
      slug: "the-revenant",
    },
    {
      id: getUUID(),
      title: "The Social Network",
      description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
      genre: "drama",
      maturity: "15",
      slug: "the-social-network",
    },
    {
      id: getUUID(),
      title: "Shutter Island",
      description: "In 1954, a U.S. marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      genre: "suspense",
      maturity: "18",
      slug: "shutter-island",
    },
    {
      id: getUUID(),
      title: "Gone Girl",
      description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      genre: "suspense",
      maturity: "18",
      slug: "gone-girl",
    },
    {
      id: getUUID(),
      title: "Prisoners",
      description: "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
      genre: "suspense",
      maturity: "18",
      slug: "prisoners",
    },
    {
      id: getUUID(),
      title: "Seven",
      description: "A serial killer begins murdering people according to the seven deadly sins, and it's up to a detective who's about to retire and another who just transferred to the area to bring him to justice.",
      genre: "suspense",
      maturity: "18",
      slug: "seven",
    },
    {
      id: getUUID(),
      title: "Zodiac",
      description: "A cartoonist teams up with an ace reporter and a law enforcement officer to track down an elusive serial killer.",
      genre: "suspense",
      maturity: "18",
      slug: "zodiac",
    },
    {
      id: getUUID(),
      title: "Hotel Transylvania",
      description: "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
      genre: "children",
      maturity: "0",
      slug: "hotel-transylvania",
    },
    {
      id: getUUID(),
      title: "Despicable Me",
      description: "After he steals a shrink ray and a freeze ray from a secret laboratory, Gru, a supervillain, decides to use them to steal the moon. However, he has an unexpected encounter with three little girls.",
      genre: "children",
      maturity: "0",
      slug: "despicable-me",
    },
    {
      id: getUUID(),
      title: "Frozen",
      description: "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.",
      genre: "children",
      maturity: "0",
      slug: "frozen",
    },
    {
      id: getUUID(),
      title: "Spirited Away",
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, where humans are changed into beasts.",
      genre: "children",
      maturity: "0",
      slug: "spirited-away",
    },
    {
      id: getUUID(),
      title: "Up",
      description: "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
      genre: "children",
      maturity: "0",
      slug: "up",
    },
    {
      id: getUUID(),
      title: "Joker",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      genre: "thriller",
      maturity: "18",
      slug: "joker",
    },
    {
      id: getUUID(),
      title: "A Quiet Place",
      description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
      genre: "thriller",
      maturity: "15",
      slug: "a-quiet-place",
    },
    {
      id: getUUID(),
      title: "Black Swan",
      description: "A committed dancer wins the lead role in a production of Tchaikovsky's 'Swan Lake' only to find herself struggling to maintain her sanity.",
      genre: "thriller",
      maturity: "18",
      slug: "black-swan",
    },
    {
      id: getUUID(),
      title: "Nightcrawler",
      description: "A driven young man desperate for work who muscles into the world of L.A. crime journalism. Blurring the line between observer and participant, he becomes the star of his own story.",
      genre: "thriller",
      maturity: "18",
      slug: "nightcrawler",
    },
    {
      id: getUUID(),
      title: "The Silence of The Lambs",
      description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      genre: "thriller",
      maturity: "18",
      slug: "the-silence-of-the-lambs",
    },
    {
      id: getUUID(),
      title: "A Star Is Born",
      description: "A seasoned musician discovers — and falls in love with — a struggling artist. She has just about given up on her dream to make it big as a singer until he coaxes her into the spotlight.",
      genre: "romance",
      maturity: "15",
      slug: "a-star-is-born",
    },
    {
      id: getUUID(),
      title: "Blue Valentine",
      description: "A contemporary love story that chronicles the evolution of a relationship over time.",
      genre: "romance",
      maturity: "15",
      slug: "blue-valentine",
    },
    {
      id: getUUID(),
      title: "La La Land",
      description: "A jazz pianist falls for an aspiring actress in Los Angeles.",
      genre: "romance",
      maturity: "15",
      slug: "la-la-land",
    },
    {
      id: getUUID(),
      title: "The Notebook",
      description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
      genre: "romance",
      maturity: "15",
      slug: "the-notebook",
    },
    {
      id: getUUID(),
      title: "Titanic",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      genre: "romance",
      maturity: "15",
      slug: "titanic",
    }
  ];

  try {
    // Add all series documents
    const seriesPromises = seriesData.map(data => addDoc(collection(db, "series"), data));
    await Promise.all(seriesPromises);
    console.log("Series data seeded successfully");

    // Add all films documents
    const filmsPromises = filmsData.map(data => addDoc(collection(db, "films"), data));
    await Promise.all(filmsPromises);
    console.log("Films data seeded successfully");

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
