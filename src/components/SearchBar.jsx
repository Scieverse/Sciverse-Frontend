import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FilterContext } from "../contexts/FilterContext.jsx";

const SearchBar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [toggle, setToggle] = useState(false);

  const handleCheckBoxChange = (index) => {
    const updatedFilter = [...filter];
    updatedFilter[index].checked = !updatedFilter[index].checked;
    setFilter(updatedFilter);
  };

  return (
    <div className="relative h-full w-full flex items-center gap-4 pl-6 ">
      <input
        type="text"
        className="focus:outline-none w-[400px] font-poppins text-black text-md"
        placeholder="Search"
      />
      <div className="cursor-pointer">
        <FaMagnifyingGlass className="text-orange rotate-90" />
      </div>
      <div className="relative flex items-center justify-center">
        <div
          className="px-5 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-gray-800 bg-gray-100 rounded-r-full"
          onClick={() => setToggle(!toggle)}
        >
          All
          <IoIosArrowDown className={`mt-0.5 ${toggle ? "rotate-180" : ""}`} />
        </div>
        {toggle && (
          <div className="absolute right-0 mt-0.5 top-[100%] flex flex-col w-fit rounded-xl bg-white shadow-xl">
            {filter.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckBoxChange(index)}
                  className="rounded border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                />
                <label>{item.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
