import { useNavigate } from "react-router-dom"
import Svg from "./svg"


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className='sticky top-0 w-screen bg-purple-500 p-3 flex justify-between'>
            <Svg />
            <div>
                Calorie Journal
            </div>
            <div className="flex gap-x-3 ">
                <button className="bg-yellow-500 px-1 rounded-[5px]" onClick={() => { navigate('/info') }} >Calorie info</button>
                <button className="bg-blue-500 px-1 rounded-[5px]" onClick={() => { navigate('/food') }}>Add food</button>
                <button className="bg-blue-500 px-1 rounded-[5px]" onClick={() => { navigate('/user') }}>Add user</button>
            </div>
        </div>
    )
}

export default Navbar