import { Select } from "@headlessui/react";
import { FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { products, showOptions, sortOptions } from "../../data/data";
import useDataHandler from "../../hooks/useDataHandler";
import ProductCard from "../ProductCard";
import Filter from "./Filter";
import FilterForMobile from "./FilterForMobile";

const ProductsFilterContainer = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { perPageItem, setPerPageItem, sort, setSort } = useDataHandler();

  return (
    <>
      {/* filter mobile  dialog */}
      <FilterForMobile
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <main className="container w-[87%] mx-auto">
        {/* title and sorting top area */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          {/* title left area */}
          <h1 className="text-4xl font-bold tracking-tight text-black hidden sm:block">
            Products
          </h1>

          {/* sort right area */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {/* select for per page products show */}
            <div className="inline-flex gap-1 justify-center text-sm lg:text-base">
              <label className=" font-medium text-black cursor-pointer">
                Show:
                <Select
                  value={perPageItem}
                  onChange={(e) => setPerPageItem(Number(e.target.value))}
                  name="status"
                  aria-label="Show Products Per Page"
                >
                  {showOptions.map(({ number }) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </Select>
              </label>
            </div>

            {/* select for newset price low and high */}
            <div className="inline-flex gap-1 justify-center text-sm lg:text-base">
              <label className=" font-medium text-black cursor-pointer">
                Sort By:
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-[85px]"
                  name="status"
                  aria-label="products sort"
                >
                  {sortOptions.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </label>
            </div>

            {/* filter icon for mobile device */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="text-gray-400 hover:text-gray-500  lg:hidden flex gap-2 items-center"
            >
              <span className="text-sm font-medium text-gray-700 hover:text-black">
                Filters
              </span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* view grid icon */}
            <button
              type="button"
              className="hidden sm:block pr-2 text-gray-400 hover:text-gray-500"
            >
              <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* filter left side and products gird right side bottom area */}
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters start here */}
            <Filter hide={true} />

            {/* Products grid start here */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-6">
                {products?.slice(0, 9)?.map((product) => (
                  <ProductCard product={product} key={product?._id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsFilterContainer;
