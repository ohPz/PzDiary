import React, { useState, FC } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption: string;
};

const Dropdown: FC<DropdownProps> = ({ options, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option); 
    setIsOpen(false); 
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-32 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption} <span className="ml-1">{isOpen ? '▲' : '▼'}</span>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
          {options.map((option) => (
            <div
              key={option}
              className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
