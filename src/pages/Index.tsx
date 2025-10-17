import { useState } from "react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { Window } from "@/components/Window";
import aboutIcon from "@/assets/icon-about.png";
import projectsIcon from "@/assets/icon-projects.png";
import contactIcon from "@/assets/icon-contact.png";
import resumeIcon from "@/assets/icon-resume.png";

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  fullDescription: string;
}

const projects: Project[] = [
  {
    id: "terabase-internship",
    title: "TERABASE SUMMER INTERNSHIP",
    year: "2023",
    description: "Solar energy infrastructure and utility-scale solar projects",
    fullDescription: "During my summer internship at Terabase Energy, I worked on innovative solutions for utility-scale solar farm development. I contributed to optimizing solar panel layouts, developing installation processes, and analyzing performance metrics for large-scale solar infrastructure projects."
  },
  {
    id: "moped-electrification",
    title: "MOPED ELECTRIFICATION",
    year: "2023",
    description: "Converting a vintage moped to electric power",
    fullDescription: "This project involved converting a vintage moped to electric power, designing a custom battery housing and integrating an electric motor for sustainable urban transportation. The challenge was maintaining the classic aesthetic while incorporating modern electric drivetrain components."
  },
  {
    id: "product-design-course",
    title: "PRODUCT DESIGN COURSE",
    year: "2023",
    description: "Comprehensive product design covering ideation to prototyping",
    fullDescription: "Completed a comprehensive product design course at Stanford covering ideation, prototyping, and user testing. Created innovative consumer products through iterative design processes and hands-on manufacturing."
  },
  {
    id: "moped-restoration",
    title: "MOPED RESTORATION",
    year: "2022",
    description: "Complete restoration of a vintage moped",
    fullDescription: "Full mechanical restoration of a vintage moped, including engine rebuild, frame restoration, and complete mechanical overhaul. This project combined mechanical engineering skills with attention to detail in preserving classic design."
  },
  {
    id: "quick-mount-winch",
    title: "QUICK-MOUNT WINCH",
    year: "2023",
    description: "Designed a rapid-deployment winch mounting system",
    fullDescription: "Designed and fabricated a quick-mount winch system for efficient deployment in field conditions. The design focused on ease of installation, durability, and practical functionality."
  },
  {
    id: "water-pump",
    title: "WATER PUMP",
    year: "2022",
    description: "Custom water pump design and fabrication",
    fullDescription: "Designed and built a custom water pump system optimized for specific flow requirements. The project involved fluid dynamics analysis, material selection, and iterative prototyping."
  }
];

