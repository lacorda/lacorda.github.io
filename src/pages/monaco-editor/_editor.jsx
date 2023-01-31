import React, { useRef, useEffect, useState } from "react";
import * as monaco from "monaco-editor";
import { codeText } from "./_constants";

const Editor = () => {
  const domRef = useRef(null);
  const [actionDispose, setActionDispose] = useState();

  useEffect(() => {
    const editorIns = monaco.editor.create(domRef.current, {
      value: codeText,
      language: "typescript",
      theme: "vs-dark",
    });
    const action = {
      id: 'test',
      label: 'test',
      precondition: 'isChrome == true',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyL],
      run: () => {
        window.alert('chrome: cmd + k');
      },
    };

    setActionDispose(editorIns.addAction(action));
    editorIns.focus();

    return () => {
      editorIns.dispose();
    };
  }, []);

  const onClick = () => {
    actionDispose?.dispose();
    window.alert('已卸载');
  };

  return (
    <div>
      <button className='cancel-button' onClick={onClick}>卸载keybinding</button>
      <div ref={domRef} className='editor-container' style={{ height: '100vh' }} />
    </div>
  );
};

export default Editor;