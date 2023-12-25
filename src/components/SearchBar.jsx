import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FilterContext } from "../contexts/FilterContext.jsx";
import { filterLabel } from "../functions/layoutFct";

const SearchBar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [filterToggle, setFilterToggle] = useState(false);

  const handleCheckBoxChange = (index) => {
    const updatedFilter = [...filter];
    updatedFilter[index].checked = !updatedFilter[index].checked;
    setFilter(updatedFilter);
  };

  return (
    <div className="relative h-full w-full flex items-center gap-4 pl-6 max-md:pl-4 max-md:gap-2 ">
      <input
        type="text"
        className="focus:outline-none w-[400px] font-poppins text-black text-md max-lg:w-[250px] max-md:w-[290px] max-sm:w-[170px]"
        placeholder="Search"
      />
      <div className="cursor-pointer">
        <FaMagnifyingGlass className="text-orange rotate-90" />
      </div>
      <div className="relative flex items-center justify-center">
        <div
          className="px-5 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-gray-800 bg-gray-100 rounded-r-full max-md:px-2"
          onClick={() => setFilterToggle(!filterToggle)}
        >
          {filterLabel(filter)}
          <IoIosArrowDown
            className={`mt-0.5 ${filterToggle ? "rotate-180" : ""}`}
          />
        </div>
        {filterToggle && (
          <div className="absolute right-0 mt-0.5 top-[100%] flex flex-col p-2 w-[150px] rounded-xl bg-white shadow-xl">
            {filter.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckBoxChange(index)}
                  className="rounded border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                />
                <p className="text-black font-poppins text-md">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
