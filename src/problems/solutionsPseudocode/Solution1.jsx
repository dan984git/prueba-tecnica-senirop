import React from "react";

const Solution1 = () => {
  return (
    <>
      <code>
        For i from <strong className="text-pink-800 text-xl">1</strong> to{" "}
        <strong className="text-pink-800 text-xl">100</strong> do: <br />
        &emsp; If (i is multiple by
        <strong className="text-pink-800 text-xl"> 3</strong> AND i is multiple
        by <strong className="text-pink-800 text-xl">5</strong>) then <br />
        &emsp; &emsp; Print
        <strong className="text-green-700">"Senir Op"</strong> <br />
        &emsp; Else if (i is multiple
        <strong className="text-pink-800 text-xl"> 3</strong>) then <br />
        &emsp; &emsp; Print
        <strong className="text-green-700">"Senir"</strong> <br />
        &emsp; Else if (i is multiple
        <strong className="text-pink-800 text-xl"> 5</strong>) then <br />
        &emsp; &emsp; Print
        <strong className="text-green-700">"Op"</strong> <br />
        &emsp; Else <br />
        &emsp; &emsp; Print i <br />
        &emsp; End If <br />
        End For
      </code>
    </>
  );
};

export default Solution1;
