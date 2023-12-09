import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TimelineCard = ({ children }: Props) => {
  return (
    <div className='relative px-4 py-2 text-center border rounded-md bg-slate-600 border-amber-400 timeline-card'>
      {children}
    </div>
  );
};
