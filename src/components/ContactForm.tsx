'use client';

import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Title from './Title';
import ContactFormInput from './ContactFormInput';
import ContactFormTextArea from './ContactFormTextArea';

type ResponseMessageState = 'PENDING' | 'SUCCESS' | 'ERROR';
type Props = {
  className?: string;
  title?: string;
};

const validateEmailRegex = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function ContactForm({ className = '', title }: Props) {
  const [firstName, setFirstName] = useState<{
    error: boolean;
    firstTouch: boolean;
    value: string;
  }>({ value: '', error: false, firstTouch: false });
  const [lastName, setLastName] = useState<{
    error: boolean;
    firstTouch: boolean;
    value: string;
  }>({ value: '', error: false, firstTouch: false });
  const [email, setEmail] = useState<{
    error: boolean;
    firstTouch: boolean;
    value: string;
  }>({ value: '', error: false, firstTouch: false });
  const [company, setCompagny] = useState<{
    error: boolean;
    firstTouch: boolean;
    value: string;
  }>({ value: '', error: false, firstTouch: false });
  const [message, setMessage] = useState<{
    error: boolean;
    firstTouch: boolean;
    value: string;
  }>({ value: '', error: true, firstTouch: false });

  const [loading, setLoading] = useState<boolean>(false);

  const [responseMessage, setResponseMessage] = useState<{
    message: string;
    state: ResponseMessageState;
  }>({ message: '', state: 'PENDING' });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const resetResponseMessage = useCallback(() => {
    if (responseMessage.state === 'PENDING' && responseMessage.message === '') {
      return;
    }
    setResponseMessage({ message: '', state: 'PENDING' });
  }, [responseMessage]);

  // ---------------------------------
  // FirstName
  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (loading) {
          return;
        }
        resetResponseMessage();
        setFirstName((prevState) => ({
          ...prevState,
          value: e.target.value,
          error: false,
        }));
      },
      [loading, resetResponseMessage]
    );
  const validateFirstName = useCallback(() => {
    setFirstName((prevState) => ({
      ...prevState,
      error: !prevState.value.length || prevState.value.length > 30,
      firstTouch: true,
    }));
  }, []);
  const handleFirstNameBlur: FocusEventHandler<HTMLInputElement> =
    useCallback(() => {
      if (loading) {
        return;
      }
      validateFirstName();
    }, [loading, validateFirstName]);

  // ---------------------------------
  // LastName
  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (loading) {
          return;
        }
        resetResponseMessage();
        setLastName((prevState) => ({
          ...prevState,
          value: e.target.value,
          error: false,
        }));
      },
      [loading, resetResponseMessage]
    );
  const validateLastName = useCallback(() => {
    setLastName((prevState) => ({
      ...prevState,
      error: !prevState.value.length || prevState.value.length > 30,
      firstTouch: true,
    }));
  }, []);
  const handleLastNameBlur: FocusEventHandler<HTMLInputElement> =
    useCallback(() => {
      if (loading) {
        return;
      }
      validateLastName();
    }, [loading, validateLastName]);

  // ---------------------------------
  // email
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (loading) {
        return;
      }
      resetResponseMessage();
      setEmail((prevState) => ({
        ...prevState,
        value: e.target.value,
        error: false,
      }));
    },
    [loading, resetResponseMessage]
  );
  const validateEmail = useCallback(() => {
    setEmail((prevState) => ({
      ...prevState,
      error: !prevState.value.length || !validateEmailRegex(prevState.value),
      firstTouch: true,
    }));
  }, []);
  const handleEmailBlur: FocusEventHandler<HTMLInputElement> =
    useCallback(() => {
      if (loading) {
        return;
      }
      validateEmail();
    }, [loading, validateEmail]);

  // ---------------------------------
  // company
  const handleCompanyChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (loading) {
        return;
      }
      resetResponseMessage();
      setCompagny((prevState) => ({
        ...prevState,
        value: e.target.value,
        error: false,
      }));
    },
    [loading, resetResponseMessage]
  );
  const validateCompany = useCallback(() => {
    setCompagny((prevState) => ({
      ...prevState,
      error: prevState.value.length > 50,
      firstTouch: true,
    }));
  }, []);
  const handleCompanyBlur: FocusEventHandler<HTMLInputElement> =
    useCallback(() => {
      if (loading) {
        return;
      }
      validateCompany();
    }, [loading, validateCompany]);

  // ---------------------------------
  // message
  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback(
      (e) => {
        if (loading) {
          return;
        }
        resetResponseMessage();
        setMessage((prevState) => ({
          ...prevState,
          value: e.target.value,
          error: false,
        }));
      },
      [loading, resetResponseMessage]
    );
  const validateMessage = useCallback(() => {
    setMessage((prevState) => ({
      ...prevState,
      error: !prevState.value.length || prevState.value.length > 50,
      firstTouch: true,
    }));
  }, []);
  const handleMessageBlur: FocusEventHandler<HTMLTextAreaElement> =
    useCallback(() => {
      if (loading) {
        return;
      }
      validateMessage();
    }, [loading, validateMessage]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      if (recaptchaRef.current) {
        recaptchaRef.current.execute();
      }
    },
    []
  );

  const onReCAPTCHAChange = useCallback(
    async (captchaCode: string | null) => {
      // If the reCAPTCHA code is null or undefined indicating that
      // the reCAPTCHA was expired then return early
      if (!captchaCode) {
        return;
      }

      resetResponseMessage();
      validateFirstName();
      validateLastName();
      validateEmail();
      validateCompany();
      validateMessage();
      if (
        loading ||
        firstName.error ||
        lastName.error ||
        email.error ||
        company.error ||
        message.error
      ) {
        return;
      }
      const data = {
        firstName: String(firstName.value).trim(),
        lastName: String(lastName.value).trim(),
        email: String(email.value).trim(),
        company: String(company.value).trim(),
        message: String(message.value).trim(),
        captcha: captchaCode,
      };

      setLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const { errors, error } = (await response.json()) as {
          errors?: string[];
          error?: string;
        };

        if (!!errors && errors.length) {
          if (errors.includes('firstName')) {
            setFirstName((prevState) => ({
              ...prevState,
              error: true,
              firstTouch: true,
            }));
          }
          if (errors.includes('lastName')) {
            setLastName((prevState) => ({
              ...prevState,
              error: true,
              firstTouch: true,
            }));
          }
          if (errors.includes('email')) {
            setEmail((prevState) => ({
              ...prevState,
              error: true,
              firstTouch: true,
            }));
          }
          if (errors.includes('company')) {
            setCompagny((prevState) => ({
              ...prevState,
              error: true,
              firstTouch: true,
            }));
          }
          if (errors.includes('message')) {
            setMessage((prevState) => ({
              ...prevState,
              error: true,
              firstTouch: true,
            }));
          }
        } else if (!!error) {
          setResponseMessage({
            message:
              "oups, quelque chose s'est mal passé, essayez de me renvoyer votre message dans quelques minutes",
            state: 'ERROR',
          });
        } else {
          setFirstName({ error: false, firstTouch: false, value: '' });
          setLastName({ error: false, firstTouch: false, value: '' });
          setEmail({ error: false, firstTouch: false, value: '' });
          setCompagny({ error: false, firstTouch: false, value: '' });
          setMessage({ error: false, firstTouch: false, value: '' });
          setResponseMessage({
            message:
              'votre message à bien été envoyé, je vous répondrais dans les plus bref délai',
            state: 'SUCCESS',
          });
        }
      } catch (e) {
        setResponseMessage({
          message:
            "oups, quelque chose s'est mal passé, essayez de me renvoyer votre message dans quelques minutes",
          state: 'ERROR',
        });
      } finally {
        setLoading(false);
      }
    },
    [
      firstName,
      lastName,
      email,
      company,
      message,
      loading,
      resetResponseMessage,
      validateFirstName,
      validateLastName,
      validateEmail,
      validateCompany,
      validateMessage,
    ]
  );

  useEffect(() => {
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  }, []);

  return (
    <>
      {!!title && <Title className="text-center">{title}</Title>}
      <form
        className={`px-4 max-w-xl sm:px-0 ${className}`}
        onSubmit={handleSubmit}
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={onReCAPTCHAChange}
        />
        <div className="gap-2 grid grid-cols-12">
          <ContactFormInput
            error={firstName.error}
            firstTouch={firstName.firstTouch}
            handleBlur={handleFirstNameBlur}
            handleChange={handleFirstNameChange}
            htmlFor="prenom"
            label="votre prénom"
            value={firstName.value}
            maxLength={30}
            required={true}
          />
          <ContactFormInput
            error={lastName.error}
            firstTouch={lastName.firstTouch}
            handleBlur={handleLastNameBlur}
            handleChange={handleLastNameChange}
            htmlFor="nom"
            label="votre nom"
            value={lastName.value}
            maxLength={30}
            required={true}
          />
          <ContactFormInput
            error={email.error}
            firstTouch={email.firstTouch}
            handleBlur={handleEmailBlur}
            handleChange={handleEmailChange}
            htmlFor="email"
            label="votre email"
            value={email.value}
            required={true}
            type="email"
          />
          <ContactFormInput
            error={company.error}
            firstTouch={company.firstTouch}
            handleBlur={handleCompanyBlur}
            handleChange={handleCompanyChange}
            htmlFor="company"
            label="société/entreprise"
            maxLength={50}
            value={company.value}
          />
          <ContactFormTextArea
            error={message.error}
            firstTouch={message.firstTouch}
            htmlFor="message"
            label="laissez-moi un message"
            onBlur={handleMessageBlur}
            onChange={handleMessageChange}
            value={message.value}
            required={true}
            showCharLimit={true}
          />
        </div>
        <div className="flex pt-6">
          <button className="uppercase border-4 border-dark text-dark py-2 px-8 font-bold text-lg hover:text-light hover:bg-dark transition duration-500">
            {loading ? 'loading' : 'envoyer'}
          </button>
        </div>
        {responseMessage.state !== 'PENDING' &&
          responseMessage.message.length && (
            <div
              className={`text-center uppercase border-4 py-6 px-10 mt-10 text-xl ${
                responseMessage.state === 'ERROR'
                  ? 'border-red-500'
                  : 'border-green-500'
              }`}
            >
              <span
                className={`${
                  responseMessage.state === 'ERROR'
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                {responseMessage.message}
              </span>
            </div>
          )}
        <div className="col-span-6 pt-8 text-dark text-center text-sm sm:col-span-10 sm:col-start-2">
          This site is protected by reCAPTCHA and the Google{' '}
          <a
            className="italic"
            href="https://policies.google.com/privacy"
            target="_blank"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            className="italic"
            href="https://policies.google.com/terms"
            target="_blank"
          >
            Terms of Service
          </a>{' '}
          apply.
        </div>
      </form>
    </>
  );
}

export default ContactForm;
