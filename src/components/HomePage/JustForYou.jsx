import { Link } from "react-router-dom";
import { products } from "../../data/data";
import Button from "../Button";
import Heading from "../Heading";
import ProductCard from "../ProductCard";

const JustForYou = () => {
  return (
    <div className="pt-24">
      <Heading title={"Just For You"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to={"/Products"}>
          <Button text={"More"} />
        </Link>
      </div>
    </div>
  );
};

export default JustForYou;
