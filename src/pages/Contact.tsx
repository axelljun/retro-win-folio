export const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="window-border bg-card retro-shadow p-6">
        <h1 className="font-pixel text-xl mb-6 text-primary">GET IN TOUCH</h1>
        <div className="window-border-inset bg-input p-6 space-y-4">
          <div>
            <p className="font-pixel text-xs mb-2 text-muted-foreground">EMAIL:</p>
            <a 
              href="mailto:axell@stanford.edu" 
              className="font-retro text-base hover:text-primary transition-colors"
            >
              axell@stanford.edu
            </a>
          </div>
          <div>
            <p className="font-pixel text-xs mb-2 text-muted-foreground">LINKEDIN:</p>
            <a 
              href="https://linkedin.com/in/axelljunggren" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-retro text-base hover:text-primary transition-colors"
            >
              linkedin.com/in/axelljunggren
            </a>
          </div>
          <div>
            <p className="font-pixel text-xs mb-2 text-muted-foreground">GITHUB:</p>
            <a 
              href="https://github.com/axelljunggren" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-retro text-base hover:text-primary transition-colors"
            >
              github.com/axelljunggren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
