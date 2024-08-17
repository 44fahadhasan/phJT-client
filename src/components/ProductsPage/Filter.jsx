import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import { filters } from "../../data/data";
import useDataHandler from "../../hooks/useDataHandler";
import DynamicRange from "./DynamicRange";

const Filter = ({ hide }) => {
  const { categorys, setCategorys, brands, setBrands } = useDataHandler();

  const handleFilters = (e, title) => {
    const targetInput = e.target;
    const filterValue = targetInput.value;
    const filterChecked = targetInput.checked;

    // categorys filter
    if (title === "Categorys") {
      if (!categorys?.includes(filterValue) && filterChecked) {
        setCategorys([...categorys, filterValue]);

        //
      } else if (categorys?.includes(filterValue) && !filterChecked) {
        const updateCategorys = categorys.filter(
          (value) => value !== filterValue
        );

        setCategorys(updateCategorys);
      }
    }

    // brand filter
    if (title === "Brand") {
      if (!brands?.includes(filterValue) && filterChecked) {
        setBrands([...brands, filterValue]);

        //
      } else if (brands?.includes(filterValue) && !filterChecked) {
        const updateBrand = brands.filter((value) => value !== filterValue);

        setBrands(updateBrand);
      }
    }
  };

  return (
    <form
      className={`mt-4 lg:mt-0 border-t lg:border-t-0 border-gray-200 ${
        hide && "hidden"
      }  lg:block`}
    >
      {/* price range */}
      <div className="px-4 lg:px-0 py-6">
        <DynamicRange />
      </div>

      {/* filters start here */}
      {filters?.map(({ _id, title, options }) => (
        <Disclosure
          defaultOpen
          key={_id}
          as="div"
          className="border-t lg:border-t-0 lg:border-b border-gray-200 px-4 lg:px-0 py-6"
        >
          {/* filter outside (title and collapse toggle button ) start here */}
          <h3 className="-mx-2 lg:mx-0 -my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 lg:px-0 py-3 lg:text-sm text-gray-400 hover:text-gray-500">
              {/* title */}
              <span className="font-medium text-black">{title}</span>

              {/* collapse toggle button */}
              <span className="ml-6 flex items-center">
                <PlusIcon
                  aria-hidden="true"
                  className="h-5 w-5 group-data-[open]:hidden"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </DisclosureButton>
          </h3>

          {/* filter inside view start here */}
          <DisclosurePanel className="pt-6">
            <div className="space-y-6">
              {options?.map((option, idx) => (
                <div key={option?._id} className="flex items-center">
                  {/* input checkbox */}
                  <input
                    onChange={(e) => handleFilters(e, title)}
                    defaultValue={option?.label}
                    defaultChecked={option?.checked}
                    id={`${option?._id}${idx}${option?.label
                      ?.split(" ")
                      ?.join("")}`}
                    name={option?.label?.split(" ")?.join("")}
                    type="checkbox"
                    className="h-4 w-4 rounded accent-[#FFBB38] cursor-pointer"
                  />

                  {/* input label */}
                  <label
                    htmlFor={`${option?._id}${idx}${option?.label
                      ?.split(" ")
                      ?.join("")}`}
                    className="ml-3 min-w-0 flex-1 text-gray-500 cursor-pointer"
                  >
                    {option?.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
          {/* filter inside view end here */}
        </Disclosure>
      ))}
      {/* filters end here */}
    </form>
  );
};

Filter.propTypes = {
  hide: PropTypes.bool,
};

export default Filter;
