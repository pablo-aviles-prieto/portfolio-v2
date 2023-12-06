import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

function App() {
  return (
    <div className='bg-slate-700 text-slate-50'>
      <div className='font-bold'>Hello world</div>
      <Controller>
        <div>
          <br />
          <br />
          <Scene
            duration={800}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            offset={125}
          >
            <div>
              <h1>I'm pinned to the screen!</h1>
              <h2>Start editing to see change the magic</h2>
            </div>
          </Scene>
          <h2>Outside the scene</h2>
          <br />
          <Scene
            duration={300}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
          >
            {(progress: number) => (
              <div className='mx-auto'>
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<p className='timeline'>Watch me appear!</p>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  <Timeline
                    target={
                      <p className='timeline'>
                        Watch me move! and then disappear!
                      </p>
                    }
                  >
                    <Tween from={{ x: -1000 }} to={{ x: 250 }} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: -1 }} />
                  </Timeline>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
        <h1> Bye! </h1>
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
