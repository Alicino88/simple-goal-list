import "./GoalItem.css";

function GoalItem(props) {
  const removeGoal1 = () => {
    props.removeGoal2(props.id);
  };
  return (
    <li className="goal-item" onClick={removeGoal1}>
      {props.title}
    </li>
  );
}

export default GoalItem;
