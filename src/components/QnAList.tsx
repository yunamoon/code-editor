import React from "react";
import { FaGreaterThan } from "react-icons/fa";

export default function QnAList({ data, isQna, setIsQna }) {
  const mockData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `제목입니다. ${index + 1}`,
    author: "문유나",
    date: "2025.02.10",
    count: Math.floor(Math.random() * 10) + 1, // 1~10 랜덤 숫자
  }));

  return (
    <div className={`${isQna ? "" : "hidden"}`}>
      <div className="w-[130px] text-[#CA94F5] border border-[#CA94F5] py-2 px-3 rounded-[22px] ">
        <p className=" text-center">파이썬</p>
      </div>

      <div>
        <h1 className="font-bold text-[36px] mb-[18px] flex items-end gap-5 mt-4">
          {data.title} Q&A
          <button
            onClick={() => setIsQna(!isQna)}
            className="text-[16px] flex items-center gap-1 font-light mb-2 cursor-pointer hover:text-[#CA94F5] "
          >
            문제 보러 가기 <FaGreaterThan />
          </button>
        </h1>
      </div>

      <table className="w-[850px] ">
        <thead className="border ">
          <tr>
            <th className="w-[50px] border-l border">번호</th>
            <th className="w-[350px] border-l border">제목</th>
            <th className="w-[150px] border-l border">작성자</th>
            <th className="w-[200px] border-l border">작성일자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody className="border ">
          {mockData.map((item, index) => (
            <tr key={index}>
              <td className="w-[50px] text-center border-l border ">
                {item.id}
              </td>
              <td className="w-[350px] border-l border text-center">
                {item.title}
              </td>
              <td className="w-[150px] border-l border text-center">
                {item.author}
              </td>
              <td className="w-[200px] border-l border text-center">
                {item.date}
              </td>

              <td className="w-[100px] text-center border">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
