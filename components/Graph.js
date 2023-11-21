import React, { useState, useEffect } from 'react';
import './Graph.css'
const ProgressBar = ({ progress }) => {
  const [completedStyle, setCompletedStyle] = useState({ width: `${progress}%` });

  useEffect(() => {
    setCompletedStyle({ width: `${progress}%` });
  }, [progress]);

  return (
    <div className="progress w-100">
      <div className="progress-bar bg-danger" role="progressbar" style={completedStyle} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
