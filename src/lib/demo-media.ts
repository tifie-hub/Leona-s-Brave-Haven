export type LicensedPhoto = {
  src: string;
  alt: string;
  photographer: string;
  unsplashUrl: string;
};

export const photos = {
  hero: {
    src: "/images/hero-dog-on-shore.jpg",
    alt: "A brown dog standing on wet sand near the water, looking toward the camera",
    photographer: "Oscar Sutton",
    unsplashUrl: "https://unsplash.com/photos/brown-dog-on-seashore-jn7uVeCdf6U",
  },
  companions: {
    src: "/images/two-dogs-together.jpg",
    alt: "Two dogs resting close together on a wooden surface",
    photographer: "Krista Mangulsone",
    unsplashUrl:
      "https://unsplash.com/photos/two-brown-and-white-dogs-running-on-green-grass-field-during-daytime-TzjMd7i5WQI",
  },
  runningPair: {
    src: "/images/two-dogs-running.jpg",
    alt: "Two dogs running side by side on grass",
    photographer: "James Barker",
    unsplashUrl:
      "https://unsplash.com/photos/two-brown-and-white-dogs-running-on-green-grass-field-during-daytime-tMV6xuYSB2c",
  },
  resting: {
    src: "/images/dog-resting-outdoors.jpg",
    alt: "A dog lying in grass and looking toward the camera",
    photographer: "Andrew Pougher",
    unsplashUrl:
      "https://unsplash.com/photos/black-and-white-short-coated-dog-on-green-grass-field-during-daytime-iuqqadN4HYA",
  },
  demoDogs: [
    {
      src: "/images/demo-dog-01.jpg",
      alt: "A golden retriever looking toward the camera",
      photographer: "James Barker",
      unsplashUrl:
        "https://unsplash.com/photos/adult-golden-retriever-2FPjlAyMQTA",
    },
    {
      src: "/images/demo-dog-02.jpg",
      alt: "A fluffy cream-colored dog standing in a field",
      photographer: "Tadeusz Lakota",
      unsplashUrl:
        "https://unsplash.com/photos/white-long-coated-dog-on-green-grass-field-during-daytime-iSeF0rYlUrA",
    },
    {
      src: "/images/demo-dog-03.jpg",
      alt: "A smiling tricolor dog looking up",
      photographer: "Berkay Gumustekin",
      unsplashUrl:
        "https://unsplash.com/photos/black-white-and-tan-dog-Qb7_2P_unX4",
    },
    {
      src: "/images/demo-dog-04.jpg",
      alt: "A brown dog looking upward against a dark background",
      photographer: "James Barker",
      unsplashUrl: "https://unsplash.com/photos/brown-dog-wearing-blue-denim-collar-5PVXkqt2s9k",
    },
    {
      src: "/images/demo-dog-05.jpg",
      alt: "A golden puppy lying on a pale surface",
      photographer: "Karsten Winegeart",
      unsplashUrl:
        "https://unsplash.com/photos/short-coated-tan-dog-Qb7_2P_unX4",
    },
    {
      src: "/images/demo-dog-06.jpg",
      alt: "A brown dog with a white chest looking at the camera",
      photographer: "Alvan Nee",
      unsplashUrl:
        "https://unsplash.com/photos/brown-and-white-short-coated-puppy-T-0EW-SEbsE",
    },
  ],
} as const satisfies Record<string, LicensedPhoto | LicensedPhoto[]>;

export const demonstrationDisclaimer =
  "The photographs on this page are licensed demonstration images. They are not photographs of dogs currently in the care of Leona’s Brave Haven, and they do not represent verified rescue cases, medical histories, or adoption listings.";
