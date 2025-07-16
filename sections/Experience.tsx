import { experience } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-[#F9FAFB] dark:bg-[#1F2937]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#3B82F6] dark:text-[#60A5FA] mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-[#3B82F6] dark:border-[#60A5FA] pl-6 space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-3 top-1.5 w-4 h-4 bg-[#3B82F6] dark:bg-[#60A5FA] rounded-full border-2 border-white dark:border-[#1F2937]" />

              {/* Card */}
              <div className="bg-white dark:bg-[#111827] rounded-lg shadow-md border border-[#E5E7EB] dark:border-[#374151] p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827] dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-[#3B82F6] dark:text-[#60A5FA] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-4 text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
