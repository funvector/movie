import React from 'react'
import svgIcons from '../../../utils/icons/'
import classes from './style.module.css'

const StatusFilter = ({ status, watched, onChangeFilterValue }) => {

  const onChangeFiletrsValue = () => {
    onChangeFilterValue(watched)
  }

  const LayoutActive = (
    <div className={classes.watchedActive}>
      {svgIcons[watched+'Active']}
      <p className={classes.watchedActiveP}>
        {watched}
      </p>
    </div>
  )

  const Layout = (
    <div className={classes.watched}>
      {svgIcons[watched]}
      <p className={classes.watchedP}>
        {watched}
      </p>
    </div>
  )
  
  return (
    <div 
      className={classes.statusFilter}
      onClick={onChangeFiletrsValue}  
    >
      { 
        (status)
        ? LayoutActive
        : Layout
      }
    </div>
  )
}

export default StatusFilter