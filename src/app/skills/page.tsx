import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const skills = [
  {
    id: "1",
    name: "Html5",
  },
  {
    id: "2",
    name: "Css3",
  },
  {
    id: "3",
    name: "Tailwindcss",
  },
  {
    id: "4",
    name: "Javascript",
  },
  {
    id: "5",
    name: "UI/UX",
  },
  {
    id: "6",
    name: "Python",
  },
  {
    id: "7",
    name: "Typescript",
  },
  {
    id: "8",
    name: "Node.js",
  },
  {
    id: "9",
    name: "Next.js",
  },
  {
    id: "10",
    name: "React.js",
  },
  {
    id: "11",
    name: "Postgres",
  },
  {
    id: "12",
    name: "Docker",
  },
  {
    id: "13",
    name: "Express.js",
  },
  {
    id: "14",
    name: "Git/Github",
  },
  {
    id: "15",
    name: "Mongodb",
  },
  {
    id: "16",
    name: "Firebase",
  },
  {
    id: "17",
    name: "AI/ChatGPT",
  },
  {
    id: "18",
    name: "C",
  },
  {
    id: "19",
    name: "DSA",
  },
  {
    id: "20",
    name: "Authentication",
  },
  {
    id: "21",
    name: "Security",
  },
  {
    id: "22",
    name: "Computer Science",
  },
];
export default function ExperiencePage() {
  return (
    <Card className="my-4 md:my-8 p-2 md:p-4 rounded-sm border-none bg-accent">
      <div className="project-heading after:bg-gray-700 dark:after:bg-gray-400 text-center mt-5 mb-4 text-[20px] md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
        <h2 className="leading-12 md:leading-10 uppercase">
          My Professional Skills
        </h2>
      </div>

      <div className="mb-3 w-full">
        <p className="text-center w-full leading-6 text-gray-800 dark:text-gray-300">
          These are the top skills that I've learned and used in my projects,
          some skills I'm learning currently, Click on each one of them to learn
          more.
        </p>
      </div>

      <div className="mx-auto max-w-[110rem] mt-8 mb-8 text-center">
        {skills.map((s) => (
          <Skill name={s.name} key={s.id} />
        ))}
      </div>
    </Card>
  );
}

const Skill = ({ name }: { name: string }) => {
  return (
    <Dialog>
      <span className="inline-block w-[17rem] py-4 px-3 m-2 shadow-md border hover:shadow-lg dark:bg-accent cursor-pointer">
        <DialogTrigger className="cursor-pointer w-full h-full">
          {name}
        </DialogTrigger>
        <DialogContent className="bg-accent rounded-sm">
          <DialogTitle></DialogTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a
          provident nostrum commodi cum! Esse quibusdam ipsam sapiente
          repellendus consequatur fuga, voluptates id. Architecto, voluptate
          porro. Cupiditate inventore nemo corporis.
        </DialogContent>
      </span>
    </Dialog>
  );
};
