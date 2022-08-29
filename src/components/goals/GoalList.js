import GoalItem from "./GoalItem";

function GoalList(props) {
  const removeGoal3 = (id) => {
    props.removeGoal4(id);
    /*console.log(id);*/
  };
  return (
    <ul>
      {props.entries.map((entry) => (
        <GoalItem
          key={entry.id}
          id={entry.id}
          title={entry.text}
          removeGoal2={removeGoal3}
        />
      ))}
    </ul>
  );
}

export default GoalList;
