import React from "react";

const Solution3 = () => {
  return (
    <code>
      Function makeDistinct(
      <strong className="text-pink-800 text-xl">dials</strong>):
      <br />
      &emsp; If the length of{" "}
      <strong className="text-pink-800 text-xl">dials</strong> is greater than{" "}
      <strong className="text-pink-800 text-xl">10</strong>: <br />
      &emsp;&emsp; Return{" "}
      <strong className="text-green-700">
        "Dials can only hold 1 to 10 items"
      </strong>
      <br />
      <br />
      &emsp; If the numbers on the{" "}
      <strong className="text-pink-800 text-xl">dials</strong> are unique:
      <br />
      &emsp;&emsp; Return <strong className="text-green-700">""</strong>
      <br />
      <br />
      &emsp; For each number on the{" "}
      <strong className="text-pink-800 text-xl">dials</strong> <br />
      &emsp;&emsp; Save the index of the non unique numbers
      <br />
      &emsp;&emsp; Save the unique numbers
      <br />
      &emsp; End For each
      <br />
      <br />
      &emsp; Create random number between{" "}
      <strong className="text-pink-800 text-xl">0</strong> to{" "}
      <strong className="text-pink-800 text-xl">100</strong>:
      <br />
      <br />
      &emsp; If random number is between{" "}
      <strong className="text-pink-800 text-xl">0</strong> and{" "}
      <strong className="text-pink-800 text-xl">50</strong>:
      <br />
      &emsp;&emsp; For each dial starting from the leftmost{" "}
      <strong className="text-pink-800 text-xl">dial</strong>
      <br />
      &emsp;&emsp;&emsp; Call Random increase or decrease function to the near
      unique number
      <br />
      &emsp;&emsp;&emsp; If the numbers on the{" "}
      <strong className="text-pink-800 text-xl">dials</strong> are unique:
      <br />
      &emsp;&emsp;&emsp;&emsp; <strong className="text-green-700">Break</strong>
      <br />
      &emsp;&emsp;&emsp; Print{" "}
      <strong className="text-green-700">"&gt;"</strong>
      <br />
      &emsp;&emsp; End For each
      <br />
      &emsp; Else If random number is between{" "}
      <strong className="text-pink-800 text-xl">51</strong> and{" "}
      <strong className="text-pink-800 text-xl">100</strong>:
      <br />
      &emsp;&emsp; For each dial starting from the rightmost{" "}
      <strong className="text-pink-800 text-xl">dial</strong>
      <br />
      &emsp;&emsp;&emsp; Call Random increase or decrease function to the near
      unique number
      <br />
      &emsp;&emsp;&emsp; If the numbers on the{" "}
      <strong className="text-pink-800 text-xl">dials</strong> are unique:
      <br />
      &emsp;&emsp;&emsp;&emsp; <strong className="text-green-700">Break</strong>
      <br />
      &emsp;&emsp;&emsp; Print{" "}
      <strong className="text-green-700">"{"<"}"</strong>
      <br />
      &emsp;&emsp; End For each
      <br />
      &emsp; End Else If
      <br />
      End Function makeDistinct
    </code>
  );
};

export default Solution3;
