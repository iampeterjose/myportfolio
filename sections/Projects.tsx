import { personal_projects, volunteer_projects } from "../data";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 px-4 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Personal Projects Section */}
        <h2 className="text-3xl font-bold mb-10 text-[#3B82F6] dark:text-[#60A5FA] text-center">
          Personal Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {personal_projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg p-6 flex flex-col group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover bg-[#E5E7EB] dark:bg-[#374151] transform transition-transform duration-300 group-hover:scale-120"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#111827] dark:text-[#F9FAFB]">
                {project.title}
              </h3>
              <p className="text-[#6B7280] dark:text-[#D1D5DB] mb-3 flex-1">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-[#3B82F6] dark:text-[#60A5FA]">
                  Tech:
                </span>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-[#111827] dark:text-[#F9FAFB] px-2 py-0.5 rounded text-xs"
                    >
                      <img
                        src={tech}
                        alt="tech icon"
                        className="w-6 h-6 object-contain"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-auto">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10B981] font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Projects Section */}
        <h2 className="text-3xl font-bold mb-10 text-[#10B981] dark:text-green-400 text-center">
          Volunteer Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volunteer_projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg p-6 flex flex-col group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover bg-[#E5E7EB] dark:bg-[#374151] transform transition-transform duration-300 group-hover:scale-120"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#111827] dark:text-[#F9FAFB]">
                {project.title}
              </h3>
              <p className="text-[#6B7280] dark:text-[#D1D5DB] mb-3 flex-1">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-[#3B82F6] dark:text-[#60A5FA]">
                  Tech:
                </span>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-[#111827] dark:bg-[#374151] text-[#111827] dark:text-[#F9FAFB] px-2 py-0.5 rounded text-xs"
                    >
                      <img
                        src={tech}
                        alt="tech icon"
                        className="w-6 h-6 object-contain"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-auto">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10B981] font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
