import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { SceneEvent } from '../interfaces/sceneEvent';

export const TestScene = () => {
  return (
    <Scene
      duration={300}
      triggerHook={0.5}
      pin={{ pushFollowers: false }}
      indicators={true}
      classToggle='bg-slate-900'
    >
      {(progress: number, event: SceneEvent) => (
        <div className='mx-auto overflow-hidden'>
          <>{console.log('progress 2nd pinned', progress)}</>
          <>{console.log('event 2nd pinned', event)}</>
          <Timeline
            totalProgress={progress}
            paused
            target={
              <p>
                EVENT: {event.type} - PROGRESS: {progress}
              </p>
            }
          >
            <Timeline target={<p className=''>Watch me appear!</p>}>
              <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
            </Timeline>
            <Timeline
              target={<p className=''>Watch me move! and then disappear!</p>}
            >
              <Tween from={{ x: -1000 }} to={{ x: 500 }} />
              <Tween from={{ opacity: 1 }} to={{ opacity: -1 }} />
            </Timeline>
          </Timeline>
        </div>
      )}
    </Scene>
  );
};
