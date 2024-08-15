import PropTypes from "prop-types";
import { useState } from "react";

const InputFiled = ({
  label,
  defaultValue,
  name,
  type,
  required,
  placeholder,
  icon,
  openIcon,
  closeIcon,
  disabled,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <label className="text-[#444] text-sm mb-2 block">{label}</label>
      <div className="relative flex items-center">
        <input
          disabled={disabled}
          name={name}
          defaultValue={defaultValue}
          type={(toggle && "text") || type}
          required={required}
          className="w-full text-sm text-black border border-[#E8E8E8] px-4 py-3 rounded-lg outline-[#001B38]"
          placeholder={placeholder}
        />

        {/* icon */}
        {
          <span className="text-xl absolute right-4 text-[#A2A2A2]">
            {(icon && icon) || (
              <span
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer"
              >
                {toggle ? openIcon : closeIcon}
              </span>
            )}
          </span>
        }
      </div>
    </div>
  );
};

InputFiled.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.object,
  openIcon: PropTypes.string,
  closeIcon: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputFiled;
