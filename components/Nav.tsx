import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 dark:bg-[#1F2937]/80 border-b border-[#E5E7EB] dark:border-[#374151] backdrop-blur-lg z-[9999] shadow-lg">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Toggle + Brand */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full border border-[#D1D5DB] dark:border-[#374151] hover:bg-[#F9FAFB]/60 dark:hover:bg-[#374151]/60 transition-colors"
            onClick={handleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun size={22} color="#F59E42" />
            ) : (
              <FiMoon size={22} color="#6366F1" />
            )}
          </button>

          <span className="text-xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">
            Peter
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <li key={section.name}>
              <a
                href={section.href}
                onClick={() => setActiveSection(section.name)}
                className={`
                  relative inline-block font-medium px-1 py-1 transition-colors duration-200
                  text-[#111827] dark:text-[#F9FAFB]
                  hover:text-[#6366F1] dark:hover:text-[#60A5FA]
                  before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                  before:h-[2px] before:w-0 before:bg-[#3B82F6] dark:before:bg-[#60A5FA]
                  before:transition-all before:duration-300 before:ease-out
                  hover:before:w-full
                  ${
                    activeSection === section.name
                      ? "text-[#3B82F6] dark:text-[#60A5FA] before:w-full"
                      : ""
                  }
                `}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-[#F9FAFB]/60 dark:hover:bg-[#374151]/60"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={24} color={darkMode ? "#60A5FA" : "#3B82F6"} />
        </button>
      </div>

      {/* Drawer menu */}
      <div
        className={`fixed inset-0 z-[99999] bg-[#F9FAFB] dark:bg-[#1F2937] min-h-screen w-screen flex flex-col transition-all duration-300 ease-in-out ${
          drawerOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        <button
          className="self-end m-6"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={32} color={darkMode ? "#60A5FA" : "#3B82F6"} />
        </button>

        <ul className="flex flex-col items-center justify-start flex-1 gap-8">
          {sections.map((section) => (
            <li key={section.name}>
              <a
                href={section.href}
                onClick={() => {
                  setActiveSection(section.name);
                  setDrawerOpen(false);
                }}
                className={`
                  relative inline-block font-medium px-1 py-1 transition-colors duration-200
                  text-[#111827] dark:text-[#F9FAFB]
                  hover:text-[#6366F1] dark:hover:text-[#60A5FA]
                  before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                  before:h-[2px] before:w-0 before:bg-[#3B82F6] dark:before:bg-[#60A5FA]
                  before:transition-all before:duration-300 before:ease-out
                  hover:before:w-full
                  ${
                    activeSection === section.name
                      ? "text-[#3B82F6] dark:text-[#60A5FA] before:w-full"
                      : ""
                  }
                `}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
