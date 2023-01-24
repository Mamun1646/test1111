// import NextPage generic type
import { NextPage } from "next";
interface ButtonProps {
  text: string; // text to be displayed on the button
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // click event handler
  disabled?: boolean; // optional disabled flag
  className?: string;
  value?: number;
  
}
const Button: NextPage<ButtonProps> = ({
  text,
  value,
  onClick,
  disabled,
  className,
  
}) => {
  return (
    <>
      <button
        onClick={onClick}
        value={value}
        disabled={disabled}
        className={className}
        
      >
        {text}
      </button>
    </>
  );
};
export default Button;
