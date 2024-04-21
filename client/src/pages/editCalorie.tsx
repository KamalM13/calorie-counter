import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const EditCalorie = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [username, setUsername] = useState('')
    const [calories, setCalories] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const getCalorie = async () => { 
        try {
            const response = await axios.get(`http://localhost:3000/calorie/${id}`)
            console.log(response.data)
            return response.data
        } catch (error: any) {
            console.log(error)
        }
    }
    const updateCalorie = async () => { 
        console.log(username, description, calories, date)
        try {
            const response = await axios.post(`http://localhost:3000/calorie/${id}`, {
                username,
                description,
                calories,
                date
            })
            navigate('/info')
            console.log(response.data)
            
        } catch (error: any) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCalorie().then(data => { 
            setUsername(data.username)
            setCalories(data.calories)
            setDescription(data.description)
        })
    },[])

  return (
      <form className="flex flex-col p-3 items-center gap-y-3" onSubmit={(e) => {
            e.preventDefault()
            updateCalorie()
      }}>
          <h1>Edit Calories</h1>
          <input className="p-1 border-2" type="text" value={calories} onChange={(e) => { setCalories(e.target.value) }} />
          <h1>Edit Description</h1>
          <input className="p-1 border-2" type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
          <h1>Edit Date</h1>
          <input className="p-1 border-2" type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
            <button className="p-1 bg-blue-500 text-white w-16" type="submit">Update</button>
    </form>
  )
}

export default EditCalorie