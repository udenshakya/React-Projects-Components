import { useEffect, useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomColor = () => {
    if (type === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let index = 0; index < 6; index++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }

      setColor(hexColor);
    } else if (type === "rgb") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      const rgb = `rgb(${r},${g},${b})`;
      setColor(rgb);
    }
  };

  useEffect(() => {
    handleCreateRandomColor();
  }, [type]);

  return (
    <div
      style={{ background: color, color: "white" }}
      className="h-screen w-full bg-[color] flex flex-col justify-between items-center "
    >
      <div className="flex gap-5">
        <button
          className="p-1 bg-white text-black"
          onClick={() => setType("hex")}
        >
          Create HEX Color
        </button>
        <button
          className="p-1 bg-white text-black"
          onClick={() => setType("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className="p-1 bg-white text-black"
          onClick={handleCreateRandomColor}
        >
          Generate Random Color
        </button>
      </div>
      <div className="uppercase text-2xl">{type}</div>
      <div className="text-3xl mb-10">{color}</div>
    </div>
  );
};

export default RandomColor;
