import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, img, title, price, ratings, description } = product || {};

  return (
    <Link to={`Products/${_id}`}>
      <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
          <GrFavorite className="fill-black inline-block w-4" />
        </div>

        <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={img}
            alt="Product 1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 bg-white">
          <h3 className="text-lg font-bold text-black">
            {title?.slice(0, 20)}
          </h3>

          <h4 className="text-lg text-black font-bold mt-2">${price}</h4>

          <p className="text-gray-600 text-sm mt-2">
            {description?.slice(0, 50)} . . .
          </p>

          <div className="flex space-x-2 mt-4">
            <Rating
              style={{
                maxWidth: 100,
              }}
              value={ratings}
              readOnly
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
