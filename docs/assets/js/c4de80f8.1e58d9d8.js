"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:150},i="Install",l={unversionedId:"install",id:"install",title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/install.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/"},next:{title:"Quick Start",permalink:"/docs/tutorial/"}},s={},p=[{value:"Windows",id:"windows",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Install script, GitHub Actions",id:"install-script-github-actions",level:2},{value:"Go",id:"go",level:2},{value:"Download from GitHub Releases",id:"download-from-github-releases",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install"},"Install"),(0,r.kt)("p",null,"aqua is a single binary written in Go."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the binary ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")),(0,r.kt)("li",{parentName:"ol"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you use aqua combined with other version manager such as asdf,\nplease add ",(0,r.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," after other version manager.\nFor detail, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/use-aqua-with-other-tools"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/reference/config/shell-completion"},"Shell Completion"))),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/windows-support#how-to-install"},"here"),"."),(0,r.kt)("h2",{id:"homebrew"},"Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'brew install aquaproj/aqua/aqua\nexport PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\n')),(0,r.kt)("h2",{id:"install-script-github-actions"},"Install script, GitHub Actions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/products/aqua-installer"},"aqua-installer")),(0,r.kt)("h2",{id:"go"},"Go"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go install github.com/aquaproj/aqua/cmd/aqua@latest\n")),(0,r.kt)("h2",{id:"download-from-github-releases"},"Download from GitHub Releases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")))}d.isMDXComponent=!0}}]);