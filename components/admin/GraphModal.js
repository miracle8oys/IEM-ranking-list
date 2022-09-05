import React from "react";
import { useState } from "react";
import postFiles from "../../utils/postFiles";

export default function GraphModal(props) {

    const [file, setFile] = useState([]);

    const handleFileChange = (e) => {
      setFile(e.target.files)
    }

    const handleSubmit = () => {
      
      const data = new FormData();
      
      Array.from(file).forEach(item => {
        data.append('graph', item);
      })
        
      props.setShowModal(false);
      postFiles(`/api/graph/${props.id}`, data)
      .then(res => {
        console.log(res);
        setFile([]);
        props.setChanges(current => current + 1);
      })
    }

  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-75">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" p-32 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="md:w-[25vw] w-[90vw]  text-primary pb-7">
                  <h2 className="font-medium text-xl pb-10">Upload Graph</h2>
                  <input type="file" name="graph" multiple onChange={(e) => handleFileChange(e)} />
                </div>
                {/*footer*/}
                <div className="flex items-center gap-5 justify-center p-3  border-solid border-gray rounded-b w-full">
                  <button
                    className="bg-gray text-grey900 active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-button text-white active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
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