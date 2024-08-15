import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return (
    <h2 className="text-black sm:text-4xl text-2xl font-extrabold text-center mb-16 dmsans">
      {title}
    </h2>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
};

export default Heading;
