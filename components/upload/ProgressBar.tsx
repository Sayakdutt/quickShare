import React from "react";

interface ProgressBarProps {
  progress: number;
};
const ProgressBar: React.FC<ProgressBarProps> = ({ progress=40 }) => {
  return (
    <div className="w-full bg-gray-400 rounded-full h-4 mt-4">
      <div className={`bg-indigo-600 h-4 rounded-full w-[${progress}%] text-[10px] font-bold text-white`}>
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
