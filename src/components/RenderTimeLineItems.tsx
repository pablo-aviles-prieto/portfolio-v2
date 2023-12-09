import { TimelineCard } from './styles/TimelineCard';
import {
  TIMELINE_CONTAINER_CLASSES,
  TIMELINE_SLOT_MARGIN,
  TIMELINE_SLOT_WIDTH,
  timelineData,
} from '../utils/const';

type Props = {
  data: typeof timelineData;
  isTopSide?: boolean;
};

export const RenderTimelineItems = ({ data, isTopSide = true }: Props) => {
  const marginLeft = TIMELINE_SLOT_WIDTH + TIMELINE_SLOT_MARGIN * 2;

  return data.map((item, index) => {
    const containerStyle = {
      maxWidth: `${TIMELINE_SLOT_WIDTH}px`,
      marginLeft:
        index === 0 && !isTopSide
          ? `${TIMELINE_SLOT_WIDTH + TIMELINE_SLOT_MARGIN}px`
          : index === 0 && isTopSide
          ? '0px'
          : `${marginLeft}px`,
    };

    return (
      <div
        key={String(index) + String(item.year)}
        className={`${TIMELINE_CONTAINER_CLASSES} ${
          !isTopSide && '!flex-col-reverse'
        } relative`}
        style={containerStyle}
      >
        <TimelineCard timelinePosition={isTopSide ? 'top' : 'bottom'}>
          {item.text}
        </TimelineCard>
        <p className='text-center'>{item.year}</p>
      </div>
    );
  });
};
