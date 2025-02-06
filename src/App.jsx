import { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Hedader from "./components/Header";
import Problem from "./components/Problem";
import Sidebar from "./components/Sidebar";
export default function App() {
  const [open, setOpen] = useState(false);
  const handleSidebaOpen = () => {
    setOpen(true);
  };
  return (
    <div className="w-screen h-screen bg-black">
      <Hedader handleSidebaOpen={handleSidebaOpen} />
      <div className="min-h-screen h-fit bg-[#0f0a19] text-white px-[69px] py-[45px] flex justify-between relative ">
        <Sidebar open={open} />
        <Problem />
        <CodeEditor />
      </div>
    </div>
  );
}
