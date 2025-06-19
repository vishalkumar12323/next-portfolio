import { projectData } from "./projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      <section>
        <div className="project-heading after:[35%] leading-12 md:leading-10 md:after:left-[42%] after:top-12 after:bg-gray-700 dark:after:bg-gray-300 text-center mt-5 text-2xl md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
          SOME INSIDE PROJECTS, I'VE DONE
        </div>
        <div className="py-6 mt-6 grid grid-cols-1 place-items-center md:place-items-baseline gap-5 md:gap-10 md:grid-cols-2">
          {projectData.map((p) => (
            <Link
              href={`/projects/${p.id}`}
              key={p.id}
              className="hover:scale-105 rounded-md  drop-shadow-2xl dark:shadow-gray-800/80 transition-transform duration-500"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={600}
                className="h-[300px] object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
        <div className="text-center my-4">
          <p className="dark:text-gray-400 text-gray-700 text-[14px] md:text-[16px]">
            Click on each project to see the link for it and get more
            information.
          </p>
        </div>
      </section>
    </>
  );
}
