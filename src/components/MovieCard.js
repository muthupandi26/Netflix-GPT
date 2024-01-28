import React from "react";
import { IMAGE_CDN } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 ">
      <img className="" alt="movie_Card" src={IMAGE_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
