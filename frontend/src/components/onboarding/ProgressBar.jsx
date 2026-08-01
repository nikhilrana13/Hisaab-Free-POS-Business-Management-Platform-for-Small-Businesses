import React from 'react';

const ProgressBar = ({step}) => {
  return (
     <div className="mb-8 h-2 overflow-hidden rounded-full bg-[#f1f5f9]">
        <div  style={{ width: `${step * 50}%` }} className="h-full  rounded-full bg-[#2563eb]" />
     </div>
  );
}

export default ProgressBar;
