import { useEffect } from "react";
import { GifState } from "../context/gif-context"
import Gifs from "../components/Gifs";
import FilterGif from "../components/FilterGif";

function Home() {
  const {gf,gifs,setGifs,filter} = GifState();

  const fetchTrending = async() =>{
    const { data } = await gf.trending({
      limit:20,
      type: filter,
      rating: "g"
    })
    setGifs(data)
  }
  useEffect(()=>{
    console.log(gifs)
    fetchTrending();
  },[filter])
  return (
    <div>
      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {
          gifs.map((gif)=>{
            return <Gifs gif={gif}  key={gif?.title} />
          })
        }
      </div>
    </div>
  )
}

export default Home
