import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import demo from '../_views/demo';
import notFound from '../_views/notFound';
import firstChild from '../_views/html-css/first-child';
import useEffectDemo from '../_views/react-hooks/useEffect';
import useCallbackDemo from '../_views/react-hooks/useCallback';
import useMemoDemo from '../_views/react-hooks/useMemo';
import element from '../_views/devtools/element';

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/tools/demo" component={demo} />
          <Route path="/html-css/first-child" component={firstChild} />
          <Route path="/react-hooks/useEffect" component={useEffectDemo} />
          <Route path="/react-hooks/useCallback" component={useCallbackDemo} />
          <Route path="/react-hooks/useMemo" component={useMemoDemo} />
          <Route path="/devtools/element" component={element} />
          <Route path="*" component={notFound} />
        </Switch>
      </HashRouter>
    )
  }
}
