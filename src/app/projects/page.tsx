import { projectData } from "./projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <section>
      <div className="project-heading after:bg-gray-700 after:mb-3 dark:after:bg-gray-400 text-center mt-5 mb-4 text-[20px] md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
        <h2 className="leading-12 md:leading-10">
          SOME INSIDE PROJECTS, I&apos;VE DONE
        </h2>
      </div>

      <div className="mt-6 mb-3 w-full">
        <p className="text-center w-full leading-6 text-gray-800 dark:text-gray-300">
          These are all the projects that I have created, some are still in
          development which I keep updating, Click on each project to see the
          link for it and get more information.
        </p>
      </div>

      <div className="py-6 mt-6 grid grid-cols-1 place-items-center md:place-items-baseline gap-y-10 md:gap-10 md:grid-cols-2">
        {projectData.map((p) => (
          <Link
            href={`/projects/${p.id}`}
            key={p.id}
            className="hover:scale-105 rounded-lg  drop-shadow-2xl dark:shadow-gray-800/80 transition-transform duration-500"
          >
            <Image
              src={p.src[0]}
              alt={p.name}
              width={600}
              className="h-[300px] object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
