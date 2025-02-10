import { useEffect, useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Hedader from "./components/Header";
import Problem from "./components/Problem";
import Sidebar from "./components/Sidebar";
import SubmitForm from "./components/SubmitForm";
import QnAList from "./components/QnAList";
import { MOCKUP_DATA } from "./mock";
export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [slected, setSelected] = useState(1);
  const [isForm, setIsForm] = useState(false);
  const [isQna, setIsQna] = useState(false);
  const data = MOCKUP_DATA;

  const selectProblem = (id) => {
    setSelected(id);
  };

  return (
    <div className="w-screen h-screen bg-black">
      <Hedader isOpen={isOpen} setIsOpen={setIsOpen} data={data[slected - 1]} />
      <div className="min-h-screen h-fit bg-[#0f0a19] text-white px-[69px] py-[45px] flex justify-between relative ">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectProblem={selectProblem}
          isForm={isForm}
          setIsForm={setIsForm}
        />
        <Problem data={data[slected - 1]} isQna={isQna} setIsQna={setIsQna} />
        <QnAList data={data[slected - 1]} isQna={isQna} setIsQna={setIsQna} />
        <CodeEditor />
      </div>

      <SubmitForm isForm={isForm} setIsForm={setIsForm} />
    </div>
  );
}
