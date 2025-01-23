import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import PropTypes from "prop-types";
import { LANGUAGE_VERSIONS } from "../constants.js";
const LANGUAGE = [
  { id: 0, item: "javascript" },
  { id: 1, item: "typescript" },
  { id: 2, item: "python" },
  { id: 3, item: "java" },
  { id: 4, item: "c#" },
];

const LanguageSelector = ({ language, onSelector }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 py-2 px-4 rounded-[5px] w-[140px] mb-4 flex items-center justify-between gap-2 hover:bg-gray-400 cursor-pointer"
      >
        {language}

        <AiOutlineDown />
      </div>

      <div
        className={`${
          !isOpen
            ? "hidden"
            : "bg-gray-700 w-[200px] rounded-[6px] mt-2 absolute z-10"
        }`}
      >
        {LANGUAGE.map((item, index) => (
          <div
            key={index}
            className={` px-4 py-2 hover:bg-gray-800 cursor-pointer 
                ${item.id === 0 && "rounded-t-[6px]"} 
                ${item.id === 4 && "rounded-b-[6px]"}
                ${item.item === language ? "text-sky-600" : "text-gray-300"}
                `}
            onClick={() => {
              onSelector(item.item), setIsOpen(!isOpen);
            }}
          >
            {item.item}
            <span
              className={`text-[12px] ml-[3px]  ${
                item.item === language ? "text-sky-600" : "text-gray-400"
              }`}
            >
              {LANGUAGE_VERSIONS[language]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired, // `language`는 반드시 string이어야 함
  onSelector: PropTypes.func.isRequired, // `onSelector`는 반드시 함수여야 함
};
