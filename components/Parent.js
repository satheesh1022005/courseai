import React, { useState, useEffect } from 'react';
import ProgressBar from './Graph';
const ParentComponent = ({a}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Some logic to update the progress value
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ?a:a));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <ProgressBar progress={progress} />;
};

export default ParentComponent;
