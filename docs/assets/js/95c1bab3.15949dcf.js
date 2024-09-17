"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6375],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return n?t.createElement(d,o(o({ref:a},c),{},{components:n})):t.createElement(d,o({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4344:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=n(8168),r=(n(6540),n(5680));const i={sidebar_position:500},o="Uninstall Packages",l={unversionedId:"guides/uninstall-packages",id:"guides/uninstall-packages",title:"Uninstall Packages",description:"aqua >= v2.11.0 #538 #2248 #2249",source:"@site/docs/guides/uninstall-packages.md",sourceDirName:"guides",slug:"/guides/uninstall-packages",permalink:"/docs/guides/uninstall-packages",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/uninstall-packages.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Install private packages",permalink:"/docs/guides/private-package"},next:{title:"Filter packages with tags",permalink:"/docs/guides/package-tag"}},p={},s=[{value:"-mode option",id:"-mode-option",level:2},{value:"Limitation",id:"limitation",level:2}],c={toc:s},u="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"uninstall-packages"},"Uninstall Packages"),(0,r.yg)("p",null,"aqua >= ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.11.0"},"v2.11.0")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/538"},"#538")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/orgs/aquaproj/discussions/2248"},"#2248")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2249"},"#2249")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"aqua rm")," command doesn't remove packages from ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua rm --all [-a] # Uninstall all packages\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua rm [<registry name>,]<package name> [...] # Uninstall packages\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua rm <command name> [...] # Uninstall packages having given commands\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua rm -i # Select packages interactively with a fuzzy finder\n")),(0,r.yg)("p",null,"e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua rm cli/cli direnv/direnv\n")),(0,r.yg)("h2",{id:"-mode-option"},"-mode option"),(0,r.yg)("p",null,"aqua >= v2.32.0 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/3075"},"#3075")),(0,r.yg)("p",null,"By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua remove")," command removes only packages from the ",(0,r.yg)("inlineCode",{parentName:"p"},"pkgs")," directory and doesn't remove links from the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory.\nYou can change this behaviour by specifying the ",(0,r.yg)("inlineCode",{parentName:"p"},"-mode")," flag.\nThe value of ",(0,r.yg)("inlineCode",{parentName:"p"},"-mode")," is a string containing characters ",(0,r.yg)("inlineCode",{parentName:"p"},"l")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"p"),".\nThe order of the characters doesn't matter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aqua rm -m l cli/cli # Remove only links\naqua rm -m pl cli/cli # Remove links and packages\n")),(0,r.yg)("p",null,"You can also configure the mode by the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_REMOVE_MODE"),", so you can change the default behaviour of ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua remove")," command by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_REMOVE_MODE")," in your shell setting such as ",(0,r.yg)("inlineCode",{parentName:"p"},".bashrc"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export AQUA_REMOVE_MODE=pl\n")),(0,r.yg)("h2",{id:"limitation"},"Limitation"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The following package types can't be removed without ",(0,r.yg)("inlineCode",{parentName:"li"},"--all")," option.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"go_install"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The fuzzy finder shows all packages, which include not installed packages.")))}g.isMDXComponent=!0}}]);