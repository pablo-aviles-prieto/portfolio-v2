import { type FormEvent, useContext, useEffect, useState } from 'react';
import { Input, Textarea } from './styles/form';
import { isValidatedContactForm } from '../utils/isValidatedContactForm';
import { Select } from './styles/form/Select';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';
import { LanguageContext } from '../store/LanguageContext';

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

// TODO: Add animation for each input to come from different sides of the page
export const ContactForm = () => {
  const [formData, setFormData] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [formErrors, setFormErrors] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [toastId, setToastId] = useState<string | null>(null);
  const [submitState, handleSubmitPromise] = useForm(fromSpreeId);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (!toastId) return;
    if (submitState.succeeded) {
      toast.success(
        language === 'en'
          ? `I'll be in touch as soon as possible 🤗`
          : `Le contactaré lo antes posible 🤗`,
        { id: toastId }
      );
    } else if (submitState?.errors) {
      toast.error(
        language === 'en'
          ? 'There was an error sending the contact info. Try again later 😓'
          : 'Hubo un error al enviar la información de contacto. Inténtelo más tarde 😓',
        { id: toastId }
      );
    }
  }, [submitState, toastId, language]);

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
    const toastId = toast.loading(
      language === 'en' ? 'Sending info...' : 'Enviando info...'
    );
    setToastId(toastId);

    const isValidated = isValidatedContactForm({ formData, setFormErrors });
    if (!isValidated) {
      toast.error(
        language === 'en'
          ? 'Fill all the form inputs 🥺'
          : 'Rellena todos los inputs 🥺',
        { id: toastId }
      );
      return;
    }

    await handleSubmitPromise(e);
    setFormData(CONTACT_FORM_INIT_VALUES);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='max-w-xl px-2 mx-auto sm:px-0'>
        <Input
          id='name'
          name='name'
          type='text'
          label={language === 'en' ? 'Name' : 'Nombre'}
          placeholder={language === 'en' ? 'Name...' : 'Nombre...'}
          value={formData.name}
          containerClasses='my-4'
          hasError={!!formErrors.name}
          onChange={(e) =>
            handleInputChange({ key: 'name', value: e.target.value })
          }
        />
        <Select
          id='contact-method'
          label={
            language === 'en'
              ? 'Preferred Contact Method'
              : 'Método de contacto preferido'
          }
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
          label={
            language === 'en'
              ? 'Contact information'
              : 'Información de contacto'
          }
          value={formData.contactInfo}
          placeholder={
            formData.contactMethod === 'Email'
              ? 'Email...'
              : language === 'en'
              ? 'Linkedin profile...'
              : 'Perfil de linkedin...'
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
          label={language === 'en' ? 'Message' : 'Mensaje'}
          value={formData.message}
          placeholder={language === 'en' ? 'Message...' : 'Mensaje...'}
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
    </form>
  );
};
