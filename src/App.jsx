import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function addMovie() {
    console.log("added!")
  }
  return (
    <>
      <section className='addMovie'>  
        <h2>Add a new movie</h2>
        <form>
          Title: <input type="text" name="title"></input>
          <button onClick={addMovie}>Add Movie</button>
        </form>
      </section>
      <section className='currentLibrary'>
        
      </section>
    </>
  )
}

export default App
