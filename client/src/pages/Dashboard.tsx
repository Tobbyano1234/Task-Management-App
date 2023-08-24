import React, { Fragment } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <Fragment>
      <main>
        <div className="w-full min-h-[60px] shadow-lg flex items-center justify-between px-5">
          <div className="font-sans font-semibold text-2xl text-indigo-600">
            Tobi TODO TASK
          </div>

          <div className="flex flex-row space-x-5">
            <div className="flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
            </div>

            <button className="bg-indigo-600 font-custom text-sm text-white rounded-lg px-5 py-2 hover:bg-indigo-900">
              Logout
            </button>
          </div>
        </div>

        <section>
          <TaskList/>
        </section>
      </main>
      {/* Include your TaskList component */}
    </Fragment>
  );
};

export default Dashboard;
