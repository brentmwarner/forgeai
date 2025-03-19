import React from 'react';
import { Figma, ImagePlus, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop with glass effect */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity z-50",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-neutral-900 backdrop-blur-md rounded-t-2xl p-4 transition-transform duration-300 z-50 shadow-lg",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-stone-950 dark:text-white">
              Add Content
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100/50 dark:hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-stone-950 dark:text-white" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 px-4">
            <button className="w-full aspect-square max-w-[140px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50 transition-colors backdrop-blur-sm">
              <Figma className="w-6 h-6 text-stone-950 dark:text-white" />
              <span className="text-sm font-medium text-stone-950 dark:text-white">Import from Figma</span>
            </button>
            
            <button className="w-full aspect-square max-w-[140px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50 transition-colors backdrop-blur-sm">
              <ImagePlus className="w-6 h-6 text-stone-950 dark:text-white" />
              <span className="text-sm font-medium text-stone-950 dark:text-white">Attach Image</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};