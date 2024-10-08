import { Link } from "react-router-dom";
import { filters } from "../../data/data";
import Heading from "../Heading";
import CaegoryCard from "./CaegoryCard";

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Heading title={"Top categories"} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
        {filters[0]?.options?.map(({ _id, img, label }) => (
          <Link key={_id} to={`Category/${label?.split(" ")?.join("-")}`}>
            <CaegoryCard img={img} label={label} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
