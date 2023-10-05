import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react';

type Props = {
  error: boolean;
  firstTouch: boolean;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  htmlFor: string;
  label: string;
  maxLength?: number;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value: string;
};

function ContactFormInput({
  error,
  firstTouch,
  handleBlur,
  handleChange,
  htmlFor,
  label,
  maxLength = 500,
  required = false,
  type = 'text',
  value,
}: Props) {
  return (
    <div className="col-span-12 sm:col-span-6 flex flex-col">
      <label
        htmlFor={htmlFor}
        className="mt-3 text-dark uppercase sm:mt-8 text-lg"
      >
        {label} : {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`bg-transparent border-b-2 border-opacity-50 font-light outline-none text-dark focus:border-opacity-100 focus:text-darker py-1 sm:py-2 ${
          error && firstTouch ? 'border-red-500' : 'border-darker'
        }`}
        maxLength={maxLength}
        name={htmlFor}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        value={value}
      />
    </div>
  );
}

export default ContactFormInput;
