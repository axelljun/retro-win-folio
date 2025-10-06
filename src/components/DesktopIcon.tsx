import { ReactNode } from "react";

interface DesktopIconProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 hover:bg-accent/20 transition-colors group"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-card window-border">
        {icon}
      </div>
      <span className="font-retro text-sm text-foreground text-center max-w-[80px] break-words">
        {label}
      </span>
    </button>
  );
};
