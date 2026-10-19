export type LicensedPhoto = {
  src: string;
  alt: string;
  photographer: string;
  unsplashUrl: string;
};

export const photos = {
  hero: {
    src: "/images/hero-dog-portrait.jpg",
    alt: "A reddish-brown dog looking toward the camera with a soft outdoor background",
    photographer: "Unsplash",
    unsplashUrl: "https://unsplash.com/photos/1544568100-847a948585b9",
  },
  companions: {
    src: "/images/two-dogs-together.jpg",
    alt: "Two corgis looking up toward the camera",
    photographer: "Unsplash",
    unsplashUrl: "https://unsplash.com/photos/1551717743-49959800b1f6",
  },
  runningPair: {
    src: "/images/two-dogs-running.jpg",
    alt: "A corgi and a small terrier running along a dirt path",
    photographer: "Unsplash",
    unsplashUrl: "https://unsplash.com/photos/1548199973-03cce0bbc87b",
  },
  resting: {
    src: "/images/dog-resting-outdoors.jpg",
    alt: "A golden retriever looking toward the camera against a blue background",
    photographer: "Unsplash",
    unsplashUrl: "https://unsplash.com/photos/1558788353-f76d92427f16",
  },
  demoDogs: [
    {
      src: "/images/demo-dog-01.jpg",
      alt: "A golden retriever puppy sitting outdoors with a white tulip in its mouth",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1552053831-71594a27632d",
    },
    {
      src: "/images/demo-dog-02.jpg",
      alt: "A brown and white dog standing on a sandy beach",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1587300003388-59208cc962cb",
    },
    {
      src: "/images/demo-dog-03.jpg",
      alt: "A beagle looking toward the camera with its tongue visible",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1543466835-00a7907e9de1",
    },
    {
      src: "/images/demo-dog-04.jpg",
      alt: "A chocolate-colored dog looking up with its tongue out",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1518717758536-85ae29035b6d",
    },
    {
      src: "/images/demo-dog-05.jpg",
      alt: "A husky looking to the side against a dark indoor background",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1568572933382-74d440642117",
    },
    {
      src: "/images/demo-dog-06.jpg",
      alt: "A corgi puppy sitting in front of an orange background",
      photographer: "Unsplash",
      unsplashUrl: "https://unsplash.com/photos/1537151625747-768eb6cf92b2",
    },
  ],
} as const satisfies Record<string, LicensedPhoto | LicensedPhoto[]>;

export const demonstrationDisclaimer =
  "The photographs on this page are licensed demonstration images. They are not photographs of dogs currently in the care of Leona’s Brave Haven, and they do not represent verified rescue cases, medical histories, or adoption listings.";
