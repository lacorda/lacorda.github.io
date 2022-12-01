import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Tabs } from 'antd';
import themeConfig from './theme'
import { genBem } from '@site/src/pages/_utils';
import { isObject, isArray } from '@site/src/pages/_utils/tools';

import './index.scss';

const Editor = (props, ref) => {
  const {
    theme,
    files,
    extra,
    onChange,
    onMount,
    beforeMount,
    onChangePath
  } = props;

  const prefixCls = 'editor-component';
  const bem = (e, m) => { return genBem(prefixCls, e, m) };

  const [reactEditor, setEditor] = useState({});
  const [values, setValues] = useState({});

  if (!files || (!isObject(files) && (!isArray(files) || !files.length))) {
    console.error('files无效')
    return null;
  }

  const filesSet = isArray(files) ? files : [files];

  const [file, setFile] = useState({});

  const genValues = (ed, enableChange = false) => {
    const lang = ed?.getModel()?._languageId || '';
    if (lang && (!values[lang] || enableChange)) {
      values[lang] = ed.getValue();
      setValues(values);
    }
  }

  useImperativeHandle(ref, () => ({
    ...reactEditor,
    values,
    setPath: (path) => {
      setFile(path);
    }
  }));

  useEffect(() => {
    setFile(filesSet[0]);
  }, [])

  useEffect(() => {
    genValues(reactEditor.editor);
  }, [file])

  const handleChange = (value, event) => {
    genValues(reactEditor.editor, true);
    onChange && onChange(value, event);
  }

  const handleDidMount = (editor, monaco) => {
    genValues(editor);
    setEditor({ editor, monaco });
    onMount && onMount({ editor, monaco })
  }

  const handleWillMount = (monaco) => {
    beforeMount && beforeMount({ monaco })
  }

  const handleValidation = (markers) => {
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  const handleTabClick = (key) => {
    const item = files.find(file => file.language === key);
    setFile(item);
    onChangePath && onChangePath(key);
  }

  const renderHeaderExtra = () => {
    if (!extra) return null;

    return (
      <div className={bem('header', 'extra')}>
        {extra}
      </div>
    )
  }

  const renderHeader = () => {
    const getItems = () => {
      return files.map(file => ({
        label: file.name,
        key: file.language
      }))
    }
    return (
      <div className={bem('header')}>
        <Tabs
          defaultActiveKey={files[0].language}
          items={getItems()}
          tabBarExtraContent={renderHeaderExtra()}
          onTabClick={handleTabClick}>
        </Tabs>
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
            {filesSet.length > 1 && renderHeader()}
            <div className={bem('code')}>
              <MonacoEditor
                keepCurrentModel
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