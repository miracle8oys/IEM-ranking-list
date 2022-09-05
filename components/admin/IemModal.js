import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";
import putData from "../../utils/putData";
import useFetch from "../../utils/useFetch";

export default function IemModal({showModal, setShowModal, itemId, setItemId, setChanges}) {
    
    const signature = useFetch(`/api/signature`);
    const setup = useFetch(`/api/setup`);

    const [rank, setRank] = useState(0);
    const [value, setValue] = useState(0);
    const [model, setModel] = useState('');
    const [price, setPrice] = useState(0);
    const [signature_id, setSignature_id] = useState('');
    const [comments, setComments] = useState('');
    const [tone_grade, setTone_grade] = useState('');
    const [technical_grade, setTechnical_grade] = useState('');
    const [setup_id, setSetup_id] = useState('');


    useEffect(() => {
      if (itemId) {
        fetchData(`/api/iems/${itemId}`)
        .then(res => {
          console.log(res);
          setRank(res.data.rank);
          setValue(res.data.value);
          setModel(res.data.model);
          setPrice(res.data.price);
          setSignature_id(res.data.signature_id);
          setComments(res.data.comments);
          setTone_grade(res.data.tone_grade);
          setTechnical_grade(res.data.technical_grade);
          setSetup_id(res.data.setup_id);
        })
      }
    }, [itemId])


    const handleSubmit = () => {
      
      const body = {
        rank,
        value,
        model,
        price,
        signature_id,
        comments,
        tone_grade,
        technical_grade,
        setup_id,
        id: itemId
      }
      if (!itemId) {
        postData('/api/iems', body)
      .then(() => {
        setChanges(current => current + 1)
      })
      } else {
        putData(`/api/iems`, body)
        .then((res) => {
          console.log(res);
          setChanges(current => current + 1)
        })
      }
      handleClearInput();
      // setChanges(current => current + 1)
    }

    const handleClearInput = () => {
        setRank(0);
        setValue(0);
        setModel('');
        setPrice(0);
        setSignature_id('');
        setComments('');
        setTone_grade('');
        setTechnical_grade('');
        setSetup_id('');
        setShowModal(false);
        setItemId('')
    }
  
    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
              <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold mt-1">
                      Tambah Produk
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={handleClearInput}
                    >
                      <span className="text-primary">x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="md:w-[50vw] w-[90vw]">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                      <div className="flex gap-10 items-center">
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="name"
                            >
                              Rank
                            </label>
                            <input
                              onChange={(e) => setRank(e.target.value)}
                              value={rank}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="name"
                              type="number"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="value"
                            >
                              Value
                            </label>
                            <input
                              onChange={(e) => setValue(e.target.value)}
                              value={value}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="value"
                              type="number"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="model"
                            >
                              Model
                            </label>
                            <input
                              onChange={(e) => setModel(e.target.value)}
                              value={model}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="model"
                              type="text"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="price"
                            >
                              Price
                            </label>
                            <input
                              onChange={(e) => setPrice(e.target.value)}
                              value={price}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="price"
                              type="number"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="username"
                            >
                              Signature
                            </label>
                            <select
                              onChange={(e) => setSignature_id(e.target.value)}
                              value={signature_id}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            >
                              {signature?.data?.map((item) => (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="desc"
                            >
                              Comments
                            </label>
                            <textarea
                              id="desc"
                              onChange={(e) => setComments(e.target.value)}
                              value={comments}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              placeholder="Masukan Keterangan"
                            >
                              {comments}
                            </textarea>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="tone"
                            >
                              Tone Grade
                            </label>
                            <input
                              onChange={(e) => setTone_grade(e.target.value)}
                              value={tone_grade}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="yone"
                              type="text"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="technical"
                            >
                              Technicak Grade
                            </label>
                            <input
                              onChange={(e) => setTechnical_grade(e.target.value)}
                              value={technical_grade}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="technical"
                              type="text"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="username"
                            >
                              Setup
                            </label>
                            <select
                              onChange={(e) => setSetup_id(e.target.value)}
                              value={setup_id}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            >
                              {setup?.data?.map((item) => (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-gray rounded-b">
                    <button
                      className="text-red-500 background-transparent font-medium px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClearInput}
                    >
                      Close
                    </button>
                    <button
                      className="bg-button text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }