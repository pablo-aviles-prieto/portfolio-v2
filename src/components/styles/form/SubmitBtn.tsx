type SubmitState = {
  errors: unknown;
  result: unknown;
  submitting: boolean;
  succeeded: boolean;
};

type Props = {
  submitState: SubmitState;
  language: 'es' | 'en';
};

export const SubmitBtn = ({ submitState, language }: Props) => {
  return (
    <div className='text-center'>
      <button
        type='submit'
        disabled={submitState.submitting}
        className={`relative items-center justify-center px-12 py-3 overflow-hidden font-medium text-center transition-all 
    ${
      submitState.submitting ? 'bg-gray-400' : 'bg-white hover:bg-white group'
    } rounded`}
      >
        {!submitState.submitting && (
          <span
            className={`w-64 h-48 rounded rotate-[-40deg] bg-muted-shady-red-0 absolute bottom-0 left-0 
        -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 
        group-hover:mb-32 group-hover:translate-x-0`}
          ></span>
        )}
        <span
          className={`relative w-full text-left transition-colors duration-300 ease-in-out 
      flex items-center
    ${
      submitState.submitting
        ? 'text-black'
        : 'text-muted-shady-red-2 group-hover:text-white'
    } `}
        >
          {submitState.submitting && (
            <svg
              className='w-5 h-5 mr-3 -ml-1 text-black animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
          {submitState.submitting
            ? language === 'es'
              ? 'Enviando...'
              : 'Sending...'
            : language === 'es'
            ? 'Enviar'
            : 'Submit'}
        </span>
      </button>
    </div>
  );
};
