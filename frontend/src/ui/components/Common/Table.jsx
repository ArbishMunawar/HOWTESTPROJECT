import React from 'react'

const Table = () => {
  return (
  <div className="w-full overflow-x-auto md:overflow-x-visible my-[40px] rounded-[10px]">
              <table className="min-w-[700px] table-auto md:min-w-[70%] text-left text-[14px] border border-[#E3E6ED] rounded-xl">
                <thead className="bg-[#F4F8FB] text-gray-700 font-semibold">
                  <tr>
                    <th className="px-6 py-3 border-b border-[#E3E6ED]  ">
                      Brain wave
                    </th>
                    <th className="px-6 py-3 border-b border-[#E3E6ED] ">
                      Frequency (Hz)
                    </th>
                    <th className="px-6 py-3 border-b border-[#E3E6ED] ">
                      Activities
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 [&>tr:nth-child(even)]:bg-[#F9F9F9]">
                  <tr className="border-b border-[#E3E6ED] ">
                    <td className="px-6 py-4">Gamma</td>
                    <td className="px-6 py-4">~30–100</td>
                    <td className="px-6 py-4">
                      Involved in concentration and active thinking; linked with
                      compassion, memory, and happiness
                    </td>
                  </tr>
                  <tr className="border-b border-[#E3E6ED] ">
                    <td className="px-6 py-4">Beta</td>
                    <td className="px-6 py-4">345</td>
                    <td className="px-6 py-4">
                      Represent normal attentive state; faster waves are present
                      during problem solving and decision making
                    </td>
                  </tr>
                  <tr className="border-b border-[#E3E6ED] ">
                    <td className="px-6 py-4">Alpha</td>
                    <td className="px-6 py-4">5654</td>
                    <td className="px-6 py-4">
                      Represent normal attentive state
                    </td>
                  </tr>
                  <tr className="border-b border-[#E3E6ED] ">
                    <td className="px-6 py-4">Delta</td>
                    <td className="px-6 py-4">222</td>
                    <td className="px-6 py-4">
                      Represent normal attentive state; faster waves are present
                      during problem solving and decision making. Present during
                      quiet thought and meditative states; represent the resting
                      state of the brain.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Theta</td>
                    <td className="px-6 py-4">784</td>
                    <td className="px-6 py-4">
                      Represent normal attentive state
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  )
}

export default Table