import Image from "next/image";
import React from "react";
import GaugeChart from "react-gauge-chart";
const FourthCard = () => {
  return (
    <div className="px-3 group relative  bg-white shadow-lg rounded mr-3">
      {/* HEADER SECTION  */}
      <div className="relative w-full bg-white flex flex-row justify-start items-center py-3">
        <h1 className="text-xs text-blue-900 mr-2 font-bold" style={{ fontSize: 16 }}>Forecast</h1>
        <Image alt="" src={"/info-circle.svg"} width={15} height={15} />
      </div>
      <div className="relative w-full bg-white flex flex-row justify-between items-center py-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="text-blue-900 font-bold text-md mx-1" style={{ fontSize: 18 }}>34B</h1>
            <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
            <h1 className="text-green-400" style={{ fontSize: "12px" }}>
              15%
            </h1>
          </div>
          <h1 className="font-bold" style={{ fontSize: 12, opacity: .6 }}>2023-Revenue</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="text-blue-900 font-bold text-md mx-1" style={{ fontSize: 18 }}>$1.2</h1>
            <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
            <h1 className="text-green-400" style={{ fontSize: "12px" }}>
              15%
            </h1>
          </div>
          <h1 className="font-bold" style={{ fontSize: 12, opacity: .6 }}>2023-EPS</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="text-blue-900 font-bold text-md mx-1" style={{ fontSize: 18 }}>650M</h1>
            <Image alt="" src={"/arrow-up.svg"} width={15} height={15} className="ml-2" />
            <h1 className="text-green-400" style={{ fontSize: "12px" }}>
              15%
            </h1>
          </div>
          <h1 className="font-bold" style={{ fontSize: 12, opacity: .6 }}>2023-EBIT</h1>
        </div>

      </div>
      {/* ANALATIC SECTION  */}
      <div className="flex flex-row justify-between mt-4 mb-4">
        <span className="text-blue-900 text-xs font-bold" style={{ fontSize: 16 }}>Analyst rating</span>
      </div>
      <div className="flex flex-row items-end mt-3">
        <GaugeChart
          nrOfLevels={420}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={["#FFC56D", "#FFC56D", "#ECEEF1", "#55C2A3", "#55C2A3"]}
          percent={0.37}
          arcPadding={0}
          arcWidth={0.05}
          cornerRadius={0}
          hideText={true}

        />
      </div>
      <h1 className="text-blue-900 text-sm mb-4 mt-1 text-center font-bold">
        Netural
      </h1>
      {/* PERFORMANCE SECTION  */}
      <div className="flex flex-row justify-between">
        <span className="text-blue-900 text-xl" style={{ fontSize: 18 }}>1 Year Price Target</span>
        <span className="text-blue-900 text-md">
          25.48 <span className="text-green-500 font-bold text-md">(12.99%)</span>
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-blue-900 text-xl" style={{ fontSize: 18 }}>Number of analyst</span>
        <span className="text-blue-900 text-md font-bold">15</span>
      </div>
      <div className="flex flex-row justify-between mt-4 mb-4">
        <span className="text-blue-900 text-xs font-bold" style={{ fontSize: 16 }}>Last analyst upgrade/downgrade</span>
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
