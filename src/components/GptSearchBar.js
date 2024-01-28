import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGPTMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const getLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  // searh movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    alert("gpt api call is asking cost so displaying static data");
    // make on api call to gpt api and get movie results

    // const getQuery =
    //   "Act as a Movie Recommendation system and suggest some moives for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the exampele result given ahead. Example Result : Ayalan, saalar, Don, Golmaal, captain america";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: getQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // above code is not working so giving static data

    const getMovies = ["Ayalaan", "Captain Miller", "Japan", "LEO", "800"];

    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResults({ movieNames: getMovies, movieResults: tmdbResults })
    );

    console.log(tmdbResults);

    // console.log(gptResults);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-[50%] bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-2 col-span-10"
          placeholder={lang[getLanguage].gptSearchPlaceholder}
        />
        <button
          className="py-2 m-2 px-4 col-span-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
