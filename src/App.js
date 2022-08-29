import GoalInput from "./components/goals/GoalInput";
import { useState } from "react";
function App() {
  const addGoalHandler = (goal) => {
    console.log(goal);
  };
  return (
    <div className="App">
      <GoalInput onAddGoal={addGoalHandler} />
    </div>
  );
}

export default App;
