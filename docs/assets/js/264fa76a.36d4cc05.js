"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),g=n,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return a?r.createElement(y,o(o({ref:t},l),{},{components:a})):r.createElement(y,o({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:50},o="aqua-registry",s={unversionedId:"products/aqua-registry/index",id:"products/aqua-registry/index",title:"aqua-registry",description:"aqua's Standard Registry",source:"@site/docs/products/aqua-registry/index.md",sourceDirName:"products/aqua-registry",slug:"/products/aqua-registry/",permalink:"/docs/products/aqua-registry/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/aqua-registry/index.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/docs/products/"},next:{title:"Contributing",permalink:"/docs/products/aqua-registry/contributing"}},c={},u=[{value:"Search packages from the Standard Registry by the command <code>aqua g</code>",id:"search-packages-from-the-standard-registry-by-the-command-aqua-g",level:2},{value:"Request for new packages",id:"request-for-new-packages",level:2},{value:"Contributing",id:"contributing",level:2},{value:"\ud83d\udca1 Tips: Get all packages in your laptop",id:"-tips-get-all-packages-in-your-laptop",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aqua-registry"},"aqua-registry"),(0,n.kt)("p",null,"aqua's Standard Registry"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,n.kt)("h2",{id:"search-packages-from-the-standard-registry-by-the-command-aqua-g"},"Search packages from the Standard Registry by the command ",(0,n.kt)("inlineCode",{parentName:"h2"},"aqua g")),(0,n.kt)("p",null,"Please add the Standard Registry to your aqua.yaml's registries, and run ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua g"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - type: standard\n    ref: v3.143.0 # renovate: depName=aquaproj/aqua-registry\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"aqua g")," launches the interactive UI and you can search the package by fuzzy search."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"  koki-develop/clive                    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  tektoncd/cli [tkn]                    \u2502 climech/grit                         \u2502\n  ipinfo/cli/grepip                     \u2502                                      \u2502\n  ipinfo/cli/randip                     \u2502 https://github.com/climech/grit      \u2502\n  openfaas/faas-cli                     \u2502 Multitree-based personal task m      \u2502\n  yitsushi/totp-cli                     \u2502 anager                               \u2502\n  databricks/click                      \u2502                                      \u2502\n  ipinfo/cli/prips                      \u2502                                      \u2502\n  civo/cli [civo]                       \u2502                                      \u2502\n  dapr/cli [dapr]                       \u2502                                      \u2502\n  goark/gimei-cli                       \u2502                                      \u2502\n  orhun/git-cliff                       \u2502                                      \u2502\n  snyk/cli [snyk]                       \u2502                                      \u2502\n  spf13/cobra-cli                       \u2502                                      \u2502\n  volta-cli/volta                       \u2502                                      \u2502\n  barnybug/cli53                        \u2502                                      \u2502\n  cli/cli [gh]: github                  \u2502                                      \u2502\n  nuclio/nuclio                         \u2502                                      \u2502\n  cswank/kcli                           \u2502                                      \u2502\n> climech/grit                          \u2502                                      \u2502\n  140/1017                              \u2502                                      \u2502\n> cli\n")),(0,n.kt)("h2",{id:"request-for-new-packages"},"Request for new packages"),(0,n.kt)("p",null,"Please check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml"},"registry.yaml")," or search packages by ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua g")," command.\nIf the packages you want aren't found, please create issues or send pull requests!"),(0,n.kt)("p",null,"By adding various packages to the standard registry, aqua becomes more useful and attractive.\nWe need your contribution!"),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"Please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/products/aqua-registry/contributing"},"Contributing"),"."),(0,n.kt)("h2",{id:"-tips-get-all-packages-in-your-laptop"},"\ud83d\udca1 Tips: Get all packages in your laptop"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/guides/install-all-packages"},"Install Standard Registry's all packages very quickly")))}d.isMDXComponent=!0}}]);