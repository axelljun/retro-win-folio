export const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">AXEL LJUNGGREN</h1>
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
      </div>
    </div>
  );
};

export default About;
