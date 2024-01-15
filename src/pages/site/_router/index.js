import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import routes from './router.config';

import Container from '../_components/container';

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    debugger;
    return (
      <HashRouter>
        <Switch>
          {
            routes.map(route => {
              const { path, Component, ...rest } = route;
              console.log('🍄  ', path, Component, rest);
              debugger;
              return (
                <Route
                  key={path}
                  path={path}
                  component={(props) => <Container {...props} {...rest}><Component /></Container>}
                />
              )
            })
          }
        </Switch>
      </HashRouter>
    )
  }
}
