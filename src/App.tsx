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
import { TimelineLegend } from './components/TimelineLegend';
import { Card } from './components/Card';

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
                triggerHook={0.05}
                pin={{ pushFollowers: false }}
                indicators={true}
                classToggle='overflow-hidden'
              >
                <Timeline
                  target={
                    <div style={{ width: `${timelineTotalWidth}px` }}>
                      <div
                        id='timeline-top-side'
                        className='flex border-muted-shady-red-0 min-h-[332px] max-h-[332px]'
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
                  <Tween from={{ x: 1280 }} to={{ x: -timelineTotalWidth }} />
                  {/* Timeline for the legend */}
                  <Timeline
                    target={
                      <div className='mt-8'>
                        <TimelineLegend />
                      </div>
                    }
                  >
                    <Tween
                      from={{ opacity: 1 }}
                      to={{ opacity: 0 }}
                      duration={0.1}
                    />
                  </Timeline>
                </Timeline>
              </Scene>
            </div>
          </div>
        </Controller>
        <div className='text-4xl font-bold text-center'>
          <h1 className='inline-block text-center text-transparent mb-14 bg-gradient-to-r from-muted-shady-red-0 via-muted-shady-red-1 to-muted-shady-red-0 bg-clip-text'>
            Previous works
          </h1>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default App;
