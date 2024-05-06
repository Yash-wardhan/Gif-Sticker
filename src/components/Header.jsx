import { useState } from "react"
import { Link } from "react-router-dom"
function Header() {
  const [categories,setCategories] = useState([])
  const [showCatogires, setShowCatogires] = useState(false)
  return (
    <nav>
        <div className="relative gap-4 justify-between items-center mb-2  flex">
            <Link to='/' className="flex gap-4">
                <img src="/logo.svg" alt="Giphy Logo" className="w-8"/>
                <h1 className="text-5xl font-bold  tracking-tight cursor-pointer">
                    GIPHY
                </h1>
            </Link>

            {/* rendering  */}

            <Link className="p-4 py-1 hover:gradient border-b-4 hidden rounded-sm lg:block">Rendeing</Link>
        </div>
    </nav>
  )
}

export default Header
