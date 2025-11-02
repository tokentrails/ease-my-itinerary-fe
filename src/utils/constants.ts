// Import images from assets
import jaipurImg from '../assets/images/Jaipure/2.jpg';
import varansiImg from '../assets/images/varanasi/6.jpg';
import goaImg from '../assets/images/goa/5.jpg';
import alleppeyImg from '../assets/images/Alleppey/5.jpg';
import mumbaiImg from '../assets/images/Mumbai/5.jpg';
import rishikeshImg from '../assets/images/Rishikesh/2.jpg';
import ladakhImg from '../assets/images/Ladakh/5.jpg';
import udaipurImg from '../assets/images/Udaipur/2.jpg';
import chikmagaluruImg from '../assets/images/chikmagaluru/1.jpg';

export const guideCities = [
  {
    name: "Jaipur",
    description:
      "Pink City: forts, palaces, vibrant bazaars. Rich history and culture.",
    image_url: [jaipurImg],
  },
  {
    name: "Varanasi",
    description:
      "Spiritual heart: Ganges ghats, temples, mesmerizing Ganga Aarti.",
    image_url: [varansiImg],
  },
  {
    name: "Goa",
    description:
      "India's premier beaches: vibrant nightlife, water sports, Portuguese charm.",
    image_url: [goaImg],
  },
  {
    name: "Alleppey (Kerala)",
    description:
      "Venice of East: tranquil backwaters, houseboats, serene village life.",
    image_url: [alleppeyImg],
  },

  {
    name: "Mumbai",
    description:
      "Bollywood, finance capital. Iconic Gateway, Marine Drive, street food.",
    image_url: [mumbaiImg],
  },
  {
    name: "Rishikesh",
    description:
      "Yoga Capital: ashrams, rafting, trekking in Himalayan foothills.",
    image_url: [rishikeshImg],
  },
  {
    name: "Ladakh (Leh)",
    description:
      "Himalayan desert: mountains, lakes, monasteries. Adventure, Buddhist culture.",
    image_url: [ladakhImg],
  },
  {
    name: "Udaipur",
    description:
      "City of Lakes: romantic palaces on water. Majestic and serene.",
    image_url: [udaipurImg],
  },
  {
    name: "Chikmagaluru",
    description:
      "Hill station: coffee estates, treks, waterfalls. Nature, adventure.",
    image_url: [chikmagaluruImg],
  },
];


export function capitalizeFirstLetter(str:string) {
  if (!str) {
    return ""; // Handle empty or null strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}