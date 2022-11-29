import React, { forwardRef, useState, useImperativeHandle } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { MONACO_EDITOR_CONFIG } from './config.js';

const Editor = (props, ref) => {
  const { value } = props;

  const [editor, setEditor] = useState({});

  useImperativeHandle(ref, () => (editor));

  const editorDidMount = (e, m) => {
    e.focus();
    setEditor({
      editor: e,
      monaco: m
    })
  }

  return (
    <BrowserOnly>
      {() => {
        const MonacoEditor = require('@monaco-editor/react').default;

        return (
          <MonacoEditor
            ref={ref}
            {...MONACO_EDITOR_CONFIG}
            value={value}
            editorDidMount={editorDidMount}
          />
        )
      }}
    </BrowserOnly>
  )
}
export default forwardRef(Editor);