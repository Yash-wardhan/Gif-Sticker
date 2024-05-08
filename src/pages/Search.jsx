import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import FilterGif from "../components/FilterGif";
import Gifs from "../components/Gifs";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const { gf, filter } = GifState();
  const { query } = useParams();

  const fetchSearch = async () => {
    try {
      const { data } = await gf.search(query, {
        sort: "relevant",
        lang: 'en',
        type: filter,
        limit: 20
      });
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [query, filter]); // Also listen to changes in query

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGif alignLeft={true}/>
      {searchResult.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {searchResult.map((gif) => (
            <Gifs gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          {" "}
          No GIFs found for {query}. Try searching for Stickers instead?
        </span>
      )}
    </div>
  );
}

export default Search;
