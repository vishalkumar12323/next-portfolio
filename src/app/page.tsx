import React, { lazy } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Profile = lazy(() => import("@/components/main/profile"));

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl text-muted-foreground mb-2">Hi 👋</p>
          <h1
            className={
              "text-3xl sm:text-5xl md:text-7xl font-extrabold px-0 py-4 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800"
            }
          >
            I&apos;m Vishal Kumar
          </h1>
          <p className="text-muted-foreground text-lg mb-6 text-center md:text-start">
            Passionate and results-driven Full-Stack Web Developer with 2.5
            years of hands-on experience in building responsive front-end
            interfaces and scalable back-end APIs. Proficient in JavaScript,
            React.js, Node.js, PostgreSQL, and Docker, with a strong foundation
            in web architecture, RESTful services, and modern UI/UX principles.
            Excels in building full-featured web applications and solving
            complex problems in dynamic environments.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-6 flex-wrap">
            <Link
              href="https://linkedin.com/in/vishal-ninaniya-123"
              target="_blank"
            >
              <Button variant="outline" className="cursor-pointer shadow-md">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com/YOUR_HANDLE" target="_blank">
              <Button variant="outline" className="cursor-pointer shadow-md">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </Link>
            <Link href="https://github.com/vishalkumar12323" target="_blank">
              <Button variant="outline" className="cursor-pointer shadow-md">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>

          <Button
            variant={"outline"}
            className="cursor-pointer px-6 py-3 text-md rounded-sm shadow-md"
          >
            Resume
          </Button>
        </div>
        <React.Suspense fallback={<div>loading...</div>}>
          <Profile />
        </React.Suspense>
      </div>
    </section>
  );
}
