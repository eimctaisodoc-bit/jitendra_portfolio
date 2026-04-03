import { useState } from "react";
import React from "react";
import { ClimbingBoxLoader, ClimbingBoxLoader as ReactBounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export const BounceLoader_ = () => {
  const [loading, setLoading] = useState(true);
 

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
     

      <ClimbingBoxLoader
        color='#ffffff'
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};