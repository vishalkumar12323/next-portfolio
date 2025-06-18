import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectData } from "./projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      {projectData.map((p) => (
        <Link href={`/projects/${p.id}`} key={p.id}>
          <Card className="w-full max-w-sm rounded-md h-fit hover:shadow-lg dark:hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className=" md:text-xl font-normal capitalize">
                {p.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Image src={p.src} alt={p.name} />
              <CardDescription className="mb-4">
                {p.description}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
