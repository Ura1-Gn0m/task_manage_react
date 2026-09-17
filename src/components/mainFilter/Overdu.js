function Overdue(props) {
  const { filterType, disabled, checked, count } = props;
  return (
    <>
      <input
        type="radio"
        id={`filter__${filterType}`}
        class="filter__input visually-hidden"
        name="filter"
        {...(disabled && { disabled: "disabled" })}
        {...(checked && { checked: "checked" })}
      />
      <label for="filter__overdue" class="filter__label">
        {filterType} <span class="filter__overdue-count">{count}</span>
      </label>
    </>
  );
}

export default Overdue;
