function GoalItem(props) {
  const removeGoal1 = () => {
    props.removeGoal2(props.id);
  };
  return <li onClick={removeGoal1}>{props.title}</li>;
}

export default GoalItem;
