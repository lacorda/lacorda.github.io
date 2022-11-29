import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { MONACO_EDITOR_CONFIG } from './config.js';
import themeConfig from './theme'

const Editor = (props, ref) => {
  const {
    value,
    theme,
    onChange,
    onMount,
    beforeMount,
  } = props;

  const [reactEditor, setEditor] = useState({});

  useImperativeHandle(ref, () => (reactEditor));

  const handleChange = (value, event) => {
    onChange && onChange(value, event);
  }

  const handleDidMount = (editor, monaco) => {
    setEditor({ editor, monaco });
    onMount && onMount({ editor, monaco })
  }

  const handleWillMount = (monaco) => {
    beforeMount && beforeMount({ monaco })
  }

  const handleValidation = (markers) => {
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <BrowserOnly>
      {() => {
        const { default: MonacoEditor, loader } = require('@monaco-editor/react');
        loader.init().then((monaco) => {
          for (const key in themeConfig) {
            monaco.editor.defineTheme(key, themeConfig[key]);
          }
        })

        return (
          <MonacoEditor
            {...MONACO_EDITOR_CONFIG}
            // defaultValue={value}
            // editorDidMount={editorDidMount}
            theme={theme}
            defaultLanguage="javascript"
            defaultValue={value}
            // loading={null}
            onChange={handleChange}
            onMount={handleDidMount}
            beforeMount={handleWillMount}
            onValidate={handleValidation}
          />
        )
      }}
    </BrowserOnly>
  )
}
export default forwardRef(Editor);