import Searchbar from "./components/Searchbar"
const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen">
        <div className="bg-white/30 backdrop-blur-sm drop-shadow-xl h-14 rounded-lg ">
          <h1 className="text-center p-2 text-purple-900 text-3xl drop-shadow-xl">Movies Verse</h1>
        </div>
        <div className="w-full text-center">
          <Searchbar />
        </div>
      </div>

    </>
  )
}

export default App
