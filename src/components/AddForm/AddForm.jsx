import React, { useState } from 'react'
import classes from './style.module.css'
import Button from '../Button'
import AddInputField from '../InputField/AddMovieInput'

const AddForm = ({ onSubmitHandler }) => {

  const [movieTitle, setMovieTitle] = useState({
    title: ''
  })

  const OnSubmitFormHandler = (event) => {
    event.preventDefault()
  
    if(movieTitle.title.trim()) {
      onSubmitHandler(movieTitle.title)
      setMovieTitle((prevState) => ({
      ...prevState, title: ''
      }))
      return;
    }
    alert(`Field is empty!`)
    setMovieTitle((prevState) => ({
    ...prevState, title: ''
    }))
  }

  const onChangeMovieTitleHandler = (event) => {
    event.persist()
    setMovieTitle((prevState) => ({
      ...prevState, title: event.target.value
    }))
  }
  
  return (
    <form className={classes.AddMovieContainer} 
      onSubmit={OnSubmitFormHandler}>
      <AddInputField 
        placeholder={'Add Movie'}
        value={movieTitle.title}
        onChange={onChangeMovieTitleHandler}
      />
      <Button 
        text='Add'
      />
    </form>
  )
}

export default AddForm
