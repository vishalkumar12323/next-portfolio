import { StaticImageData } from "next/image";
import photo1 from "./images/book-my-hotel.png";
import photo2 from "./images/drivers.png";
import photo3 from "./images/sleepy.png";

export type TProjectPropsType = {
  id: string;
  name: string;
  src: StaticImageData;
  description: string;
};

export const projectData: TProjectPropsType[] = [
  {
    id: "p-1",
    name: "hotel management platform",
    src: photo1,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis reprehenderit sint dolor maxime rerum ullam dicta molestias laudantium ea debitis id consequatur ipsa iste animi omnis, quia repellat iure.",
  },
  {
    id: "p-2",
    name: "sleepy",
    src: photo2,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis reprehenderit sint dolor maxime rerum ullam dicta molestias laudantium ea debitis id consequatur ipsa iste animi omnis, quia repellat iure.",
  },
  {
    id: "p-3",
    name: "spinny-lite",
    src: photo3,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis reprehenderit sint dolor maxime rerum ullam dicta molestias laudantium ea debitis id consequatur ipsa iste animi omnis, quia repellat iure.",
  },
];
