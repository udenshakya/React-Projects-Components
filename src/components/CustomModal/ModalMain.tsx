import { useState } from "react";
import Modal from "./Modal";

const ModalMain = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className={`flex flex-col justify-center w-[70%] mx-auto ${showModal ? "blur-sm":""} `}>
      <button className="p-2 bg-red-300 rounded-lg w-[150px] mx-auto " onClick={()=>setShowModal(!showModal)}>Show Modal</button>
    </div>
      <div className="" >
      { showModal && <Modal  setShowModal={setShowModal} /> }

      </div>
      </>
  );
}

export default ModalMain;
