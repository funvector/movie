import React from 'react'
import classes from './style.module.css'
import svgIcons from '../../../../utils/icons'

const basicContent = ({ movie, onChange, id }) => {

  const onIsOpenChangeHandler = () => {
    onChange(id)
  }

  return (
    <div className={classes.basic}>
      <div className={classes.basicIcon}
        onClick={onIsOpenChangeHandler}
      >
        {svgIcons.rightArrow}
      </div>
      <p className={classes.basicP}>{movie.title}</p>
    </div>
  )
}

export default  basicContent 
