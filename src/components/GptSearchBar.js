import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const getLanguage = useSelector((store) => store.config.language);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-[50%] bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-2 col-span-10"
          placeholder={lang[getLanguage].gptSearchPlaceholder}
        />
        <button className="py-2 m-2 px-4 col-span-2 bg-red-700 text-white rounded-lg">
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
