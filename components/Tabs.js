import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setactiveTab] = useState("Overview");
  console.log(activeTab);
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-10 my-3">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === "Overview"
                  ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } `}
              onClick={() => setactiveTab("Overview")}
            >
              Overview
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === "Chart"
                  ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } `}
              onClick={() => setactiveTab("Chart")}
            >
              Chart
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === "Health"
                  ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } `}
              onClick={() => setactiveTab("Health")}
            >
              Health
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === "Ownership"
                  ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } `}
              onClick={() => setactiveTab("Ownership")}
            >
              Ownership
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === "Profile"
                  ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } `}
              onClick={() => setactiveTab("Profile")}
            >
              Profile
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tabs;
