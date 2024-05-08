import { useState } from "react"
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import {  useNavigate } from "react-router-dom"

function GifSearch() {
  const [query, setQuery] = useState("") 
  const navigate = useNavigate()

  const searchGIFS = async() =>{
    if(query.trim()===''){
        return
    }
    navigate(`/search/${query}`)
  }
  return (
    <div className="flex relative ">
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search all the GIFS and Sticker" className="w-full px-6 py-4 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none"  />
        {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={22} />
        </button>
      )}
        <button
        onClick={searchGIFS}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  )
}

export default GifSearch