import { useState, useEffect } from "react";
import CoverSection from "@/components/CoverSection";
import ProblemSection from "@/components/ProblemSection";
import StepSolutionSection from "@/components/StepSolutionSection";
import ChartSection from "@/components/ChartSection";
import ThankYouSection from "@/components/ThankYouSection";
import Header from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/components/ui/use-toast";
import 'katex/dist/katex.min.css';

const sections = [
  
  { id: "portada", title: "Ecuaciones Diferenciales" },
  // { id: "enunciado", title: "Enunciado" },
  // { id: "modelado", title: "Modelado" },
  // { id: "solucion", title: "Solución" },
  // { id: "grafico", title: "Gráfico" },
  // { id: "conclusiones", title: "Conclusiones" },
  // { id: "agradecimientos", title: "Agradecimientos" }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("portada");
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i].id) {
            setActiveSection(sections[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
        sections={sections}
        
      />
      
      {/* Mobile floating theme toggle */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <div className="p-2 bg-background/80 backdrop-blur-lg rounded-full shadow-lg">
          <ThemeToggle />
        </div>
      </div>
      
      <main className=" transition-all duration-500">
        <CoverSection />
        <ProblemSection />
        <StepSolutionSection />
        <ChartSection />
        <ThankYouSection />
      </main>
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
          💻 dev -  arandomCore — 📌Fundación Universitaria de Popayán
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2025 • Ingeniería en Sistemas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
