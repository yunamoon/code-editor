const Hedader = () => {
  return (
    <div className="h-[70px] border border-b border-[#2E3243] flex justify-between items-center mr-[69px] ">
      <div className="flex  gap-[15px] items-center cursor-pointer">
        <div className="w-[66px] h-[70px] bg-[#8F00FF] flex items-center justify-center">
          <img src="/icons/menu.png" alt="Menu Icon"></img>
        </div>
        <p className="text-[#FFFFFF] font-medium">01. 첫 번째 파이썬 코드 </p>
      </div>
      <div className="w-[210px] h-[38px] border border-[#CA94F5] rounded-[20px] flex items-center justify-center">
        <p className="text-[#FFFFFF]">현재 랭킹 1위 ! OOO 학생 </p>
      </div>
    </div>
  );
};
export default Hedader;
