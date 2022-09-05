import Layout from "../Layout";
import rankSymbols from "../../utils/rankSymbols";
import Link from "next/link";
import valueSymbols from "../../utils/valueSymbols";

const IemRank = ({iems}) => {
    return ( 
        <div className="sm:px-[32px] pb-[32px] md:w-[80vw] w-[95vw]">
        <div className="bg-white dark:bg-thertiary dark:text-white rounded-lg h-fit px-3 shadow-xl">
        <h1 className="text-xl font-medium pt-[32px] pb-[24px] text-red">IEMs Ranking List</h1>

          <hr className="border-gray" />
  
          <Layout totalData={iems?.totalData}>

          <div className="w-full overflow-auto">
            <div className="flex flex-col">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                          >
                            Rank
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Value
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Model
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Signature
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Comments
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400 text-center"
                          >
                            <div>
                              Tone
                            </div> 
                            <div>
                              Grade
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-widert text-gray-700 uppercase dark:text-gray-400 text-center"
                          >
                            <div>
                              Technical
                            </div> 
                            <div>
                              Grade
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Setup
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          iems?.data?.map((item) => (
                            <tr
                              key={item._id}
                              className="bg-white dark:bg-thertiary odd:bg-tableOdd"
                            >
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400 text-center">
                                {rankSymbols(item.rank)}
                              </td>
                              <td className="py-2 px-3 text-md flex justify-center text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {valueSymbols(item.value)}
                              </td>
                              <td className="py-2 px-3 text-md  hover:text-button whitespace-nowrap dark:text-gray-400">
                                <Link href={`/iems/${item._id}`}>
                                  {item.model}
                                </Link>
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.price}
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.iemSignature?.name}
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 dark:text-gray-400 md:w-[20vw] w-[90vw]">
                                <div className='break-words md:w-[20vw] w-[90vw]'>
                                  {item.comments}
                                </div>
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400 text-center">
                                {item.tone_grade}
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400 text-center">
                                {item.technical_grade}  
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.iemSetup?.name}  
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </Layout>

          {/* <Pagination
            page={page}
            setPage={setPage}
            limit={limit}
            totalData={10}
          /> */}
        </div>
      </div>
     );
}
 
export default IemRank;