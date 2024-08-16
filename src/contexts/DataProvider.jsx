import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  // state for search text
  const [searchText, setSearchText] = useState(null);

  //   state for per page products show
  const [perPageItem, setPerPageItem] = useState(10);

  //   state for product sorting
  const [sort, setSort] = useState("Default");

  //   state for product price range
  const [range, setRange] = useState([0, 100]); //todo 100

  //   state for product sorting
  const [filter, setFilter] = useState({});

  //
  console.log("searchText in Context", searchText);
  console.log("perPageItem in Context", perPageItem);
  console.log("sort in Context", sort);
  console.log("range in Context", range);
  console.log("filter in Context", filter);

  //
  const datas = {
    setSearchText,
    perPageItem,
    setPerPageItem,
    sort,
    setSort,
    range,
    setRange,
    setFilter,
  };

  //
  return <DataContext.Provider value={datas}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.element,
};

export default DataProvider;
