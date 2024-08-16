import PropTypes from "prop-types";

const CaegoryCard = ({ img, label }) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 border border-gray-500">
      <div className="">
        <img
          src={img}
          alt={label}
          className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full shrink-0"
        />
      </div>

      <h3 className="text-black text-xl font-semibold mb-3">{label}</h3>
    </div>
  );
};

CaegoryCard.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
};

export default CaegoryCard;
