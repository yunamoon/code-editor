const Problem = () => {
  return (
    <div className="w-[46%]   flex flex-col gap-4">
      <div className="w-[130px] text-[#CA94F5] border border-[#CA94F5] py-2 px-3 rounded-[22px] ">
        <p className=" text-center">컴파일 문제</p>
      </div>

      <div>
        <h1 className="font-bold text-[36px] mb-[18px]">
          파이썬의 첫걸음: 출력문 사용하기
        </h1>
        <p className="text-[#DEDEE2]">
          프로그래밍을 처음 배울 때 가장 먼저 접하는 것은 컴퓨터에게 원하는
          내용을 전달하는 방법입니다. 파이썬에서는 print() 함수를 사용하여
          화면에 원하는 문장을 출력할 수 있습니다. 이를 통해 사용자는 프로그램이
          어떻게 동작하는지 직접 확인할 수 있으며, 디버깅 과정에서도 유용하게
          활용됩니다. 이번 문제에서는 print() 함수를 사용하여 특정한 문장을
          출력하는 프로그램을 작성해야 합니다. 기본적인 문법을 익히고, 코드를
          실행하여 원하는 결과가 화면에 나타나는지를 확인하는 것이 목표입니다.
          프로그래밍의 첫 단추를 끼우는 과정에서, 작은 성공의 경험을 통해
          자신감을 얻어보세요!
        </p>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-[28px] mb-[18px]">입출력 조건</h1>
        <p className="text-[#DEDEE2]">
          ● 입력: 입력은 없습니다. <br />● 출력: 화면에 출력할 특정 문장이
          주어집니다. 예를 들어, "Hello, World!"와 같은 문장을 출력해야 합니다.
        </p>
      </div>
    </div>
  );
};

export default Problem;
