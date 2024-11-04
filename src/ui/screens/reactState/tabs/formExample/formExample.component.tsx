import React from 'react';

export const FormExampleTab: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <div className="flex justify-center items-center">
        <form className="w-full max-w-lg border border-violet-700 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">First Name</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Last Name</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Wick"
              />
            </div>
          </div>
          <div>
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>

      {/* {students?.length > 0 && (
        <div className="w-screen h-screen flex flex-col mt-40 w-full">
          <div className="flex justify-center items-center">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400 border border-violet-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students?.map((e, index) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      ></td>
                      <td scope="row" className="px-6 py-4"></td>
                      <td className="px-6 py-4">{e.lastName}</td>
                      <td className="px-6 py-4 hover:text-violet-600">Delete</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )} */}
    </div>
  );
};
