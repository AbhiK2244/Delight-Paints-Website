import {
  TiWeatherPartlySunny,
} from "react-icons/ti";
import { FiShield, FiAward } from "react-icons/fi";

export const popularChoices = [
  {
    id: 1,
    type: "Exterior Emulsion",
    title: "Marble Glow",
    description: "Beauty that protects,\nperformance that lasts.",
    image: "./images/popularchoices/exterior.png",
    buttonText: "View Product",
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
    title: "Princess",
    description: "Smooth walls, Beautiful homes.",
    image: "./images/popularchoices/interior.png",
    buttonText: "View Product",
    featured: false,
  },
  {
    id: 3,
    type: "Acrylic Wall Paint",
    title: "Smooth Finish",
    description: "The perfect base for a\nflawless wall.",
    image: "./images/popularchoices/acrylic.png",
    buttonText: "View Product",
    featured: false,
  },
];
