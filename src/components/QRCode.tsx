import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCode = () => {
    setQrCode(input);
    setInput("")
  };

  return (
    <div className="container mx-auto h-screen flex flex-col items-center gap-2 justify-center">
      <h1 className="text-2xl my-5 font-semibold">QR Code Generator</h1>
      <div className="flex gap-3">
        <label htmlFor="qr">
          Enter Value:{"  "}
          <input
            type="text"
            name="qr"
            id="qr"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="py-1 px-3 border-2 rounded-lg"
            placeholder="John Doe"
          />
        </label>
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCode}
          className="px-3 py-1 text-white bg-gray-400 rounded-lg mb-10"
        >
          Generate QR{" "}
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
        
      </div>
    </div>
  );
};

export default QRCodeGenerator;
