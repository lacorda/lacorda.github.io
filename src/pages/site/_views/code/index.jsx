import React, { useState, useEffect, createRef } from 'react';
// import MonacoEditor from 'react-monaco-editor';
// import MonacoEditor from '../../../../theme/MonacoEditor';
// import customComponents from '@theme/components';
import { Button, message } from 'antd';
import {
  genBem,
  // observerTheme
} from '../../_utils';
// import MONACO_EDITOR_CONFIG, { DEFAULT_CODE } from './config.js'
// import BrowserOnly from '@docusaurus/BrowserOnly';

import './index.scss';

// const { MonacoEditor } = customComponents

// console.log('🍉  MonacoEditor', customComponents.MonacoEditor);
const Code = () => {
  const prefixCls = 'pager-code';
  const bem = (e, m) => { return genBem(prefixCls, e, m) };

  const [code, setCode] = useState('')

  // let observer = null;
  const editorRef = createRef();
  // const $container = document.getElementById('__docusaurus');

  // useEffect(() => {
  //   // 修改编辑器主题
  //   observer = observerTheme((theme) => {
  //     editorRef.current.monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
  //   });

  //   $container.style.height = '100%';
  // }, [])

  // useEffect(() => {
  //   return () => {
  //     observer.destroy();
  //     $container.style.height = '';
  //   }
  // }, [])

  const doIt = () => {
    try {
      const val = editorRef.current.editor.getValue();
      setCode(eval(val));
    } catch (error) {
      message.error(error?.message);
    }
  }

  return (
    <div className={bem()}>
      <div className={bem('code')}>
        <div className={bem('editor')}>
          {/* <MonacoEditor
            ref={editorRef}
          /> */}
        </div>
      </div>
      <div className={bem('doit')}>
        <Button type="primary" size="sm" onClick={doIt}>运行 &gt;</Button>
      </div>
      <div className={bem('previewer')}>
        <div className={bem('header')}>结果</div>
        {code}
      </div>
    </div>
  )
}

export default Code;