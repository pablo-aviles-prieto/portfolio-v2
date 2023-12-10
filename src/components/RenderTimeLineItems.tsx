import { TimelineCard } from './styles/TimelineCard';
import {
  TIMELINE_BORDER,
  TIMELINE_CONTAINER_CLASSES,
  TIMELINE_SLOT_MARGIN,
  TIMELINE_SLOT_WIDTH,
  timelineData,
} from '../utils/const';

type Props = {
  data: typeof timelineData;
  isTopSide?: boolean;
};

const CIRCLE_YEAR_WIDTH = 66;
const CENTERED_YEAR = TIMELINE_SLOT_WIDTH / 2 - CIRCLE_YEAR_WIDTH / 2;
const VERTICAL_MARGIN = 44;
const CENTERED_CIRCLE_PX = CIRCLE_YEAR_WIDTH / 2 + TIMELINE_BORDER / 2;

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
        className={`relative flex flex-col ${isTopSide && 'justify-end'}`}
        style={containerStyle}
      >
        <div
          className={`${TIMELINE_CONTAINER_CLASSES} ${
            !isTopSide && '!flex-col-reverse'
          }`}
          style={{
            marginTop: isTopSide ? '0px' : `${VERTICAL_MARGIN}px`,
            marginBottom: isTopSide ? `${VERTICAL_MARGIN}px` : '0px',
          }}
        >
          <TimelineCard timelinePosition={isTopSide ? 'top' : 'bottom'}>
            {item.text}
          </TimelineCard>
          <div
            className={`absolute text-center text-xl rounded-full border-[3px] 
            border-amber-600 pt-[15px] bg-slate-700 text-amber-300 font-medium`}
            style={{
              width: `${CIRCLE_YEAR_WIDTH}px`,
              height: `${CIRCLE_YEAR_WIDTH}px`,
              left: `${CENTERED_YEAR}px`,
              bottom: isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
              top: !isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
            }}
          >
            {item.year}
          </div>
        </div>
      </div>
    );
  });
};
