import { NextPage } from "next";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  value: any;
  name?: string;

  required?: boolean;

  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UseInput: NextPage<InputProps> = ({
  type,
  
  label,
  name,
  placeholder,

  value,
  onChange,
  required,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
        htmlFor="grid-first-name"
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full  text-gray-700 border focus:border-gray-200 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-10 border-gray-500"
        id="grid-last-name"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
      
        autoComplete="off"
        required={required}
        onChange={onChange}
      ></input>
    </>
  );
};
