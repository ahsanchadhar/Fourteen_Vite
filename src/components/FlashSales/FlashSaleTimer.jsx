import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function FlashSaleTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        alt="Flash Sale Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-3xl font-bold mb-4">Flash Sale Ends In</h2>
        <Clock className="w-12 h-12 mb-4" />
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-primary text-primary-foreground px-3 py-2 rounded-md">
              {hours.toString().padStart(2, "0")}
            </span>
            <span className="text-sm mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-primary text-primary-foreground px-3 py-2 rounded-md">
              {minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-sm mt-1">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-primary text-primary-foreground px-3 py-2 rounded-md">
              {seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-sm mt-1">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
