import { FormEvent, useEffect, useState } from 'react';
import { Input, Textarea } from './styles/form';
import { isValidatedContactForm } from '../utils/isValidatedContactForm';
import { Select } from './styles/form/Select';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';

export const CONTACT_FORM_INIT_VALUES = {
  name: '',
  contactMethod: 'Email',
  contactInfo: '',
  message: '',
};

export const CONTACT_FORM_ERR_VALUES = {
  name: '',
  contactMethod: '',
  contactInfo: '',
  message: '',
};

const { VITE_FORMSPREE_ID } = import.meta.env;
const fromSpreeId = VITE_FORMSPREE_ID || '';

// TODO: Use both languages
export const ContactForm = () => {
  const [formData, setFormData] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [formErrors, setFormErrors] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [toastId, setToastId] = useState<string | null>(null);
  const [submitState, handleSubmitPromise] = useForm(fromSpreeId + 'tas');

  useEffect(() => {
    if (!toastId) return;
    if (submitState.succeeded) {
      toast.success(`I'll be in touch as soon as possible 🤗`, { id: toastId });
    } else if (submitState?.errors) {
      toast.error(
        'There was an error sending the contact info. Try again later 😓',
        { id: toastId }
      );
    }
  }, [submitState, toastId]);

  const handleInputChange = ({
    value,
    key,
  }: {
    value: (typeof CONTACT_FORM_INIT_VALUES)[keyof typeof CONTACT_FORM_INIT_VALUES];
    key: keyof typeof CONTACT_FORM_INIT_VALUES;
  }) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading('Sending info...');
    setToastId(toastId);

    const isValidated = isValidatedContactForm({ formData, setFormErrors });
    if (!isValidated) {
      toast.error('Fill all the form inputs 🥺', { id: toastId });
      return;
    }

    await handleSubmitPromise(e);
    setFormData(CONTACT_FORM_INIT_VALUES);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='max-w-xl px-2 mx-auto sm:px-0'>
        <button type='button' onClick={() => toast.loading('Loading...')}>
          Make me a toast
        </button>
        <Input
          id='name'
          name='name'
          type='text'
          label='Name'
          placeholder='name...'
          value={formData.name}
          containerClasses='my-4'
          hasError={!!formErrors.name}
          onChange={(e) =>
            handleInputChange({ key: 'name', value: e.target.value })
          }
        />
        <Select
          id='contact-method'
          label='Preferred Contact Method'
          containerClasses='my-4'
          options={['Email', 'LinkedIn']}
          onChange={(e) =>
            handleInputChange({ key: 'contactMethod', value: e.target.value })
          }
        />
        <Input
          id='contact-info'
          name='contact-info'
          type={formData.contactMethod === 'Email' ? 'email' : 'text'}
          label='Contact information'
          value={formData.contactInfo}
          placeholder={
            formData.contactMethod === 'Email'
              ? 'email...'
              : 'linkedin profile...'
          }
          containerClasses='my-4'
          hasError={!!formErrors.contactInfo}
          onChange={(e) =>
            handleInputChange({ key: 'contactInfo', value: e.target.value })
          }
        />
        <Textarea
          id='message'
          name='message'
          label='Message'
          value={formData.message}
          placeholder='message...'
          containerClasses='my-4'
          rows={3}
          hasError={!!formErrors.message}
          onChange={(e) =>
            handleInputChange({ key: 'message', value: e.target.value })
          }
        />
      </div>
      <div className='text-center'>
        <button
          type='submit'
          disabled={submitState.submitting}
          className={`relative items-center justify-center px-12 py-3 overflow-hidden font-medium text-center transition-all 
          ${
            submitState.submitting
              ? 'bg-gray-400'
              : 'bg-white hover:bg-white group'
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
            {submitState.submitting ? 'Sending...' : 'Submit'}
          </span>
        </button>
      </div>
    </form>
  );
};