import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants.js";

const CodeEditor = () => {
  const editorRef = useRef();
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
    <div className="text-white w-[45%]">
      <LanguageSelector language={language} onSelector={onSelector} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue="// 공도 공부방에 오신 여러분을 환영합니다!"
        value={value}
        onMount={onMount}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default CodeEditor;
