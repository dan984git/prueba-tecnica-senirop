import React, { useEffect, useState } from "react";
import Solution2 from "./solutionsPseudocode/Solution2";

const Problem1 = () => {
  const arrayString = ["cocoa", "daddy", "abcdefgh"];
  const [stringArray, setStringArray] = useState([]);

  useEffect(() => {
    setStringArray([]);
    arrayString.forEach((S) => {
      solve(S);
    });
  }, []);

  const solve = (S) => {
    let numOperations = 0;
    const letters = /^[a-z]+$/;
    if (!letters.test(S)) {
      setStringArray((prevStringArray) => [
        ...prevStringArray,
        {
          string: S,
          operations: "String must contain only letters and be in lower case",
        },
      ]);
      return;
    }
    if (S.length < 1 && S.length > 2500) {
      setStringArray((prevStringArray) => [
        ...prevStringArray,
        {
          string: S,
          operations: "String must be greater than 1 and lower 2500 characters",
        },
      ]);
      return;
    }
    const isNearPalindrome = validateNearPalindrome(S);

    if (!isNearPalindrome) {
      const getOperations = (substring1, substring2) => {
        let operationsResults = [];
        let dist = 0;
        numOperations = 0;
        for (let i = 0; i < substring2.length; i++) {
          dist = Math.abs(
            substring1[i].charCodeAt(0) - substring2[i].charCodeAt(0)
          );
          operationsResults.push(Math.min(dist, 26 - dist));
        }
        return Math.max(...operationsResults);
      };

      let n = S.length;

      const start = S.substring(0, Math.floor(n / 2));
      const end = S.substring(n - Math.floor(n / 2));
      numOperations = getOperations(start, end);
    }
    setStringArray((prevStringArray) => [
      ...prevStringArray,
      {
        string: S,
        operations: numOperations,
      },
    ]);
  };

  function validateNearPalindrome(S) {
    let oddCount = 0;
    let frequencyMap = {};

    for (let char of S) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    for (let char in frequencyMap) {
      if (frequencyMap[char] % 2 !== 0) {
        oddCount++;
      }
    }

    return oddCount <= 1;
  }

  return (
    <>
      <h3 className="subTitles">Problem 2 </h3>
      <p className="text-lg">
        A string is called a palindrome if it reads the same forwards and
        backwards. E.g., "a", "noon" and "tacocat" are palindromes but "cocoa"
        isn't. <br /> A string is called a near-palindrome if we can rearrange
        its characters to make it a palindrome. For example, "aaa", "cocoa" and
        "xxyyzz" are near-palindromes but "abc" isn't.
        <br />
        <br />
        You are given a String S of lowercase English letters. You are allowed
        to perform a sequence of operations. In each operation you can choose an
        index into S and either increment or decrement the character at that
        index. (Incrementing 'a' turns it into 'b', incrementing 'b' gives 'c',
        ..., and if we increment 'z' we get 'a' again. Decrementing is the
        inverse operation.)
        <br />
        <br />
        Determine and return the smallest number of operations needed to turn S
        into a near-palindrome.
      </p>

      <h3 className="subTitles">Solution:</h3>
      {stringArray.length > 0 &&
        stringArray.map(({ string, operations }, i) => {
          return (
            <p className="text-lg" key={i}>
              {string} : {operations}
            </p>
          );
        })}
      <h3 className="subTitles">Pseudocode solution:</h3>
      <div className="bg-zinc-900 p-3 rounded-lg text-lg">
        <Solution2 />
      </div>
    </>
  );
};

export default Problem1;
