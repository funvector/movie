import React from 'react'
import classes from './style.module.css'
import svgIcons from '../../../../utils/icons'
import DefImg from '../../../../utils/img/default_image.png'

const BasicOpen = ({ movie, onChange, id, isCheked, value, checkBoxTitlt }) => {

  const onIsOpenChangeHandler = () => {
    onChange(id)
  }

  const onChangeChekBoxValueHandler = () => {
    isCheked(id)
  }

  return (
    <>
      <div className={classes.basicOpen}>
        <div className={classes.basicIcon}
           onClick={onIsOpenChangeHandler}
        >
          {svgIcons.downArrow}
        </div>
        <p className={classes.basicP}>{movie.title}</p>
        <input 
          type="checkbox" 
          name="isWathed"
          onChange={onChangeChekBoxValueHandler}
          checked={value} 
        />
        <span style={{fontWeight: "bold", margin: 0.2+'em'}}>{checkBoxTitlt}</span>
      </div>
      <div className={classes.content}>
        <div>
          <img className={classes.img} src={DefImg} alt="defaultAmg"/>
        </div>
        <div>
          <p>{`Year: ${movie.date}`}</p>
          <p>{`IMDB: ${movie.imdb}`}</p>
          <p>{`Overview: ${movie.overview}`}</p>
        </div>
      </div>
    </>
  )
}

export default BasicOpen
