import Image from "next/image";
import React  from "react";
import MultiLineChart from "./MultiLineChart";
const ThirdCard = () => {


  return (
    <div className="px-3 group relative  bg-white shadow-lg rounded mr-3">
      {/* HEADER SECTION  */}
      <div className="relative w-full bg-white flex flex-row justify-start items-center py-3">
        <h1
          className="text-xs text-blue-900 font-bold mr-2"
          style={{ fontSize: 16 }}
        >
          Relative Strengh
        </h1>
        <Image alt="" src={"/info-circle.svg"} width={15} height={15} />
      </div>

      <div className="flex flex-row items-end mt-3" style={{width:'inherit'}}>
    <MultiLineChart/>
      </div>
      <h1
        className="text-blue-900 text-sm mb-4 mt-4 text-center font-bold"
        style={{ fontSize: 13, opacity: 0.6 }}
      >
        Showing graph for last 7 days.
      </h1>
      {/* PERFORMANCE SECTION  */}

      <div className="flex flex-row justify-between mt-4 mb-4">
        <span
          className="text-blue-900 text-xs font-bold"
          style={{ fontSize: 16 }}
        >
          Top 5 RS in Group
        </span>
      </div>

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 capitiize bg-white-10 dark:bg-white-700 dark:text-dark-600">
            <tr>
              <th scope="col" className="py-3 px-3" style={{ fontSize: 12 }}>
                Symbol
              </th>
              <th scope="col" className="py-3 px-3" style={{ fontSize: 12 }}>
                Company
              </th>
              <th scope="col" className="py-3 px-3" style={{ fontSize: 12 }}>
                RS
              </th>
              <th scope="col" className="py-3 px-3" style={{ fontSize: 12 }}>
                5-Day Perf.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  dark:bg-white-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium   text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
              >
                AMZN
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
             >
                Amazon
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
            >
                78
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
           >
                +15%
              </th>
            </tr>
            <tr className="bg-white  dark:bg-white-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium   text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
              >
                AMZN
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
             >
                Amazon
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
            >
                78
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
           >
                +15%
              </th>
            </tr>            <tr className="bg-white  dark:bg-white-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium   text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
              >
                AMZN
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
             >
                Amazon
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
            >
                78
              </th>
              <th
                scope="row"
                className="py-4 px-3 font-medium  text-gray-900 whitespace-nowrap dark:text-dark"
                style={{fontSize:11}}
           >
                +15%
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThirdCard;
