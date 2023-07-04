import React from 'react';
import { Button } from 'antd';
import Container from '../../../_components/container';
import Panel from '../../../_components/Panel';
import './index.scss';

const Demo = (props) => {
  const changeDom = (e) => {
    const child = e.target.childNodes[1];
    if (child) {
      // child.parentNode.removeChild(child);  // 直接删除不会被触发
      child.innerHTML += ' - abc';
    } else {
      alert('请点击外层父元素')
    }
  }

  const handleConsole = (type) => {
    switch (type) {
      case 'log':
        console.log('普通信息');
        break;
      case 'log-css':
        console.log("%c 使用CSS美化输出信息", "color: red; font-size: x-large");
        break;
      case 'log-beauty':
        console.log("字符串的替换和格式化 - Node count: %d, and the time is %f.", document.childNodes.length, Date.now());
        break;
      case 'log-dom':
        console.log("%o 返回DOM元素", document.body.firstElementChild);
        console.log("%O 返回DOM树", document.body.firstElementChild);
        break;
      case 'info':
        console.info("info");
        break;
      case 'warn':
        console.warn("warn!");
        break;
      case 'error':
        console.error("error!!!");
        break;
      case 'assert':
        const x = 5;
        const y = 3;
        const reason = '5大于3';
        console.assert(x < y, { x, y, reason });
        break;
      case 'clear':
        console.clear();
        break;
      case 'debug':
        console.debug('debug');
        break;

      default:
        break;
    }
  }

  return (
    <Container {...props} className="element-container">
      <Panel title="布局" isFlex>
        <Panel title="Grid">
          <div className="grid-panel">
            <div className="item item-1">1</div>
            <div className="item item-2">2</div>
            <div className="item item-3">3</div>
            <div className="item item-4">4</div>
            <div className="item item-5">5</div>
            <div className="item item-6">6</div>
            <div className="item item-7">7</div>
            <div className="item item-8">8</div>
            <div className="item item-9">9</div>
          </div>
        </Panel>
        <Panel title="Flex" extra="点击" onExtra={() => { alert('click extra') }}>
          <div className="flex-panel">
            <div className="item item-1">1</div>
            <div className="item item-2">2</div>
            <div className="item item-3">3</div>
          </div>
        </Panel>
      </Panel>
      {/* <Panel title="DOM断点" className="dom-breakpoint-panel">
        <div className='item item-1' onClick={changeDom}>
          点击修改子元素
          <div className='item item-2'>childrens</div>
        </div>
      </Panel> */}
      <Panel title="Console API" className="console-api-panel">
        <Button onClick={() => { handleConsole('log'); }}>console.log</Button>
        <Button onClick={() => { handleConsole('log-css'); }}>使用CSS美化输出信息</Button>
        <Button onClick={() => { handleConsole('log-beauty'); }}>字符串的替换和格式化</Button>
        <Button onClick={() => { handleConsole('log-dom'); }}>返回DOM元素/DOM元素格式化</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('info'); }}>console.info</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('warn'); }}>console.warn</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('debug'); }}>console.debug</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('error'); }}>console.error</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('assert'); }}>console.assert</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('table'); }}>console.table</Button>
        <br />
        <br />
        <Button onClick={() => { handleConsole('clear'); }}>console.clear</Button>
      </Panel>
    </Container>
  )
}

export default Demo;