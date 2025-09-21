import { Link } from "react-router-dom"

const HomePage = ()=>{
    return <div className="flex w-[100vw] h-[100vh] items-center justify-center">
        <Link to={"/Itinerary"} className="px-5 py-2 rounded-xl bg-cyan-500 text-white">
        Generate Itienenary
        </Link>
    </div>
}

export default HomePage