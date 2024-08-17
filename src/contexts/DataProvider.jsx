import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  // state for search text
  const [searchText, setSearchText] = useState("");

  // staste for total products numbers
  const [totalProductsNumber, setTotalProductsNumber] = useState(50);

  //   state for page show
  const [activePageNumber, setActivePageNumber] = useState(0);

  //   state for per page products show
  const [parPageProduct, setParPageProduct] = useState(6);

  //   state for product sorting
  const [sort, setSort] = useState("Default");

  //   state for product price range
  const [range, setRange] = useState([0, 100]); //todo 100

  //   state for product categorys
  const [categorys, setCategorys] = useState([]);

  //   state for product brands
  const [brands, setBrands] = useState([]);

  //
  const datas = {
    searchText,
    setSearchText,
    totalProductsNumber,
    setTotalProductsNumber,
    parPageProduct,
    setParPageProduct,
    activePageNumber,
    setActivePageNumber,
    sort,
    setSort,
    range,
    setRange,
    categorys,
    setCategorys,
    brands,
    setBrands,
  };

  //
  return <DataContext.Provider value={datas}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataProvider;
