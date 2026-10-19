export type DogStatus = "available" | "reserved";

export type DogPhoto = {
  src: string;
  alt: string;
};

export type Dog = {
  slug: string;
  name: string;
  status: DogStatus;
  sex?: "Female" | "Male";
  age?: string;
  size?: string;
  weight?: string;
  neutered?: string;
  summary: string;
  story: string[];
  temperament?: string;
  care?: string;
  images: DogPhoto[];
};

export const dogs: Dog[] = [
  {
    slug: "frida",
    name: "Frida",
    status: "available",
    age: "5 months",
    summary:
      "A discarded puppy who is now ready for a family of her own.",
    temperament: "Affectionate, bright, and ready to bond",
    care: "Young puppy care, training, and a patient first home",
    story: [
      "Frida came to the rescue as a discarded puppy. She is now a bright, affectionate girl who is ready to grow up in a home of her own.",
      "She is looking for people who will give her safety, patience, and a chance to be truly wanted.",
    ],
    images: [
      { src: "/images/dogs/frida-1.png", alt: "Frida, a young rescue puppy looking toward the camera" },
      { src: "/images/dogs/frida-2.png", alt: "Frida sitting outdoors" },
      { src: "/images/dogs/frida-3.png", alt: "Frida resting in the grass" },
    ],
  },
  {
    slug: "ziva",
    name: "Ziva",
    status: "available",
    sex: "Female",
    summary:
      "A light brown girl with a calm face and a generous heart, waiting for a second chance.",
    temperament: "Gentle, watchful, and loving",
    care: "A quiet home, a soft bed, and time to settle",
    story: [
      "Ziva is a beautiful light brown girl with a sweet expression and a calm, steady presence. Behind her brave face is a dog with a big heart.",
      "She has been waiting at a municipal shelter for someone who will see her and offer a better life. She deserves a warm bed, a gentle voice, and a home that shows her what love is.",
    ],
    images: [
      { src: "/images/dogs/ziva-1.webp", alt: "Ziva, a light brown rescue dog" },
      { src: "/images/dogs/ziva-2.webp", alt: "Ziva looking toward the camera" },
    ],
  },
  {
    slug: "lola",
    name: "Lola",
    status: "available",
    sex: "Female",
    summary:
      "Found alone on the street and blind in one eye. She needs urgent care and a safe home.",
    temperament: "Gentle, affectionate, and eager for comfort",
    care: "Veterinary follow-up and a protected indoor home",
    story: [
      "Lola was found on the street, alone and frightened. She is also blind in one eye, which left her especially vulnerable outdoors.",
      "Despite everything she has been through, she is incredibly gentle, loves to cuddle, and longs for affection. She is safe now and still needs veterinary care.",
      "She urgently needs people who can offer her safety, a warm place to rest, and the protection she deserves.",
    ],
    images: [
      { src: "/images/dogs/lola.webp", alt: "Lola, a rescue dog found on the street" },
    ],
  },
  {
    slug: "ravi",
    name: "Ravi",
    status: "available",
    sex: "Male",
    summary:
      "A cheerful boy waiting at a municipal shelter for a family of his own.",
    temperament: "Sweet, cheerful, and people-oriented",
    care: "A family home and a predictable daily routine",
    story: [
      "Ravi is a sweet, cheerful boy waiting at a municipal shelter. He dreams of a place that is truly his.",
      "He is looking for a warm bed, plenty of affection, and a family that will not have to miss him again.",
    ],
    images: [
      { src: "/images/dogs/ravi.webp", alt: "Ravi, a cheerful male rescue dog" },
    ],
  },
  {
    slug: "maartje",
    name: "Maartje",
    status: "available",
    sex: "Female",
    age: "Born March 21, 2025",
    neutered: "Yes",
    summary:
      "A loving companion dog who needs a calmer home than a busy household with four young children.",
    temperament: "Affectionate, social with dogs, and eager to learn",
    care: "A quieter home, continued training, and time to settle in cars",
    story: [
      "Maartje, previously known as Maribelle, has lived in foster care for about six months. The household has not been the right match. The pace of a family with four young children is too much for her.",
      "She likes children. When school friends visit and weekends or holidays get busy, she cannot find enough rest. A home with fewer children, or slightly older children, would suit her better.",
      "The family cat is timid and has spent months in an upstairs room. Maartje treats the cat well, does not chase her, and mostly ignores her when the cat comes downstairs to eat.",
      "Maartje is a true companion. She prefers to lie close on the couch, and if you move to the kitchen she settles under the table. In foster care she has learned a great deal. She walks nicely on a leash, knows several commands, and is largely house-trained. Car rides are sometimes easy and sometimes still exciting.",
      "She loves other dogs. She is enthusiastic but submissive in play and has gotten along with every dog she has met so far. She is alert and eager to greet visitors, and she is still learning to keep her paws on the ground. That is improving.",
    ],
    images: [
      { src: "/images/dogs/maartje.webp", alt: "Maartje, a young female rescue dog" },
    ],
  },
  {
    slug: "darko",
    name: "Darko",
    status: "available",
    sex: "Male",
    age: "About 5 months",
    summary:
      "A cardboard-box puppy whose name means gift. He is cheerful, cuddly, and ready for a family.",
    temperament: "Sweet, playful, and still a little timid",
    care: "Puppy training, socialization, and a steady home",
    story: [
      "Darko’s name means gift, but his start in life did not feel like one. At around five months old he was left with other puppies in a cardboard box. He was rescued, and he has stayed cheerful.",
      "He is a sweet boy who loves to cuddle, play, and discover the world. He can still be a little timid, and he will grow with time, trust, and love.",
      "What he needs most is a family that will not let him down.",
    ],
    images: [
      { src: "/images/dogs/darko.webp", alt: "Darko, a five-month-old rescue puppy" },
    ],
  },
  {
    slug: "dragica",
    name: "Dragica",
    status: "available",
    sex: "Female",
    age: "About 5 months",
    summary:
      "A precious puppy left in a cardboard box, now looking toward a real forever home.",
    temperament: "Curious, affectionate, and full of love to give",
    care: "Puppy care, training, and a home where she can grow up wanted",
    story: [
      "Dragica’s name means precious and valuable, and that is exactly what she is. Her young life began when she was left with other puppies in a cardboard box.",
      "She is about five months old, curious about the world, and eager to cuddle. She has mountains of love to give.",
      "She is ready to leave that beginning behind and grow up in a home where she is truly wanted.",
    ],
    images: [
      { src: "/images/dogs/dragica.webp", alt: "Dragica, a five-month-old rescue puppy" },
    ],
  },
  {
    slug: "chester",
    name: "Chester",
    status: "available",
    sex: "Male",
    age: "4.5 months",
    summary:
      "Found at a gas station with his siblings and ready for the next chapter.",
    temperament: "Young, social, and ready to settle with a family",
    care: "Puppy training and a home that can keep him close",
    story: [
      "Chester was found at a gas station with his siblings. He is a 4.5-month-old male, ready to leave rescue care and start life with a family.",
    ],
    images: [
      { src: "/images/dogs/chester.webp", alt: "Chester, a 4.5-month-old male rescue puppy" },
    ],
  },
  {
    slug: "cali",
    name: "Cali",
    status: "available",
    sex: "Female",
    age: "4.5 months",
    summary:
      "A happy girl found with her siblings at a gas station, ready to go home.",
    temperament: "Sweet, happy, and affectionate",
    care: "Puppy care and a family that can keep her safe",
    story: [
      "Cali is a 4.5-month-old female found with her siblings at a gas station. She is a sweet, happy girl with a lot of love to give, and she is ready to go home.",
    ],
    images: [
      { src: "/images/dogs/cali.webp", alt: "Cali, a 4.5-month-old female rescue puppy" },
    ],
  },
  {
    slug: "yorki",
    name: "Yorki",
    status: "reserved",
    sex: "Female",
    age: "About 6 months",
    neutered: "No",
    size: "Mother is about 40 cm at the withers",
    summary:
      "Found in an abandoned house with her siblings. Playful and currently reserved.",
    temperament: "Playful, happy, and people-oriented",
    care: "Lives with dogs and cats; needs continued puppy guidance",
    story: [
      "Yorki was found with her brother and sisters in an abandoned house. They are believed to have been born in early March and are now about six months old.",
      "She lives in a home with dogs and cats. She is a fun, playful, happy puppy who enjoys attention. Her mother is about 40 cm at the withers; her father is unknown.",
      "Yorki is currently reserved.",
    ],
    images: [
      { src: "/images/dogs/yorki.webp", alt: "Yorki, a six-month-old reserved rescue puppy" },
    ],
  },
  {
    slug: "zephyr",
    name: "Zephyr",
    status: "reserved",
    sex: "Female",
    age: "About 1.5 years",
    size: "About 30 cm tall",
    weight: "About 9 kg",
    summary:
      "A gentle, smart girl already in foster care, looking for a more stable home.",
    temperament: "Gentle, affectionate, smart, and initially reserved",
    care: "Enough exercise, slow introductions, and a calm household",
    story: [
      "Zephyr, formerly called Odille, is about 1.5 years old, weighs about 9 kg, and stands about 30 cm tall. She is already in a foster home.",
      "She is an incredibly gentle, affectionate, and smart dog. She has energy outdoors and loves chasing a Frisbee. Indoors she can be quiet and can stay home alone. She does not bark when left and is house-trained. If she is bored she may chew a sock or pillow. Enough exercise and stimulation prevent that.",
      "She gets along with other dogs when she is given time to settle. Loud noises, busy places, and children playing outside can still feel overwhelming. She is reserved with new people at first, then cheerful and sociable once she trusts them.",
      "A change in personal circumstances, not her behavior, is why a new home is needed. She can be visited. Zephyr is currently reserved.",
    ],
    images: [
      { src: "/images/dogs/zephyr.webp", alt: "Zephyr, a small reserved rescue dog" },
    ],
  },
  {
    slug: "sjimmie",
    name: "Sjimmie",
    status: "available",
    sex: "Male",
    summary:
      "A kind-eyed male found near a monastery. He walks well on a leash and is waiting for his person.",
    temperament: "Gentle and easy on a leash",
    care: "A home that can give him steady companionship",
    story: [
      "Sjimmie is a male who was found roaming near a monastery with several other dogs. His companion Sjors has been adopted and is doing well.",
      "Now it is Sjimmie’s turn. He walks very well on a leash and is waiting for someone who will fall for his kind eyes.",
    ],
    images: [
      { src: "/images/dogs/sjimmie.jpg", alt: "Sjimmie, a male rescue dog" },
    ],
  },
  {
    slug: "suncica",
    name: "Suncica",
    status: "available",
    sex: "Female",
    age: "5 to 6 months",
    size: "About 40 cm at the withers",
    summary:
      "Found in the pouring rain. Gentle, playful, and ready to go home.",
    temperament: "Gentle, sweet, and playful",
    care: "Young-dog training and a family ready to welcome her",
    story: [
      "Suncica was found in the pouring rain and could not be left behind. She is gentle, sweet, and playful.",
      "She is a female, about 40 cm at the withers, and she is ready to go home.",
    ],
    images: [
      { src: "/images/dogs/suncica.jpg", alt: "Suncica, a young female rescue dog" },
    ],
  },
  {
    slug: "yuna",
    name: "Yuna",
    status: "available",
    sex: "Female",
    age: "About 10 months",
    summary:
      "A cheerful ten-month-old still waiting for the people who will make her their world.",
    temperament: "Cheerful, affectionate, and ready to bond",
    care: "A first home that can finish her training",
    story: [
      "Yuna is about 10 months old: cheerful, affectionate, and still waiting for her people. She is ready to become someone’s whole world.",
    ],
    images: [
      { src: "/images/dogs/yuna.jpg", alt: "Yuna, a ten-month-old female rescue dog" },
    ],
  },
  {
    slug: "minnie",
    name: "Minnie",
    status: "available",
    sex: "Female",
    age: "Just over 1 year",
    summary:
      "A dump puppy from last year whose brother has already been adopted. She is healthy and ready for adventure.",
    temperament: "Healthy, enthusiastic, and active",
    care: "Daily walks and a home that enjoys an energetic young dog",
    story: [
      "Minnie was one of many discarded puppies last year, along with her brother Mickey. Mickey has been adopted and is doing well.",
      "Minnie is just over a year old, healthy, enthusiastic, and ready for more adventure. She loves walks and running.",
    ],
    images: [
      { src: "/images/dogs/minnie.jpg", alt: "Minnie, a young female rescue dog" },
    ],
  },
  {
    slug: "betty",
    name: "Betty",
    status: "available",
    sex: "Female",
    summary:
      "Fully recovered and at a healthy weight. She is happy, confident, and looking for her people.",
    temperament: "Sweet, recovered, and full of life",
    care: "A family home after a completed recovery",
    story: [
      "Betty has fully recovered, gained weight, and is now a happy, confident girl. She came from a municipal shelter and is ready for a family of her own.",
    ],
    images: [
      { src: "/images/dogs/betty.jpg", alt: "Betty, a recovered female rescue dog" },
    ],
  },
  {
    slug: "gina",
    name: "Gina",
    status: "available",
    sex: "Female",
    age: "About 3 years",
    summary:
      "A gentle three-year-old who has waited in the shelter too long.",
    temperament: "Sweet, calm, and ready for a quieter life",
    care: "A home that can give her time after a long shelter stay",
    story: [
      "Gina is a gentle three-year-old who has been in the shelter too long. She is ready for the next chapter: a life with love and a warm house.",
    ],
    images: [
      { src: "/images/dogs/gina.webp", alt: "Gina, a three-year-old female rescue dog" },
    ],
  },
  {
    slug: "nina",
    name: "Nina",
    status: "available",
    sex: "Female",
    age: "About 2 to 3 years",
    size: "40 to 45 cm at the withers",
    weight: "21 kg",
    neutered: "Yes",
    summary:
      "A devoted mother left at the shelter with her puppies. Spayed and looking for a home of her own.",
    temperament: "Gentle, devoted, and watchful",
    care: "A calm home after motherhood and shelter life",
    story: [
      "Nina was left at the shelter together with her puppies. She is estimated to be two to three years old and about 40 to 45 cm at the withers.",
      "She has been spayed and weighs 21 kg. She is a devoted mother with striking brown eyes, looking for a home of her own.",
    ],
    images: [
      { src: "/images/dogs/nina.webp", alt: "Nina, a female rescue dog and mother" },
    ],
  },
  {
    slug: "nino",
    name: "Nino",
    status: "available",
    sex: "Male",
    age: "About 6 months",
    size: "About 49 cm at the withers",
    weight: "About 22 kg",
    neutered: "Yes",
    summary:
      "One of Nina’s puppies. Enthusiastic, healthy, and ready for more adventure.",
    temperament: "Enthusiastic, healthy, and playful",
    care: "Young-dog training and plenty of activity",
    story: [
      "Nino is one of Nina’s two puppies. He is about six months old: enthusiastic, healthy, playful, and eager for attention and adventure.",
      "He is about 49 cm at the withers, neutered, and weighs about 22 kg.",
    ],
    images: [
      { src: "/images/dogs/nino.jpg", alt: "Nino, one of Nina’s rescue puppies" },
    ],
  },
  {
    slug: "nena",
    name: "Nena",
    status: "available",
    sex: "Female",
    age: "About 6 months",
    size: "40 to 45 cm at the withers",
    weight: "15 kg",
    neutered: "Yes",
    summary:
      "Nina’s other puppy. Cheerful, loving, and ready for more attention.",
    temperament: "Cheerful and affectionate",
    care: "Young-dog training and a family ready to keep her close",
    story: [
      "Nena is Nina’s other puppy. She is about six months old, cheerful, and looking for more love.",
      "She stands 40 to 45 cm at the withers, has been spayed, and weighs 15 kg.",
    ],
    images: [
      { src: "/images/dogs/nena.jpg", alt: "Nena, one of Nina’s rescue puppies" },
    ],
  },
  {
    slug: "vuki",
    name: "Vuki",
    status: "available",
    summary:
      "Looking for a loving home. Contact the rescue to learn more about this dog.",
    story: [
      "Vuki is looking for a loving home. Contact Leona’s Brave Haven to ask about temperament, care needs, and the next step toward adoption or foster care.",
    ],
    images: [
      { src: "/images/dogs/vuki.webp", alt: "Vuki, a rescue dog looking for a home" },
    ],
  },
];

export const featuredDogSlugs = ["frida", "lola", "darko"] as const;
export const featuredStorySlugs = ["lola", "darko", "betty", "nina"] as const;

export function getDog(slug: string) {
  return dogs.find((dog) => dog.slug === slug);
}

export function availableDogs() {
  return dogs.filter((dog) => dog.status === "available");
}

export function featuredDogs() {
  return featuredDogSlugs
    .map((slug) => getDog(slug))
    .filter((dog): dog is Dog => Boolean(dog));
}

export function featuredStories() {
  return featuredStorySlugs
    .map((slug) => getDog(slug))
    .filter((dog): dog is Dog => Boolean(dog));
}

export function statusLabel(status: DogStatus) {
  return status === "reserved" ? "Reserved" : "Looking for a home";
}
