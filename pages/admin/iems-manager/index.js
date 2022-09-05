import { useState } from "react";
import IemModal from "../../../components/admin/IemModal";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Layout from "../../../components/Layout";
import useFetch from "../../../utils/useFetch";
import rankSymbols from "../../../utils/rankSymbols";
import {AiOutlineStar} from "react-icons/ai"
import { useRouter } from "next/router";
import Link from "next/link";

const IemsManager = () => {

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(0);

  const [changes, setChanges] = useState(0);

  const {limit, offset, keyword} = router.query;

  const iems = useFetch(`/api/iems?keyword=${keyword || ''}&limit=${limit || 5}&offset=${offset || 0}`, changes);



  return (
    <>
      <div className="sm:px-[32px] pb-[32px] w-full">
        <div className="bg-white rounded-lg h-fit px-3 shadow-lg">
        <h1 className="text-xl font-medium mt-20">IEMs Manager</h1>
          <div className="flex justify-end gap-5 py-5 px-3">
            <div
              className="py-1 px-2 border-2 rounded text-button"
            >
              Kategori
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="py-1 px-2 bg-button rounded text-white"
            >
              + Add IEM
            </button>
          </div>

          <hr className="border-gray" />

          <Layout totalData={iems.totalData}>

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
                          <th
                            scope="col"
                            className="py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Actions
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
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {
                                item.value === 0 ?
                                <>
                                  -
                                </>
                                :
                                item.value === 1 ?
                                <>
                                  <AiOutlineStar />
                                </>
                                :
                                item.value === 2 ?
                                <div className='flex'>
                                  <AiOutlineStar />
                                  <AiOutlineStar />
                                </div>
                                :
                                <div className='flex'>
                                  <AiOutlineStar />
                                  <AiOutlineStar />
                                  <AiOutlineStar />
                                </div>
                              }
                              </td>
                              <td className="py-2 px-3 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <Link href={`/admin/iems-manager/${item._id}`}>
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
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                <div className="flex gap-3">
                                  <button
                                    onClick={() => {
                                      setItemId(item._id);
                                      setShowModal(true);
                                    }}
                                    className="text-white bg-blue text-lg p-[4px] rounded"
                                  >
                                    <FiEdit />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setItemId(item._id);
                                    }}
                                    className="text-white bg-grey text-lg p-[4px] rounded"
                                  >
                                    <MdOutlineDelete />
                                  </button>
                                </div>
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

        </div>
      </div>
      <IemModal showModal={showModal} setShowModal={setShowModal} itemId={itemId} setItemId={setItemId} setChanges={setChanges} />
    </>
  );
};

export default IemsManager;