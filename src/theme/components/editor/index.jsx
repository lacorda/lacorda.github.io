import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Tabs } from 'antd';
import themeConfig from './theme'
import { genBem } from '@site/src/pages/_utils';
import { isObject, isArray } from '@site/src/pages/_utils/tools';
import { MONACO_EDITOR_CONFIG } from './config'

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

    // editor.addAction({
    //   // An unique identifier of the contributed action.
    //   id: 'my-unique-id',

    //   // A label of the action that will be presented to the user.
    //   label: 'My Label!!!',

    //   // An optional array of keybindings for the action.
    //   keybindings: [  // 快捷键
    //     monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyU,  // 组合键
    //     // chord
    //     monaco.KeyMod.chord(  // 分步组合键
    //       monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyI,
    //       monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO
    //     )
    //   ],

    //   // A precondition for this action.
    //   precondition: null,  // 前提

    //   // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
    //   keybindingContext: null,

    //   contextMenuGroupId: 'navigation',

    //   contextMenuOrder: 1.5,

    //   // Method that will be executed when the action is triggered.
    //   // @param editor The editor instance is passed in as a convenience
    //   run: function (ed) {  // 触发时执行
    //     alert("i'm running => " + ed.getPosition());
    //   }
    // });



    // editor.addCommand(monaco.KeyCode.F9, function () {
    //   alert('Tab pressed!');
    // });


    // var contentWidget = {
    //   allowEditorOverflow: true,
    //   getId: function () {
    //     return 'my.content.widget';
    //   },
    //   getDomNode: function () {
    //     if (!this.domNode) {
    //       this.domNode = document.createElement('div');
    //       this.domNode.innerHTML = 'Content Widget';
    //       this.domNode.style.background = 'red';
    //       this.domNode.style.whiteSpace = 'nowrap';
    //       // this.domNode.style.left = '0px'; // 无效
    //     }
    //     return this.domNode;
    //   },
    //   getPosition: function () {
    //     return {
    //       position: {  // 必须
    //         lineNumber: 6,
    //         column: 3
    //       },
    //       preference: [
    //         // monaco.editor.ContentWidgetPositionPreference.ABOVE,
    //         monaco.editor.ContentWidgetPositionPreference.BELOW,
    //         monaco.editor.ContentWidgetPositionPreference.EXACT
    //       ]
    //     };
    //   }
    // };
    // editor.addContentWidget(contentWidget);


    // var overlayWidget = {
    //   domNode: null,
    //   getId: function () {
    //     return 'my.overlay.widget';
    //   },
    //   getDomNode: function () {
    //     if (!this.domNode) {
    //       this.domNode = document.createElement('div');
    //       this.domNode.innerHTML = 'overlay widget';
    //       this.domNode.style.background = 'grey';
    //       this.domNode.style.left = '0px';
    //       this.domNode.style.top = '10px';
    //     }
    //     return this.domNode;
    //   },
    //   getPosition: function () {
    //     return null;
    //   }
    // };
    // editor.addOverlayWidget(overlayWidget);



    // const $rootEl = document.querySelector('#__docusaurus');
    // editor.applyFontInfo($rootEl);



    // var viewZoneId = null;
    // var domNode1 = null;
    // editor.changeViewZones(function (changeAccessor) {
    //   domNode1 = document.createElement('div');
    //   domNode1.id = 'viewzone-1';
    //   domNode1.style.background = 'lightgreen';
    //   // domNode.style.left = '20px';
    //   // domNode.style.top = '20px';  // 无效
    //   viewZoneId = changeAccessor.addZone({
    //     afterColumn: 2,
    //     afterLineNumber: 2,
    //     heightInLines: 6,
    //     domNode: domNode1
    //   });
    // });

    // var viewZoneId2 = null;
    // editor.changeViewZones(function (changeAccessor) {
    //   var domNode = document.createElement('div');
    //   domNode.id = 'viewzone-2';
    //   domNode.style.background = 'red';
    //   // domNode.style.left = '20px';
    //   // domNode.style.top = '20px';  // 无效
    //   viewZoneId2 = changeAccessor.addZone({
    //     afterColumn: 2,
    //     afterLineNumber: 2,
    //     heightInLines: 5,
    //     marginDomNode: domNode1,
    //     domNode: domNode
    //   });
    // });




    // var myCondition1 = editor.createContextKey(/*key name*/ 'myCondition1', /*default value*/ false);
    // var myCondition2 = editor.createContextKey(/*key name*/ 'myCondition2', /*default value*/ false);

    // editor.addCommand(
    //   monaco.KeyCode.Tab,
    //   function () {
    //     // services available in `ctx`
    //     alert('my command is executing!');
    //   },
    //   'myCondition1 && myCondition2'
    // );

    // myCondition1.set(true);

    // setTimeout(function () {
    //   alert('now enabling also myCondition2, try pressing Tab!');
    //   myCondition2.set(true);
    //   // you can use myCondition2.reset() to go back to the default
    // }, 2000);



    // const commandId = editor.addCommand(monaco.KeyCode.F9, function () {
    //   alert('F9 pressed!');
    // });


    const action = {
      id: 'test',
      label: 'test',
      precondition: 'isChrome == true',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyL],
      run: () => {
        window.alert('chrome: cmd + k');
      },
    };

    const actionDispose = editor.addAction(action);

    console.log('🍉  actionDispose', actionDispose);
    console.log('🍉  getAction', editor.getAction(action.id));


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
                options={{
                  ...MONACO_EDITOR_CONFIG.options,
                  readOnly
                }}
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