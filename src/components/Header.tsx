
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: { id: string; title: string }[];
}

const Header = ({ activeSection, setActiveSection, sections }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gradient font-semibold text-lg">FUNDACIÓN UNIVERSITARIA DE POPAYÁN</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md transition-all text-sm ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
