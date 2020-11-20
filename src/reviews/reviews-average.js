import React from "react"

const ReviewsAverage = () => {
  return (
    <div className="py-2 px-12 items-center">
      <div className="bg-white shadow-lg rounded-lg px-4 py-4">
        <div className="mb-1 tracking-wide px-4 py-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <svg
                className="mx-1 w-4 h-4 fill-current text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-4 h-4 fill-current text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-4 h-4 fill-current text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-4 h-4 fill-current text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-4 h-4 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
          </div>
          <h2 className="text-gray-800 font-semibold mt-1 text-center">
            67 Users reviews
          </h2>
          <div className="-mx-8 px-8">
            <div className="flex items-center mt-1">
              <div className="text-gray-800 tracking-tighter w-16">
                <span>5 star</span>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 rounded-lg h-4">
                  <div
                    className="bg-yellow-300 rounded-lg h-4"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="text-gray-700 pl-3 w-6">
                <span className="text-sm">51%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 tracking-tighter w-16">
                <span>4 star</span>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 w-full rounded-lg h-4">
                  <div className="w-1/5 bg-yellow-300 rounded-lg h-4"></div>
                </div>
              </div>
              <div className="text-gray-700 pl-3 w-6">
                <span className="text-sm">17%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 tracking-tighter w-16">
                <span>3 star</span>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 w-full rounded-lg h-4">
                  <div className=" w-3/12 bg-yellow-300 rounded-lg h-4"></div>
                </div>
              </div>
              <div className="text-gray-700 pl-3 w-6">
                <span className="text-sm">19%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 tracking-tighter w-16">
                <span>2 star</span>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 w-full rounded-lg h-4">
                  <div className=" w-1/5 bg-yellow-300 rounded-lg h-4"></div>
                </div>
              </div>
              <div className="text-gray-700 pl-3 w-6">
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 tracking-tighter w-16">
                <span>1 star</span>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 w-full rounded-lg h-4">
                  <div className=" w-2/12 bg-yellow-300 rounded-lg h-4"></div>
                </div>
              </div>
              <div className="text-gray-700 pl-3 w-6">
                <span className="text-sm">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsAverage
