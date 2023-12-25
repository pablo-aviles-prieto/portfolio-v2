import { Controller, Scene } from 'react-scrollmagic';
import { HeroSection } from './components/HeroSection';
import { Timeline, Tween } from 'react-gsap';
import { getEvenItemsFromArray } from './utils/getEvenItemsFromArray';
import {
  TIMELINE_BORDER,
  TIMELINE_SLOT_MARGIN,
  TIMELINE_SLOT_WIDTH,
  timelineData,
} from './utils/const';
import { getOddItemsFromArray } from './utils/getOddItemsFromArray';
import { RenderTimelineItems } from './components/RenderTimeLineItems';

function App() {
  const timelineTotalWidth =
    (TIMELINE_SLOT_WIDTH + TIMELINE_SLOT_MARGIN) * timelineData.length - 50;

  const evenTimelineData = getEvenItemsFromArray(timelineData);
  const oddTimelineData = getOddItemsFromArray(timelineData);

  return (
    <div className='bg-shady-dark-blue-1'>
      <div className='mx-auto overflow-hidden text-bright-color-1 max-w-7xl'>
        <HeroSection />
        <Controller>
          <div>
            <div className='mx-auto overflow-hidden'>
              <Scene
                duration={6000}
                triggerHook={0.1}
                pin={{ pushFollowers: false }}
                indicators={true}
                classToggle='overflow-hidden'
              >
                <Timeline
                  target={
                    <div style={{ width: `${timelineTotalWidth}px` }}>
                      <div
                        id='timeline-top-side'
                        className='flex border-muted-shady-red-0 min-h-[350px] max-h-[350px]'
                        style={{ borderBottomWidth: `${TIMELINE_BORDER}px` }}
                      >
                        <RenderTimelineItems
                          data={evenTimelineData}
                          isTopSide
                        />
                      </div>
                      <div
                        id='timeline-bottom-side'
                        className='flex min-h-[350px] max-h-[350px]'
                      >
                        <RenderTimelineItems
                          data={oddTimelineData}
                          isTopSide={false}
                        />
                      </div>
                    </div>
                  }
                >
                  <Tween
                    from={{ x: 1280 }}
                    to={{ x: -(timelineTotalWidth + 10) }}
                  />
                </Timeline>
              </Scene>
            </div>
          </div>
          <h1 className='mb-72'>
            Last works and some other things after the timeline
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Controller>
      </div>
    </div>
  );
}

export default App;
