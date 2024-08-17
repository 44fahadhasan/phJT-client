import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useDataHandler from "./useDataHandler";

const useDataLoaderFromApi = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    searchText,
    setTotalProductsNumber,
    activePageNumber,
    parPageProduct,
    sort,
    range,
    categorys,
    brands,
  } = useDataHandler();

  const modifyCategorys = JSON.stringify(categorys);
  const modifyBrands = JSON.stringify(brands);

  const axiosPublicUrl = useAxiosPublic();

  //   load data
  useEffect(() => {
    axiosPublicUrl
      .get(
        `/products?search=${searchText}&page=${
          (activePageNumber, activePageNumber)
        }&size=${parPageProduct}&sort=${sort}&priceRange=${`${range[0]}-${range[1]}`}&category=${modifyCategorys}&brand=${modifyBrands}`
      )
      .then(({ data }) => {
        setProductsData(data?.result);
        setTotalProductsNumber(data?.totalProcutsNumber);
        setLoading(false);
      });

    //
  }, [
    axiosPublicUrl,
    modifyBrands,
    modifyCategorys,
    activePageNumber,
    parPageProduct,
    range,
    searchText,
    sort,
    setTotalProductsNumber,
  ]);

  //   retuen data for outside commopent
  return { productsData, loading };
};

export default useDataLoaderFromApi;
