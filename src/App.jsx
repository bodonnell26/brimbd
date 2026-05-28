import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [searchTitle, setSearchTitle] = useState([]);

  const [searchRes, setSearchRes] = useState([]);
  const handleSubmit = async () => {
    try{
      const data = await (await fetch("http://www.omdbapi.com/?s="+searchTitle+"&apikey=93ec6f64")).json();
      setSearchRes
      console.log(data)
    }catch (err) {
      console.log(err.message)
    }
  }
  
  // useEffect(() => {
  //   fetch("http://www.omdbapi.com/?t=${searchTitle}&apikey=93ec6f64")
  //   .then(res => res.json())
  //   .then(data => console.log(data.data))
  // })


  function searchMovie() {
    dbLookup
    
  }
  // function handleSubmit(formData) {
  //   event.preventDefault();
  //   setSearchTitle(formData.get("title"));
  //   console.log(searchTitle);
  // }
  
  return (
    <>
      <Navigation />
      <section className='addMovie'>
        <div className="container">
          <h2>Add a new movie</h2>
          <form action={handleSubmit}>
            Title: <input type="text" name="title" value={searchTitle} onChange={e => setSearchTitle(e.target.value)}></input>
            <button onClick={handleSubmit}>Find Movie</button>
          </form>
        </div> 
      </section>
      <section className='currentLibrary'>
        
      </section>
    </>
  )
}

export default App
