import axios from "axios";
import { Beef, Calendar, Flame, User } from "lucide-react"
import { useEffect, useState } from "react";

const AddFood = () => {

  const [username, setUsername] = useState('');
  const [foodInfo, setFoodInfo] = useState('');
  const [calories, setCalories] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/calorie/add', {
        username,
        foodInfo,
        calories,
        date: selectedDate
      });
      console.log('Response:', response.data);
    } catch (error: any) {
      setError(error!.response.data);
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Call the function when any of the state variables change
    if (username !== '' && foodInfo !== '' && calories !== '' && selectedDate !== '') {
      handleSubmit;
    }
  }, [username, foodInfo, calories, selectedDate]);

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <img src="../public/imgs/burger1.webp" width={"200px"} className="mb-20"></img>
      <div className="flex flex-col gap-y-5">
        <div>
          <div className="flex items-center gap-x-1">
            <User size={16} />
            Username
          </div>
          <input
            type="text"
            className="border-2 w-[95vw] rounded p-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <div className="flex items-center gap-x-1">
            <Beef size={16} />
            Food info
          </div>
          <input
            type="text"
            className="border-2 w-[95vw] rounded p-1"
            value={foodInfo}
            onChange={(e) => setFoodInfo(e.target.value)}
          />
        </div>
        <div className="">
          <div className="flex items-center gap-x-1">
            <Flame size={16} />
            Calories
          </div>
          <input
            type="number"
            className="border-2 w-[95vw] rounded p-1"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-2">
        <div className="flex items-center gap-x-1">
          <Calendar size={16} />
          Date
        </div>
        <input
          type="date"
          className="border-2 rounded"
          name="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div>
        {error}
      </div>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2">
        Add meal
      </button>
    </form>
  )
}

export default AddFood