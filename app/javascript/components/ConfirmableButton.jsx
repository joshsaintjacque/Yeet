import React, { useState } from "react";
import Button from "src/components/Button";

const ConfirmableButton = ({ onConfirm, children }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <>
      {!isConfirming && (
        <Button onClick={() => setIsConfirming(true)}>{children}</Button>
      )}
      {isConfirming && (
        <>
          {/* <span className="mr-3">Are you sure?</span> */}
          <Button onClick={onConfirm} className="animate-pulse mr-2" danger>
            {children}
          </Button>{" "}
          <Button onClick={() => setIsConfirming(false)}>Cancel</Button>
        </>
      )}
    </>
  );
};

export default ConfirmableButton;
