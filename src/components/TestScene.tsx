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
          <Timeline
            totalProgress={progress}
            paused
            target={
              <p>
                EVENT type: {event.type} - EVENT state: {event.state} -
                PROGRESS: {progress}
              </p>
            }
          >
            <Timeline target={<p className=''>Watch me appear!</p>}>
              <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
            </Timeline>
            <Timeline
              target={<p className=''>Watch me move! and then disappear!</p>}
            >
              <Tween from={{ x: -250 }} to={{ x: 500 }} />
              <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
            </Timeline>
          </Timeline>
        </div>
      )}
    </Scene>
  );
};
