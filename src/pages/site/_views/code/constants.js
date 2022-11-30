export const DEFAULT_CODE = `// code
function sum(a, b) {
  return a + b;
}

sum(1, 2);
`;

export const DEFAULT_CSS = `body {

}`;

export const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;

export const FILES = [
  {
    name: "script.js",
    language: "javascript",
    value: DEFAULT_CODE,
  },
  {
    name: "style.scss",
    language: "scss",
    value: DEFAULT_CSS,
    readOnly: true,
  },
  {
    name: "index.html",
    language: "html",
    value: DEFAULT_HTML,
    readOnly: true,
  },
]