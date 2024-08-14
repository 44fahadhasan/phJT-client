import PropTypes from "prop-types";

const Button = ({ text, bg, hoverBg, textColor, hoverTextColor }) => {
  return (
    <span
      className={`poppins text-sm  px-5 py-2.5 ${textColor ?? "text-accent"} ${
        hoverTextColor ?? "hover:text-[#D1D5BC]"
      } ${bg ?? "bg-[#FFBB38]"} ${
        hoverBg ?? "hover:bg-[#000000]"
      } rounded-[30px] transition-all duration-500`}
    >
      {text ?? "SHOP NOW"}
    </span>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  hoverTextColor: PropTypes.string,
  bg: PropTypes.string,
  hoverBg: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
