import Image from "next/image";
import React from "react";
import { Bar } from "@ant-design/plots";
const SecondCard = () => {
  const data = [
    {
      type: "Earnings",
      sales: 38,
    },
    {
      type: "Revenue",
      sales: 52,
    },
  ];

  const config = {
    data,
    xField: "sales",
    yField: "type",
    seriesField: "type",
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 1,
            lineDash: [0, 5],
            strokeOpacity: 0.7,
            shadowColor: "black",
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: "pointer",
          },
        },
      },
    },
    color: ({ type }) => {
      return type === "Earnings" ? "#00C2FF" : "#376FFF";
    },
    legend: false,
   
  };

  const mairaj = [
    {
      type: "Meta 34x",
      sales: 38,
    },
    {
      type: "Meta 34x",
      sales: 52,
    },
    {
      type: "Meta 33x",
      sales: 61,
    },
    {
      type: "Meta 32x",
      sales: 145,
    },
    {
      type: "Meta 31x",
      sales: 48,
    },
    {
      type: "Nflx",
      sales: 38,
    },
  ];
  const cmairaj = {
    data: mairaj,
    xField: "sales",
    yField: "type",
    seriesField: "type",

    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 1,
            lineDash: [0, 5],
            strokeOpacity: 0.7,
            shadowColor: "black",
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: "pointer",
          },
        },
      },
    },
    color: ({ type }) => {
      return type == "Meta 34x"
        ? "#00C2FF"
        : "Meta 33x"
        ? "#55C2A3"
        : "Meta 32x"
        ? "green"
        : "Meta 31x"
        ? "blue"
        : "white";
    },
    legend: false,
  };

  return (
    <div className="px-3 group relative  bg-white shadow-lg rounded mr-3">
      {/* HEADER SECTION  */}
      <div className="relative w-full bg-white flex flex-row justify-start items-center py-3">
        <h1
          className="text-xs text-blue-900 mr-2 font-bold"
          style={{ fontSize: 16 }}
        >
          Fundamentals Snapshot
        </h1>
        <Image alt="" src={"/info-circle.svg"} width={15} height={15} />
      </div>
      <div className="relative w-full bg-white flex flex-row justify-between items-center py-3">
        <div>
          <h1
            className="text-blue-900 font-bold text-md mx-1"
            style={{ fontSize: 23 }}
          >
            45x
          </h1>
          <b style={{ opacity: 0.6, fontSize: 14 }}>P/E Ratio</b>
        </div>
        <div>
          <h1
            className="text-blue-900 font-bold text-md ml-3"
            style={{ fontSize: 23 }}
          >
            25x
          </h1>
          <b style={{ opacity: 0.6, fontSize: 14 }}>P/E Ratio</b>
        </div>
        <div>
          <h1
            className="text-blue-900 font-bold text-md ml-3"
            style={{ fontSize: 23 }}
          >
            4x
          </h1>
          <b style={{ opacity: 0.6, fontSize: 14 }}>P/Book Ratio</b>
        </div>
      </div>

      {/* ANALATIC SECTION  */}

      <div
        className="flex flex-row items-end mt-3"
        style={{ width: "inherit" }}
      >
        <Bar {...config} style={{ height: "15vh", width: "400px" }} />
      </div>
      <h1
        className="text-blue-900 text-sm mb-4 mt-5 text-center font-bold"
        style={{ color: "#376FFF", textAlign: "start", width: "100%" }}
      >
        How AAPL compre to sector?
      </h1>
      <div className="w-50">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border outline-none mb-5 mt-4 ml-auto border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Price to Sales</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      {/* PERFORMANCE SECTION  */}

      <div
        className="flex flex-row items-end mt-3"
        style={{ width: "inherit" }}
      >
        <Bar {...cmairaj} style={{ height: "30vh", width: "400px" }} />
      </div>
    </div>
  );
};

export default SecondCard;
