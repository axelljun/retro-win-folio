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
    id: "miniature-turbojet",
    title: "MINIATURE TURBOJET ENGINE",
    year: "2024 - Present",
    description: "Designing and manufacturing a small turbojet engine with radial compressor",
    fullDescription: "Personal project focused on designing and manufacturing a small turbojet engine with a one-stage radial compressor to deepen understanding of propulsion systems. Currently modeling and machining components such as the shaft and bearing housing while studying thermodynamics, fluid dynamics, and combustion behavior."
  },
  {
    id: "pinpoint-app",
    title: "PINPOINT - HISTORICAL SITES APP",
    year: "2024 - Present",
    description: "Mobile/web app for exploring historical landmarks with check-ins and rewards",
    fullDescription: "Developing a mobile/web app that maps nearby historical landmarks using Wikipedia and Wikidata APIs. Building features for user check-ins, rewards, and badges to promote exploration; currently developing a web-based prototype."
  },
  {
    id: "wearable-charger",
    title: "WEARABLE CHARGER DESIGN",
    year: "2023",
    description: "Thermoelectric generator-powered winter hat for phone charging",
    fullDescription: "Collaborated with a six-person engineering team to design and build a device that generates electricity from body heat using thermoelectric generators (TEGs). Created a functional winter hat prototype capable of charging a phone."
  },
  {
    id: "moped-restoration-electrification",
    title: "MOPED RESTORATION & ELECTRIFICATION",
    year: "2022 - 2023",
    description: "Hybrid electric conversion of vintage moped with $300 budget and backyard workshop",
    fullDescription: "In a bid to modernize and upgrade my vintage moped, I embarked on a project to convert it into a hybrid electric vehicle. I had a vision but limited resources, as I was building this in my collegetown backyard with no access to a machine shop and a budget of $300. While I did plan each step, I maintained plenty of room for improvisation to ensure a successful transformation with the limitations I faced.\n\nThe cornerstone of this project was the installation of a 48V 1000W hub motor to replace the original front wheel. To power the motor, I bought a 20000mAh 48V battery along with a compatible controller. However, protecting these electronic components against the elements posed a challenge, especially given the moped's intended use in all weather conditions. To address this concern, waterproofing became an important consideration. I sourced a waterproof electronics box to house the battery and controller securely. Carefully mounting the box onto the frame, I routed the wires close to the frame and under the gas tank to maintain a sleek appearance. Using silicone sealant, I sealed the wire entry points at the bottom of the box, preventing any moisture ingress.\n\nResourcefulness became important in the absence of a fully-equipped workshop. With only a Dremel and a power drill, I had to find unique solutions to fabricate the necessary components. Designing and fabricating a mounting frame for the electronics box became a fun challenge. Utilizing aluminum L-angle bars, I crafted a sturdy frame, cutting and bolting the pieces together to ensure structural integrity.\n\nThe conversion process demanded more than just electronic upgrades. With the removal of the original front wheel and its drum brake, the need for a reliable braking system became paramount. Opting for an off-the-shelf cable-actuated disc brake and caliper, I faced the task of engineering a mounting fixture to integrate the new braking system seamlessly. Resourcefulness once again came into play as I designed and manufactured the mounting fixture using a 1/4 inch steel plate, cutting the steel plate with my trusty Dremel, albeit with considerable time and effort.\n\nThe completed hybrid ride provided much better acceleration, consistent speed going uphill, and range than the original 2-stroke engine alone. The improved performance has made the moped much more drivable as I am able to maintain speeds of 25mph going up a steep hill where as before I would go around 12mph. Hill performance is a big deal here in Ithaca! The redundancy of two motors means I will never find myself stranded without gas, a situation I found myself in more than once as the gas tank has no fuel gauge. Another smaller quality of life improvement with the electric motor is that I no longer need to kickstart the moped. I simply drive forward on electric power only and pull the clutch, bringing the gas engine roaring to life.\n\nThis project developed my skills in:\n• Problem solving\n• Mechanical intuition\n• Resourcefulness\n• Vehicle systems"
  },
  {
    id: "terabase-internship",
    title: "TERABASE ENERGY INTERNSHIP",
    year: "2023",
    description: "Patent-pending tool design for automated solar table assembly",
    fullDescription: "Designed and prototyped a patent-pending tool to accelerate solar table assembly for the Terafab system. Led the project from concept to early-stage production under the VP of Construction Solutions, applying DFM, rapid prototyping, and SolidWorks modeling."
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
            <h2 className="font-pixel text-lg mb-4 text-primary">AXEL LJUNGGREN</h2>
            <div className="font-retro text-base space-y-4">
              <p>
                Welcome to my digital portfolio. I'm a Manufacturing Process Engineer passionate about 
                clean energy, aerospace engineering, and precision manufacturing solutions.
              </p>
              <p>
                Currently working at American Precision Gear Co., I lead manufacturing optimization projects 
                and develop automated systems while pursuing personal projects in jet engine design and 
                historical exploration technology.
              </p>
              <div className="window-border-inset bg-input p-4 mt-6">
                <p className="font-pixel text-xs mb-3 text-primary">SYSTEM INFO:</p>
                <div className="space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Location:</span> San Francisco Bay Area</p>
                  <p><span className="text-muted-foreground">Status:</span> Manufacturing Process Engineer</p>
                  <p><span className="text-muted-foreground">Interests:</span> Clean Energy, Aerospace, Jet Engine Design, Precision Manufacturing</p>
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
                <div className="window-border-inset bg-input p-4 max-h-96 overflow-y-auto">
                  <div className="font-retro text-base leading-relaxed whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </div>
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
                  href="mailto:axel.ljunggren@gmail.com" 
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  axel.ljunggren@gmail.com
                </a>
              </div>
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">LINKEDIN:</p>
                <a 
                  href="https://www.linkedin.com/in/axel-ljunggren/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  https://www.linkedin.com/in/axel-ljunggren/
                </a>
              </div>
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">WEBSITE:</p>
                <a 
                  href="http://www.axelljunggren.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-retro text-base hover:text-primary transition-colors"
                >
                  www.axelljunggren.com
                </a>
              </div>
              <div>
                <p className="font-pixel text-xs mb-2 text-muted-foreground">LOCATION:</p>
                <p className="font-retro text-base">San Francisco Bay Area</p>
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
                <p className="font-retro text-base mb-1">Cornell University, College of Engineering</p>
                <p className="font-retro text-sm text-muted-foreground mb-1">Bachelor of Science in Mechanical Engineering</p>
                <p className="font-retro text-sm text-muted-foreground">Minor: Dyson Business Minor • Graduated May 2024</p>
              </div>
              
              <div className="window-border-inset bg-input p-4">
                <h3 className="font-pixel text-sm mb-3 text-primary">EXPERIENCE</h3>
                <p className="font-retro text-base mb-1">Manufacturing Process Engineer</p>
                <p className="font-retro text-sm text-muted-foreground mb-2">American Precision Gear Co. • Aug 2024 – Present</p>
                <p className="font-retro text-sm mb-2">Lead manufacturing optimization projects and develop automated systems.</p>
                <p className="font-retro text-sm">Previous: Terabase Energy Intern (2023), Manufacturing Engineering Intern (2021)</p>
              </div>
              
              <div className="window-border-inset bg-input p-4">
                <h3 className="font-pixel text-sm mb-3 text-primary">SKILLS</h3>
                <div className="font-retro text-sm space-y-1">
                  <p>• SolidWorks, Fusion 360, OnShape, MATLAB</p>
                  <p>• Process Development & Automation Integration</p>
                  <p>• Mechanical Design & Precision Manufacturing</p>
                  <p>• English (Fluent), Swedish (Fluent), French (Basic)</p>
                </div>
              </div>
            </div>
          </Window>
        )}
      </div>
    </div>
  );
}
