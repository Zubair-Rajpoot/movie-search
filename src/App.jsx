import { useState } from "react"
import { MovieCard, Footer } from "./components"
const App = () => {

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');


  const fetchData = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=d040a8fb&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
    // console.log(title);
  }

  return (
    <>
      {/* bg-gradient-to-r from-violet-500 to-fuchsia-500 */}
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-cover bg-center min-h-screen m-0 p-0 overflow-hidden">
        <div className="bg-white/30 backdrop-blur-sm drop-shadow-xl h-14 rounded-lg ">
          <h1 className="text-center p-2 text-purple-900 text-3xl drop-shadow-xl">Movies Verse</h1>
        </div>
        <div className="w-full text-center mt-2">
          <input className='bg-white/30 w-5/12 text-purple-900 placeholder:text-purple-900 rounded-xl p-3 m-auto focus:outline-none' placeholder='Search Here' value={keyword} onChange={(e) => { setKeyword(e.target.value) }} />
          <button className='bg-white/20 px-2 mx-2 h-10 rounded-lg backdrop-blur-lg text-purple-900 hover:ring-2 ring-purple-900 drop-shadow-lg' onClick={() => { fetchData(keyword) }}>Search</button>
        </div>
        <div className="m-5 flex flex-wrap justify-center">
          {
            movies?.length > 0 ? (
              movies.map((movie1) => {
                return (
                  <MovieCard movie={movie1} />
                )
              })
            ) : (
              <div>
                <h2>Use Searchbar for Search Results</h2>
              </div>
            )
          }
          <div className="bg-white/30 backdrop-blur-sm drop-shadow-xl h-8 rounded-lg bottom-0 min-w-full fixed ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
