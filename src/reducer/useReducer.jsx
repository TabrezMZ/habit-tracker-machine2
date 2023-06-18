export const initialState = {
  allHabits : []
};

export const habitReducer = (prvState, action) => {
  switch (action.type) {
    case "ADD-HABIT":
      return {
        ...prvState,
        allHabits: [...prvState.allHabits, ...action.payload]
      };
    case "EDIT-HABIT":
      return {
        ...prvState,
        allHabits: prvState.allHabits.map((item) => item.id === action.payload.id ? { ...item, ...action.payload } : item),
      };
    case "DELETE-HABIT":
      return {
        ...prvState,
        allHabits : prvState.allHabits.filter((habit)=> habit.id !== action.payload)
      };
    case "ARCHIVE-HABIT":
      return {
        ...prvState,
        allHabits : prvState.allHabits.map((habit)=> habit.id === action.payload ? {...habit , isArchived : true}: habit)
    };
    case "UN-ARCHIVED":
      return {
        ...prvState,
        allHabits : prvState.allHabits.map((habit)=> habit.id === action.payload ? {...habit , isArchived : false}: habit)
    };
    default:
      return prvState;
  }
};
