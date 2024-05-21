import { useState } from "preact/hooks"
import { getAllMovies } from "../services/fetchMovies"

const SearchBar = () => {
     const [word, setWord] = useState("")

     const searchWord = (e)=> {
        setWord(e.target.value); 
     }
 
     const handleSearchMovie =  async (e)=> {
        e.preventDefault()
        await getAllMovies(word) 
     }

  return (
    <form 
    onSubmit={handleSearchMovie}
    class="flex gap-3">
    <input 
    value={word}
    onChange={searchWord} 
    class="bg-transparent px-5 py-2 rounded-lg border border-gray-500 w-[270px]"
    type="search" />
    <button class="bg-orange-600 hover:bg-orange-700 text-sm  rounded-lg px-2 border">Buscar</button>
</form>
  )
}

export default SearchBar