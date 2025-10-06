import { ReactNode, useState } from "react";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  defaultMinimized?: boolean;
  onClose?: () => void;
}

export const Window = ({ title, children, className = "", defaultMinimized = false, onClose }: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);

  return (
    <div className={`window-border bg-card retro-shadow ${className}`}>
      <div className="bg-title-bar text-primary-foreground px-1 py-1 flex items-center justify-between">
        <span className="font-pixel text-[10px] uppercase tracking-wider">{title}</span>
        <div className="flex gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="window-border bg-button-face w-5 h-5 flex items-center justify-center hover:bg-accent transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button className="window-border bg-button-face w-5 h-5 flex items-center justify-center hover:bg-accent transition-colors">
            <Square className="w-3 h-3" />
          </button>
          <button 
            onClick={onClose}
            className="window-border bg-button-face w-5 h-5 flex items-center justify-center hover:bg-destructive transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
      {!isMinimized && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};
