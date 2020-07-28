import React from 'react'
import BasicOpen from './Content/BasicOpen'
import BasicContent from './Content/BasicContent'

const MovieItem = ({ movie, isOpen, onChange, id, isCheked, value }) => {

  return (
    <>
      {
        (isOpen)
        ? <BasicOpen 
            movie={movie}
            onChange={onChange}
            isCheked={isCheked}
            value={value}
            id={id}
            checkBoxTitlt='Watched'
        />
        : <BasicContent 
            movie={movie}
            onChange={onChange}
            id={id}
        />
      }    
    </>
  )
}

export default MovieItem
