import React from "react";
import deleteData from "../../utils/deleteData";
import {RiErrorWarningLine} from "react-icons/ri";

export default function DeleteModal(props) {


    const handleSubmit = () => {
        
      deleteData(`/api/graph/${props.graph_id}`)
      .then(() => {
        props.setGraph_id('');
        props.setShowModalDelete(false);
      })
    }

  return (
    <>
      {props.showModalDelete ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-75">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" p-16 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="md:w-[25vw] w-[90vw]  text-primary pb-7 text-center">
                    <div className="flex justify-center">
                        <RiErrorWarningLine className="text-2xl" />
                    </div>
                  <h2 className="font-medium text-xl pb-3">Delete Data?</h2>
                  <p>You won't be able to revert this!</p>
                </div>
                {/*footer*/}
                <div className="flex items-center gap-5 justify-center p-3  border-solid border-gray rounded-b w-full">
                  <button
                    className="bg-gray text-grey900 active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModalDelete(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-delete text-white active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Delete
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