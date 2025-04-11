import glassImage from "@/assets/images/glass.png";
import mirrorImage from "@/assets/images/mirror.jpg";
import vgrooveImage from "@/assets/images/engraving.png";
import laminationImage from "@/assets/images/lamination.jpeg";
import bevellingImage from "@/assets/images/beveling.jpg";
import showerImage from "@/assets/images/shower.jpg";
import wallPanelImage from "@/assets/images/wallpanel.jpg";
import profilePartitionImage from "@/assets/images/profile.jpg";
import ledMirror from "@/assets/images/led.jpg";

export type ContentType = {
  title: string;
  description: string;
  details: string;
  image: string;
};

export const Content: ContentType[] = [
  {
    title: "Glass",
    description:
      "We offer all types of high-quality glass including Clear Float Glass, Toughened Glass, and Extra Clear Glass to suit every architectural and decorative need.",
    details:
      "Our glass range includes premium-grade Clear Float Glass ideal for windows and facades, Toughened Glass for safety and durability, and Extra Clear Glass for a crystal-clear aesthetic. Suitable for residential, commercial, and industrial applications.",
    image: glassImage,
  },
  {
    title: "Mirror",
    description:
      "Our fancy mirrors and brand mirrors add elegance and functionality to any space, perfect for homes, showrooms, and commercial interiors.",
    details:
      "Choose from a wide collection of mirrors including decorative mirrors, brand mirrors like Saint-Gobain, and customized cuts suitable for dressing areas, hallways, and more.",
    image: mirrorImage,
  },
  {
    title: "V-Groove",
    description:
      "Enhance your glass design with V-Groove patterns, adding depth and texture for a luxurious look.",
    details:
      "V-Groove glass designs are precisely etched into the surface, creating stylish patterns that reflect light beautifully. Perfect for doors, partitions, and decorative glass elements.",
    image: vgrooveImage,
  },
  {
    title: "Lamination",
    description:
      "We provide high-strength laminated glass solutions for safety, aesthetics, and UV protection.",
    details:
      "Our laminated glass is made by bonding layers of glass with interlayers, offering increased safety and sound insulation. Ideal for balconies, stair railings, and skylights.",
    image: laminationImage,
  },
  {
    title: "Bevelling And Cep",
    description:
      "We offer detailed edge finishing with bevelling and customized glass engraving (CEP) to give your glass a premium look.",
    details:
      "Bevelled edges add an elegant sparkle to mirrors and glass, while CEP (engraving) allows for personalized or artistic designs. Suitable for tabletops, mirrors, and decor panels.",
    image: bevellingImage,
  },
  {
    title: "Shower Cubical",
    description:
      "Our toughened shower cubicles combine safety and luxury for your bathroom space.",
    details:
      "We design and install sleek glass shower cubicles with stainless steel fittings, ensuring durability, easy maintenance, and modern style.",
    image: showerImage,
  },
  {
    title: "Wall Panneling",
    description:
      "Add sophistication to interiors with glass and mirror wall paneling tailored to your design.",
    details:
      "Glass and mirror wall panels reflect light and create a sense of space. Choose from plain, tinted, frosted, or antique mirror finishes to match your decor.",
    image: wallPanelImage,
  },
  {
    title: "Profile Partitions",
    description:
      "Modern glass partitions with aluminum profiles for offices, homes, and commercial spaces.",
    details:
      "Our profile partition systems use clear or frosted glass with slim aluminum frames to create stylish, functional divisions without compromising on openness and light.",
    image: profilePartitionImage,
  },
  {
    title: "Led Mirror",
    description:
      "Illuminate your space with our modern LED mirrors, combining style and functionality for bathrooms, dressing areas, and more.",
    details:
      "Our LED mirrors are designed to bring a sleek, modern touch to your interiors while providing optimal lighting. They feature energy-efficient LED lights embedded around the mirror, offering soft yet bright illumination perfect for grooming and makeup. Available in various shapes and sizes, these mirrors come with features like touch sensors, anti-fog technology, and customizable lighting options. Ideal for bathrooms, salons, wardrobes, and premium interiors.",
    image: ledMirror,
  },
];
