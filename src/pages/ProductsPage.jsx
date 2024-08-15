import Content from "../components/ProductsPage/Content";
import ProductsFilterContainer from "../components/ProductsPage/ProductsFilterContainer";
import SearchBox from "../components/ProductsPage/SearchBox";

const ProductsPage = () => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center pt-12 sm:pt-24">
        {/* top content */}
        <Content />

        {/* search box */}
        <SearchBox />
      </div>

      {/* products and filter system */}
      <ProductsFilterContainer />
    </>
  );
};

export default ProductsPage;
