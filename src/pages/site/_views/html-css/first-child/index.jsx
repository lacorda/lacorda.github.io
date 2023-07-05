import React from 'react';
import { Button } from 'antd';
import Container from '../../../_components/container';
import Panel from '../../../_components/Panel';
import './index.scss';

const Demo = (props) => {
  return (
    <Container {...props} className="first-child-container">
      <Panel title="first-child" className="first-child-panel1">
        <div class="parent">
          <div>aa</div>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel1">
        <div class="parent">
          <p>aa</p>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel2">
        <h1>h1</h1>
        <div class="parent">
          <div>aa</div>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-child" className="first-child-panel2">
        <h1>h1</h1>
        <div class="parent">
          <p>aa</p>
          <div>bb</div>
          <div>cc</div>
          <div>dd</div>
        </div>
      </Panel>
      <Panel title="first-of-type" className="first-of-type-panel1">
        <h1>hellow world</h1>
        <div class="parent">
          <div>aa</div>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </div>
        <div>ee</div>
      </Panel>
      <Panel title="first-of-type" className="first-of-type-panel1">
        <h1>hellow world</h1>
        <p class="parent">
          <div>aa</div>
          <p>bb</p>
          <p>cc</p>
          <p>dd</p>
        </p>
        <div>ee</div>
      </Panel>
    </Container>
  )
}

export default Demo;
