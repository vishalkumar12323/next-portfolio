import Model from "@/components/main/model";
import { TProjectProps, projectData } from "../../projects";
import {
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function ProjectModel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project: TProjectProps = projectData.find((p) => p.id === id)!;
  return (
    <Model>
      <div className="p-4">
        <CardHeader className="pb-3 px-0">
          <CardTitle className="md:text-xl font-normal capitalize bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
            {project.name}
          </CardTitle>
        </CardHeader>
        <hr className="mb-3 dark:bg-gray-500 bg-gray-700" />
        <CardContent className="px-0">
          <Image
            alt={project.name}
            src={project.src}
            className="w-full h-[500px] object-cover rounded-md mb-3"
          />

          <CardDescription className="text-[14px] md:text-[16px] mb-3">
            {project.description}
          </CardDescription>

          <div className="mb-3">
            <h3 className="text-accent-foreground">Tech Stack :-</h3>
          </div>
        </CardContent>

        <CardAction className="justify-self-start space-x-2">
          <Link href={project.liveLink ?? "#"}>
            <Button
              variant={"outline"}
              className="rounded-sm cursor-pointer shadow hover:shadow-lg transition-shadow capitalize"
            >
              <span> go to project</span> <MoveRight />
            </Button>
          </Link>
          <Link href={project.githubLink ?? "#"}>
            <Button
              variant={"outline"}
              className="rounded-sm cursor-pointer shadow hover:shadow-lg transition-shadow capitalize"
            >
              <span>go to source code</span> <MoveRight />
            </Button>
          </Link>
        </CardAction>
      </div>
    </Model>
  );
}
