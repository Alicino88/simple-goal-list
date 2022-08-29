function GoalList(props) {
  return (
    <div>
      {props.entries.map((entry) => (
        <p>{entry.text}</p>
      ))}
    </div>
  );
}

export default GoalList;
