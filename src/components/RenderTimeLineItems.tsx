import { TimelineCard } from './styles/TimelineCard';
import {
  TIMELINE_BORDER,
  TIMELINE_SLOT_MARGIN,
  TIMELINE_SLOT_WIDTH,
  timelineData,
} from '../utils/const';
import { useContext } from 'react';
import { LanguageContext } from '../store/LanguageContext';

type Props = {
  data: typeof timelineData;
  isTopSide?: boolean;
};

const CIRCLE_YEAR_WIDTH = 66;
const CENTERED_YEAR = TIMELINE_SLOT_WIDTH / 2 - CIRCLE_YEAR_WIDTH / 2;
const VERTICAL_MARGIN = 44;
const CENTERED_CIRCLE_PX = CIRCLE_YEAR_WIDTH / 2 + TIMELINE_BORDER / 2;

export const RenderTimelineItems = ({ data, isTopSide = true }: Props) => {
  const { language } = useContext(LanguageContext);
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
          style={{
            marginTop: isTopSide ? '0px' : `${VERTICAL_MARGIN}px`,
            marginBottom: isTopSide ? `${VERTICAL_MARGIN}px` : '0px',
          }}
        >
          <TimelineCard timelinePosition={isTopSide ? 'top' : 'bottom'}>
            <p>{item.text[language]}</p>
            {item.subtitle && (
              <p className='mt-3 text-sm italic font-medium text-muted-shady-red-0'>
                {item.subtitle[language]}
              </p>
            )}
          </TimelineCard>
          <div
            className={`pl-[2px] absolute flex items-center justify-center rounded-full border-[3px] 
           border-muted-shady-red-0 bg-shady-dark-blue-1 text-bright-color-2 font-bold
            text-center ${item.year.length > 4 ? 'text-base' : 'text-xl'}`}
            style={{
              width: `${CIRCLE_YEAR_WIDTH}px`,
              height: `${CIRCLE_YEAR_WIDTH}px`,
              left: `${CENTERED_YEAR}px`,
              bottom: isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
              top: !isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
              whiteSpace: 'pre-line',
              lineHeight: item.year.length > 4 ? '12px' : '28px',
              letterSpacing: '1px',
            }}
          >
            {item.year}
          </div>
        </div>
      </div>
    );
  });
};
