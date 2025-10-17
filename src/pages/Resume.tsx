export const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">RESUME</h1>
        
        <div className="window-border-inset bg-input p-6 space-y-6">
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">EDUCATION</h2>
            <p className="font-retro text-base mb-1"><strong>Cornell University, College of Engineering</strong></p>
            <p className="font-retro text-sm text-muted-foreground mb-2">Bachelor of Science in Mechanical Engineering</p>
            <p className="font-retro text-sm text-muted-foreground mb-2">Minor: Dyson Business Minor</p>
            <p className="font-retro text-sm text-muted-foreground">Graduated: May 2024</p>
            <div className="mt-3">
              <p className="font-retro text-xs text-muted-foreground mb-1">Selected Coursework:</p>
              <p className="font-retro text-xs">Thermodynamics, Materials Engineering, Mechatronics, Product Design & Manufacturing, Fluid Dynamics Lab, Spaceflight Mechanics, Spacecraft Technology & Systems Architecture</p>
            </div>
          </div>
          
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <p className="font-retro text-base mb-1"><strong>Manufacturing Process Engineer</strong></p>
                <p className="font-retro text-sm text-muted-foreground mb-2">American Precision Gear Co., Foster City, CA • Aug 2024 – Present</p>
                <p className="font-retro text-sm mb-2">Lead manufacturing optimization projects and develop automated systems in a fast-paced production environment.</p>
                <ul className="font-retro text-xs space-y-1 ml-4">
                  <li>• Lead procurement and integration of custom robotic systems</li>
                  <li>• Spearhead acquisition of 8 new machining centers</li>
                  <li>• Bring key processes in-house, reducing lead times by up to two weeks</li>
                </ul>
              </div>
              <div>
                <p className="font-retro text-base mb-1"><strong>Mechanical Engineering Intern</strong></p>
                <p className="font-retro text-sm text-muted-foreground mb-2">Terabase Energy, Inc., Woodland, CA • May – Aug 2023</p>
                <p className="font-retro text-sm">Designed and prototyped a patent-pending tool to accelerate solar table assembly for the Terafab system.</p>
              </div>
              <div>
                <p className="font-retro text-base mb-1"><strong>Manufacturing Engineering Intern</strong></p>
                <p className="font-retro text-sm text-muted-foreground mb-2">American Precision Gear Co., Foster City, CA • Jan – Apr 2021</p>
                <p className="font-retro text-sm">Performed part inspections and developed work instructions to standardize manufacturing processes.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-pixel text-sm mb-3 text-primary">SKILLS</h2>
            <div className="space-y-3">
              <div>
                <p className="font-retro text-xs text-muted-foreground mb-1">Technical:</p>
                <div className="flex flex-wrap gap-2">
                  {['SolidWorks', 'Fusion 360', 'OnShape', 'MATLAB', 'FEA', 'DFM', 'GD&T', 'Mechanical Design', 'Welding', 'Mill & Lathe Operation'].map(skill => (
                    <span key={skill} className="window-border bg-button-face px-2 py-1 text-xs font-retro hover:bg-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-retro text-xs text-muted-foreground mb-1">Manufacturing:</p>
                <div className="flex flex-wrap gap-2">
                  {['Process Development', 'Automation Integration', 'Fixture Design', 'Quality Inspection', 'Lean Manufacturing'].map(skill => (
                    <span key={skill} className="window-border bg-button-face px-2 py-1 text-xs font-retro hover:bg-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-retro text-xs text-muted-foreground mb-1">Languages:</p>
                <div className="flex flex-wrap gap-2">
                  {['English (Fluent)', 'Swedish (Fluent)', 'French (Basic)'].map(skill => (
                    <span key={skill} className="window-border bg-button-face px-2 py-1 text-xs font-retro hover:bg-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
