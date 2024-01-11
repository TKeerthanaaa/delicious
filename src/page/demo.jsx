import React, { useState } from "react";
import "./demo.css"

const Demo = () => {
  const [view, setView] = useState(false);

  const buttonText = view ? "Hide" : "View"; // Adjusted buttonText based on view state

  return (
    <div className="default-container">
      <h2>Test Credentials</h2>
      <button className="demo-btn" onClick={() => setView(!view)}>
        {buttonText}
      </button>
      {view && (
        <>
          <div className="demo-body">
            <p>
              <span>Email:</span> sandysk0620@gmail.com
            </p>
            <p>
              <span>Password:</span> sk@0620
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Demo;
