import { Fragment } from "react";
import TaskCard from "./TaskCard/TaskCard";

const TaskList = () => {
  return (
    <Fragment>
      <main className="container my-5 mx-10">
        <div className="flex items-center justify-between items-center space-x-4">
          <button className="bg-indigo-600 font-custom text-sm text-white rounded-lg px-5 py-2 hover:bg-indigo-900">
            Create Task
          </button>

          <div className="flex items-center border rounded-md p-2">
            <input
              type="text"
              className="w-[200px] outline-none"
              placeholder="Search..."
            />
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M8 15a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </button>
          </div>

          {/* Filtering and Sorting options */}
          <div className="flex space-x-4">
            <div>
              <label htmlFor="filter" className="text-gray-500">
                Filter by:
              </label>
              <select
                id="filter"
                className="block w-24 mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              >
                <option>All</option>
                <option>Completed</option>
                <option>Not Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort" className="text-gray-500">
                Sort by:
              </label>
              <select
                id="sort"
                className="block w-24 mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              >
                <option>Latest</option>
                <option>Oldest</option>
                <option>Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t-2 my-5 border-gray-200"></div>

        <TaskCard />
      </main>
    </Fragment>
  );
};

export default TaskList;
