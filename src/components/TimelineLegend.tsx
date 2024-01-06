import { useContext } from 'react';
import { LanguageContext } from '../store/LanguageContext';

export const TimelineLegend = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='flex items-center justify-center text-sm sm:text-base gap-x-8'>
      <div className='flex items-center gap-2 bg-'>
        <div className='w-5 h-5 bg-blue-800 border-2 border-black rounded-full sm:w-6 sm:h-6' />
        <p>{language === 'es' ? 'IT/Redes' : `IT/Networking`}</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-5 h-5 border-2 border-black rounded-full sm:w-6 sm:h-6 bg-sky-800' />
        <p>Gaming</p>
      </div>
      <div className='flex items-center gap-2 bg-'>
        <div className='w-5 h-5 bg-indigo-800 border-2 border-black rounded-full sm:w-6 sm:h-6' />
        <p>{language === 'es' ? 'Desarrollador' : `Developer`}</p>
      </div>
    </div>
  );
};
