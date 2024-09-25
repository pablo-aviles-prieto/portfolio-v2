import { type FormEvent, useContext, useState } from 'react';
import { Input, Textarea, Select, SubmitBtn } from './styles/form';
import { isValidatedContactForm } from '../utils/isValidatedContactForm';
import toast from 'react-hot-toast';
import { LanguageContext } from '../store/LanguageContext';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import emailjs from '@emailjs/browser';

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

const { VITE_MAIL_SERVICE_ID, VITE_MAIL_TEMPLATE_ID, VITE_MAIL_PUBLICK_KEY } =
  import.meta.env;
const mailServiceId = VITE_MAIL_SERVICE_ID || '';
const mailTemplateId = VITE_MAIL_TEMPLATE_ID || '';
const mailPublicKey = VITE_MAIL_PUBLICK_KEY || '';

export const ContactForm = () => {
  const [formData, setFormData] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [formErrors, setFormErrors] = useState<typeof CONTACT_FORM_INIT_VALUES>(
    CONTACT_FORM_INIT_VALUES
  );
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useContext(LanguageContext);

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
    setIsLoading(true);
    const toastId = toast.loading(
      language === 'en' ? 'Sending info...' : 'Enviando info...'
    );

    const isValidated = isValidatedContactForm({ formData, setFormErrors });
    if (!isValidated) {
      toast.error(
        language === 'en'
          ? 'Fill all the form inputs 🥺'
          : 'Rellena todos los campos 🥺',
        { id: toastId }
      );
      setIsLoading(false);
      return;
    }

    emailjs
      .send(mailServiceId, mailTemplateId, formData, {
        publicKey: mailPublicKey,
      })
      .then(
        () => {
          toast.success(
            language === 'en'
              ? `I'll be in touch as soon as possible 🤗`
              : `Le contactaré lo antes posible 🤗`,
            { id: toastId }
          );
        },
        (error) => {
          console.log('Error sending the mail...', error.text);
          toast.error(
            language === 'en'
              ? 'There was an error sending the contact info. Try again later 😓'
              : 'Hubo un error al enviar la información de contacto. Inténtelo más tarde 😓',
            { id: toastId }
          );
        }
      )
      .catch((error) => {
        console.log('Error sending the mail...', error.text);
        toast.error(
          language === 'en'
            ? 'There was an error sending the contact info. Try again later 😓'
            : 'Hubo un error al enviar la información de contacto. Inténtelo más tarde 😓',
          { id: toastId }
        );
      })
      .finally(() => {
        setFormData(CONTACT_FORM_INIT_VALUES);
        setIsLoading(false);
      });
  };

  return (
    <form className='min-h-[410px]' onSubmit={(e) => onSubmit(e)}>
      <div className='max-w-xl px-2 mx-auto sm:px-0'>
        <Controller>
          <Scene duration={400} triggerHook={1}>
            <Timeline
              target={
                <div>
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
                </div>
              }
            >
              <Tween from={{ x: 1280 }} to={{ x: 0 }} />
            </Timeline>
          </Scene>
          <Scene duration={350} triggerHook={1}>
            <Timeline
              target={
                <div>
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
                      handleInputChange({
                        key: 'contactMethod',
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              }
            >
              <Tween from={{ x: -1280 }} to={{ x: 0 }} />
            </Timeline>
          </Scene>
          <Scene duration={300} triggerHook={1}>
            <Timeline
              target={
                <div>
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
                      handleInputChange({
                        key: 'contactInfo',
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              }
            >
              <Tween from={{ x: 1280 }} to={{ x: 0 }} />
            </Timeline>
          </Scene>
          <Scene duration={250} triggerHook={1}>
            <Timeline
              target={
                <div>
                  <Textarea
                    id='message'
                    name='message'
                    label={language === 'en' ? 'Message' : 'Mensaje'}
                    value={formData.message}
                    placeholder={
                      language === 'en' ? 'Message...' : 'Mensaje...'
                    }
                    containerClasses='my-4'
                    rows={3}
                    hasError={!!formErrors.message}
                    onChange={(e) =>
                      handleInputChange({
                        key: 'message',
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              }
            >
              <Tween from={{ x: -1280 }} to={{ x: 0 }} />
            </Timeline>
          </Scene>
        </Controller>
      </div>
      <Controller>
        <Scene duration={100} triggerHook={0.9}>
          <Timeline
            target={
              <div>
                <SubmitBtn language={language} isLoading={isLoading} />
              </div>
            }
          >
            <Tween from={{ y: 150 }} to={{ y: 0 }} />
          </Timeline>
        </Scene>
      </Controller>
    </form>
  );
};
