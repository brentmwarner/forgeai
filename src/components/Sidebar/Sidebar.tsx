import React from 'react';
import { cn } from "../../lib/utils";
import { PanelLeftClose } from "lucide-react";

interface SidebarProps {
  isPanelOpen: boolean;
  isPanelPinned?: boolean;
  onPanelToggle?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isPanelOpen,
  isPanelPinned = false,
  onPanelToggle,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div 
      className={cn(
        "fixed top-[56px] left-0 h-[calc(100vh-56px)] w-[4.5rem] bg-white flex flex-col items-center",
        "transition-opacity duration-300",
        (isPanelOpen || isPanelPinned) ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="mt-auto mb-4 flex flex-col items-center gap-2">
        <div 
          className="w-8 h-8 rounded-full bg-stone-950 flex items-center justify-center cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span className="text-white text-sm font-medium">BW</span>
        </div>
        <button 
          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          onClick={onPanelToggle}
        >
          <PanelLeftClose className={cn(
            "w-5 h-5 text-stone-950",
            isPanelPinned && "rotate-180"
          )} />
        </button>
      </div>
    </div>
  );
};