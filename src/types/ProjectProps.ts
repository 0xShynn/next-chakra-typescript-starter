import { StaticImageData } from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  image: StaticImageData;
  categories: string[];
  url: string;
};
