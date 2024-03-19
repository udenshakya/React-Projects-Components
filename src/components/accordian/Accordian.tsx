import { useState } from "react";
import data from "./data";
import "./styles.scss";

const Accordian = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMutliSelection, setEnableMutliSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const handleSingleSelection = (currentId: string) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId: string) => {
    let cpyMultiple = [...multiSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiSelected(cpyMultiple);
  };

  return (
    <div className="maincontainer">
      <button onClick={() => setEnableMutliSelection((prev) => !prev)}>
        Enable Multi Selection
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="item" key={item.id}>
            <div
              className="title"
              onClick={
                enableMutliSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <div>
                <h1>{item.question}</h1> <button>⬇️</button>
              </div>
            </div>
            {enableMutliSelection
              ? multiSelected.indexOf(item.id) !== -1 && (
                  <div className="answer">{item.answer} </div>
                )
              : selected === item.id && (
                  <div className="answer">{item.answer} </div>
                )}
          </div>
        ))
      ) : (
        <div>NO data </div>
      )}
    </div>
  );
};

export default Accordian;
