import React, { useState } from "react";
import classes from "./style.module.css";

const SearchInputField = ({ placeholder, onSearchChange }) => {
  
  const [searchMovie, setSearchMovie] = useState({
    title: ''
  })

  const onChangeInputHandler = (event) => {
    event.persist()
    setSearchMovie((prevState) => ({
      ...prevState, title: event.target.value
    }))
    onSearchChange(event.target.value)
  }
  
  return (
    <input
        value={searchMovie.title}
        onChange={onChangeInputHandler}
        placeholder={placeholder}
        className={classes.inputField}
    />
  )
};

export default SearchInputField