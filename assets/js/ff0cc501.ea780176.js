"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[7921],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(37953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,d=p["".concat(i,".").concat(m)]||p[m]||v[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(75890),l=(t(37953),t(58860));const a={description:"Promise",slug:"/906f156",tags:["Promise"]},o=void 0,s={unversionedId:"\u672a\u6574\u7406/ES6+\u7bc7/Promise",id:"\u672a\u6574\u7406/ES6+\u7bc7/Promise",title:"Promise",description:"Promise",source:"@site/99.interview/99.\u672a\u6574\u7406/02.ES6+\u7bc7/02.Promise.md",sourceDirName:"99.\u672a\u6574\u7406/02.ES6+\u7bc7",slug:"/906f156",permalink:"/interview/906f156",draft:!1,tags:[{label:"Promise",permalink:"/interview/tags/promise"}],version:"current",sidebarPosition:2,frontMatter:{description:"Promise",slug:"/906f156",tags:["Promise"]},sidebar:"tutorialSidebar",previous:{title:"Set/Map",permalink:"/interview/9217ed0"},next:{title:"Generator",permalink:"/interview/8d72fb1"}},i={},c=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2},{value:"\u590d\u6742\u7248",id:"\u590d\u6742\u7248",level:2},{value:"\u5b9e\u73b0catch\u51fd\u6570",id:"\u5b9e\u73b0catch\u51fd\u6570",level:2},{value:"\u5b9e\u73b0finally\u51fd\u6570",id:"\u5b9e\u73b0finally\u51fd\u6570",level:2},{value:"\u5b9e\u73b0all\u51fd\u6570",id:"\u5b9e\u73b0all\u51fd\u6570",level:2},{value:"\u5b9e\u73b0race\u51fd\u6570",id:"\u5b9e\u73b0race\u51fd\u6570",level:2}],u={toc:c},p="wrapper";function v(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6838\u5fc3\u4ee3\u7801"},"\u6838\u5fc3\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"class Promise {\n    constructor(executor) {\n        // Promise\u7684\u72b6\u6001\n        this.status = 'pending'\n        // Promise\u72b6\u6001\u5bf9\u5e94\u7684\u503c\n        this.value = undefined\n        this.onResolvedCallback = []\n        this.onRejectedCallback = []\n\n        // \u5c06Promise\u7684\u72b6\u6001\u8f6c\u5316\u4ecepending\u8f6c\u5316\u4e3afulfilled\n        const resolve = (value) => {\n            if (this.status === 'pending') {\n                this.status = 'fulfilled'\n                this.value = value\n                this.onResolvedCallback.forEach(callback => callback())\n            }\n        }\n\n        // \u5c06Promise\u7684\u72b6\u6001\u8f6c\u5316\u4ecepending\u8f6c\u5316\u4e3arejected\n        const reject = (reason) => {\n            if (this.status === 'pending') {\n                this.status = 'rejected'\n                this.value = reason\n                this.onRejectedCallback.forEach(callback => callback())\n            }\n        }\n        \n        try {\n            // \u6267\u884c\u4f20\u5165\u7684\u51fd\u6570\n            executor(resolve, reject)\n        } catch (error) {\n            reject(error)\n        }\n    }\n\n    then(onResolve, onReject) {\n        // then\u51fd\u6570\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Promise\n        return new Promise((resolve, reject) => {\n            // \u548c\u4e8b\u4ef6\u4e0d\u540c\u3002\u4e8b\u4ef6\u5148\u89e6\u53d1\u518d\u76d1\u542c\u5219\u4e0d\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\n            // \u800cPromise\u5373\u4f7f\u72b6\u6001\u5df2\u7ecf\u8f6c\u5316\uff0c\u4e5f\u4f1a\u89e6\u53d1\u56de\u8c03\n            if (this.status === 'fulfilled') {\n                // \u901a\u8fc7setTimeout\u5b9e\u73b0\u5f02\u6b65\u3002\n                // \u4e0e\u771f\u5b9e\u7684\u5b9e\u73b0\u4e0d\u540c\uff0csetTimeout\u7684\u56de\u8c03\u4f1a\u653e\u8fdbmacro task\u961f\u5217\u3002\n                // \u800c\u771f\u5b9e\u7684\u5b9e\u73b0\uff0cthen\u7684\u56de\u8c03\u4f1a\u653e\u8fdbmicro task\u961f\u5217\u3002\n                setTimeout(() => {\n                    // onResolve\u7684\u51fd\u6570\u8fd4\u56de\u503c\u4f1a\u88ab\u65b0\u7684Promise\u8fdb\u884cresolve\n                    // var b = a.then(data => {\n                    //    return data * data\n                    //  })\n                    // \u6b64\u5904\u82e5a\u7684\u5185\u90e8\u503c\u4e3a10\uff0c\u5219b\u7684\u5185\u90e8\u503c\u4e3a100\n                    resolve(onResolve(this.value))\n                })\n            }\n            else if (this.status === 'rejected') {\n                setTimeout(() => {\n                    // \u6ce8\u610f\u8fd9\u91cc\u4e5f\u662fresolve\uff0c\u4e0d\u8981\u8bef\u4ee5\u4e3a\u662f reject(onReject(this.value))\n                    resolve(onReject(this.value))\n                })\n            }\n            else if (this.status === 'pending') {\n                this.onResolvedCallback.push(() => {\n                    setTimeout(() => {\n                        resolve(onResolve(this.value))\n                    })\n                })\n\n                this.onRejectedCallback.push(() => {\n                    setTimeout(() => {\n                        resolve(onReject(this.value))\n                    })\n                })\n            }\n        })\n    }\n}\n")),(0,l.yg)("p",null,"\u597d\uff0c\u6838\u5fc3\u529f\u80fd\u5b9e\u73b0\u4e86\uff0c\u518d\u4e00\u70b9\u70b9\u52a0\u529f\u80fd\u3002"),(0,l.yg)("p",null,"\u4e00\uff1a\u6211\u4eec\u6709\u7684\u65f6\u5019\u4f1a",(0,l.yg)("inlineCode",{parentName:"p"},"resolve"),"\u4e00\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u4f8b\u5982"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"var p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(1)\n    }, 2000)\n})\nvar p2 = new Promise((resolve, reject) => {\n    resolve(p1)\n})\n\n// \u6216\u8005\n\nvar p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(1)\n    }, 2000)\n})\n\nvar p2 = a.then(data => {\n    return p1\n})\n")),(0,l.yg)("p",null,"\u6211\u4eec\u5e0c\u671bp2\u7684\u72b6\u6001\u4ee5\u53ca\u5185\u90e8\u503c\u548cp1\u4fdd\u6301\u4e00\u81f4\u3002\u90a3\u4e48\u6211\u4eec\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const resolve = (value) => {\n    if (this.status === 'pending') {\n        // \u5982\u679cresolve\u7684\u53c2\u6570\u662fPromise\u5b9e\u4f8b\uff0c\u5219\u72b6\u6001\u4e0e\u5176\u4fdd\u6301\u4e00\u81f4\n        if (value instanceof Promise) {\n            value.then((data) => {\n                resolve(data)\n            }, (reason) => {\n                reject(reason)\n            })\n        } else {\n            this.status = 'fulfilled'\n            this.value = value\n            this.onResolvedCallback.forEach(callback => callback())\n        }\n    }\n}\n")),(0,l.yg)("p",null,"\u4e8c \u5f02\u5e38\u7684\u6355\u83b7"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"var p1 = new Promise((resolve, reject) => {\n    reject(new Error())\n})\nvar p2 = p1.then((data) => {\n    \n}, (reason) => {\n    \n})\n")),(0,l.yg)("p",null,"\u5f53\u8fd9\u91ccp1\u72b6\u6001\u4e3arejected\u65f6\uff0c\u53ef\u80fd\u6709\u4eba\u4f1a\u8bef\u4ee5\u4e3ap2\u4e5f\u662frejected\uff0c\u7136\u800c\u5b9e\u9645\u662ffulfilled\u3002"),(0,l.yg)("p",null,"\u53ea\u6709\u5f53",(0,l.yg)("inlineCode",{parentName:"p"},"onFulfilled")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"onRejected"),"\u629b\u51fa\u4e86\u5f02\u5e38",(0,l.yg)("inlineCode",{parentName:"p"},"e"),", \u5219",(0,l.yg)("inlineCode",{parentName:"p"},"p2"),"\u5e94\u5f53\u4ee5",(0,l.yg)("inlineCode",{parentName:"p"},"e"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"reason"),"\u8f6c\u5316\u6210",(0,l.yg)("inlineCode",{parentName:"p"},"rejected"),"\u3002"),(0,l.yg)("p",null,"\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u53ef\u80fd\u7684\u5f02\u5e38\u8fdb\u884c\u6355\u83b7\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n    try {\n        resolve(onResolve(this.value))\n    } catch (e) {\n        reject(e)\n    }\n})\n")),(0,l.yg)("p",null,"\u4e09"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"p"},"onFulfilled")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u4e14",(0,l.yg)("inlineCode",{parentName:"p"},"promise1"),"\u5df2\u7ecffulfilled\uff0c\u5219",(0,l.yg)("inlineCode",{parentName:"p"},"promise2"),"\u5fc5\u987b\u4ee5",(0,l.yg)("inlineCode",{parentName:"p"},"promise1"),"\u7684\u503cfulfilled.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"p"},"OnReject")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u4e14",(0,l.yg)("inlineCode",{parentName:"p"},"promise1"),"\u5df2\u7ecfrejected, \u5219",(0,l.yg)("inlineCode",{parentName:"p"},"promise2"),"\u5fc5\u987b\u4ee5\u76f8\u540c\u7684reason\u88abreject."))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"if (typeof onReject !== 'function') {\n    reject(this.value)\n} else {\n    resolve(onReject(this.value))\n}\n// ...\nif (typeof onResolve !== 'function') {\n    resolve(this.value)\n} else {\n    resolve(onResolve(this.value))  \n}\n")),(0,l.yg)("p",null,"\u4ee3\u66ff\u539f\u5148\u7684"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"resolve(onReject(this.value))\n// ...\nresolve(onResolve(this.value))  \n")),(0,l.yg)("p",null,"\u90a3\u4e48\u6211\u4eec\u73b0\u5728\u7684\u4ee3\u7801\u5982\u4e0b"),(0,l.yg)("h2",{id:"\u590d\u6742\u7248"},"\u590d\u6742\u7248"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"class Promise {\n    constructor(executor) {\n        if (typeof executor !== 'function') {\n            throw new TypeError(\"Promise resolver undefined is not a function\")\n        }\n        this.status = 'pending'\n        this.value = undefined\n        this.onResolvedCallback = []\n        this.onRejectedCallback = []\n\n        const resolve = (value) => {\n            if (this.status === 'pending') {\n                if (value instanceof Promise) {\n                    value.then((data) => {\n                        resolve(data)\n                    }, (reason) => {\n                        reject(reason)\n                    })\n                } else {\n                    this.status = 'fulfilled'\n                    this.value = value\n                    this.onResolvedCallback.forEach(callback => callback())\n                }\n            }\n        }\n\n        const reject = (reason) => {\n            if (this.status === 'pending') {\n                this.status = 'rejected'\n                this.value = reason\n                this.onRejectedCallback.forEach(callback => callback())\n            }\n        }\n        try {\n            executor(resolve, reject)\n        } catch (error) {\n            reject(error)\n        }\n    }\n\n    then(onResolve, onReject) {\n        return new Promise((resolve, reject) => {\n            if (this.status === 'fulfilled') {\n                setTimeout(() => {\n                    if (typeof onResolve !== 'function') {\n                        resolve(this.value)\n                    } else {\n                        try {\n                            resolve(onResolve(this.value))\n                        } catch (error) {\n                            reject(error)\n                        }\n                            \n                    }\n                })\n            }\n            else if (this.status === 'rejected') {\n                setTimeout(() => {\n                    if (typeof onReject !== 'function') {\n                        reject(this.value)\n                    } else {\n                        try {\n                            resolve(onReject(this.value))\n                        } catch (error) {\n                            reject(error)\n                        }\n                        \n                    }\n                })\n            }\n            else if (this.status === 'pending') {\n                this.onResolvedCallback.push(() => {\n                    setTimeout(() => {\n                        if (typeof onResolve !== 'function') {\n                            resolve(this.value)\n                        } else {\n                            try {\n                                resolve(onResolve(this.value))\n                            } catch (error) {\n                                reject(error)\n                            }\n                        }\n                    })\n                })\n\n                this.onRejectedCallback.push(() => {\n                    setTimeout(() => {\n                        if (typeof onReject !== 'function') {\n                            reject(this.value)\n                        } else {\n                            try {\n                                resolve(onReject(this.value))\n                            } catch (error) {\n                                reject(error)\n                            }\n                        }\n                    })\n                })\n            }\n        })\n    }\n}\n\n")),(0,l.yg)("h2",{id:"\u5b9e\u73b0catch\u51fd\u6570"},"\u5b9e\u73b0catch\u51fd\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"catch(onReject) {\n    return this.then(null, onReject)\n}\n")),(0,l.yg)("h2",{id:"\u5b9e\u73b0finally\u51fd\u6570"},"\u5b9e\u73b0finally\u51fd\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"finally(cb) {\n    let P = this.constructor\n    return this.then(\n        value => P.resolve(cb()).then(() => value),\n        reason => P.resolve(cb()).then(() => {throw reaon})\n    )\n}\n")),(0,l.yg)("h2",{id:"\u5b9e\u73b0all\u51fd\u6570"},"\u5b9e\u73b0all\u51fd\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"static all(promiseArr) {\n    return new Promise((resolve, reject) => {\n        let res = []\n        let length = promiseArr.length\n        let count = 0\n        promiseArr.forEach((promise, index) => {\n            promise.then(value => {\n                res[index] = value\n                count++\n                if (count === length) {\n                    resolve(res)\n                }\n            }, (reason) => {\n                reject(reason)\n            })\n        })\n    })\n}\n")),(0,l.yg)("h2",{id:"\u5b9e\u73b0race\u51fd\u6570"},"\u5b9e\u73b0race\u51fd\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"static race(promiseArr) {\n    return new Promise((resolve, reject) => {\n        promiseArr.forEach((promise) => {\n            promise.then(value => {\n                resolve(value)\n            }, reason => {\n                reject(reason)\n            })\n        })\n    })\n}\n")),(0,l.yg)("p",null,"\u7528\u4ee3\u7801\u6d4b\u8bd5\u4e00\u4e0b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"// example\n\nlet p1 = new Promise((resolve,reject)=>{\n    setTimeout(() => {\n        console.log(1);\n        resolve(1)\n    }, 3000)\n})\nlet p2 = new Promise((resolve,reject)=>{\n    setTimeout(() => {\n        console.log(2);\n        resolve(2)\n    }, 2000)\n})\nlet p3 = new Promise((resolve,reject)=>{\n    setTimeout(() => {\n        console.log(3);\n        resolve(3)\n    }, 1000)\n})\n\nPromise.all([p1, p2, p3])\n.then(console.log)\n.catch(console.error)\n\n")))}v.isMDXComponent=!0}}]);