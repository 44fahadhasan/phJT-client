import { IoSearchOutline } from "react-icons/io5";
import InputFiled from "../InputFiled";

const SearchBox = () => {
  return (
    <div className="w-11/12 md:w-8/12 xl:w-6/12 mx-auto">
      <form className="w-full px-4">
        {/* text */}
        <InputFiled
          name={"search"}
          type={"text"}
          placeholder={"Search"}
          icon={<IoSearchOutline />}
        />
      </form>
    </div>
  );
};

export default SearchBox;
