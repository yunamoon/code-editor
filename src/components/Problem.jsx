import { FaArrowRight } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Problem = ({ data, isQna, setIsQna }) => {
  return (
    <div className={`${isQna ? "hidden" : "w-[46%]   flex flex-col gap-4"}`}>
      <div className="w-[130px] text-[#CA94F5] border border-[#CA94F5] py-2 px-3 rounded-[22px] ">
        <p className=" text-center">파이썬</p>
      </div>

      <div>
        <h1 className="font-bold text-[36px] mb-[18px] flex items-end gap-5">
          {data.title}
          <button
            onClick={() => setIsQna(!isQna)}
            className="text-[16px] flex items-center gap-1 font-light mb-2 cursor-pointer hover:text-[#CA94F5] "
          >
            Q&A <FaGreaterThan />
          </button>
        </h1>
        <p className="text-[#DEDEE2]">{data.description}</p>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-[28px] mb-[18px]">입출력 조건</h1>
        <p className="text-[#DEDEE2]">
          ● 입력: {data.input}
          <br />● 출력: {data.output}
        </p>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-[28px] mb-[18px]">입출력 예시</h1>
        <div className="flex gap-12 items-center">
          <div className="bg-[#242735] border border-[#3F404C] h-[200px] w-1/2 rounded-[10px] flex items-center justify-center">
            <p className="text-[#DEDEE2] text-[20px]">{data.example_input}</p>
          </div>
          <FaArrowRight className="text-[35px] text-[#adadb0]" />
          <div className="bg-[#242735] border border-[#3F404C] h-[200px] w-1/2 rounded-[10px] flex items-center justify-center">
            <p className="text-[#DEDEE2] text-[20px]">{data.example_output}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
