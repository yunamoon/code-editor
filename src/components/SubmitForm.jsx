import { FaTimes } from "react-icons/fa";

const SubmitForm = ({ isForm, setIsForm }) => {
  return (
    <div
      className={`${
        isForm
          ? "fixed inset-0  z-50 flex justify-center items-center "
          : "hidden"
      }`}
    >
      <div className="w-[40%] h-[80%] rounded-[10px]  border border-[#3F404C] bg-[#181B27] py-10 px-8 relative ">
        <FaTimes
          onClick={() => setIsForm(!isForm)}
          className="text-white absolute right-8 text-[30px] cursor-pointer"
        />
        <h1 className="text-white font-bold text-[28px] ">새로운 문제 출제</h1>
        <p className="text-[#DEDEE2] text-[14px] font-light">
          * 문제 출제는 해당 학습 공간의 교사만 접근하실 수 있습니다.
        </p>

        <div className="mt-10 flex  flex-col gap-6 h-[75%] overflow-y-scroll">
          <div>
            <p className="text-[#DEDEE2] text-[20px]">제목</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>
          <div>
            <p className="text-[#DEDEE2] text-[20px]">상세 내용</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>

          <div>
            <p className="text-[#DEDEE2] text-[20px]">입력 조건</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>

          <div>
            <p className="text-[#DEDEE2] text-[20px]">출력 조건</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>

          <div>
            <p className="text-[#DEDEE2] text-[20px]">입출력 예시</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>

          <div>
            <p className="text-[#DEDEE2] text-[20px]">모범 답안</p>
            <input
              type="text"
              className="w-[100%] h-[35px] mt-2 rounded-[10px] bg-[#242735] focus:outline-none focus:border-[#3F404C] focus:ring-1 focus:ring-[#3F404C] text-white p-5"
            />
          </div>
        </div>

        <button className="bg-[#8F00FF]  text-white  w-full h-[45px] rounded-[10px] mt-3 text-[18px] hover:bg-[#9000ff71] cursor-pointer">
          출제
        </button>
      </div>
    </div>
  );
};

export default SubmitForm;
