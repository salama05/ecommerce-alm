import React, { useState, useEffect } from "react";

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds;
        if (totalSeconds <= 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const nextTotalSeconds = totalSeconds - 1;

        return {
          days: Math.floor(nextTotalSeconds / 86400),
          hours: Math.floor((nextTotalSeconds % 86400) / 3600),
          minutes: Math.floor((nextTotalSeconds % 3600) / 60),
          seconds: nextTotalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const timeLabels = ["Days", "Hours", "Minutes", "Seconds"];
  const timeValues = Object.values(timeLeft).map((value) =>
    value.toString().padStart(2, "0")
  );

  return (
    <div className="flex items-center gap-4">
      {timeValues.map((value, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            {/* Number */}
            <span className="text-3xl font-bold text-black">{value}</span>
            {/* Label */}
            <span className="text-sm font-medium text-black">{timeLabels[index]}</span>
          </div>
          {/* Separator - Two dots vertically */}
          {index < timeValues.length - 1 && (
            <div className="flex flex-col items-center gap-1 mx-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlashSaleTimer;
