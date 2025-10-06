interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  image?: string;
}

export const ProjectCard = ({ title, year, description, image }: ProjectCardProps) => {
  return (
    <div className="window-border-inset bg-input p-3 mb-4">
      {image && (
        <div className="window-border-inset mb-3 overflow-hidden bg-black">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      <h3 className="font-pixel text-xs mb-2">{title}</h3>
      <p className="font-retro text-sm text-muted-foreground mb-1">{year}</p>
      <p className="font-retro text-base">{description}</p>
    </div>
  );
};
