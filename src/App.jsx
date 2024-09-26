import { Problem1, Problem2, Problem3 } from "./problems/";
import SeniropLogo from "./assets/SeniropLogo.png";
import { useState } from "react";

function App() {
  const [problem, setProblem] = useState("problem1");

  return (
    <>
      <div className="w-11/12 md:w-7/12 flex justify-center items-center flex-col m-auto p-6">
        <img src={SeniropLogo} className="w-28" alt="cart icon" />
        <h1 className="text-3xl my-6 font-bold">
          Prueba Técnica - Daniel Burbano - Senirop
        </h1>
        <div className="w-full flex flex-row justify-between">
          <h2
            className={`${
              problem == "problem1" ? "textFocus" : "text-lg sm:text-xl"
            } textHeader`}
            onClick={() => setProblem("problem1")}
          >
            Problem 1
          </h2>
          <span className="text-2xl">|</span>
          <h2
            className={`${
              problem == "problem2" ? "textFocus" : "text-lg sm:text-xl"
            } textHeader`}
            onClick={() => setProblem("problem2")}
          >
            Problem 2
          </h2>
          <span className="text-2xl">|</span>
          <h2
            className={`${
              problem == "problem3" ? "textFocus" : "text-xl"
            } textHeader`}
            onClick={() => setProblem("problem3")}
          >
            Problem 3
          </h2>
        </div>
        <div className="my-6">
          {problem == "problem1" && <Problem1 />}
          {problem == "problem2" && <Problem2 />}
          {problem == "problem3" && <Problem3 />}
        </div>
      </div>
    </>
  );
}

export default App;
