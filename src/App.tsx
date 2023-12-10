import { Controller, Scene } from 'react-scrollmagic';
import { LandingComponent } from './components/LandingComponent';
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
    <div className='overflow-hidden bg-slate-700 text-slate-50'>
      <div className='h-screen'>
        <LandingComponent />
      </div>
      <Controller>
        <div>
          <div className='w-[1000px] mx-auto overflow-hidden'>
            <Scene
              duration={5000}
              triggerHook={0.2}
              pin={{ pushFollowers: false }}
              indicators={true}
              classToggle='overflow-hidden'
            >
              <Timeline
                target={
                  <div style={{ width: `${timelineTotalWidth}px` }}>
                    <div
                      id='timeline-top-side'
                      className='flex border-amber-700'
                      style={{ borderBottomWidth: `${TIMELINE_BORDER}px` }}
                    >
                      <RenderTimelineItems data={evenTimelineData} isTopSide />
                    </div>
                    <div id='timeline-bottom-side' className='flex'>
                      <RenderTimelineItems
                        data={oddTimelineData}
                        isTopSide={false}
                      />
                    </div>
                  </div>
                }
              >
                <Tween from={{ x: 1000 }} to={{ x: -timelineTotalWidth }} />
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
  );
}

export default App;
