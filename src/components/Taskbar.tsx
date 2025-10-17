import { useState, useEffect } from "react";
import globeIcon from "@/assets/globe-pixel.png";

export const Taskbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-card window-border flex items-center px-2 gap-2 z-50">
      <button className="window-border bg-button-face px-4 py-1 font-pixel text-xs hover:bg-accent transition-colors flex items-center gap-2">
        <img src={globeIcon} alt="globe" className="w-4 h-4" />
        MENU
      </button>
      <div className="window-border-inset bg-input px-3 py-1 font-retro text-sm flex-1 ml-2">
        www.axelljunggren.com
      </div>
      <div className="window-border-inset bg-input px-3 py-1 font-retro text-sm">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};
