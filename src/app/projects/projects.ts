import { StaticImageData } from "next/image";
import photo1 from "./images/book-my-hotel.png";
import photo2 from "./images/drivers.png";
import photo3 from "./images/sleepy.png";

export type TProjectProps = {
  id: string;
  name: string;
  src: StaticImageData;
  description: string;
  liveLink?: string;
  githubLink?: string;
};

export const projectData: TProjectProps[] = [
  {
    id: "1",
    name: "hotel management platform",
    src: photo1,
    description:
      "A full-stack hotel and restaurant booking platform built with React.js, RTK Query, and Node.js. Implements role-based authentication using JWT and manages data with PostgreSQL and Prisma ORM. Supports Admin, Vendor, and Customer roles with secure access control.",
    liveLink: "https://book-my-hotel-three.vercel.app/",
    githubLink: "https://github.com/vishalkumar12323/book-my-hotel",
  },
  {
    id: "2",
    name: "sleepy",
    src: photo2,
    description:
      "A next.js app where users can search cars by name or filter by price, brand, and fuel type. for the data management uses NeonDB with prisma ORM.",
    githubLink: "https://github.com/vishalkumar12323/DreamDrive",
    liveLink: "https://dream-drive.vercel.app/",
  },

  {
    id: "3",
    name: "spinny-lite",
    src: photo3,
    description:
      "Daily Sleeps is a Next.js full stack web app where users can log their sleep entries. it's offers a seamless experience for improving sleep habits.",

    liveLink: "https://daily-sleeps.vercel.app",
    githubLink: "https://github.com/vishalkumar12323/daily-sleeps",
  },
];
