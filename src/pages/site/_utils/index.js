export const genBem = (block, ele, modify) => {
  let bem = `${block}`
  if (ele) {
    bem += `__${ele}`;
  }
  if (modify) {
    bem += `--${modify}`;
  }
  return bem;
}

export function observerTheme(cb) {
  const $html = document.documentElement;

  cb && cb($html.dataset.theme);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      cb && cb($html.dataset.theme);
    })
  })

  observer.observe($html, {
    attributes: true,
  })

  observer.destroy = () => {
    observer.disconnect();
  }

  return observer;
}