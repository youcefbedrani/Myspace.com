import { useState } from "react";
import "../../styles/projects.scss";

const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "A scalable online store built with React, Laravel, and PostgreSQL.",
    link: "#",
  },
  {
    title: "Real-time Chat App",
    description:
      "A React Native app for seamless communication, using Firebase for backend.",
    link: "#",
  },
  {
    title: "DevOps Pipeline",
    description: "CI/CD pipeline setup using Docker, Jenkins, and AWS.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills in React, Vue.js, and SCSS.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills in React, Vue.js, and SCSS.",
    link: "#",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="projects-container">
      <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold mb-8 mr-2">
        My Projects is the
        <span className="linear"> world where I </span> can show my hands
      </h1>
      <div className="projects-grid">
        {projectsData
          .slice(0, showAll ? projectsData.length : 4)
          .map((project, index) => (
            <div
              key={index}
              className={`project-card flex flex-col sm:flex-row justify-center items-center ${
                index === 3 && !showAll ? "blurred-project" : "project-card"
              } ${showAll ? "animate-show" : ""} p-4 sm:p-6`}
            >
              <div className="headMove text-3xl sm:text-5xl font-bold text-blue-600 mb-2 sm:mb-0 sm:mr-4">
                <h1>{index + 1}</h1>
              </div>
              <div className="text-center">
                <h3 className="project-title text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="project-description text-sm sm:text-base text-gray-700">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="project-link text-blue-500 hover:underline mt-2 block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        {!showAll && (
          <div className="see-all-container">
            <button className="see-all-button" onClick={handleClick}>
              See All Projects 👩‍💻
            </button>
          </div>
        )}
        {showAll && (
          <div className="see-all-container">
            <button className="see-all-button" onClick={handleClick}>
              Show Less Projects 👩‍💻
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
