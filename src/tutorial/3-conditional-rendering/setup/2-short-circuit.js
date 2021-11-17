import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      {text || <h1>John Doe</h1>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toogle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error</p>
      ) : (
        <div>
          <h2>There is not error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
