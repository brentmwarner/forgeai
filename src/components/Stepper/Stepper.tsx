import React from 'react';
import { cn } from "../../lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center w-full max-w-[672px] justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              index <= currentStep 
                ? "bg-stone-950 text-white" 
                : "bg-neutral-100 text-neutral-500"
            )}>
              {index + 1}
            </div>
            <span className={cn(
              "text-sm mt-2",
              index <= currentStep ? "text-stone-950" : "text-neutral-500"
            )}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              "h-[2px] w-[100px] mx-4",
              index < currentStep ? "bg-stone-950" : "bg-neutral-200"
            )} />
          )}
        </div>
      ))}
    </div>
  );
};