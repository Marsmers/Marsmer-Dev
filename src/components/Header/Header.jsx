import React from 'react'
import style from "./header.module.css"

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.list}>
        <ul>
            <li>Project</li>
            <li>Contact me</li>
            <li>View Resume</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
