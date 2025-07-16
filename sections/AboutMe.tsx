const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-4 text-center bg-white dark:bg-[#1F2937] transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#3B82F6] dark:text-[#60A5FA]">About Me</h2>
        <p className="text-lg text-[#111827] dark:text-[#F9FAFB] mb-4">
          I'm Peter, a Front-End Developer and Tech Support Professional with a strong background in IT and web development. I love building clean, user-friendly interfaces and solving real-world problems with technology.
        </p>
        <p className="text-[#6B7280] dark:text-[#D1D5DB] mb-4">
          Passionate about learning new frameworks, collaborating with creative teams, and making tech accessible for everyone.
        </p>
        <p className="text-[#6B7280] dark:text-[#D1D5DB] mb-8">
          <span className="font-semibold">Fun fact:</span> I can solve a Rubik's Cube in under a minute and I love hiking on weekends!
        </p>
        <a
          href="../data/cv.pdf"
          download
          className="inline-block bg-[#3B82F6] text-[#F9FAFB] px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 hover:bg-[#6366F1]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default AboutMe;