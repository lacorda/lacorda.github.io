"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"/dc617db","metadata":{"permalink":"/blog/dc617db","editUrl":"https://github.com/lacorda/lacorda.github.io/blob/master/blog/blog/clashX\u4f7f\u7528.md","source":"@site/blog/clashX\u4f7f\u7528.md","title":"clashX\u4f7f\u7528","description":"clashX\u4f7f\u7528","date":"2022-08-29T02:37:52.000Z","formattedDate":"2022\u5e748\u670829\u65e5","tags":[{"label":"clashX\u4f7f\u7528","permalink":"/blog/tags/clash-x\u4f7f\u7528"}],"hasTruncateMarker":false,"authors":[{"name":"lacorda","url":"https://github.ic/lacorda","imageURL":"https://avatars.githubusercontent.com/u/15226084?v=4","key":"Rabbit"}],"frontMatter":{"authors":"Rabbit","tags":["clashX\u4f7f\u7528"],"description":"clashX\u4f7f\u7528","slug":"/dc617db"},"nextItem":{"title":"\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7","permalink":"/blog/b21e8f3"}},"content":"## \u516c\u53f8\u5185\u7f51\u65e0\u9650\u5236\u4f7f\u7528clashX\\n\\n- \u7f16\u8f91`~/.config/clash/proxyIgnoreList.plist`(\u5982\u679c\u6ca1\u6709\u8be5\u6587\u4ef6\uff0c\u5219\u65b0\u5efa)\\n- \u53c2\u8003Demo\u6587\u4ef6\u52a0\u5165\u81ea\u5b9a\u4e49\u7684\u767d\u540d\u5355\u57df\u540d\\n\\n```xml\\n<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<!DOCTYPE plist PUBLIC \\"-//Apple//DTD PLIST 1.0//EN\\" \\"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">\\n<plist version=\\"1.0\\">\\n<array>\\n\\t<string>192.168.0.0/16</string>\\n\\t<string>10.0.0.0/8</string>\\n\\t<string>172.16.0.0/12</string>\\n\\t<string>127.0.0.1</string>\\n\\t<string>localhost</string>\\n\\t<string>*.local</string>\\n\\t<string>*.crashlytics.com</string>\\n\\t\x3c!-- \u4e0a\u9762\u7684\u4e0d\u80fd\u5220\u6389 --\x3e\\n\\t\x3c!-- ...\u52a0\u5165\u65b0\u7684\u57df\u540d\uff0c\u5982\uff1a<string>*.baidu.com</string> --\x3e\\n</array>\\n</plist>\\n```\\n- \u91cd\u542fClashX"},{"id":"/b21e8f3","metadata":{"permalink":"/blog/b21e8f3","editUrl":"https://github.com/lacorda/lacorda.github.io/blob/master/blog/blog/\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7.md","source":"@site/blog/\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7.md","title":"\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7","description":"\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7","date":"2022-08-26T17:41:55.000Z","formattedDate":"2022\u5e748\u670826\u65e5","tags":[{"label":"\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7","permalink":"/blog/tags/\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7"}],"hasTruncateMarker":false,"authors":[{"name":"lacorda","url":"https://github.ic/lacorda","imageURL":"https://avatars.githubusercontent.com/u/15226084?v=4","key":"Rabbit"}],"frontMatter":{"authors":"Rabbit","tags":["\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7"],"description":"\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u7684\u5c0f\u6280\u5de7","slug":"/b21e8f3"},"prevItem":{"title":"clashX\u4f7f\u7528","permalink":"/blog/dc617db"}},"content":"## \u5feb\u6377\u6307\u4ee4\u7bc7\\n\\n### vscode\u5feb\u6377\u4ee3\u7801\u6bb5\\n\\n\u8bbe\u7f6e\u4f4d\u7f6e\uff1a\u9996\u9009\u9879 -> \u914d\u7f6e\u7528\u6237\u4ee3\u7801\u7247\u6bb5 -> \\"\u9009\u62e9\u4ee3\u7801\u7247\u6bb5\u6216\u521b\u5efa\u4ee3\u7801\u7247\u6bb5\\"\u8f93\u5165\u5feb\u6377\u6307\u4ee4\u6587\u4ef6\u540d -> \u81ea\u52a8\u751f\u6210\u4e00\u4efdxxx.code-snippets\u6587\u4ef6\\n\\neg:\\n\\n```json\\n{\\n\\t\\"Print to markdown header\\": {  // \u5feb\u6377\u6307\u4ee4\u7684\u63cf\u8ff0key\\n\\t\\t\\"scope\\": \\"markdown\\",   // \u9488\u5bf9\u540e\u7f00\u6587\u4ef6,\\"\\"\u4ee3\u7801\u6240\u6709\u6587\u4ef6\u90fd\u751f\u6548\\n\\t\\t\\"prefix\\": \\"mdh\\",   // \u5feb\u6377\u6307\u4ee4\\n\\t\\t\\"body\\": [  // \u751f\u6210\u7684\u5185\u5bb9\uff1a\u4e00\u884c\u4e00\u4e2a\u5143\u7d20\uff0c$1\u662f\u751f\u6210\u4ee3\u7801\u540e\u9f20\u6807\u805a\u7126\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c$2\u3001$3\u4ee5\u6b64\u7c7b\u63a8\uff0c$0\u662f\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\uff1b\u7a7a\u767d\u884c\u76f4\u63a5\u4f7f\u7528\\"\\"\\n\\t\\t\\t\\"---\\",\\n\\t\\t\\t\\"title: $1\\",\\n\\t\\t\\t\\"authors: Rabbit\\",\\n\\t\\t\\t\\"tags: [$2]\\",\\n\\t\\t\\t\\"description: $3\\",\\n\\t\\t\\t\\"---\\",\\n\\t\\t\\t\\"\\",\\n\\t\\t\\t\\"$0\\"\\n\\t\\t],\\n\\t\\t\\"description\\": \\"add a docusaurus markdown header\\"\\n\\t}\\n}\\n```\\n\\n\\n\\n\\n### shell alias\\n\\n```she\\nopen ~/.zshrc\\n```\\n\\n\u6253\u5f00zsh\u914d\u7f6e\u6587\u4ef6\u540e\u6dfb\u52a0\uff1a\\n\\n```tex\\n# alias: jump to iyb-components\\nalias jcom=\\"cd ~/Desktop/projects/iyb-components\\" \\n```\\n\\n \\n\\n## vscode \u5c0f\u6280\u5de7\\n\\n### \u76f8\u540c\u5185\u5bb9\u53ea\u6539\u4e00\u6b21\uff0c\u518d\u4e5f\u4e0d\u7528\u4e00\u4e2a\u4e2a\u4fee\u6539\u5566\uff5e\\n\\n\u9009\u4e2d\u8981\u66ff\u6362\u7684\u5185\u5bb9\uff0c\u4f7f\u7528`Ctrl+Shift+L `\uff0c\u8fd9\u65f6\u6240\u6709\u76f8\u540c\u5185\u5bb9\u90fd\u8fdb\u5165\u7f16\u8f91\u72b6\u6001\uff0c\u53ef\u4ee5\u540c\u65f6\u7f16\u8f91"}]}')}}]);