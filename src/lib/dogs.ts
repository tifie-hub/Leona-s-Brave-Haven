export type DogStatus = "available" | "reserved" | "adopted";

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
  {
    slug: "jefa",
    name: "Jefa",
    status: "available",
    sex: "Female",
    summary:
      "A watchful brindle girl with a red collar, rescued alongside Wats and looking for a home of her own.",
    temperament: "Alert, loyal, and steadier when she has a person to follow",
    care: "A home that can give her structure and time to settle after kennel life",
    story: [
      "Jefa came into rescue with Wats. They had been sharing a kennel run, and she was the one who stood taller, watching every person who passed the glass.",
      "She is a dark brindle girl with a white chest and a serious, hopeful face. She is looking for a home that will let her keep that watchful loyalty and finally step out of a kennel for good.",
    ],
    images: [
      { src: "/images/dogs/jefa-and-wats.jpeg", alt: "Jefa, a dark brindle rescue dog with a red collar, standing with Wats" },
    ],
  },
  {
    slug: "wats",
    name: "Wats",
    status: "available",
    sex: "Male",
    summary:
      "A brown boy with a blue collar, rescued with Jefa and waiting for people of his own.",
    temperament: "Gentle, people-oriented, and a little quieter than his kennel-mate",
    care: "A patient home and the chance to learn that visitors mean good news",
    story: [
      "Wats was pulled with Jefa from the same kennel. He is the brown boy with the blue collar, standing close and looking straight at whoever stops to see them.",
      "He is softer in his approach than his kennel-mate and still learning that a hand at the door can be kind. He is ready for a home that will keep him close and give him a life beyond that run.",
    ],
    images: [
      { src: "/images/dogs/jefa-and-wats.jpeg", alt: "Wats, a brown rescue dog with a blue collar, standing with Jefa" },
    ],
  },
  {
    slug: "penny",
    name: "Penny",
    status: "adopted",
    sex: "Female",
    summary:
      "Left behind in a Palmdale, California shelter after her owner was taken away. She is now safe in her forever home.",
    temperament: "Sweet, sensitive, and deeply attached once she trusts someone",
    care: "A forever home that can keep her close after a frightening start",
    story: [
      "The heavy metal doors of the shelter in Palmdale, California, carried a lot of noise and uncertainty. Inside a quiet enclosure, a sweet white-and-brown dog named Penny sat waiting. Her world turned over when she saw her owner arrested and taken away. Her owner was later released, but Penny was left in the kennel, watching for someone who was not coming back.",
      "Fear and confusion stayed with her for a long time. The story did not end in that concrete room. The team at Leona’s Brave Haven refused to give up on her, and she was safely rescued from the shelter.",
      "Today the sorrow of that beginning is behind her. Penny is surrounded by love, comfort, and safety, living her best life in her forever home.",
    ],
    images: [
      { src: "/images/dogs/penny.jpeg", alt: "Penny, a white-and-brown rescue dog looking through shelter kennel bars" },
    ],
  },
  {
    slug: "flo",
    name: "Flo",
    status: "adopted",
    sex: "Female",
    age: "Young adult",
    summary:
      "A fluffy black girl with one blue eye and one brown eye, finally ready to be someone’s unmistakable companion.",
    temperament: "Affectionate, watchful, and eager for a familiar person",
    care: "A home that will keep her close and enjoy a soft-coated companion",
    story: [
      "Flo has one ice-blue eye and one warm brown eye, and that is how a neighbor first remembered her. She kept appearing at the same fence post along a quiet rural road, waiting as if someone familiar might still come back.",
      "When she finally leaned into a hand, the rescue was called. Under the long black coat is a girl who wants to stay near her people. She is ready for a home that will not leave her watching the road.",
    ],
    images: [
      { src: "/images/dogs/flo.webp", alt: "Flo, a fluffy black rescue dog with one blue eye and one brown eye" },
    ],
  },
  {
    slug: "poppy",
    name: "Poppy",
    status: "adopted",
    sex: "Female",
    age: "Young adult",
    summary:
      "A lean, goofy girl who shadowed a walker along a pebble creek path and refused to turn back.",
    temperament: "Playful, people-focused, and full of bounce",
    care: "Daily walks and a home that enjoys a slim, athletic companion",
    story: [
      "Poppy attached herself to a walker on a pebble path beside a creek. She kept pace, tongue out, as if the outing had always been hers. When the walker stopped, she sat and waited instead of running off.",
      "She is a slim, dark girl with a quick smile and a lot of goofy charm. She needs a person who wants a walking partner and will let her keep that joyful, slightly silly spirit.",
    ],
    images: [
      { src: "/images/dogs/poppy.webp", alt: "Poppy, a slim dark rescue dog on a pebble path" },
    ],
  },
  {
    slug: "lana",
    name: "Lana",
    status: "adopted",
    sex: "Female",
    age: "Adult",
    summary:
      "An athletic black-and-tan girl surrendered when her person began traveling for work.",
    temperament: "Social, bright, and happiest with company",
    care: "Regular exercise and a household that is home more often than away",
    story: [
      "Lana’s person took a job that meant long stretches on the road. She is built for movement and company, and an empty house was the wrong life for her. She was surrendered so she would not spend her days waiting at a door.",
      "In care she is alert, polite with other dogs, and visibly happier when someone is nearby. She is looking for a home that can share walks, training, and ordinary days together.",
    ],
    images: [
      { src: "/images/dogs/lana.jpg", alt: "Lana, a black-and-tan athletic rescue dog in a play yard" },
    ],
  },
  {
    slug: "timo",
    name: "Timo",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A hound with a pink nose who wandered onto a ball field and sat down as if he had joined the team.",
    temperament: "Friendly, scent-curious, and easy with people",
    care: "Secure fences and walks that let him use his nose",
    story: [
      "Timo walked onto a community ball field during evening practice and sat at the fence as if he belonged there. The coach kept an eye on him through the last inning, then called for help rather than leave a friendly hound on the field.",
      "He is a tan-and-white boy with a pink nose and a soft mouth. He will do best with people who understand a hound’s nose and will keep him on a leash or inside a secure yard.",
    ],
    images: [
      { src: "/images/dogs/timo.jpg", alt: "Timo, a tan-and-white hound mix being petted" },
    ],
  },
  {
    slug: "zuja",
    name: "Zuja",
    status: "adopted",
    sex: "Female",
    age: "Young adult",
    summary:
      "A quiet tan girl found sleeping in the shade of a construction trailer, then waiting for the crew each morning.",
    temperament: "Calm, observant, and gently social",
    care: "A steady routine and time to warm up in a new home",
    story: [
      "A construction crew found Zuja sleeping in the shade of a parked trailer. She was still there the next morning, and the morning after that, as if the job site had become her only landmark.",
      "She is a slender tan girl who watches first and then steps forward. She lives easily around other dogs and is ready for a quieter home that can give her a real place to rest.",
    ],
    images: [
      { src: "/images/dogs/zuja.jpg", alt: "Zuja, a slender tan rescue dog standing in a gravel yard" },
    ],
  },
  {
    slug: "gari",
    name: "Gari",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A water-loving black dog coaxed out of a canal behind a shopping plaza.",
    temperament: "Easygoing, outdoor-loving, and people-friendly",
    care: "Swims when he can; needs a home that enjoys active outings",
    story: [
      "Gari was seen swimming laps in a shallow canal behind a shopping plaza. A shop owner lured him out with leftover lunch and kept him safe until the rescue arrived, still dripping and completely unbothered.",
      "He is a glossy black boy who lights up near water and muddy paths. He wants a home that will let him hike, splash, and then dry off on a real bed.",
    ],
    images: [
      { src: "/images/dogs/gari.webp", alt: "Gari, a wet black rescue dog standing by a creek" },
    ],
  },
  {
    slug: "brko",
    name: "Brko",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A scruffy cream terrier left in a crate after a weekend of boarding that nobody returned for.",
    temperament: "Cheerful, affectionate, and ready to be a house dog",
    care: "Regular grooming for his wiry coat and a person who likes a small shadow",
    story: [
      "Brko was left in a crate on a porch after a short boarding stay. The weekend ended, no one came back, and a wiry cream dog with a wet grin was still waiting on the lead.",
      "He is a small terrier mix who treats every walk like good news. He is looking for a home that will keep him indoors, brush that scruffy coat, and let him follow from room to room.",
    ],
    images: [
      { src: "/images/dogs/brko.webp", alt: "Brko, a scruffy cream terrier mix on a red leash" },
    ],
  },
  {
    slug: "mindy",
    name: "Mindy",
    status: "adopted",
    sex: "Female",
    age: "Adult",
    summary:
      "A calm black girl handed over at a clinic when her housing no longer allowed dogs.",
    temperament: "Steady, polite, and quietly affectionate",
    care: "A predictable home and a person who enjoys an easy walking partner",
    story: [
      "Mindy was turned in at a veterinary clinic checkout. Her person was moving into housing that did not allow dogs. She was healthy, leashed, and suddenly without a place to go.",
      "She is a black girl with a composed face and a soft way of standing beside people. She does not ask loudly for attention. She needs a home that notices her anyway.",
    ],
    images: [
      { src: "/images/dogs/mindy.jpg", alt: "Mindy, a black rescue dog standing beside a volunteer" },
    ],
  },
  {
    slug: "gara",
    name: "Gara",
    status: "adopted",
    sex: "Female",
    age: "Adult",
    summary:
      "A thoughtful brown girl left without a job when the grove she lived beside changed hands.",
    temperament: "Watchful, loyal, and calmer than she first appears",
    care: "A secure yard and a person who will give her a clear daily role",
    story: [
      "Gara lived at the edge of a citrus grove as a loosely kept farm dog. When the grove changed hands, the work and the people around her disappeared. She stayed near the fence line until someone asked the rescue to step in.",
      "She is a dark brown girl with a white chest and a serious, thoughtful face. She will thrive with a person who can give her walks, a job to do, and a porch that is actually hers.",
    ],
    images: [
      { src: "/images/dogs/gara.jpg", alt: "Gara, a dark brown rescue dog with a white chest" },
    ],
  },
  {
    slug: "lepi",
    name: "Lepi",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A smiling hound returned from a first home that could not give him enough outdoor time.",
    temperament: "Upbeat, vocal in a hound way, and eager to please",
    care: "Daily walks and a home that understands a beagle mix needs to move",
    story: [
      "Lepi’s first placement asked the rescue to take him back. The apartment was quiet and small, and a speckled hound who loves to walk and talk with his nose was not a match for that life.",
      "He is a tri-color boy with a pink collar and a wide, open smile. His second home should want a walking companion and be ready for a hound’s voice, not a dog who can be left idle all day.",
    ],
    images: [
      { src: "/images/dogs/lepi.webp", alt: "Lepi, a tri-color beagle mix wearing a pink collar" },
    ],
  },
  {
    slug: "tina",
    name: "Tina",
    status: "adopted",
    sex: "Female",
    age: "Young adult",
    summary:
      "A brindle girl with pale eyes who was left standing in a rest-area parking lot when a truck pulled away.",
    temperament: "Expressive, curious, and quickly becoming a house dog",
    care: "Indoor living and a family that enjoys a funny, wide-eyed companion",
    story: [
      "Tina was seen in the bed of a pickup at a highway rest area. When the truck pulled back onto the road, she was still standing on the pavement. A traveler stayed with her until the rescue could reach them.",
      "She is a brindle girl with pale, startling eyes and a grin that fills a room. She has taken to couches, chew toys, and indoor life, and she is ready for a family that will keep her off the highway for good.",
    ],
    images: [
      { src: "/images/dogs/tina.webp", alt: "Tina, a brindle rescue dog with pale eyes lying on a couch" },
    ],
  },
  {
    slug: "lena",
    name: "Lena",
    status: "adopted",
    sex: "Female",
    age: "Adult",
    summary:
      "A house-mannered companion whose person entered assisted living and could not take her along.",
    temperament: "Settled, polite, and happiest on a soft blanket nearby",
    care: "A quieter adult home that already understands indoor dog life",
    story: [
      "Lena lived as an older neighbor’s companion until that person moved into assisted living. Adult children could not take a dog, and a well-mannered girl who already knew furniture and quiet rooms needed a new place to land.",
      "She is a small brown-and-white girl who settles on a blanket as if she has always belonged there. She is looking for a calmer home that wants a polite housemate more than a project.",
    ],
    images: [
      { src: "/images/dogs/lena.webp", alt: "Lena, a small brown-and-white rescue dog resting on a red blanket" },
    ],
  },
  {
    slug: "dennis",
    name: "Dennis",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A compact golden boy left unpaid at a boarding kennel after a hunting-season reservation ran out.",
    temperament: "Cheerful, people-focused, and eager to stay close",
    care: "A family home and regular time outdoors without being treated as a working tool",
    story: [
      "Dennis was left at a boarding kennel after a hunting-season reservation ended and the bill stopped being paid. Staff would not keep him indefinitely, and a compact golden boy with a full-time smile needed a real home, not another reservation.",
      "He is short-legged, sturdy, and openly fond of people. He will do well with a family that wants a friendly companion for walks and couch time, not a dog kept only for a season.",
    ],
    images: [
      { src: "/images/dogs/dennis.jpg", alt: "Dennis, a compact golden rescue dog standing on pebbles" },
    ],
  },
  {
    slug: "buster",
    name: "Buster",
    status: "adopted",
    sex: "Male",
    age: "Young adult",
    summary:
      "A velcro black-and-white boy who waited at a warehouse gate every morning until a worker called for help.",
    temperament: "Affectionate, loyal, and happiest leaning on his person",
    care: "A home that can give him companionship through the day",
    story: [
      "Buster waited at a warehouse gate every morning for weeks. A dock worker started sharing breakfast with him, then realized the dog was not going home to anyone. That is when the rescue got the call.",
      "He is a black boy with a white chest who leans into people as if he has been waiting to do that all along. He wants a home that can keep him close and will not make him wait at another gate.",
    ],
    images: [
      { src: "/images/dogs/buster.jpg", alt: "Buster, a black rescue dog with a white chest leaning on a person" },
    ],
  },
  {
    slug: "melly",
    name: "Melly",
    status: "adopted",
    sex: "Female",
    age: "Senior",
    summary:
      "A soft-eyed senior left behind when her family relocated and a relative could not keep her.",
    temperament: "Gentle, dignified, and quietly hopeful",
    care: "A calmer home, a soft bed, and senior-aware veterinary follow-up",
    story: [
      "Melly’s family relocated and left her with a relative who could not keep a dog. She is a senior with a white muzzle and the kind of still, searching face that comes from losing every familiar room at once.",
      "She does not need a busy young-dog life. She needs a quieter home, a predictable meal, and someone who understands that her best years can still be kind ones.",
    ],
    images: [
      { src: "/images/dogs/melly.webp", alt: "Melly, a senior black rescue dog with a white muzzle" },
    ],
  },
  {
    slug: "beni",
    name: "Beni",
    status: "adopted",
    sex: "Male",
    age: "Adult",
    summary:
      "A polite hound who waited at the same street corner and offered a paw to anyone who stopped.",
    temperament: "Mannerly, affectionate, and eager to greet his people",
    care: "Leash walks in a neighborhood and a home that likes a hound at the door",
    story: [
      "A mail carrier noticed the same tan-and-white hound at the same corner for several routes. Beni would stand up, offer a paw, and wait as if he expected someone to claim him. After enough mornings, the carrier asked the rescue to pick him up.",
      "He is a well-built boy who already knows how to ask for contact without crowding. He is ready for a neighborhood home that will put a collar on him for good and let him keep that polite greeting.",
    ],
    images: [
      { src: "/images/dogs/beni.webp", alt: "Beni, a tan-and-white hound standing up to hold someone’s hands" },
    ],
  },
  {
    slug: "kira",
    name: "Kira",
    status: "adopted",
    sex: "Female",
    age: "Adult",
    summary:
      "A steady tan-and-white girl kept as an extra dog from a backyard litter and left when the rest were gone.",
    temperament: "Focused, loyal, and calmer with a clear routine",
    care: "A structured home, positive training, and time to become someone’s only dog",
    story: [
      "Kira came from a backyard litter kept as extra dogs. When the younger ones were gone, she was the adult left behind with no job and no person of her own.",
      "She is a tan-and-white girl with a serious, honest face and a strong wish to stay close. She will do best in a home that can give her routine, training, and the feeling of being chosen rather than leftover.",
    ],
    images: [
      { src: "/images/dogs/kira.webp", alt: "Kira, a tan-and-white rescue dog with a steady expression" },
    ],
  },
];

export const featuredDogSlugs = ["frida", "lola", "darko"] as const;
export const featuredStorySlugs = ["penny", "lola", "darko", "betty", "nina", "flo", "tina", "melly"] as const;
export const adoptionDogSlugs = [
  "penny",
  "flo",
  "poppy",
  "lana",
  "timo",
  "zuja",
  "gari",
  "brko",
  "mindy",
  "gara",
  "lepi",
  "tina",
  "lena",
  "dennis",
  "buster",
  "melly",
  "beni",
  "kira",
] as const;

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

export function adoptionDogs() {
  return adoptionDogSlugs
    .map((slug) => getDog(slug))
    .filter((dog): dog is Dog => Boolean(dog));
}

export function statusLabel(status: DogStatus) {
  if (status === "adopted") return "Adopted";
  if (status === "reserved") return "Reserved";
  return "Looking for a home";
}
