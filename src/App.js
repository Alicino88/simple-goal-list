import GoalInput from "./components/goals/GoalInput";
import { useState } from "react";

function App() {
  const [myGoals, setMyGoals] = useState([
    { text: "baking an amazing cake", id: "g1" },
    { text: "learn Redux", id: "g2" },
  ]);

  /*goal is the input text coming from the GoalInput component */
  /*previousGoals is the initial state made up of the above array with two objects */

  const addGoalHandler = (goal) => {
    console.log(goal);
    setMyGoals((previousGoals) => {
      const updatedGoals = [...previousGoals];
      /*Below we add,to the beginning of the updatedGoals array, the coming goal from the form and attach an unique id to it */
      updatedGoals.unshift({ text: goal, id: Math.random().toString() });
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  let content = myGoals.map((goal) => <p>{goal.text}</p>);

  return (
    <div>
      <div className="App">
        <GoalInput onAddGoal={addGoalHandler} />
      </div>
      <div>{content}</div>
    </div>
  );
}

export default App;
