
import React from 'react';
import { cn } from '@/lib/utils';

interface StepItem {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StepsProps {
  items: StepItem[];
  activeStep?: number;
  className?: string;
}

export function Steps({ items, activeStep = -1, className }: StepsProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {items.map((step, index) => {
        const isActive = activeStep === index;
        const isCompleted = activeStep > index;
        
        return (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border text-center',
                  {
                    'bg-primary text-primary-foreground border-primary': isActive,
                    'bg-primary/20 text-primary-foreground border-primary/20': isCompleted,
                    'border-muted-foreground/20': !isActive && !isCompleted,
                  }
                )}
              >
                {step.icon || (isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span className="text-sm">{index + 1}</span>
                ))}
              </div>
              {index < items.length - 1 && (
                <div className="h-10 w-px bg-muted-foreground/20" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-medium leading-none">{step.title}</h3>
              {step.description && (
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
