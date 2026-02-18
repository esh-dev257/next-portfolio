import { ParallaxLayer } from './types';
import pic1 from "./assets/city1/1.png"
import pic2 from "./assets/city1/2.png"
import pic3 from "./assets/city1/3.png"
import pic4 from "./assets/city1/4.png"
import pic5 from "./assets/city1/5.png"


// NOTE: Ensure images are named 1.png (back) to 5.png (front) in your public folder.

export const BACKGROUND_LAYERS: ParallaxLayer[] = [
  {
    id: 'layer-1',
    src: pic1, // Sky / Stars
    speed: 0.05,
    zIndex: 0,
    alt: 'Pixel Art Sky'
  },
  {
    id: 'layer-2',
    src: pic2, // Clouds
    speed: 0.15,
    zIndex: 10,
    alt: 'Pixel Art Clouds'
  },
  {
    id: 'layer-3',
    src: pic3, // Far City Skyline
    speed: 0.3,
    zIndex: 20,
    alt: 'Far City Skyline'
  },
  {
    id: 'layer-4',
    src: pic4, // Mid City Skyline
    speed: 0.5,
    zIndex: 30,
    alt: 'Mid City Skyline'
  }
];

// Layer 5 is the foreground (Closest Buildings) that connects physically to the content
export const FOREGROUND_LAYER = {
  id: 'layer-5',
  src: pic5,
  alt: 'Foreground City'
};

export const MAX_SCROLL_HEIGHT = '300vh';