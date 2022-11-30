import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from 'antd';
import { MONACO_EDITOR_CONFIG } from './config';
import themeConfig from './theme'
import { genBem } from '@site/src/pages/site/_utils';
import { isObject, isArray } from '@site/src/pages/site/_utils/tools';

import './index.scss';

const Editor = (props, ref) => {
  const {
    theme,
    files,
    onChange,
    onMount,
    beforeMount,
  } = props;

  const prefixCls = 'editor-component';
  const bem = (e, m) => { return genBem(prefixCls, e, m) };

  const [reactEditor, setEditor] = useState({});

  if (!files || (!isObject(files) && (!isArray(files) || !files.length))) {
    console.error('files无效')
    return null;
  }

  const filesSet = isArray(files) ? files : [files];

  const [file, setFile] = useState({});

  useImperativeHandle(ref, () => (reactEditor));

  useEffect(() => {
    setFile(filesSet[0]);
  }, [])

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

  const renderHeader = () => {
    return (
      <div className={bem('header')}>
        {
          files.map(file => {
            return (
              <Button key={file.name} size="sm" onClick={() => { setFile(file) }}>{file.name}</Button>
            )
          })
        }
      </div>
    )
  }

  const { name: path, language, value, readOnly } = file;

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
          <div className={bem()}>
            {isArray(files) && renderHeader()}
            <div className={bem('code')}>
              <MonacoEditor
                {...MONACO_EDITOR_CONFIG}
                theme={theme}
                path={path}
                language={language}
                defaultValue={value}
                options={{ readOnly }}
                onChange={handleChange}
                onMount={handleDidMount}
                beforeMount={handleWillMount}
                onValidate={handleValidation}
              />
            </div>
          </div>
        )
      }}
    </BrowserOnly>
  )
}
export default forwardRef(Editor);