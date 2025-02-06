import { useState } from "react";

const Sidebar = (open) => {
  const [isOpen, setIsOpen] = useState(open);
  const data = [
    "파이썬의 첫걸음",
    "프로그래밍을 처음 배울 때 ",
    "파이썬의 세 번째 걸음",
    "파이썬의 네 번째 걸음",
  ];
  return (
    <div
      className={`w-[529px] h-[100vh] absolute left-0 -top-[70px] bg-[#181B27] transition-all duration-300 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="py-[36px] px-[15px]">
          <h1 className="text-[32px] font-medium"> 파이썬의 첫걸음</h1>
          <p className="text-[#C0C1CA] font-medium"> 1/100 문제 완료 </p>
        </div>

        <img
          onClick={() => setIsOpen(false)}
          src="/icons/close.png"
          alt="close"
          className="w-[25px] h-[25px] mr-[45px] cursor-pointer"
        ></img>
      </div>

      <div className="pl-[13px] flex flex-col gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#242735] border border-[#3F404C] rounded-[12px] w-[487px] flex items-center gap-4 px-[22px] py-[22px]"
          >
            <div className="w-[32px] h-[32px] bg-white text-black font-bold rounded-[8px] flex items-center justify-center">
              {index + 1}
            </div>
            {item}
          </div>
        ))}

        <div className="bg-[#8F00FF] border border-[#3F404C] rounded-[12px] w-[487px] flex items-center gap-4 px-[22px] py-[11px] hover:bg-[#9000ff71] cursor-pointer">
          <div className="w-[32px] h-[32px] text-white font-bold rounded-[8px] flex items-center justify-center">
            +
          </div>
          문제 출제
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
