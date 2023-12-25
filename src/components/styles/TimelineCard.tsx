import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  timelinePosition?: 'top' | 'bottom';
};

export const TimelineCard = ({ children, timelinePosition = 'top' }: Props) => {
  return (
    <div
      style={{ whiteSpace: 'pre-line' }}
      className={`px-4 py-2 text-left border-2 rounded-md bg-shady-dark-blue-2 border-muted-shady-red-0 ${
        timelinePosition === 'top'
          ? 'timeline-card-top'
          : 'timeline-card-bottom'
      }`}
    >
      {children}
    </div>
  );
};
