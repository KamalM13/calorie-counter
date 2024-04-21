import axios from "axios"
import { User } from "lucide-react"
import { useEffect, useState } from "react"

const AddUser = () => {
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        try {
            const response = await axios.post('http://localhost:3000/users/add', {
                username
            })
            console.log('Response:', response.data)
        } catch (error: any) {
            setError(error!.response.data)
        }
    }
    useEffect(() => {
        handleSubmit
    }, [username, error, handleSubmit, setError])

    return (
        <form className="flex flex-col items-center gap-y-3" onSubmit={handleSubmit}>
            <img src="https://source.unsplash.com/random/800x600" alt="" width={300} />
            <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-1 ">
                    <User size={18} />
                    Username
                </div>
                <input type="text" className="border-2 p-1 w-[95vw]" value={username} onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                }} />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2">
                Add User
            </button>
        </form>
    )
}

export default AddUser