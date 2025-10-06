import { Link, useLocation } from "react-router-dom";

interface NavIconProps {
  to: string;
  emoji: string;
  label: string;
}

const NavIcon = ({ to, emoji, label }: NavIconProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className="flex flex-col items-center gap-1 group">
      <div className={`w-16 h-16 flex items-center justify-center window-border transition-all ${
        isActive ? 'bg-accent' : 'bg-card hover:bg-accent/50'
      }`}>
        <span className="text-3xl">{emoji}</span>
      </div>
      <span className={`font-retro text-xs text-center ${
        isActive ? 'text-primary' : 'text-foreground'
      }`}>
        {label}
      </span>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className="bg-card window-border p-4 mb-6">
      <div className="flex gap-6 justify-center flex-wrap">
        <NavIcon to="/" emoji="👤" label="About" />
        <NavIcon to="/projects" emoji="💼" label="Projects" />
        <NavIcon to="/contact" emoji="📧" label="Contact" />
        <NavIcon to="/resume" emoji="📄" label="Resume" />
      </div>
    </nav>
  );
};
