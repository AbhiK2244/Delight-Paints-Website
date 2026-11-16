import {
  TiWeatherPartlySunny,
} from "react-icons/ti";
import { FiShield, FiAward } from "react-icons/fi";

export const popularChoices = [
  {
    id: 1,
    type: "Exterior Emulsion",
    title: "Life Guard",
    description: "Beauty that protects,\nperformance that lasts.",
    image: "./images/popularchoices/exterior.jpeg",
    buttonText: "View Product",
    slug: "/product/life-guard-luxury-exterior-emulsion",
    featured: true,
    features: [
      {
        text: "Weather Protection",
        icon: TiWeatherPartlySunny,
      },
      {
        text: "PU & Silicon Technology",
        icon: FiShield,
      },
      {
        text: "10 Years Performance Warranty",
        icon: FiAward,
      },
    ],
  },
  {
    id: 2,
    type: "Interior Emulsion",
    title: "Super Shine",
    description: "Rich and Smooth Finish \n For Your Walls.",
    image: "./images/popularchoices/interior.jpeg",
    buttonText: "View Product",
    featured: false,
    slug: "/product/super-shine-luxury-exterior-emulsion"
  },
  {
    id: 3,
    type: "Waterproofing",
    title: "Leak Proof",
    description: "Excellent Water Resistance\n Prevents Water Seepage.",
    image: "./images/popularchoices/leak-proof.jpeg",
    buttonText: "View Product",
    featured: false,
    slug: "/product/leak-proof"
  },
];
