import { TbMoodEmptyFilled } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100  rounded-lg shadow-md">
      <TbMoodEmptyFilled className="w-12 h-12 dark:text-gray-400 text-gray-700" />
      <h3 className="text-xl font-medium mt-4 text-black">Produts not found</h3>
      <p className="text-gray-500 mt-2">
        The produts you are looking for could not be located.
      </p>
    </div>
  );
};

export default NotFound;
