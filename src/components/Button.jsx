import { cva } from "class-variance-authority";

const button = cva(
  "rounded-[4px] px-[48px] font-poppins text-center text-font-lg-500",
  {
    variants: {
      intent: {
        primary: [
          "bg-color-button-2",
          "text-white",
          "border-transparent",
          "text-color-text-1",
          "hover:bg-color-button-hover",
          "py-[16px]",
        ],
        secondary: [
          "border",
          "text-black",
          "border-gray-400",
          "hover:text-color-text-2",
          "py-[16px]",
        ],
        third: [
          "bg-color-button-2",
          "text-white",
          "py-[10px]",
          "text-color-text-1",
          "hover:bg-color-button-hover",
        ],
        CPhone: [
          "w-[170px]",
          "h-[145px]",
          "border",
          "border-color-star-gray",
          "text-black",
          "hover:bg-color-button-2",
          "hover:text-white",
          "group",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
        class: "uppercase",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

function Button({ intent, textBTN, textCPhone, img }) {
  return (
    <button className={button({ intent })}>
      {intent === "CPhone" ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={img}
            alt="image"
            className="group-hover:invert group-hover:filter"
          />
          <p>{textCPhone}</p>
        </div>
      ) : (
        textBTN
      )}
    </button>
  );
}

export default Button;
