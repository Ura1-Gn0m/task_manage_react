const filterCallbacks = {
  all: () => true,
  overdue: ({ due_date }) => due_date < new Date().toDateString(),
  today: ({ due_data }) =>
    typeof due_data === "string" &&
    due_data.slice(0, 10) === new Date().toISOString().slice(0, 10),
  favorites: ({ is_favoring }) => is_favoring === true,
  repeating: ({ repeating_days }) =>
    Object.values(repeating_days).some((day) => day === true),
  archive: ({ is_archive }) => is_archive === true,
};

const filters = [
  {
    id: crypto.randomUUID(),
    filterType: "all",
    disabled: false,
    checked: true,
    count: 13,
  },
  {
    id: crypto.randomUUID(),
    filterType: "overdue",
    disabled: true,
    checked: false,
    count: 0,
  },
  {
    id: crypto.randomUUID(),
    filterType: "today",
    disabled: true,
    checked: false,
    count: 0,
  },
  {
    id: crypto.randomUUID(),
    filterType: "favorites",
    disabled: false,
    checked: false,
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    filterType: "repeating",
    disabled: false,
    checked: false,
    count: 1,
  },
  {
    id: crypto.randomUUID(),
    filterType: "archive",
    disabled: false,
    checked: false,
    count: 115,
  },
];

export { filterCallbacks, filters };
