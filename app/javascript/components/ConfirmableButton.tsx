import React, { useState, FC } from "react";
import Button from "components/Button";

interface ConfirmableButtonProps {
  onConfirm(): void;
  children: React.ReactNode;
}

const ConfirmableButton: FC<ConfirmableButtonProps> = ({
  onConfirm,
  children,
}) => {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <>
      {!isConfirming && (
        <Button onClick={() => setIsConfirming(true)}>{children}</Button>
      )}
      {isConfirming && (
        <>
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
