import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-[#F9FAFB] dark:bg-[#1F2937] text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-6">
          Contact Me
        </h2>
        <p className="text-[#374151] dark:text-[#D1D5DB] mb-8">
          I'm currently open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>

        <a
          href="mailto:peterjose098@gmail.com"
          className="inline-block bg-[#3B82F6] text-[#F9FAFB] px-8 py-3 rounded-lg font-semibold shadow transition-colors duration-200 hover:bg-[#6366F1]"
        >
          peterjose098@gmail.com
        </a>

        {/* Social Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/peter-ellias-jose-187354168/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111827] dark:text-[#F9FAFB] hover:text-[#6366F1] dark:hover:text-[#6366F1] transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:peterjose098@gmail.com"
            className="text-[#111827] dark:text-[#F9FAFB] hover:text-[#6366F1] dark:hover:text-[#6366F1] transition-colors"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
