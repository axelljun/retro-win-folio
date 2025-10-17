import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, {
  title: string;
  year: string;
  description: string;
  fullDescription: string;
  images?: string[];
}> = {
  "miniature-turbojet": {
    title: "MINIATURE TURBOJET ENGINE",
    year: "2024 - Present",
    description: "Designing and manufacturing a small turbojet engine with radial compressor",
    fullDescription: "Personal project focused on designing and manufacturing a small turbojet engine with a one-stage radial compressor to deepen understanding of propulsion systems. Currently modeling and machining components such as the shaft and bearing housing while studying thermodynamics, fluid dynamics, and combustion behavior.",
    images: []
  },
  "pinpoint-app": {
    title: "PINPOINT - HISTORICAL SITES APP",
    year: "2024 - Present",
    description: "Mobile/web app for exploring historical landmarks with check-ins and rewards",
    fullDescription: "Developing a mobile/web app that maps nearby historical landmarks using Wikipedia and Wikidata APIs. Building features for user check-ins, rewards, and badges to promote exploration; currently developing a web-based prototype.",
    images: []
  },
  "wearable-charger": {
    title: "WEARABLE CHARGER DESIGN",
    year: "2023",
    description: "Thermoelectric generator-powered winter hat for phone charging",
    fullDescription: "Collaborated with a six-person engineering team to design and build a device that generates electricity from body heat using thermoelectric generators (TEGs). Created a functional winter hat prototype capable of charging a phone.",
    images: []
  },
  "moped-restoration-electrification": {
    title: "MOPED RESTORATION & ELECTRIFICATION",
    year: "2022 - 2023",
    description: "Hybrid electric conversion of vintage moped with $300 budget and backyard workshop",
    fullDescription: "In a bid to modernize and upgrade my vintage moped, I embarked on a project to convert it into a hybrid electric vehicle. I had a vision but limited resources, as I was building this in my collegetown backyard with no access to a machine shop and a budget of $300. While I did plan each step, I maintained plenty of room for improvisation to ensure a successful transformation with the limitations I faced.\n\nThe cornerstone of this project was the installation of a 48V 1000W hub motor to replace the original front wheel. To power the motor, I bought a 20000mAh 48V battery along with a compatible controller. However, protecting these electronic components against the elements posed a challenge, especially given the moped's intended use in all weather conditions. To address this concern, waterproofing became an important consideration. I sourced a waterproof electronics box to house the battery and controller securely. Carefully mounting the box onto the frame, I routed the wires close to the frame and under the gas tank to maintain a sleek appearance. Using silicone sealant, I sealed the wire entry points at the bottom of the box, preventing any moisture ingress.\n\nResourcefulness became important in the absence of a fully-equipped workshop. With only a Dremel and a power drill, I had to find unique solutions to fabricate the necessary components. Designing and fabricating a mounting frame for the electronics box became a fun challenge. Utilizing aluminum L-angle bars, I crafted a sturdy frame, cutting and bolting the pieces together to ensure structural integrity.\n\nThe conversion process demanded more than just electronic upgrades. With the removal of the original front wheel and its drum brake, the need for a reliable braking system became paramount. Opting for an off-the-shelf cable-actuated disc brake and caliper, I faced the task of engineering a mounting fixture to integrate the new braking system seamlessly. Resourcefulness once again came into play as I designed and manufactured the mounting fixture using a 1/4 inch steel plate, cutting the steel plate with my trusty Dremel, albeit with considerable time and effort.\n\nThe completed hybrid ride provided much better acceleration, consistent speed going uphill, and range than the original 2-stroke engine alone. The improved performance has made the moped much more drivable as I am able to maintain speeds of 25mph going up a steep hill where as before I would go around 12mph. Hill performance is a big deal here in Ithaca! The redundancy of two motors means I will never find myself stranded without gas, a situation I found myself in more than once as the gas tank has no fuel gauge. Another smaller quality of life improvement with the electric motor is that I no longer need to kickstart the moped. I simply drive forward on electric power only and pull the clutch, bringing the gas engine roaring to life.\n\nThis project developed my skills in:\n• Problem solving\n• Mechanical intuition\n• Resourcefulness\n• Vehicle systems",
    images: []
  },
  "terabase-internship": {
    title: "TERABASE ENERGY INTERNSHIP",
    year: "2023",
    description: "Patent-pending tool design for automated solar table assembly",
    fullDescription: "Designed and prototyped a patent-pending tool to accelerate solar table assembly for the Terafab system. Led the project from concept to early-stage production under the VP of Construction Solutions, applying DFM, rapid prototyping, and SolidWorks modeling.",
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
        
        <div className="window-border-inset bg-input p-4 max-h-96 overflow-y-auto">
          <div className="font-retro text-base leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
