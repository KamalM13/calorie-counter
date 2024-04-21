import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Calorie } from "../types/calorie"


const CalorieInfo = () => {
    const navigate = useNavigate()

    const [calories, setCalories] = useState<Calorie[]>([])


    const deleteCalorie = async (id: string) => {
        try {
            const response = await axios.delete(`http://localhost:3000/calorie/${id}`)
            console.log(response.data)
            setCalories(calories.filter(item => item._id !== id))
        } catch (error: any) {
            console.log(error)
        }
    }

    const getCalories = async () => {
        try {
            const response = await axios.get('http://localhost:3000/calorie')
            console.log(response.data)
            return response.data
        } catch (error: any) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCalories().then(data => {
            setCalories(data)
        })
    }, [])
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-purple-400 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Edit/Delete
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Food
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Calories
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {calories.map((item, index) => (
                        <tr key={index} className="border-b border-purple-400">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <button onClick={() => {
                                    navigate(`/info/${item._id}`)
                                }}>
                                    Edit
                                </button>
                                /
                                <button onClick={() => { deleteCalorie(item._id) }}>
                                    Delete
                                </button>
                            </td>
                            <td className="px-6 py-4">{item.username}</td>
                            <td className="px-6 py-4">{item.description}</td>
                            <td className="px-6 py-4">{item.calories}</td>
                            <td className="px-6 py-4">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default CalorieInfo