export const MONACO_EDITOR_CONFIG = {
  language: 'javascript',
  value: '',
  options: {
    // language: 'sql', // 语言支持自行查阅demo
    automaticLayout: true, // 自动布局,resize
    foldingStrategy: 'indentation', // 代码可分小段折叠
    autoClosingBrackets: 'always', // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
    autoClosingDelete: 'always', // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
    autoClosingQuotes: 'always', // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
    // autoIndent: 'None', // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
    comments: {
      ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
      insertSpace: true // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
    }, // 注释配置
    //
    // cursorBlinking: 'Solid', // 光标动画样式
    // cursorSmoothCaretAnimation: true, // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
    // cursorSurroundingLines: 0, // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
    // cursorSurroundingLinesStyle: 'all', // "default" | "all" 光标环绕样式
    // cursorWidth: 2, // <=25 光标宽度
    minimap: { // 关闭代码缩略图
      enabled: false // 是否启用预览图
    },
    // overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
    folding: true, // 是否启用代码折叠
    // scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
    // renderLineHighlight: 'all', // 当前行突出显示方式  "all" | "line" | "none" | "gutter"
    // theme: 'vs' // 官方自带三种主题vs, hc-black, or vs-dark
  },
}

export const DEFAULT_CODE = `// code
function sum(a, b) {
  return a + b;
}

sum(1, 2);
`;

export default MONACO_EDITOR_CONFIG;