import React from 'react';
import Panel from '../../../_components/Panel';
import './index.scss';

const Demo = () => {
  return (
    <div className="first-child-container">
      <Panel title="first-child" className="first-child-panel1">
        <div className="parent">
          <div>aa</div>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel1">
        <div className="parent">
          <p>aa</p>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel2">
        <h1>h1</h1>
        <div className="parent">
          <div>aa</div>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel2">
        <h1>h1</h1>
        <div className="parent">
          <p>aa</p>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-of-type" className="first-of-type-panel1">
        <h1>hellow world</h1>
        <div className="parent">
          <div>aa</div>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </div>
        <div>ee</div>
      </Panel>
      <Panel title="first-of-type" className="first-of-type-panel1">
        <h1>hellow world</h1>
        <div className="parent">
          <span>aa</span>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </div>
        <div>ee</div>
      </Panel>
    </div>
  )
}

export default Demo;
