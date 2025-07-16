const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#1F2937] border-t border-[#E5E7EB] dark:border-[#374151] py-6">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
          &copy; {new Date().getFullYear()} Peter — Based in [City, Country] — +6421520420
        </p>
      </div>
    </footer>
  );
};

export default Footer;
