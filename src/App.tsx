import { Controller, Scene } from 'react-scrollmagic';
import { LandingComponent } from './components/LandingComponent';
import { TestScene } from './components/TestScene';

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
            duration={700}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            // offset={125}
            classToggle='bg-slate-400'
            indicators={true}
            // progressEvents={true}
          >
            {(progress: number) => (
              <div className='h-[200px]'>
                <>{console.log('progress 1st pinned', progress)}</>
                <h1>I'm pinned to the screen!</h1>
                <h2>Start editing to see change the magic</h2>
              </div>
            )}
          </Scene>
          <h2>Outside the scene</h2>
          <br />
          <TestScene />
        </div>
        <h1 className='my-48'> Bye! </h1>
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
