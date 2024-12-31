"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[2698],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},82984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(75890),r=(t(37953),t(58860));const o={description:"tts",slug:"/a94cbdb",tags:["tts"]},s="tts \u6587\u672c\u8f6c\u8bed\u97f3",i={unversionedId:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tts",id:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tts",title:"tts \u6587\u672c\u8f6c\u8bed\u97f3",description:"tts",source:"@site/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/16.tts.md",sourceDirName:"05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API",slug:"/a94cbdb",permalink:"/docs/a94cbdb",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/16.tts.md",tags:[{label:"tts",permalink:"/docs/tags/tts"}],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1735638365,formattedLastUpdatedAt:"2024\u5e7412\u670831\u65e5",sidebarPosition:16,frontMatter:{description:"tts",slug:"/a94cbdb",tags:["tts"]},sidebar:"tutorialSidebar",previous:{title:"sidePanel \u4fa7\u8fb9\u680f",permalink:"/docs/39ebd01"},next:{title:"webRequest web\u8bf7\u6c42",permalink:"/docs/5314fe0"}},l={},p=[{value:"\u6743\u9650",id:"\u6743\u9650",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"getVoices() \u83b7\u53d6\u53ef\u7528\u7684\u8bed\u97f3(\u8bed\u8a00)\u5217\u8868",id:"getvoices-\u83b7\u53d6\u53ef\u7528\u7684\u8bed\u97f3\u8bed\u8a00\u5217\u8868",level:3},{value:"ttsEngine.updateVoices() \u66f4\u65b0\u8bed\u97f3\u5217\u8868",id:"ttsengineupdatevoices-\u66f4\u65b0\u8bed\u97f3\u5217\u8868",level:3},{value:"isSpeaking() \u662f\u5426\u6b63\u5728\u6717\u8bfb",id:"isspeaking-\u662f\u5426\u6b63\u5728\u6717\u8bfb",level:3},{value:"speak() \u6717\u8bfb",id:"speak-\u6717\u8bfb",level:3},{value:"pause() \u6682\u505c\u6717\u8bfb",id:"pause-\u6682\u505c\u6717\u8bfb",level:3},{value:"resume() \u6062\u590d\u6717\u8bfb",id:"resume-\u6062\u590d\u6717\u8bfb",level:3},{value:"stop() \u505c\u6b62\u6717\u8bfb",id:"stop-\u505c\u6b62\u6717\u8bfb",level:3},{value:"\u4e8b\u4ef6 chrome.ttsEngine",id:"\u4e8b\u4ef6-chromettsengine",level:2},{value:"\u6743\u9650",id:"\u6743\u9650-1",level:3},{value:"onSpeak() \u5f00\u59cb\u6717\u8bfb",id:"onspeak-\u5f00\u59cb\u6717\u8bfb",level:3},{value:"onSpeakWithAudioStream() \u5f00\u59cb\u6717\u8bfb",id:"onspeakwithaudiostream-\u5f00\u59cb\u6717\u8bfb",level:3},{value:"onStop() \u505c\u6b62\u6717\u8bfb",id:"onstop-\u505c\u6b62\u6717\u8bfb",level:3},{value:"onPaused() \u6682\u505c\u6717\u8bfb",id:"onpaused-\u6682\u505c\u6717\u8bfb",level:3},{value:"onResumed() \u6062\u590d\u6717\u8bfb",id:"onresumed-\u6062\u590d\u6717\u8bfb",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tts-\u6587\u672c\u8f6c\u8bed\u97f3"},"tts \u6587\u672c\u8f6c\u8bed\u97f3"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/reference/api/tts"},"\u5b98\u65b9\u6587\u6863")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Text to Speech\uff08TTS\uff0c\u6587\u672c\u8f6c\u8bed\u97f3\uff09")),(0,r.yg)("h2",{id:"\u6743\u9650"},"\u6743\u9650"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"permissions": [\n  "tts"\n]\n')),(0,r.yg)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.yg)("h3",{id:"getvoices-\u83b7\u53d6\u53ef\u7528\u7684\u8bed\u97f3\u8bed\u8a00\u5217\u8868"},"getVoices() \u83b7\u53d6\u53ef\u7528\u7684\u8bed\u97f3(\u8bed\u8a00)\u5217\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type EventType = 'start' | 'end' | 'word' | 'sentence' | 'marker' | 'interrupted' | 'cancelled' | 'error' | 'pause' | 'resume';\ntype TtsVoice = {\n  // \u80fd\u591f\u53d1\u9001\u7684\u6240\u6709\u56de\u8c03\u4e8b\u4ef6\u7c7b\u578b\n  eventTypes?: EventType[];\n  // \u6269\u5c55 ID\n  extensionId?: string;\n  // \u8bed\u8a00\n  lang?: string;\n  // \u4f7f\u7528\u8fdc\u7aef\u8d44\u6e90\uff0c\u5982\u679c\u4e3a true\uff0c\u5219\u5408\u6210\u5f15\u64ce\u662f\u8fdc\u7a0b\u7f51\u7edc\u8d44\u6e90\u3002\u5b83\u53ef\u80fd\u4f1a\u6709\u66f4\u9ad8\u7684\u5ef6\u8fdf\uff0c\u5e76\u53ef\u80fd\u4ea7\u751f\u5e26\u5bbd\u6210\u672c\u3002\n  remote?: boolean;\n  // \u8bed\u8a00\u540d\u79f0\n  voiceName?: string;\n}\nchrome.tts.getVoices(\n  callback?: (voices: TtsVoice[]) => void,\n)\n")),(0,r.yg)("h3",{id:"ttsengineupdatevoices-\u66f4\u65b0\u8bed\u97f3\u5217\u8868"},"ttsEngine.updateVoices() \u66f4\u65b0\u8bed\u97f3\u5217\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.ttsEngine.updateVoices(\n  voices: TtsVoice[],\n  callback?: function,\n)\n")),(0,r.yg)("h3",{id:"isspeaking-\u662f\u5426\u6b63\u5728\u6717\u8bfb"},"isSpeaking() \u662f\u5426\u6b63\u5728\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tts.isSpeaking(\n  callback?: (speaking: boolean) => void,\n)\n")),(0,r.yg)("h3",{id:"speak-\u6717\u8bfb"},"speak() \u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type TtsEvent = {\n  // \u8bdd\u8bed\u4e2d\u5f53\u524d\u5b57\u7b26\u7684\u7d22\u5f15\n  charIndex?: number;\n  // errorMessage \uff08\u9519\u8bef\u6d88\u606f\uff09\n  errorMessage?: string;\n  // \u8bdd\u8bed\u4e0b\u4e00\u90e8\u5206\u7684\u957f\u5ea6\n  length?: number;\n  // type \u7c7b\u578b\n  type: EventType;\n}\ntype TtsOptions = {\n  // \u5982\u679c\u4e3a true\uff0c\u5219\u5728 TTS \u5df2\u5728\u8fdb\u884c\u4e2d\u65f6\u5c06\u6b64\u8bdd\u8bed\u6392\u961f\u3002\u5982\u679c\u4e3a false\uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u5219\u5728\u8bf4\u51fa\u6b64\u65b0\u8bdd\u8bed\u4e4b\u524d\u4e2d\u65ad\u4efb\u4f55\u5f53\u524d\u8bed\u97f3\u5e76\u5237\u65b0\u8bed\u97f3\u961f\u5217\u3002\n  enqueue?: boolean;\n  // \u6269\u5c55 ID\n  extensionId?: string;\n  // \u8bed\u8a00\n  lang?: string;\n  // \u97f3\u9ad8\uff0c\u4ecb\u4e8e 0 \u548c 2 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c2 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u97f3\u9ad8\n  pitch?: number;\n  // \u8bed\u901f\uff0c\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c1 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u901f\u7387\n  rate?: number;\n  // \u97f3\u91cf\n  volume?: number;\n  // \u6709\u5174\u8da3\u63a5\u6536\u7684 TTS \u4e8b\u4ef6\u7c7b\u578b\u3002\n  desiredEventTypes?: EventType[];\n  // \u8bed\u97f3\u5fc5\u987b\u652f\u6301\u7684 TTS \u4e8b\u4ef6\u7c7b\u578b\u3002\n  requiredEventTypes?: EventType[];\n  // \u8bed\u8a00\u540d\u79f0\n  voiceName?: string;\n  onEvent?: (event: TtsEvent) => void;\n}\nchrome.tts.speak(\n  utterance: string,\n  options?: TtsOptions,\n  callback?: function,\n)\n")),(0,r.yg)("h3",{id:"pause-\u6682\u505c\u6717\u8bfb"},"pause() \u6682\u505c\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tts.pause(\n  callback?: function,\n)\n")),(0,r.yg)("h3",{id:"resume-\u6062\u590d\u6717\u8bfb"},"resume() \u6062\u590d\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tts.resume(\n  callback?: function,\n)\n")),(0,r.yg)("h3",{id:"stop-\u505c\u6b62\u6717\u8bfb"},"stop() \u505c\u6b62\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tts.stop(\n  callback?: function,\n)\n")),(0,r.yg)("h2",{id:"\u4e8b\u4ef6-chromettsengine"},"\u4e8b\u4ef6 chrome.ttsEngine"),(0,r.yg)("h3",{id:"\u6743\u9650-1"},"\u6743\u9650"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u82e5\u8981\u5b9e\u73b0 TTS \u5f15\u64ce\uff0c\u6269\u5c55\u5fc5\u987b\u58f0\u660e\u201cttsEngine\u201d\u6743\u9650\uff0c\u7136\u540e\u5728\u6269\u5c55\u6e05\u5355\u4e2d\u58f0\u660e\u5b83\u63d0\u4f9b\u7684\u6240\u6709\u8bed\u97f3")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": ["ttsEngine"],\n  "tts_engine": {\n    "voices": [\n      {\n        "voice_name": "Alice",\n        "lang": "en-US",\n        "event_types": ["start", "marker", "end"]\n      },\n      {\n        "voice_name": "Pat",\n        "lang": "en-US",\n        "event_types": ["end"]\n      }\n    ]\n  }\n}\n')),(0,r.yg)("h3",{id:"onspeak-\u5f00\u59cb\u6717\u8bfb"},"onSpeak() \u5f00\u59cb\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SpeakOptions = {\n  // \u8bed\u8a00\n  lang?: string;\n  // \u97f3\u9ad8\uff0c\u4ecb\u4e8e 0 \u548c 2 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c2 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u97f3\u9ad8\n  pitch?: number;\n  // \u8bed\u901f\uff0c\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c1 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u901f\u7387\n  rate?: number;\n  // \u97f3\u91cf\n  volume?: number;\n  // \u8bed\u8a00\u540d\u79f0\n  voiceName?: string;\n}\nchrome.ttsEngine.onSpeak.addListener(\n  callback: (\n    utterance: string,\n    options: SpeakOptions,\n    sendTtsEvent: function\n  ) => void\n)\n")),(0,r.yg)("h3",{id:"onspeakwithaudiostream-\u5f00\u59cb\u6717\u8bfb"},"onSpeakWithAudioStream() \u5f00\u59cb\u6717\u8bfb"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"ttsEngine.onSpeak")," \u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0cChrome \u63d0\u4f9b\u97f3\u9891\u64ad\u653e\u670d\u52a1\u5e76\u5904\u7406\u8c03\u5ea6 tts \u4e8b\u4ef6\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SpeakOptions = {\n  // \u8bed\u8a00\n  lang?: string;\n  // \u97f3\u9ad8\uff0c\u4ecb\u4e8e 0 \u548c 2 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c2 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u97f3\u9ad8\n  pitch?: number;\n  // \u8bed\u901f\uff0c\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\uff08\u542b\uff09\uff0c\u5176\u4e2d 0 \u8868\u793a\u6700\u4f4e\uff0c1 \u8868\u793a\u6700\u9ad8\u30021.0 \u5bf9\u5e94\u4e8e\u8bed\u97f3\u7684\u9ed8\u8ba4\u901f\u7387\n  rate?: number;\n  // \u97f3\u91cf\n  volume?: number;\n  // \u8bed\u8a00\u540d\u79f0\n  voiceName?: string;\n}\ntype AudioStreamOptions = {\n  // \u97f3\u9891\u7f13\u51b2\u533a\u4e2d\u7684\u6837\u672c\u6570\n  bufferSize?: number;\n  // \u97f3\u9891\u7f13\u51b2\u533a\u4e2d\u9884\u671f\u7684\u91c7\u6837\u7387\n  sampleRate?: number;\n}\nchrome.ttsEngine.onSpeakWithAudioStream.addListener(\n  utterance: string,\n  options: SpeakOptions,\n  audioStreamOptions: AudioStreamOptions,\n  sendTtsAudio: function,\n  sendError: function\n  callback: (\n    utterance: string,\n    options: SpeakOptions,\n    sendTtsEvent: function,\n    audioStreamId: number\n  ) => void\n)\n")),(0,r.yg)("h3",{id:"onstop-\u505c\u6b62\u6717\u8bfb"},"onStop() \u505c\u6b62\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.ttsEngine.onStop.addListener(\n  callback: () => void\n)\n")),(0,r.yg)("h3",{id:"onpaused-\u6682\u505c\u6717\u8bfb"},"onPaused() \u6682\u505c\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.ttsEngine.onPaused.addListener(\n  callback: () => void\n)\n")),(0,r.yg)("h3",{id:"onresumed-\u6062\u590d\u6717\u8bfb"},"onResumed() \u6062\u590d\u6717\u8bfb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.ttsEngine.onResumed.addListener(\n  callback: () => void\n)\n")))}d.isMDXComponent=!0}}]);