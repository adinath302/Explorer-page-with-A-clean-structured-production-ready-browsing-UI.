import React from "react";

const Skeleton = () => {
  return (
    <div className="p-6 font-sans">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="bg-gray-200 text-gray-500 px-4 py-2 rounded"
          disabled
        >
          <option>Category</option>
        </select>
        <input
          type="number"
          placeholder="Max: 1000"
          className="bg-gray-200 text-gray-500 px-4 py-2 rounded"
          disabled
        />
        <select
          className="bg-gray-200 text-gray-500 px-4 py-2 rounded"
          disabled
        >
          <option>In-stock</option>
        </select>
        <button
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded"
          disabled
        >
          Low → High
        </button>
        <button className="bg-red-300 text-white px-4 py-2 rounded" disabled>
          Reset Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-100 animate-pulse"
          >
            <div className="h-32 bg-gray-300 rounded mb-4" />
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/3" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          className="px-3 py-1 bg-gray-300 text-gray-600 rounded"
          disabled
        >
          prev
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 rounded ${
              num === 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
            disabled
          >
            {num}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-300 text-gray-600 rounded"
          disabled
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Skeleton;
