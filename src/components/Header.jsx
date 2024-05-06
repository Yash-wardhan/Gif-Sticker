import { useState } from "react"
import { GiClaymoreExplosive } from "react-icons/gi"
import { RiMenu4Fill } from "react-icons/ri"
import { Link } from "react-router-dom"
function Header() {
  const [categories, setCategories] = useState([])
  const [showCatogires, setShowCatogires] = useState(false)
  return (
    <nav>
      <div className="relative gap-4 justify-between items-center mb-2  flex">
        <Link to='/' className="flex gap-4">
          <img src="/logo1.gif" alt="Giphy Logo" className="w-16 h-auto" />
          <h1 className="text-5xl gradient text-transparent bg-clip-text shadow-xl font-bold  tracking-tight cursor-pointer">
            HMM <span>... </span>
          </h1>
        </Link>

        {/* rendering  */}
        <div className="font-bold text-md flex gap-4 items-center">
          <Link className="p-4 py-1 hover:gradient border-b-4 hidden rounded-sm lg:block">Rendeing</Link>
          <button onClick={() => setShowCatogires(!showCatogires)}>
            <GiClaymoreExplosive size={35} className={`py-0.5 hover:gradient ${showCatogires ? "gradient" : ""} border-b-4 hidden lg:block`} />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to='/favorites'>Favorites GIFs</Link>
          </div>
          <button>
            <RiMenu4Fill size={30} className="text-sky-400 block lg:hidden" />
          </button>
          {showCatogires && <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link className="font-bold">Reaction</Link>
            </div>
          </div>
          }
        </div>
      </div>
      {/* search */}
    </nav>
  )
}

export default Header
