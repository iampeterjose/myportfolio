import { stack } from "../data";

export interface Skills {
  name: string;
  icon: string;
}

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 bg-[#F9FAFB] dark:bg-[#1F2937]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-10">
          Skills / Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {stack.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center bg-white dark:bg-[#111827] shadow-md dark:shadow-sm rounded-lg p-4 transition-transform hover:scale-105 hover:shadow-lg dark:hover:shadow-md"
            >
              <img
                src={icon}
                alt={name}
                className="w-10 h-10 mb-2"
                loading="lazy"
              />
              <p className="text-[#111827] dark:text-[#F9FAFB] text-sm font-medium">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;