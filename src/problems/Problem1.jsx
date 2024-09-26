import React, { useEffect, useState } from "react";
import Solution1 from "./solutionsPseudocode/Solution1";

const Problem1 = () => {
  const [numbers, setNumbers] = useState([]);

  const changeNumbers = () => {
    setNumbers([]);
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        setNumbers((prevNumbers) => [...prevNumbers, "Senir Op"]);
      } else if (i % 3 === 0) {
        setNumbers((prevNumbers) => [...prevNumbers, "Senir"]);
      } else if (i % 5 === 0) {
        setNumbers((prevNumbers) => [...prevNumbers, "Op"]);
      } else {
        setNumbers((prevNumbers) => [...prevNumbers, i]);
      }
    }
  };

  useEffect(() => {
    changeNumbers();
  }, []);

  return (
    <>
      <h3 className="subTitles">Problem 1 </h3>
      <p className="text-lg">
        Write a program that prints the numbers from 1 to 100. For multiples of
        three, print the word “Senir” instead of the number. For multiples of
        five, print the word “Op” instead of the number. For numbers which are
        multiples of both three and five, print “Senir Op” instead of the
        number.
      </p>

      <h3 className="subTitles">Solution:</h3>
      <ul className="my-4 gap-3 grid grid-flow-row grid-cols-4 lg:grid-flow-col lg:grid-rows-10 ">
        {numbers.length > 0 &&
          numbers.map((n, i) => {
            return (
              <li className="text-lg" key={i}>
                {n}
              </li>
            );
          })}
      </ul>
      <h3 className="subTitles">Pseudocode solution:</h3>
      <div className="bg-zinc-900 p-3 rounded-lg text-lg">
        <Solution1 />
      </div>
    </>
  );
};

export default Problem1;
