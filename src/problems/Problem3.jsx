import React, { useEffect, useState } from "react";
import Solution3 from "./solutionsPseudocode/Solution3";

const Problem1 = () => {
  const arrayInts = [[3, 2, 7], [8, 8, 0, 9], [9], [0, 1, 0, 2, 0]];
  const [stringArray, setStringArray] = useState([]);

  useEffect(() => {
    setStringArray([]);
    arrayInts.forEach((dials) => {
      makeDistinct(dials);
    });
  }, []);

  const makeDistinct = (dials) => {
    const originalDials = [...dials];
    const n = dials.length;
    let actions = [];
    let seenNumbers = new Set();
    let indexNumbers = [];
    let notChangedNumbers = new Set();
    let randomNum = Math.floor(Math.random() * 101);
    const checkDials = checkArray(dials, n);

    if (dials.length > 10) {
      setStringArray((prevStringArray) => [
        ...prevStringArray,
        {
          ints: `{${originalDials.toString()}}`,
          string: "Dials can only hold 1 to 10 items",
        },
      ]);
      return;
    }

    if (checkDials && n != 1) {
      setStringArray((prevStringArray) => [
        ...prevStringArray,
        {
          ints: `{${originalDials.toString()}}`,
          string: '""',
        },
      ]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (seenNumbers.has(dials[i])) {
        indexNumbers.push(i);
      } else {
        notChangedNumbers.add(dials[i]);
      }
      seenNumbers.add(dials[i]);
    }

    if (randomNum >= 0 && randomNum <= 50) {
      for (let i = 0; i < dials.length; i++) {
        randomSumRest(i, dials, actions, notChangedNumbers);
        const check = checkArray(dials, n);
        if (check) break;
        actions.push("> ");
      }
    } else if (randomNum > 51 && randomNum <= 100) {
      actions.push("> ".repeat(dials.length - 1));
      for (let i = dials.length - 1; i > 0; i--) {
        randomSumRest(i, dials, actions, notChangedNumbers);
        const check = checkArray(dials, n);
        if (check) break;
        actions.push("< ");
      }
    }
    if (dials.length == 1) {
      let result = "";
      const characters = ["+ ", "- "];
      for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
        const randomChar =
          characters[Math.floor(Math.random() * characters.length)];
        result += randomChar;
      }
      setStringArray((prevStringArray) => [
        ...prevStringArray,
        {
          ints: `{${originalDials.toString()}}`,
          string: result,
        },
      ]);
      return;
    }
    setStringArray((prevStringArray) => [
      ...prevStringArray,
      {
        ints: `{${originalDials.toString()}}`,
        string: actions.join(""),
      },
    ]);
    return;
  };

  const checkArray = (dials, n) => {
    const dialsSeen = new Set(dials);
    if (dialsSeen.size == n) {
      return true;
    } else {
      return false;
    }
  };

  const randomSumRest = (num, dials, actions, notChangedNumbers) => {
    const random = Math.random() > 0.5 ? true : false;
    if (random) {
      while (notChangedNumbers.has(dials[num])) {
        dials[num] = (dials[num] + 1) % 10;
        actions.push("+ ");
      }
      notChangedNumbers.add(dials[num]);
    } else {
      while (notChangedNumbers.has(dials[num])) {
        dials[num] = (dials[num] - 1 + 10) % 10;
        actions.push("- ");
      }
      notChangedNumbers.add(dials[num]);
    }
  };

  return (
    <>
      <h3 className="subTitles">Problem 3 </h3>
      <p className="text-lg">
        You have a bicycle lock. The locking mechanism consists of several
        dials. Each dial contains the digits 0-9 in a cycle, in this order. From
        each dial exactly one digit is visible.
        <br />
        <br />
        Each dial can be rotated in either direction:
        <br />
        <br />
        &emsp; • Rotating the dial one step in the positive direction (denoted
        '+') increments the digit shown.
        <br />
        &emsp;&emsp;E.g., if the dial currently shows 4 and you make the '+'
        rotation, the dial will now show 5. After the digit 9 comes the digit 0
        again.
        <br />
        &emsp;• Rotating the dial one step in the negative direction (denoted
        '-') does the opposite.
        <br />
        &emsp;&emsp;E.g., the '-' rotation will change a dial showing 5 into a
        dial showing 4, and it will change a dial showing 0 into a dial showing
        9.
        <br />
        <br />
        Your finger is currently on the leftmost dial. You can use it to rotate
        the dial it's on. You can also move your finger one dial to the right
        (denoted {">"}) or one dial to the left (denoted {"<"} ) You can only
        move your finger if the destination dial actually exists.
        <br />
        <br />
        You are given the int[] dials. The elements of dials are the digits
        currently shown on the dials of your lock, from the left to the right.
        <br />
        <br />
        You would like to scramble your lock into a state where all of the
        digits shown on the dials are mutually distinct. Find any sequence of at
        most 100 actions that accomplishes this goal, and return it as a
        String[].
        <br />
      </p>

      <h3 className="subTitles">Solution:</h3>
      {stringArray.length > 0 &&
        stringArray.map(({ ints, string }, i) => {
          return (
            <p className="space-x-1 text-lg" key={i}>
              {ints} : {string}
            </p>
          );
        })}
      <h3 className="subTitles">Pseudocode solution:</h3>
      <div className="bg-zinc-900 p-3 rounded-lg text-lg">
        <Solution3 />
      </div>
    </>
  );
};

export default Problem1;
