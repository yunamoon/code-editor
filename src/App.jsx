import "./App.css";
import CodeEditor from "./components/CodeEditor";

export default function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="min-h-screen h-fit bg-[#0f0a19] text-white px-6 py-8 ">
        <h1 className="text-xl font-semibold mb-4">코드 에디터 프로토타입</h1>
        <div className="flex ">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
