import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail } from "lucide-react";

const projects = [
  {
    title: "C++ Car Racing Game",
    description:
      "2D racing game built with object-oriented C++ and external libraries.",
    tech: ["C++", "OOP", "Graphics Libs"],
    link: "https://github.com/steez00/cpp-car-game"
  },
  {
    title: "Job-Seeking App (Team Project)",
    description:
      "Team project using Waterfall methodology to prototype a job-matching app.",
    tech: ["UI Design", "Project Management"],
    link: "https://github.com/steez00/job-seeking-app"
  },
  {
    title: "Python Space Invaders",
    description:
      "Space Invaders clone using Python and Pygame, built for A-Level coursework.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/steez00/space-invaders"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Stephen Etukudoh</h1>
        <p className="text-gray-600 mt-2">
          Graduate Computer Scientist | Aspiring Software & Data Engineer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:stephenetukudoh@gmail.com">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </a>
          <a
            href="https://github.com/steez00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">GitHub</Button>
          </a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
