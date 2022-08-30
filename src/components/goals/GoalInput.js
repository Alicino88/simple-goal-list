import { useState } from "react";
import Button from "../UI/Button";
import "./GoalInput.css";

function GoalInput(props) {
  const [goal, setGoal] = useState("");
  /*Below we add state to re-render UI when user clicks on submit but the input field is empty */
  const [isValid, setIsValid] = useState(true);

  const goalHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (goal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "#FF6542" : "black" }}>
          Course Goal
        </label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#779fa1",
            background: !isValid ? "#FF6542" : "transparent",
          }}
          value={goal}
          type="text"
          onChange={goalHandler}
        />
        <Button>submit</Button>
      </div>
    </form>
  );
}

export default GoalInput;
