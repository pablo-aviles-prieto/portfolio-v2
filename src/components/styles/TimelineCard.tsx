import type { ReactNode } from 'react';
import { timelineBground } from '../../utils/const';

type Props = {
  children: ReactNode;
  timelinePosition?: 'top' | 'bottom';
  type: keyof typeof timelineBground;
};

export const TimelineCard = ({
  children,
  timelinePosition = 'top',
  type,
}: Props) => {
  const colorMap = {
    it: '--color-it',
    gaming: '--color-gaming',
    dev: '--color-dev',
  };

  const colorVariable = colorMap[type];
  const styleTyped = {
    whiteSpace: 'pre-line',
    '--arrow-bg-color': `var(${colorVariable})`, // Use the CSS variable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div
      style={styleTyped}
      className={`px-[16px] py-[8px] text-left border-2 rounded-md ${
        timelineBground[type]
      } border-muted-shady-red-0 ${
        timelinePosition === 'top'
          ? 'timeline-card-top'
          : 'timeline-card-bottom'
      }`}
    >
      {children}
    </div>
  );
};
