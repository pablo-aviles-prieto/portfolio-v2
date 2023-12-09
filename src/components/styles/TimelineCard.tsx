import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  timelinePosition?: 'top' | 'bottom';
};

export const TimelineCard = ({ children, timelinePosition = 'top' }: Props) => {
  return (
    <div
      className={`px-4 py-2 text-center border rounded-md bg-slate-600 border-amber-400 break-words ${
        timelinePosition === 'top'
          ? 'timeline-card-top'
          : 'timeline-card-bottom'
      }`}
    >
      {children}
    </div>
  );
};
