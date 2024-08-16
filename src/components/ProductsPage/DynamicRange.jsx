import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useDataHandler from "../../hooks/useDataHandler";

const DynamicRange = () => {
  const { range, setRange } = useDataHandler();

  return (
    <div>
      <h3>
        Price range: {range[0]} - {range[1]}
      </h3>
      <Slider
        range
        min={0}
        max={100} //todo 100 load max price from database
        value={range}
        onChange={(newRange) => setRange(newRange)}
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

export default DynamicRange;
