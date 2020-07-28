import React, { useEffect, useState } from "react"
import "./style.module.css"
import MovieItem from "../MovieItem/MovieItem"

const MovieList = ({ movies, isCheked, onChange }) => {

  const [windowWidth, swtWindowWidth] = useState(window.innerWidth)

  const isMobile = windowWidth <= 575

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions)

    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  const updateWindowDimensions = () => {
    swtWindowWidth(window.innerWidth)
  };

  return (
    <div className="film-list">
      {
        (movies.length === 0)
        ? <p>No movies in the list!</p>
        :movies.map((item) => (
          <MovieItem
            movie={item}
            key={item.id}
            isMobile={isMobile}
            onChange={onChange}
            isCheked={isCheked}
            value={item.watched}
            isOpen={item.isCardOpen}
            id={item.id}
          />
        ))
      }
    </div>
  );
};

export default MovieList
