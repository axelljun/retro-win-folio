import { Menu } from "lucide-react";

export const Taskbar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-card window-border flex items-center px-1 gap-2 z-50">
      <button className="window-border bg-button-face px-3 py-1 flex items-center gap-2 hover:bg-accent transition-colors">
        <Menu className="w-4 h-4" />
        <span className="font-pixel text-[10px]">START</span>
      </button>
      <div className="flex-1" />
      <div className="window-border-inset bg-input px-3 py-1">
        <span className="font-retro text-sm">{currentTime}</span>
      </div>
    </div>
  );
};
