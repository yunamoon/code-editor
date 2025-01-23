import "./App.css";
import CodeEditor from "./components/CodeEditor";

export default function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="max-h-screen bg-[#0f0a19] text-gray-500 px-6 py-8 ">
        <h1 className="text-xl font-semibold mb-4">코드 에디터 프로토타입</h1>
        <CodeEditor />
      </div>
    </div>
  );
}
