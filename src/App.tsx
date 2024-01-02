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
import { CardContainer } from './components/card/CardContainer';
import { ContactForm } from './components/ContactForm';
import { useContext } from 'react';
import { LanguageContext } from './store/LanguageContext';

function App() {
  const { language } = useContext(LanguageContext);
  const timelineTotalWidth =
    (TIMELINE_SLOT_WIDTH + TIMELINE_SLOT_MARGIN) * timelineData.length - 50;

  const evenTimelineData = getEvenItemsFromArray(timelineData);
  const oddTimelineData = getOddItemsFromArray(timelineData);

  // TODO: Add both languages
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
                        id='professional-trajectory-top'
                        className='flex border-muted-shady-red-0 min-h-[332px] max-h-[332px]'
                        style={{ borderBottomWidth: `${TIMELINE_BORDER}px` }}
                      >
                        <RenderTimelineItems
                          data={evenTimelineData}
                          isTopSide
                        />
                      </div>
                      <div
                        id='professional-trajectory'
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
                      duration={0.01}
                    />
                  </Timeline>
                </Timeline>
              </Scene>
            </div>
          </div>
        </Controller>
        <div className='-mt-16 text-center'>
          <Controller>
            <Scene
              duration={800}
              triggerHook={0.95}
              indicators={true}
              classToggle='overflow-hidden'
            >
              <Timeline
                target={
                  <div id='personal-projects' className='opacity-0'>
                    <h1 className='inline-block text-4xl font-bold text-center text-transparent mb-14 bg-gradient-to-r from-muted-shady-red-0 via-muted-shady-red-1 to-muted-shady-red-0 bg-clip-text'>
                      {language === 'en'
                        ? 'Personal projects'
                        : 'Proyectos personales'}
                    </h1>
                    <div className='text-left'>
                      <CardContainer />
                    </div>
                  </div>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  duration={0.1}
                />
              </Timeline>
            </Scene>
          </Controller>
        </div>
        <div id='contact-me' className='mt-24 mb-4 text-center'>
          <h1 className='inline-block text-4xl font-bold text-center text-transparent bg-gradient-to-r from-muted-shady-red-0 via-muted-shady-red-1 to-muted-shady-red-0 bg-clip-text'>
            {language === 'en' ? 'Contact me' : 'Contáctame'}
          </h1>
        </div>
        <div className='pb-8'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
