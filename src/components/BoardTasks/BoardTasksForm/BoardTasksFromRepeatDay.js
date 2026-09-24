const BoardTasksFormRepetDay = ({ day, checked }) => {
  return (
    <>
      <input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id={`repeat-${day}-4`}
        name="repeat"
        value="mo"
        {...(checked && { checked: checked })}
      />
      <label for={`repeat-${day}-4`} class="card__repeat_day">
        {day}
      </label>
    </>
  );
};

export default BoardTasksFormRepetDay;
