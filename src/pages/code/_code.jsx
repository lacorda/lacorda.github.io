import React, { useState, useEffect, createRef } from 'react';
import { Editor } from '@theme/components';
import { Button, message } from 'antd';
import { genBem, observerTheme } from '@site/src/pages/_utils';
import { FILES } from './_constants.js';

import './_index.scss';

const Code = () => {
  const prefixCls = 'pager-code';
  const bem = (e, m) => { return genBem(prefixCls, e, m) };

  const editorRef = createRef();

  const [code, setCode] = useState('');
  const [theme, setTheme] = useState();

  let observer = null;
  const $container = document.getElementById('__docusaurus');

  useEffect(() => {
    // 修改编辑器主题
    observer = observerTheme((theme) => {
      setTheme(theme === 'dark' ? 'customDark' : 'xcode');
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
      const { values } = editorRef.current;
      setCode(eval(values.javascript));
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
            theme={theme}
            files={FILES}
          />
        </div>
      </div>
      <div className={bem('doit')}>
        <Button type="primary" size="sm" onClick={doIt}>运行 &gt;</Button>
      </div>
      <div className={bem('previewer')}>
        <div className={bem('header')}>Result</div>
        {code}
      </div>
    </div>
  )
}

export default Code;