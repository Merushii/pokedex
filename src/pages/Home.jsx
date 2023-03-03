import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import "/src/components/styles/home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer));
  };

  return (
    <main>
      <section className="main__sectionLogin">
        <div className='main__headerRed'></div>
        <div className="login">
          <div className="main__title">
            <img src="https://upload.wikimedia.org/wikipedia/it/8/83/Pok%C3%A9dex_3D.png" alt="" />
          </div>
          <img className='main__imgPokebola' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" alt="" />
          <h2 className='main__welcomeTex'>Hello trainer!</h2>
          <p className='main__textInsertName'>Give me your name to start!</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='your name...' required id='nameTrainer'/>
            <button>Start</button>
          </form>
        </div>
        
      </section>
    </main>
  )
}

export default Home
