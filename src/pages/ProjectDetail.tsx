import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, {
  title: string;
  year: string;
  description: string;
  fullDescription: string;
  images?: string[];
}> = {
  "terabase-internship": {
    title: "TERABASE SUMMER INTERNSHIP",
    year: "2023",
    description: "Solar energy infrastructure and utility-scale solar projects",
    fullDescription: "During my summer internship at Terabase Energy, I worked on innovative solutions for utility-scale solar farm development. I contributed to optimizing solar panel layouts, developing installation processes, and analyzing performance metrics for large-scale solar infrastructure projects.",
    images: []
  },
  "moped-electrification": {
    title: "MOPED ELECTRIFICATION",
    year: "2023",
    description: "Converting a vintage moped to electric power",
    fullDescription: "This project involved converting a vintage moped to electric power, designing a custom battery housing and integrating an electric motor for sustainable urban transportation. The challenge was maintaining the classic aesthetic while incorporating modern electric drivetrain components.",
    images: []
  },
  "product-design-course": {
    title: "PRODUCT DESIGN COURSE",
    year: "2023",
    description: "Comprehensive product design covering ideation to prototyping",
    fullDescription: "Completed a comprehensive product design course at Stanford covering ideation, prototyping, and user testing. Created innovative consumer products through iterative design processes and hands-on manufacturing.",
    images: []
  },
  "moped-restoration": {
    title: "MOPED RESTORATION",
    year: "2022",
    description: "Complete restoration of a vintage moped",
    fullDescription: "Full mechanical restoration of a vintage moped, including engine rebuild, frame restoration, and complete mechanical overhaul. This project combined mechanical engineering skills with attention to detail in preserving classic design.",
    images: []
  },
  "quick-mount-winch": {
    title: "QUICK-MOUNT WINCH",
    year: "2023",
    description: "Designed a rapid-deployment winch mounting system",
    fullDescription: "Designed and fabricated a quick-mount winch system for efficient deployment in field conditions. The design focused on ease of installation, durability, and practical functionality.",
    images: []
  },
  "water-pump": {
    title: "WATER PUMP",
    year: "2022",
    description: "Custom water pump design and fabrication",
    fullDescription: "Designed and built a custom water pump system optimized for specific flow requirements. The project involved fluid dynamics analysis, material selection, and iterative prototyping.",
    images: []
  }
};

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="window-border bg-card retro-shadow p-6">
          <h1 className="font-pixel text-xl mb-4 text-destructive">PROJECT NOT FOUND</h1>
          <Link to="/projects" className="font-retro text-base text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 font-retro text-sm text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <h1 className="font-pixel text-xl mb-2 text-primary">{project.title}</h1>
        <p className="font-retro text-base text-muted-foreground mb-6">{project.year}</p>
        
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {project.images.map((image, index) => (
              <div key={index} className="window-border-inset bg-black">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        )}
        
        <div className="window-border-inset bg-input p-4">
          <p className="font-retro text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
