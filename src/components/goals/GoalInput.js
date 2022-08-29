import { useState } from "react";

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const goalHandler = (e) => {
    setGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input value={goal} type="text" onChange={goalHandler} />
        <button>submit</button>
      </div>
    </form>
  );
}

export default GoalInput;
