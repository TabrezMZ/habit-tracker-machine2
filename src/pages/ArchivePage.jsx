import { useContext } from "react";
import { habitContext } from "../contexts/UseContext";

export const ArchivePage = () => {
  const { state, habitDispatch } = useContext(habitContext);
  
  return (
    <div className="inbox">
    <div className="content">
        <h1>Archived habits</h1>
        <ul>
            {state.allHabits?.map((habit, index) => (
                <>
                <li style={{display : !habit.isArchived && 'none'}} key={index} >
                    <div className="header">
                        <h4>Habit Name : {habit?.name}</h4>
                    </div>
                    <p>Rpeat : {habit?.repeat}</p>
                    <p>Goal : {habit?.goal}</p>
                    <p>number of times :{habit?.Times}</p>
                    <p> startdate : {habit?.startDate}</p>
                    <p>End Date : {habit?.endDate}</p>
                    <div className="details">
                        <div className='buttons'>
                            <button style={{color: 'blue'}} onClick={()=>habitDispatch({type : 'DELETE-HABIT' , payload : habit.id}) } >Delete</button>
                            <button style={{color: 'blue'}} onClick={()=>habitDispatch({type : 'UN-ARCHIVED' , payload : habit.id}) } >Un- archive</button>
                        </div>
                    </div>
                </li>  
                <hr />
                </>
            ))}
        </ul>
    </div>
</div>
  );
};
