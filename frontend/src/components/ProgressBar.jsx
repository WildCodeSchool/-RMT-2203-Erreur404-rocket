import React from "react";

function ProgressBar({ progress }) {
  const Childdiv = {
    width: `${(progress * 100) / 160}%`,
  };

  return (
    <div className="parentdiv">
      <div className="childdiv" style={Childdiv}>
        <span className="progresstext">{`${progress}`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
