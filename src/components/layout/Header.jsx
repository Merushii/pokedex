import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/slices/nameTrainer.slice'

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogOut = () => {
    dispatch(logOut())
  }
  return (
    <header>
      <div>
        <div>
          <h1>app title</h1>
        </div>
      </div>
      <div>
        <div>
          <button onClick={handleClickLogOut}>Log Out</button>
        </div>
      </div>
    </header>
  )
}

export default Header