export const site = {
  name: "Leona’s Brave Haven",
  founder: "Linda Jenkins",
  motto: "Saving lives. Giving hope. Changing Tomorrow.",
  email: "info@leonasbravehaven.org",
  location: {
    street: "14500 Myakka Road",
    city: "Sarasota",
    state: "FL",
    zip: "34240",
    country: "USA",
    region: "Florida, USA",
  },
  impactDogsSaved: "300+",
  rescueCadence:
    "The organization fights high-kill shelter deadlines twice a week.",
  description:
    "Leona’s Brave Haven rescues abandoned and injured dogs across Florida, providing urgent care, rehabilitation, and safe shelter. More than 300 dogs have been saved, and more lives still need help.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  donateUrl: "https://gofund.me/04b5d2fb0",
  youtubeUrl: "https://www.youtube.com/@leonabravehaven",
  youtubeChannelId: "UCqegNAo2TN2N5S4sVq_ADWQ",
  youtubeLatestVideoId: "tBygQvb5Q7I",
  whatsappUrl: "https://wa.me/message/YDPE6CDH6OSJD1",
} as const;

export const youtubeEmbedUrl = `https://www.youtube.com/embed/${site.youtubeLatestVideoId}?list=UU${site.youtubeChannelId.slice(2)}`;

export const addressLines = [
  site.name,
  site.location.street,
  `${site.location.city}, ${site.location.state} ${site.location.zip}`,
  site.location.country,
] as const;

export const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/meet-the-dogs", label: "Meet the Dogs" },
  { href: "/rescue-stories", label: "Rescue Stories" },
  { href: "/adoption", label: "Adoption" },
  { href: "/contact", label: "Contact" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/meet-the-dogs", label: "Meet the Dogs" },
  { href: "/rescue-stories", label: "Rescue Stories" },
  { href: site.donateUrl, label: "Donate" },
  { href: "/adoption", label: "Adoption" },
  { href: "/contact", label: "Contact" },
] as const;

export const donationCategories = [
  {
    id: "food-shelter",
    title: "Food and shelter",
    summary: "Daily meals, bedding, and a safe place to rest.",
  },
  {
    id: "emergency-medical",
    title: "Emergency medical care",
    summary: "Urgent veterinary treatment for injured and ill dogs.",
  },
  {
    id: "transport",
    title: "Rescue transportation",
    summary: "Fuel and transport that move dogs out of high-risk situations.",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation",
    summary: "Recovery support while dogs regain strength and trust.",
  },
  {
    id: "ongoing-care",
    title: "Ongoing care",
    summary: "Continued care while dogs wait for a foster or adoptive home.",
  },
] as const;

export function formatAddress(separator = "\n") {
  return addressLines.join(separator);
}

export function mapsSearchUrl() {
  const query = `${site.location.street}, ${site.location.city}, ${site.location.state} ${site.location.zip}, ${site.location.country}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
