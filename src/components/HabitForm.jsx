import { useContext } from "react";
import { habitContext } from "../contexts/UseContext";
export const HabitForm = ({ setFormDisplay }) => {
  const { state, habitDispatch } = useContext(habitContext);
  const { habitForm, setHabitForm, habitformvalue } = useContext(habitContext);

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setHabitForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const saveHandler = (e) => {

    e.preventDefault();
    const editAddload = state.allHabits.find((item) => item.id === habitForm.id)
    if(habitForm.startDate < habitForm.endDate){
      if (editAddload !== undefined) {
        habitDispatch({ type: 'EDIT-HABIT', payload: habitForm })
      }
      else {
        habitDispatch({ type: 'ADD-HABIT', payload: [{ ...habitForm, id: state.allHabits.length == 0 ? 1 : state.allHabits[state.allHabits.length - 1].id + 1 }] })
      }
      setFormDisplay(false)
      setHabitForm(habitformvalue)
    }else{
      alert('end date must be greater than staer date')
    }
  }
  return (
    <>
      <form  onSubmit={(e) => saveHandler(e)} style={{display : 'flex', flexDirection: 'column',width : '500px'}}>
        <label>Habit Name : <input
          placeholder="Enter Name"
          type="text"
          value={habitForm.name}
          onChange={(e) => fillFormValue(e, "name")}
          required
        /></label>
       <label>Repeat :  <select value={habitForm.repeat} onChange={(e) => fillFormValue(e, "repeat")}>
          <option>Daily</option>
          <option>Weekly</option>
          <option>monthly</option>
        </select></label>
       <label>Goal :  <select value={habitForm.goal} onChange={(e) => fillFormValue(e, "goal")}>
          <option>1 times</option>
          <option>2 times</option>
          <option>3 times</option>
        </select></label>
       <label>Time of Day :  <select value={habitForm.Times} onChange={(e) => fillFormValue(e, "Times")}>
          <option>Any Time</option>
          <option>morning</option>
          <option>evening</option>
        </select></label>
        <label>start Date : <input
          type='date'
          value={habitForm.startDate}
          onChange={(e) => fillFormValue(e, "startDate")}
          required
        /></label>
        <label>end Date : <input
          type='date'
          value={habitForm.endDate}
          onChange={(e) => fillFormValue(e, "endDate")}
          required
        /></label>
        <button  type="submit" >save Habit</button>
        <button type="reset"  onClick={()=> {
          setFormDisplay(false)
          setHabitForm(habitformvalue)
        }} >Cancel</button>
      </form>
    </>
  );
};
