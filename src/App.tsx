import { Controller, Scene } from 'react-scrollmagic';
import { LandingComponent } from './components/LandingComponent';

function App() {
  return (
    <div className='bg-slate-700 text-slate-50'>
      <div className='h-screen'>
        <LandingComponent />
      </div>
      <Controller>
        <div>
          <br />
          <br />
          <Scene
            duration={500}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            // offset={125}
            classToggle='bg-slate-400'
            indicators={true}
            // progressEvents={true}
          >
            {(progress: number) => (
              <div className='h-[100px]'>
                <>{console.log('progress 1st pinned', progress)}</>
                <h1>I'm pinned to the screen!</h1>
                <h2>Start editing to see change the magic</h2>
              </div>
            )}
          </Scene>
          <h2>Outside the scene</h2>
          <br />
          {/* <TestScene /> */}
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
