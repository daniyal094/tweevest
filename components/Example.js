import Image from "next/image";
import CustomSlider from "./CustomSlider";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto  lg:max-w-none">
          <div className="mt-10 space-y-12 md:space-y-0  md:grid md:grid-cols-2  md:gap-x-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6 ">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="px-3 group relative  bg-white shadow-lg rounded mr-3"
              >
                {/* LOGO SECTION  */}
                <div className="relative w-full bg-white flex flex-row justify-start items-center border-b-2 py-3">
                  <Image alt="" src={"/apple.svg"} width={70} height={70} />
                  <div className="h-auto flex flex-col items-center ml-4 ">
                    <h1 className="text-blue-900 font-bold text-lg">
                      Apple Inc.
                    </h1>
                    <div className="flex flex-row">
                      <h1 className="text-blue-600 font-light mr-2">APPL</h1>
                      <Image alt="" src={"/AmericaFlag.svg"} width={14} height={14} />
                      <h1 className="text-blue-600 font-light ">NASDAQ</h1>
                    </div>
                  </div>
                </div>
                {/* PRICE SECTION  */}
                <div className="flex flex-row items-end mt-3">
                  <h1 className="text-blue-900 font-bold text-lg">152.95</h1>
                  <span className="text-blue-800 text-sm ml-1 mb-0.5">USD</span>
                  &nbsp; &nbsp;
                  <Image alt=""
                    src={"/bottom-arrow.svg"}
                    width={20}
                    height={20}
                    className=" mb-0.5"
                  />
                  <span className="text-red-600 text-sm  mb-0.5">
                    1.14 (0.74%)
                  </span>
                </div>
                <h1 className="text-blue-900 text-sm mb-4 mt-1">
                  Market Closed (as of Jul 25,19:59 EDT)
                </h1>
                {/* PERFORMANCE SECTION  */}
                <div className="mt-5 border-b-2 pb-4">
                  <h1 className="text-blue-900 font-bold">Performance</h1>
                  <div className="flex flex-row mt-3">
                    {/* Green Performance Status */}
                    <div className="mx-1 bg-green-100  w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-green-600">0.11%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                    <div className="mx-1 bg-green-100  w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-green-600">0.11%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                    <div className="mx-1 bg-green-100  w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-green-600">0.11%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3">
                    <div className="mx-1 bg-green-100  w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-green-600">0.11%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                    <div className="mx-1 bg-green-100  w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-green-600">0.11%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                    {/* Red Performance Status */}
                    <div className="mx-1 bg-red-100 w-24 h-17 rounded flex flex-col  justify-center items-center">
                      <h1 className="text-red-600">-4.73%</h1>
                      <span
                        className="text-gray-500 mr-3"
                        style={{ fontSize: "12px" }}
                      >
                        1 W
                      </span>
                    </div>
                  </div>
                </div>

                {/* INFO SLIDER SECTION */}
                <div className="mb-10 mt-3">
                <h1 className="text-blue-900 font-bold mb-2">Stock infos</h1>
                <CustomSlider/>
                </div>
       
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
