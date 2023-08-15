import React, { useEffect, useRef, useState } from "react";

function Dropdown({ dropMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropValue, setDropValue] = useState("Sort");
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleDrop = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        ref={dropdownRef}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white w-52 justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleDrop}
      >
        {dropValue}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {dropMenu.map((elem, index) => (
              <li key={index}>
                <div
                  onClick={() => {
                    elem.action();
                    setDropValue(elem.label);
                  }}
                  className="block px-4 py-2 text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {elem.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
