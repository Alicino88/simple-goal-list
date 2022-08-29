function GoalInput(props) {
  let goal;
  const goalHandler = (e) => {
    goal = e.target.value;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(goal);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalHandler} />
        <button>submit</button>
      </div>
    </form>
  );
}

export default GoalInput;
