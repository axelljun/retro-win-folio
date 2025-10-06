export const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">RESUME</h1>
        
        <div className="window-border-inset bg-input p-6 space-y-6">
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">EDUCATION</h2>
            <p className="font-retro text-base mb-1"><strong>Stanford University</strong></p>
            <p className="font-retro text-sm text-muted-foreground">B.S. in Engineering - Expected 2025</p>
          </div>
          
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <p className="font-retro text-base mb-1"><strong>Terabase Energy - Engineering Intern</strong></p>
                <p className="font-retro text-sm text-muted-foreground mb-2">Summer 2023</p>
                <p className="font-retro text-sm">Solar infrastructure development and optimization for utility-scale projects</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
              {['CAD Design', 'SolidWorks', 'Prototyping', 'Electronics', 'Mechanical Design', 'Product Development', 'Python', 'MATLAB'].map(skill => (
                <span key={skill} className="window-border bg-button-face px-3 py-1 text-sm font-retro hover:bg-accent transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
