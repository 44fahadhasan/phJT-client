import useDataHandler from "../../hooks/useDataHandler";

const Pagination = () => {
  const {
    totalProductsNumber,
    parPageProduct,
    activePageNumber,
    setActivePageNumber,
  } = useDataHandler();

  let numberOfPage;
  if (totalProductsNumber > 0) {
    numberOfPage = Math.ceil(totalProductsNumber / parPageProduct);
  }

  const pagesNumber = [];
  for (let i = 0; i < numberOfPage; i++) {
    pagesNumber.push(i);
  }

  const handlePreviousPage = () => {
    if (activePageNumber > 0) {
      setActivePageNumber(activePageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (activePageNumber < pagesNumber.length - 1) {
      setActivePageNumber(activePageNumber + 1);
    }
  };

  return (
    <>
      {pagesNumber?.length === 0 ? (
        <></>
      ) : (
        <ul className="flex gap-4 justify-center mt-12">
          {/* pre button */}
          <button
            onClick={handlePreviousPage}
            className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-[#FFBB38] w-10 h-10 rounded-lg"
          >
            Prev
          </button>

          {/* page number */}
          {pagesNumber?.map((pageNumber) => (
            <button
              onClick={() => setActivePageNumber(pageNumber)}
              className={`flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg ${
                pageNumber === activePageNumber &&
                "bg-[#FFBB38]  border-2 border-[#FFBB38] text-white"
              }`}
              key={pageNumber}
            >
              {pageNumber + 1}
            </button>
          ))}

          {/* next button */}
          <button
            onClick={handleNextPage}
            className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-[#FFBB38] w-10 h-10 rounded-lg"
          >
            Next
          </button>
        </ul>
      )}
    </>
  );
};

export default Pagination;
