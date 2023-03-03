import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/slices/nameTrainer.slice'
import "../styles/header.css"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogOut = () => {
    dispatch(logOut())
  }
  return (
    <header>
      <div>
        <div className='header__title'>
          <img src="https://upload.wikimedia.org/wikipedia/it/8/83/Pok%C3%A9dex_3D.png" alt="" />
          <div className='header__containerButton'>
              <button onClick={handleClickLogOut}>Log Out</button>
          </div>
        </div>
        <div className="header__titleBlack"></div>
      </div>
    </header>
  )
}

export default Header