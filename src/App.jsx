import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Hedader from "./components/Header";
import Problem from "./components/Problem";

export default function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Hedader />
      <div className="min-h-screen h-fit bg-[#0f0a19] text-white px-[69px] py-[45px] flex justify-between ">
        <Problem />
        <CodeEditor />
      </div>
    </div>
  );
}
