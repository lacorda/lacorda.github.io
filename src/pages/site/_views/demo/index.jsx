import React, { useEffect } from 'react';
import Container from '../../_components/container';

const Demo = (props) => {
  useEffect(() => {
    // 1. 使用 chrome.runtime.sendMessage 向 background 发送消息

    // const extensionsID = 'jnihndfplbfcecocnehfaammdlikkkcl';
    // console.log('🍄  webpage: >>>>>>>>>>>>>>>>>> 页面发送消息', Date.now());
    // chrome.runtime.sendMessage(extensionsID, { type: 'test', from: 'webpage' }, (response) => {
    //   // if (!response.success)
    //   //   handleError(url);
    //   console.log('🍄  webpage: >>>>>>>>>>>>>>>>>> 页面接收消息', Date.now(), response);
    // });

    // 2. 使用 window.postMessage 向 content 发送消息，使用延时，避免content未加载完成收不到消息
    setTimeout(() => {
      console.log('🍄  webpage: >>>>>>>>>>>>>>>>>> 页面发送消息', Date.now());
      window.postMessage({ type: 'test', data: { from: 'webpage' } }, '*');
    }, 300);
  }, [])

  return (
    <Container {...props}>
      <div>demo123</div>
    </Container>
  )
}

export default Demo;