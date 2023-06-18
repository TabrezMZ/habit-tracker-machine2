import { useContext, useState } from "react";
import { habitContext } from "../contexts/UseContext";
import { HabitForm } from "../components/HabitForm";

export const LandingPage = () => {
  const { state, habitDispatch } = useContext(habitContext);
  const [formDisplay , setFormDisplay] = useState(false)
  const [habitDisplay , setHabitDisplay] = useState(true)
  const { habitForm, setHabitForm, habitformvalue } = useContext(habitContext);

  const editHabit = (id) => {
    const findHabit = state.allHabits.find((habit)=> habit.id == id)
     setHabitForm(findHabit)
    setFormDisplay(true)
  }

  return (
    <div className="inbox">
    <div className="content">
        <h1>All habits</h1>
        <button onClick={()=>setFormDisplay(true)}>Add Habit</button>
        { formDisplay && <HabitForm setFormDisplay= {setFormDisplay}/> }
       {
        !formDisplay &&  <ul>
        {state.allHabits?.map((habit, index) => (
            <>
            <li style={{display : habit.isArchived && 'none'}} key={index} >
                <div className="header">
                    <h4>  habit name :{habit?.name}</h4>
                </div>
                <p>Rpeat : {habit?.repeat}</p>
                <p>Goal : {habit?.goal}</p>
                <p>number of times :{habit?.Times}</p>
                <p> startdate : {habit?.startDate}</p>
                <p>End Date : {habit?.endDate}</p>
                <div className="details">
                    <div className='buttons'>
                        <button style={{color: 'green'}} onClick={()=>habitDispatch({type : 'ARCHIVE-HABIT' , payload : habit.id}) }  >add archive</button>
                        <button style={{color: 'blue'}} onClick={()=>habitDispatch({type : 'DELETE-HABIT' , payload : habit.id}) } >Delete</button>
                        <button style={{color: 'gray'}} onClick={()=> editHabit(habit.id)} >edit</button>
                    </div>
                </div>
            </li>  
            <hr />
            </>
        ))}
    </ul>
       }
    </div>
</div>
  );
};
