import { MOCKUP_DATA } from "../mock";
const Sidebar = ({ isOpen, setIsOpen, selectProblem, isForm, setIsForm }) => {
  const data = MOCKUP_DATA;
  return (
    <div
      className={`w-[529px] h-[100vh] absolute left-0 -top-[70px] bg-[#181B27] transition-all duration-300 ${
        !isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="py-[36px] px-[15px]">
          <h1 className="text-[32px] font-medium"> 파이썬의 첫걸음</h1>
          <p className="text-[#C0C1CA] font-medium">
            1/{data.length} 문제 완료{" "}
          </p>
        </div>

        <img
          onClick={() => setIsOpen(!isOpen)}
          src="/icons/close.png"
          alt="close"
          className="w-[25px] h-[25px] mr-[45px] cursor-pointer"
        ></img>
      </div>

      <div className="pl-[13px] flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-h-[600px] h-fit overflow-y-scroll">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                selectProblem(item.id), setIsOpen(!isOpen);
              }}
              className="bg-[#242735] border border-[#3F404C] rounded-[12px] w-[487px] flex items-center gap-4 px-[22px] py-[22px] cursor-pointer hover:bg-[#353845]"
            >
              <div className="w-[32px] h-[32px] bg-white text-black font-bold rounded-[8px] flex items-center justify-center">
                {item.id}
              </div>
              {item.title}
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setIsForm(!isForm), setIsOpen(!isOpen);
          }}
          className="bg-[#8F00FF] border border-[#3F404C] rounded-[12px] w-[487px] flex items-center gap-4 px-[22px] py-[11px] hover:bg-[#9000ff71] cursor-pointer"
        >
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
