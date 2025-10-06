import { Window } from "@/components/Window";
import { DesktopIcon } from "@/components/DesktopIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { Taskbar } from "@/components/Taskbar";
import { User, Briefcase, Mail, FileText } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openWindows, setOpenWindows] = useState<string[]>(['about']);

  const toggleWindow = (windowId: string) => {
    setOpenWindows(prev => 
      prev.includes(windowId) 
        ? prev.filter(id => id !== windowId)
        : [...prev, windowId]
    );
  };

  return (
    <div className="min-h-screen bg-desktop-bg scanlines p-4 pb-16">
      {/* Desktop Icons */}
      <div className="flex flex-col gap-4 mb-8">
        <DesktopIcon
          icon={<User className="w-6 h-6" />}
          label="About Me"
          onClick={() => toggleWindow('about')}
        />
        <DesktopIcon
          icon={<Briefcase className="w-6 h-6" />}
          label="Projects"
          onClick={() => toggleWindow('projects')}
        />
        <DesktopIcon
          icon={<Mail className="w-6 h-6" />}
          label="Contact"
          onClick={() => toggleWindow('contact')}
        />
        <DesktopIcon
          icon={<FileText className="w-6 h-6" />}
          label="Resume"
          onClick={() => toggleWindow('resume')}
        />
      </div>

      {/* Windows */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {openWindows.includes('about') && (
          <Window title="About_Me.exe" className="w-full">
            <div className="font-retro text-lg space-y-4">
              <h1 className="font-pixel text-base mb-4">AXELL LJUNGGREN</h1>
              <p>
                Welcome to my digital portfolio. I'm an engineering student passionate about 
                product design, electrification, and innovative solutions.
              </p>
              <p>
                Currently studying at Stanford University, I work on projects ranging from 
                solar energy systems to moped electrification and product design.
              </p>
              <div className="window-border-inset bg-input p-3 mt-4">
                <p className="font-pixel text-xs mb-2">SYSTEM INFO:</p>
                <p className="text-sm">Location: Stanford, CA</p>
                <p className="text-sm">Status: Engineering Student</p>
                <p className="text-sm">Interests: Solar Energy, E-Mobility, Design</p>
              </div>
            </div>
          </Window>
        )}

        {openWindows.includes('projects') && (
          <Window title="My_Projects.exe" className="w-full">
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              <ProjectCard
                title="TERABASE SUMMER INTERNSHIP"
                year="2023"
                description="Worked on solar energy infrastructure and utility-scale solar projects. Developed solutions for optimizing solar farm layouts and performance."
              />
              <ProjectCard
                title="MOPED ELECTRIFICATION"
                year="2023"
                description="Converted a vintage moped to electric power. Designed custom battery housing and motor integration for sustainable urban transportation."
              />
              <ProjectCard
                title="PRODUCT DESIGN COURSE"
                year="2023"
                description="Completed comprehensive product design course covering ideation, prototyping, and user testing. Created innovative consumer products."
              />
              <ProjectCard
                title="FORMULA SAE"
                year="2022-2023"
                description="Team member working on electric race car development. Contributed to powertrain design and vehicle dynamics optimization."
              />
              <ProjectCard
                title="MICRO-HYDROPOWER TURBINE"
                year="2022"
                description="Designed and built a small-scale hydropower system for off-grid applications. Focused on efficiency and manufacturability."
              />
            </div>
          </Window>
        )}

        {openWindows.includes('contact') && (
          <Window title="Contact.exe" className="w-full max-w-md">
            <div className="font-retro text-lg space-y-4">
              <h2 className="font-pixel text-sm mb-4">GET IN TOUCH</h2>
              <div className="window-border-inset bg-input p-4 space-y-3">
                <div>
                  <p className="font-pixel text-[10px] mb-1">EMAIL:</p>
                  <p className="text-base">axell@stanford.edu</p>
                </div>
                <div>
                  <p className="font-pixel text-[10px] mb-1">LINKEDIN:</p>
                  <p className="text-base">linkedin.com/in/axelljunggren</p>
                </div>
                <div>
                  <p className="font-pixel text-[10px] mb-1">GITHUB:</p>
                  <p className="text-base">github.com/axelljunggren</p>
                </div>
              </div>
              <button className="window-border bg-button-face px-4 py-2 hover:bg-accent transition-colors w-full mt-4">
                <span className="font-pixel text-xs">SEND MESSAGE</span>
              </button>
            </div>
          </Window>
        )}

        {openWindows.includes('resume') && (
          <Window title="Resume.pdf" className="w-full max-w-2xl">
            <div className="font-retro text-lg space-y-4">
              <div className="window-border-inset bg-input p-4">
                <h2 className="font-pixel text-sm mb-4">EDUCATION</h2>
                <p className="mb-2"><strong>Stanford University</strong></p>
                <p className="text-base mb-4">B.S. in Engineering - Expected 2025</p>
                
                <h2 className="font-pixel text-sm mb-4 mt-6">EXPERIENCE</h2>
                <div className="mb-4">
                  <p className="mb-1"><strong>Terabase Energy - Engineering Intern</strong></p>
                  <p className="text-base">Summer 2023</p>
                  <p className="text-base">Solar infrastructure development and optimization</p>
                </div>
                
                <h2 className="font-pixel text-sm mb-4 mt-6">SKILLS</h2>
                <div className="flex flex-wrap gap-2">
                  {['CAD Design', 'Python', 'MATLAB', 'Prototyping', 'Electronics', 'Project Management'].map(skill => (
                    <span key={skill} className="window-border bg-button-face px-2 py-1 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Window>
        )}
      </div>

      <Taskbar />
    </div>
  );
};

export default Index;
