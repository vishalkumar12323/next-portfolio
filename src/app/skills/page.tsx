import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const skills = [
  {
    id: "1",
    name: "Html5",
    description: "Hyper Text Markup Language is used for adding markup",
  },
  {
    id: "2",
    name: "Css3",
    description:
      "When I first got to CSS years ago, I was constantly looking for different frameworks and libraries to use with it. But now, I create my own CSS frameworks/libraries to have the best performance and total control over everything without going through many headaches.I have a good knowledge of CSS3, SASS/LESS and designing responsive web pages.",
  },
  {
    id: "3",
    name: "Tailwindcss",
    description: "",
  },
  {
    id: "4",
    name: "Javascript",
    description:
      "JavaScript is the language that I use the most for developing web applications and also for back-end development using Node.js. I've been using the language extensively for the past 6 years, and I have developed and used many different frameworks and libraries such as React.js (my go-to framework for front-end development for the past 5 years), Angular, Vue and many others.Mostly for production applications, I use TypeScript, which makes the job of working in teams way easier because of the type management system",
  },
  {
    id: "5",
    name: "UI/UX",
    description:
      "Designing user interfaces has always been a great passion of mine. I mostly design and plan the interfaces first with a good old pen and paper, and then complete the mockups with details using an application like Figma or Adobe XD, and finally implement them in code. I also have experience with Graphic Design, and I sometimes design my own icons, images and illustrations when needed.",
  },
  {
    id: "6",
    name: "Python",
    description:
      "I mostly use Python for Data Science, Machine learning, and Automation and Scripting. I love how simple the language is and how easy it is to automate stuff with it. I have also been teaching Python for first-time programmers, and I think it's a perfect choice for those who want to start learning programming.",
  },
  {
    id: "7",
    name: "Typescript",
    description: "",
  },
  {
    id: "8",
    name: "Node.js",
    description:
      "Node.js has been my go-to technology for developing back-end applications for the past 6 years since I stopped using PHP. I love its speed and its incredible management of I/O and scalability. I also love how I can easily combine C/C++ with it whenever I hit a limitation.",
  },
  {
    id: "9",
    name: "Next.js",
    description: "While for frontend and complex UI development React.js",
  },
  {
    id: "10",
    name: "React.js",
    description:
      "React.js is my first UI/UX design library that I learned, It allows developers to create complex UIs from small, isolated pieces of code called components.",
  },
  {
    id: "11",
    name: "Postgres",
    description: "",
  },
  {
    id: "12",
    name: "Docker",
    description: "",
  },
  {
    id: "13",
    name: "Express.js",
    description: "",
  },
  {
    id: "14",
    name: "Git/Github",
    description:
      "Comparing changes, reverting to previous versions, branching and merging, and writing good commits are all things I use daily with Git. And also Github gives a remote storage for storing and accessing all projects that you working, without worrying about to lose your porjects/files.",
  },
  {
    id: "15",
    name: "Mongodb",
    description:
      "When I don't have complex data that are related to each other in many different ways, or I have data that doesn't have a defined structure, I go with MongoDB. Mostly, when I use MongoDB, I also end up using an SQL database along with it, but still, for quickly developing a project and adaptability, it could be a great choice.",
  },
  {
    id: "16",
    name: "Firebase",
    description: "",
  },
  {
    id: "17",
    name: "AI/ChatGPT",
    description: "",
  },
  {
    id: "18",
    name: "C",
    description: "",
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
          <Skill name={s.name} key={s.id} description={s.description} />
        ))}
      </div>
    </Card>
  );
}

const Skill = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <Dialog>
      <span className="inline-block w-[17rem] py-4 px-3 m-2 shadow-md border hover:shadow-lg dark:bg-accent cursor-pointer">
        <DialogTrigger className="cursor-pointer w-full h-full">
          {name}
        </DialogTrigger>
        <DialogContent className="bg-accent rounded-sm">
          <DialogTitle className="font-normal text-xl">{name}</DialogTitle>
          <p className="text-[15px]">{description}</p>
        </DialogContent>
      </span>
    </Dialog>
  );
};
