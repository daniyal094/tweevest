import Image from "next/image";
import React from "react";
import GaugeChart from "react-gauge-chart";
const FourthCard = () => {
  return (
    <div className="px-3 group relative  bg-white shadow-lg rounded mr-3">
      {/* HEADER SECTION  */}
      <div className="relative w-full bg-white flex flex-row justify-start items-center py-3">
        <h1 className="text-xs text-blue-900 mr-2">Forecast</h1>
        <Image alt="" src={"/info-circle.svg"} width={15} height={15} />
      </div>
      <div className="relative w-full bg-white flex flex-row justify-start items-center py-3">
        <h1 className="text-blue-900 font-bold text-md mx-1">34B</h1>
        <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
        <h1 className="text-green-400" style={{ fontSize: "12px" }}>
          15%
        </h1>
        <h1 className="text-blue-900 font-bold text-md ml-3">$1.2</h1>
        <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
        <h1 className="text-green-400" style={{ fontSize: "12px" }}>
          15%
        </h1>
        <h1 className="text-blue-900 font-bold text-md mx-1 ml-3">650M</h1>
        <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
        <h1 className="text-green-400" style={{ fontSize: "12px" }}>
          15%
        </h1>
      </div>
      <div className="flex flex-row">
        <h1 className="text-blue-900 font-semibold text-xs mx-2">
          2023-Revenue
        </h1>
        <h1 className="text-blue-900 font-semibold text-xs mx-2">2023-EPS</h1>
        <h1 className="text-blue-900 font-semibold text-xs mx-2">2023-EBIT</h1>
      </div>
      {/* ANALATIC SECTION  */}
      <h1 className="text-blue-900 font-semibold text-sm my-3">
        Analyst rating
      </h1>
      <div className="flex flex-row items-end mt-3">
        <GaugeChart
          nrOfLevels={420}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={["#FFC56D", "#FFC56D", "#ECEEF1", "#55C2A3", "#55C2A3"]}
          percent={0.37}
          arcPadding={0}
          arcWidth={0.1}
          cornerRadius={0}
          hideText={true}
        />
      </div>
      <h1 className="text-blue-900 text-sm mb-4 mt-1 text-center font-bold">
        Netural
      </h1>
      {/* PERFORMANCE SECTION  */}
      <div className="flex flex-row justify-between">
        <span className="text-blue-900 text-xs">1 Year Price Target</span>
        <span className="text-blue-900 text-xs">
          25.48 <span className="text-green-500">(12.99%)</span>
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-blue-900 text-xs">Number of analyst</span>
        <span className="text-blue-900 text-xs">15</span>
      </div>
      <h1 className="text-blue-900 font-semibold text-sm my-3">
        Last analyst upgrade/downgrade
      </h1>
      <div className="flex flex-row justify-between p-2">
        <span className="text-gray-600 font-semibold text-sm">22-01-2022</span>
        <span className="text-gray-600 font-semibold text-sm">Barclays</span>
        <span className="text-gray-600 font-semibold text-sm">Buy</span>
        <span className="text-gray-600 font-semibold text-sm">$156</span>
      </div>
      <div className="flex flex-row justify-between bg-gray-100 p-2">
        <span className="text-gray-600 font-semibold text-sm">22-01-2022</span>
        <span className="text-gray-600 font-semibold text-sm">Barclays</span>
        <span className="text-gray-600 font-semibold text-sm">Buy</span>
        <span className="text-gray-600 font-semibold text-sm">$156</span>
      </div>
      <div className="flex flex-row justify-between p-2">
        <span className="text-gray-600 font-semibold text-sm">22-01-2022</span>
        <span className="text-gray-600 font-semibold text-sm">Barclays</span>
        <span className="text-gray-600 font-semibold text-sm">Buy</span>
        <span className="text-gray-600 font-semibold text-sm">$156</span>
      </div>
      <div className="flex flex-row justify-between bg-gray-100 p-2">
        <span className="text-gray-600 font-semibold text-sm">22-01-2022</span>
        <span className="text-gray-600 font-semibold text-sm">Barclays</span>
        <span className="text-gray-600 font-semibold text-sm">Buy</span>
        <span className="text-gray-600 font-semibold text-sm">$156</span>
      </div>
    </div>
  );
};

export default FourthCard;
