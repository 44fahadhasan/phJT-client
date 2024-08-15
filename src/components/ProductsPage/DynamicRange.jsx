import PropTypes from "prop-types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const DynamicRange = ({ min, max }) => {
  const [range, setRange] = useState([min, max]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <div>
      <h3>
        Price range: {range[0]} - {range[1]}
      </h3>
      <Slider
        range
        min={min}
        max={max}
        value={range}
        onChange={handleRangeChange}
        allowCross={false}
        trackStyle={[{ backgroundColor: "#FFBB38" }]}
        handleStyle={[
          { borderColor: "#000000", backgroundColor: "#fff" },
          { borderColor: "#000000", backgroundColor: "#fff" },
        ]}
        railStyle={{ backgroundColor: "#ccc" }}
      />
    </div>
  );
};

DynamicRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default DynamicRange;
