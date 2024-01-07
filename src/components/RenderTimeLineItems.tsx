import { TimelineCard } from './styles/TimelineCard';
import {
  TIMELINE_BORDER,
  TIMELINE_SLOT_MARGIN,
  TIMELINE_SLOT_WIDTH,
  timelineBground,
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
    const yearTextSize =
      item.year.length <= 4
        ? 'text-xl !text-[20px]'
        : item.year.includes('Present')
        ? 'text-[11px]'
        : 'text-base !text-[16px]';
    const yearLineHeight =
      item.year.length <= 4
        ? '28px'
        : item.year.includes('Present')
        ? '10px'
        : '12px';

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
          <TimelineCard
            timelinePosition={isTopSide ? 'top' : 'bottom'}
            type={item.type as keyof typeof timelineBground}
          >
            <p
              className='text-[16px]'
              dangerouslySetInnerHTML={{ __html: item.text[language] }}
            />
            {item.subtitle && (
              <p className='mt-3 text-sm !text-[14px] italic font-medium text-muted-shady-red-0'>
                {item.subtitle[language]}
              </p>
            )}
          </TimelineCard>
          <div
            className={`pl-[2px] absolute flex items-center justify-center rounded-full border-[3px] 
           border-muted-shady-red-0 text-bright-color-2 font-bold text-center ${yearTextSize} 
           ${timelineBground[item.type as keyof typeof timelineBground]}`}
            style={{
              width: `${CIRCLE_YEAR_WIDTH}px`,
              height: `${CIRCLE_YEAR_WIDTH}px`,
              left: `${CENTERED_YEAR}px`,
              bottom: isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
              top: !isTopSide ? `-${CENTERED_CIRCLE_PX}px` : '',
              whiteSpace: 'pre-line',
              lineHeight: yearLineHeight,
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
