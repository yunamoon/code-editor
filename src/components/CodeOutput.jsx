import { useState } from "react";
import { executeCode } from "../../api.js";
import LoadingSpinner from "./LoadingSpinner.jsx";
const CodeOutput = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="text-white w-full">
      <div className="flex gap-[10px]">
        <button
          onClick={runCode}
          className="
        w-[104px] flex justify-center border border-[#c994f58f] text-white bg-[#8F00FF] py-2 px-4 rounded-[5px]  mb-5  gap-2 hover:bg-[#c994f534]  cursor-pointer"
        >
          {isLoading ? <LoadingSpinner height={60} /> : "실행"}
        </button>
        <button
          onClick={runCode}
          className="
        w-[104px] border border-[#292C3A] text-white bg-[#1F2230] py-2 px-4 rounded-[5px]  mb-5  gap-2 hover:bg-[#1f223037]   cursor-pointer"
        >
          제출
        </button>{" "}
      </div>
      <div className="h-[30vh] bg-[#0f0a19] border border-gray-700 rounded-[10px] p-5 text-[#DEDEE2]">
        {output
          ? output.map((line, i) => (
              <p
                className={`${isError ? "text-red-700" : "text-white"}`}
                key={i}
              >
                {line}
              </p>
            ))
          : "실행 버튼을 누르시면 여기에 결과가 추가됩니다."}
      </div>
    </div>
  );
};

export default CodeOutput;