export default function Index() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openWindow = (windowName: string) => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName]);
    }
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(openWindows.filter(w => w !== windowName));
    if (windowName === "projects") {
      setSelectedProject(null);
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative min-h-screen">
      {/* Desktop Icons */}
      <div className="fixed left-4 top-4 flex flex-col gap-4 z-10">
        <DesktopIcon
          icon={<img src={aboutIcon} alt="About" className="w-10 h-10" />}
          label="About"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={<img src={projectsIcon} alt="Projects" className="w-10 h-10" />}
          label="Projects"
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          icon={<img src={contactIcon} alt="Contact" className="w-10 h-10" />}
          label="Contact"
          onClick={() => openWindow("contact")}
        />
        <DesktopIcon
          icon={<img src={resumeIcon} alt="Resume" className="w-10 h-10" />}
          label="Resume"
          onClick={() => openWindow("resume")}
        />
      </div>

      {/* Windows */}
      <div className="relative p-4">
        {openWindows.includes("about") && (
          <Window 
            title="About Me" 
            className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-20"
            onClose={() => closeWindow("about")}
          >
            <h2 className="font-pixel text-lg mb-4 text-primary">AXELL LJUNGGREN</h2>
            <div className="font-retro text-base space-y-4">
              <p>
                Welcome to my digital portfolio. I'm an engineering student passionate about 
                product design, electrification, and innovative mechanical solutions.
              </p>
              <p>
                Currently studying at Stanford University, I work on projects ranging from 
                solar energy systems to moped electrification and mechanical design.
              </p>
              <div className="window-border-inset bg-input p-4 mt-6">
                <p className="font-pixel text-xs mb-3 text-primary">SYSTEM INFO:</p>
                <div className="space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Location:</span> Stanford, CA</p>
                  <p><span className="text-muted-foreground">Status:</span> Engineering Student</p>
                  <p><span className="text-muted-foreground">Interests:</span> Solar Energy, E-Mobility, Mechanical Design</p>
                </div>
              </div>
            </div>
          </Window>
        )}

        {openWindows.includes("projects") && (
          <Window 
            title="Projects" 
            className="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-4xl z-20"
            onClose={() => closeWindow("projects")}
          >
            {!selectedProject ? (
              <div className="space-y-4">
                <h2 className="font-pixel text-lg mb-4 text-primary">MY PROJECTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                      className="window-border bg-card p-4 hover:bg-accent/20 transition-colors text-left"
                    >
                      <h3 className="font-pixel text-sm mb-2 text-primary">{project.title}</h3>
                      <p className="font-retro text-xs text-muted-foreground mb-2">{project.year}</p>
                      <p className="font-retro text-sm">{project.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-retro text-sm text-primary hover:underline mb-4"
                >
                  ← Back to Projects
                </button>
                <h2 className="font-pixel text-lg mb-2 text-primary">{selectedProject.title}</h2>
                <p className="font-retro text-sm text-muted-foreground mb-4">{selectedProject.year}</p>
                <div className="window-border-inset bg-input p-4">
                  <p className="font-retro text-base leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>
              </div>
            )}
          </Window>
        )}

        {openWindows.includes("contact") && (
          <Window 
            title="Contact" 
            className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-xl z-20"
            onClose={() => closeWindow("contact")}
          >
            <h2 className="font-pixel text-lg mb-6 text-primary">GET IN TOUCH</h2>
            <div className="window-border-inset bg-input p-6 space-y-4">
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">EMAIL:</p>
                <a 
                  href="mailto:axell@stanford.edu" 
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  axell@stanford.edu
                </a>
              </div>
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">LINKEDIN:</p>
                <a 
                  href="https://linkedin.com/in/axelljunggren" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  linkedin.com/in/axelljunggren
                </a>
              </div>
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">GITHUB:</p>
                <a 
                  href="https://github.com/axelljunggren" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  github.com/axelljunggren
                </a>
              </div>
            </div>
          </Window>
        )}

        {openWindows.includes("resume") && (
          <Window 
            title="Resume" 
            className="absolute top-44 left-1/2 -translate-x-1/2 w-full max-w-3xl z-20"
            onClose={() => closeWindow("resume")}
          >
            <h2 className="font-pixel text-lg mb-6 text-primary">RESUME</h2>
            <div className="space-y-6">
              <div className="window-border-inset bg-input p-4">
                <h3 className="font-pixel text-sm mb-3 text-primary">EDUCATION</h3>
                <p className="font-retro text-base mb-1">Stanford University</p>
                <p className="font-retro text-sm text-muted-foreground">Engineering Student</p>
              </div>
              
              <div className="window-border-inset bg-input p-4">
                <h3 className="font-pixel text-sm mb-3 text-primary">EXPERIENCE</h3>
                <p className="font-retro text-base mb-1">Terabase Energy - Summer Intern</p>
                <p className="font-retro text-sm text-muted-foreground mb-2">2023</p>
                <p className="font-retro text-sm">Worked on utility-scale solar farm development and optimization.</p>
              </div>
              
              <div className="window-border-inset bg-input p-4">
                <h3 className="font-pixel text-sm mb-3 text-primary">SKILLS</h3>
                <div className="font-retro text-sm space-y-1">
                  <p>• Product Design & Prototyping</p>
                  <p>• Mechanical Engineering</p>
                  <p>• Solar Energy Systems</p>
                  <p>• Electric Vehicle Development</p>
                </div>
              </div>
            </div>
          </Window>
        )}
      </div>
    </div>
  );
}
