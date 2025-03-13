import React from "react";

const Table = ({ title, columns, data }) => {
  return (
    <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-2xl mx-[3vw]">
      {/* Table Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{title}</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="border border-gray-400 p-3 text-center">{col}</th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-300" >
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-400 p-3 text-center font-medium text-gray-900">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
