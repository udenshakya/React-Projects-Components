type ModalProps = {
  id?: string;
  header?: string;
  body?: string;
  footer?: string;
  setShowModal: (arg: boolean) => void;
};

const Modal = ({ id, header, body, footer, setShowModal }: ModalProps) => {
  return (
    <div
      id={id || "Modal"}
      className="flex flex-col h-[80vh] justify-between items-center bg-orange-200 p-2 rounded-lg  "
    >
      <div className="flex gap-10 break-words bg-orange-400 w-full h-[30%] text-center  justify-center relative">
        <h1 className=""> {header ? header : "Header"}</h1>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-1 right-2 text-lg p-1 w-9 h-9 text-white bg-gray-500 hover:bg-gray-800 transition-all rounded-full"
        >
          X
        </button>{" "}
      </div>
      <div className="h-[60%] w-full break-words bg-red-400 text-center">
        {body ? body : <div className="">This is Modal Body </div>}{" "}
      </div>
      <div className="h-[20%] w-full break-words bg-green-400 text-center">
        {footer ? footer : <div>This is Modal Footer </div>}{" "}
      </div>
    </div>
  );
};

export default Modal;
