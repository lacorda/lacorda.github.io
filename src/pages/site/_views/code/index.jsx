import React, { useState, useEffect, createRef, useRef } from 'react';
import { Editor } from '@theme/components';
import { Button, message } from 'antd';
import { genBem, observerTheme } from '../../_utils';
import { DEFAULT_CODE } from './constants.js';

import './index.scss';

const Code = () => {
  const prefixCls = 'pager-code';
  const bem = (e, m) => { return genBem(prefixCls, e, m) };

  const [code, setCode] = useState('');

  const editorRef = createRef();
  let observer = null;
  const $container = document.getElementById('__docusaurus');

  useEffect(() => {
    // 修改编辑器主题
    observer = observerTheme((theme) => {
      editorRef.current?.monaco?.editor?.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
    });

    $container.style.height = '100%';
  }, [])

  useEffect(() => {
    return () => {
      observer?.destroy();
      $container.style.height = '';
    }
  }, [])

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
          <Editor
            ref={editorRef}
            value={DEFAULT_CODE}
          />
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