import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants.js";
import CodeOutput from "./CodeOutput.jsx";
const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState(CODE_SNIPPETS["python"]);
  const [language, setLaguage] = useState("python");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelector = (language) => {
    setLaguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="text-white w-[50%] flex flex-col gap-[20px]">
      <div>
        <LanguageSelector language={language} onSelector={onSelector} />
        <Editor
          height="40vh"
          theme="vs-dark"
          language={language}
          defaultValue="// 공도 공부방에 오신 여러분을 환영합니다!"
          value={value}
          onMount={onMount}
          onChange={(value) => setValue(value)}
        />{" "}
      </div>
      {editorRef && <CodeOutput editorRef={editorRef} language={language} />}
    </div>
  );
};

export default CodeEditor;
