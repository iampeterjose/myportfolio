const Hero = () => {
  return (
    <section id="hero" className="bg-[#F9FAFB] dark:bg-[#1F2937] text-[#111827] dark:text-[#F9FAFB] py-16 pt-24 text-center mt-16">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Peter Avatar"
          className="w-32 h-32 rounded-full mb-6 shadow-lg object-cover"
        />
        <h1 className="text-4xl font-bold mb-4 text-[#111827] dark:text-[#F9FAFB]">
          Hi, I'm Peter — a passionate Front-End Developer & Tech Support Pro.
        </h1>
        <p className="text-xl text-[#6B7280] dark:text-[#D1D5DB] mb-8"></p>
        <a
          href="#projects"
          className="inline-block bg-[#3B82F6] text-[#F9FAFB] px-8 py-3 rounded-lg font-semibold shadow transition-colors duration-200 hover:bg-[#6366F1]"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;