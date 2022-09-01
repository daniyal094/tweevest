import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setactiveTab] = useState("Overview");
  const tabList = [
    { name: "Overview", id: 0 },
    { name: "Chart", id: 1 },
    { name: "Health", id: 2 },
    { name: "Ownership", id: 3 },
    { name: "Profile", id: 4 },
  ];
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-10 my-3">
        <ul className="flex flex-wrap -mb-px">
          {tabList?.map((item) => (
            <li className="mr-2">
              <button
                className={`inline-block p-4 ${
                  activeTab === item.name
                    ? "text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                    : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } `}
                onClick={() => setactiveTab(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
