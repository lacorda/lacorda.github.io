/**
 * 创建script
 * @param {string | object}   url       链接地址
 * @param {function}     callback  回调函数
 */
export function loadjs(params, callback) {
  if (typeof window === 'undefined') {
    return false;
  }

  const script = document.createElement('script');
  const head = document.getElementsByTagName('head')[0];

  if (Object.prototype.toString.call(params) === '[object Object]') {
    // 循环对象
    Object.entries(params).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  } else if (typeof params === 'string') {
    script.src = params;
  }

  if (typeof callback === 'function') {
    // ie 支持onreadystatechange
    script.onload = script.onreadystatechange = () => {
      if ((!script.readyState || /loaded|complete/.test(script.readyState))) {
        script.onload = script.onreadystatechange = null;
        callback();
      }
    };
  }
  head.appendChild(script);
}

/**
 * 创建css
 * @param {string}   url       链接地址
 */
export const loadcss = (url) => {
  if (window) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
  } else {
    console.warn('window is undefined');
  }
};

// 添加本地script
export const createLocalScript = (params, text) => {

  if (typeof window === 'undefined') {
    return false;
  }

  const script = document.createElement('script');
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(script);

  if (Object.prototype.toString.call(params) === '[object Object]') {
    // 循环对象
    Object.entries(params).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  } else if (typeof params === 'string') {
    script.innerHTML = params;
    return;
  }

  if (typeof text === 'string') {
    script.innerHTML = text;
  }
}

export default {
  loadjs,
  loadcss
}