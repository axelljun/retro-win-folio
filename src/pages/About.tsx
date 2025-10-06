export const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">AXELL LJUNGGREN</h1>
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
      </div>
    </div>
  );
};

export default About;
