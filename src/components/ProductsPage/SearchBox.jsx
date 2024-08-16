import { IoSearchOutline } from "react-icons/io5";
import useDataHandler from "../../hooks/useDataHandler";
import InputFiled from "../InputFiled";

const SearchBox = () => {
  const { setSearchText } = useDataHandler();

  // handle input value
  const handleInputValue = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-11/12 md:w-8/12 xl:w-6/12 mx-auto">
      <form onChange={handleInputValue} className="w-full px-4">
        {/* text */}
        <InputFiled
          type={"text"}
          placeholder={"Search Your Product"}
          icon={<IoSearchOutline />}
        />
      </form>
    </div>
  );
};

export default SearchBox;
