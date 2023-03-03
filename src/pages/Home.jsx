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
            <img src="https://github.com/Merushii/pokedex/blob/main/public/images/image%2011.png" alt="" />
          </div>
          <img className='main__imgPokebola' src="/public/images/pokebola.png" alt="" />
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
