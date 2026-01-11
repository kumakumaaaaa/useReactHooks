import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

// 秒数を分:秒の形式に変換する関数
function secondsToMs(d) {
  const minutes = Math.floor(d / 60);
  const seconds = Math.floor(d % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export default function App() {
  const [time, setTime] = useState(0);

  // 👇 ここでuseEffectを使って、タイマーを作成してください
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-10 w-[400px]">
        <div className="timer text-center text-6xl font-bold text-gray-900 dark:text-gray-100">
          {secondsToMs(time)}
        </div>
      </div>
    </div>
  );
}

export const root = createRoot(document.getElementById("root"));
root.render(<App />);
