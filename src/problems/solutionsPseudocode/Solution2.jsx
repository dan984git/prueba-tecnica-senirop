import React from "react";

const Solution2 = () => {
  return (
    <>
      <code>
        Function solve(S):
        <br />
        &emsp; numOperations ={" "}
        <strong className="text-pink-800 text-xl">0</strong> <br />
        &emsp; letters ={" "}
        <strong className="text-green-700">
          "regular expression that checks for lowercase letters"
        </strong>
        <br />
        <br />
        &emsp; If S does not contain only lowercase letters:
        <br />
        &emsp;&emsp; return{" "}
        <strong className="text-green-700">
          "String must contain only lowercase letters"
        </strong>
        <br />
        <br />
        &emsp; If S does not contain only lowercase letters:
        <br />
        &emsp;&emsp; return{" "}
        <strong className="text-green-700">
          "String must be greater than 1 and less than 2500 characters"
        </strong>
        <br />
        <br />
        &emsp; If word is not a Near-Palindrome: <br />
        <br />
        &emsp;&emsp; Function getOperations(
        <strong className="text-pink-800 text-xl">start</strong>,{" "}
        <strong className="text-pink-800 text-xl">end</strong>):
        <br />
        &emsp;&emsp;&emsp; For each letter in the end of the word <br />
        &emsp;&emsp;&emsp;&emsp; Find the shortest alphabetical distance from
        the start of the word.
        <br />
        &emsp;&emsp;&emsp; End For each
        <br />
        &emsp;&emsp;&emsp; Return number of operations.
        <br />
        &emsp;&emsp; EndFunction.
        <br />
        <br />
        &emsp;&emsp; <strong className="text-pink-800 text-xl">start</strong> =
        substring of S from start to halfway
        <br />
        &emsp;&emsp; <strong className="text-pink-800 text-xl">end</strong> =
        substring of S from halfway to the end
        <br />
        &emsp;&emsp; numOperations = getOperations(
        <strong className="text-pink-800 text-xl">start</strong>,{" "}
        <strong className="text-pink-800 text-xl">end</strong>)
        <br />
        &emsp; End If <br />
        End Function solve
      </code>
    </>
  );
};

export default Solution2;
