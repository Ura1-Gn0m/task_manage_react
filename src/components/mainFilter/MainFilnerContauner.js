import { filters } from "../ultils";
import MyFilterItem from "./MyFilterItem";

function MainFilterContainer({ setFilterType }) {
  return (
    <section class="main__filter filter container">
      {filters.map((filter) => {
        return (
          <MyFilterItem key={filter.id} {...filter} onChange={setFilterType} />
        );
      })}
    </section>
  );
}
export default MainFilterContainer;
