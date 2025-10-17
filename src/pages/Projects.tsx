import { Link } from "react-router-dom";

interface ProjectPreviewProps {
  id: string;
  title: string;
  year: string;
  image?: string;
}

const ProjectPreview = ({ id, title, year, image }: ProjectPreviewProps) => {
  return (
    <Link to={`/projects/${id}`} className="block">
      <div className="window-border bg-card p-3 hover:bg-accent/20 transition-colors cursor-pointer">
        {image && (
          <div className="window-border-inset mb-3 overflow-hidden bg-black">
            <img 
              src={image} 
              alt={title}
              className="w-full h-40 object-cover"
            />
          </div>
        )}
        <h3 className="font-pixel text-xs mb-1">{title}</h3>
        <p className="font-retro text-sm text-muted-foreground">{year}</p>
      </div>
    </Link>
  );
};

export const Projects = () => {
  const projects = [
    {
      id: "miniature-turbojet",
      title: "MINIATURE TURBOJET ENGINE",
      year: "2024 - Present"
    },
    {
      id: "pinpoint-app",
      title: "PINPOINT - HISTORICAL SITES APP",
      year: "2024 - Present"
    },
    {
      id: "wearable-charger",
      title: "WEARABLE CHARGER DESIGN",
      year: "2023"
    },
    {
      id: "moped-restoration-electrification",
      title: "MOPED RESTORATION & ELECTRIFICATION",
      year: "2022 - 2023"
    },
    {
      id: "terabase-internship",
      title: "TERABASE ENERGY INTERNSHIP",
      year: "2023"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">MY PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectPreview key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
