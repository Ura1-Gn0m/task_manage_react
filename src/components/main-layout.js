import useSWR from "swr";
import SortList from "./sortListItem/SortList";
import LoadMpre from "./LoadMore";
import MainControl from "./MainControl";
import MainFilterContainer from "./mainFilter/MainFilnerContauner";
import BoardTasks from "./BoardTasks";
import { useState } from "react";
import { filterCallbacks } from "./ultils";

function MainLayout() {
  const { data, error } = useSWR("/tasks");
  const [filterType, setFilterType] = useState("all");

  if (error) {
    return <div>Ошибка доступа или сети</div>;
  }
  if (!data) {
    return <div>загрузка...</div>;
  }
  console.log(filterCallbacks);
  console.log(filterType);

  const tasks = data.filter(filterCallbacks[filterType]);
  return (
    <>
      <div style={{ display: "none" }}>
        <svg>
          <symbol id="wave" viewBox="0 0 159 10" preserveAspectRatio="none">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke-linecap="square"
              stroke-width="5"
            >
              <path d="M4 4l9.257 2.463L21.367 4l7.927 2.463L38.736 4l9.117 2.463L56.103 4l8.685 2.463L73.472 4l8.684 2.463L90.84 4l8.684 2.463L108.208 4l8.684 2.463L125.576 4l8.684 2.463L142.943 4M146.423 4l9.257 2.463" />
            </g>
          </symbol>
        </svg>
      </div>

      <main class="main">
        <MainControl />

        <MainFilterContainer setFilterType={setFilterType} />

        <section class="board container">
          <SortList />

          <BoardTasks tasks={tasks} />
          <LoadMpre />
        </section>
      </main>
    </>
  );
}
export default MainLayout;
