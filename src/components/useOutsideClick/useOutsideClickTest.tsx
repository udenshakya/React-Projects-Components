import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import Modal from "../CustomModal/Modal";

const UseOutsideClickTest = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowModal(false));

  return (
    <div className="flex flex-col gap-10 w-screen  justify-center items-center">
      <h1 className="text-center font-bold">useOutsideClick Hook</h1>
      {showModal ? (
        <div ref={ref} className="w-screen">
          <Modal setShowModal={setShowModal} />
        </div>
      ) : (
        <button onClick={() => setShowModal(true)}>Show Modal </button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
