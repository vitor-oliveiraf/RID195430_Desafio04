import "./Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  link: string;
  text: string;
  width: string;
  height: string;
}

function Button({ link, text, width, height }: ButtonProps) {
  return (
    <>
      <Link to={link}>
        <button className="button" style={{ width, height }}>
          {text}
        </button>
      </Link>
    </>
  );
}

export default Button;
