import { useState } from 'react'
import Navigation from '../components/Navigation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function searchMovie() {
    console.log("searching!")
  }
  function handleSubmit(e) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const titleSearch = formData.get("title")
    console.log(titleSearch);
  }
  
  return (
    <>
      <Navigation />
      <section className='addMovie'>
        <div className="container">
          <h2>Add a new movie</h2>
          <form onSubmit={handleSubmit}>
            Title: <input type="text" name="title"></input>
            <button onClick={searchMovie}>Add Movie</button>
          </form>
        </div> 
      </section>
      <section className='currentLibrary'>
        
      </section>
    </>
  )
}

export default App
