import { useState } from "react";

function ColorBtn() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleClick(1)}
        className={`flex h-5 w-5 items-center justify-center rounded-full ${
          activeButton === 1 ? "border-2 border-black p-[2px]" : ""
        }`}
      >
        <div
          className={`h-full w-full ${
            activeButton === 1 ? "h-3 w-3" : "h-5 w-5"
          } bg-red rounded-full`}
        ></div>
      </button>
      <button
        onClick={() => handleClick(2)}
        className={`flex h-5 w-5 items-center justify-center rounded-full ${
          activeButton === 2 ? "border-2 border-black p-[2px]" : ""
        }`}
      >
        <div
          className={`h-full w-full ${
            activeButton === 2 ? "h-3 w-3" : "h-5 w-5"
          } bg-dark-gray-blue rounded-full`}
        ></div>
      </button>
    </div>
  );
}

export default ColorBtn;
