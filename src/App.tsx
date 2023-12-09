import { Controller, Scene } from 'react-scrollmagic';
import { LandingComponent } from './components/LandingComponent';
import { TestScene } from './components/TestScene';
import { SceneEvent } from './interfaces/sceneEvent';
import { Timeline, Tween } from 'react-gsap';
import { TimelineCard } from './components/styles/TimelineCard';

const TIMELINE_FLEX_GAP = 'gap-y-4';

function App() {
  return (
    <div className='overflow-hidden bg-slate-700 text-slate-50'>
      <div className='h-screen'>
        <LandingComponent />
      </div>
      <Controller>
        <div>
          <br />
          {/* <br />
          <Scene
            duration={700}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            // offset={125}
            classToggle='bg-slate-400'
            indicators={true}
            // progressEvents={true}
          >
            {(progress: number, event: SceneEvent) => (
              <div className='h-[200px]'>
                <p>
                  EVENT type: {event.type} - EVENT state: {event.state} -
                  PROGRESS: {progress}
                </p>
                <h1>I'm pinned to the screen!</h1>
                <h2>Start editing to see change the magic</h2>
              </div>
            )}
          </Scene>
          <h2>Outside the scene</h2>
          <br />
          <TestScene />
          <br />
          <br /> */}
          <div className='w-[1000px] mx-auto overflow-hidden'>
            <Scene
              duration={1500}
              triggerHook={0.3}
              pin={{ pushFollowers: false }}
              indicators={true}
              classToggle='overflow-hidden'
            >
              <Timeline
                target={
                  <div className='w-[2500px]'>
                    <div
                      id=''
                      className='flex justify-between border-b-2 border-amber-700'
                    >
                      <div
                        className={`max-w-[250px] flex flex-col justify-end ${TIMELINE_FLEX_GAP}`}
                      >
                        <TimelineCard>
                          Aquí dedicaba mi vida a ser un buen profesional de la
                          petanca
                        </TimelineCard>
                        <p className='text-center'>2000</p>
                      </div>
                      <div
                        className={`max-w-[250px] flex flex-col ${TIMELINE_FLEX_GAP}`}
                      >
                        <TimelineCard>
                          Pues era ingeniero agrícola en mis ratos libres,
                          además de ser un buen señor fumador de anacardos
                        </TimelineCard>
                        <p className='text-center'>2000</p>
                      </div>
                      <div>2005</div>
                      <div>2008</div>
                      <div>2009</div>
                    </div>
                    <div></div>
                  </div>
                }
              >
                <Tween from={{ x: 1000 }} to={{ x: -2000 }} />
              </Timeline>
            </Scene>
          </div>
        </div>
        <h1 className='my-48'> Bye! </h1>
        <br />
        <br />
        <br />
        <br />
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
