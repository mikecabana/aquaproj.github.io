"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1738],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>d});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=n.createContext({}),p=function(e){var a=n.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},c=function(e){var a=p(e.components);return n.createElement(u.Provider,{value:a},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(r),m=t,d=l["".concat(u,".").concat(m)]||l[m]||g[m]||o;return r?n.createElement(d,s(s({ref:a},c),{},{components:r})):n.createElement(d,s({ref:a},c))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[l]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1782:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),t=(r(7294),r(3905));const o={sidebar_position:810},s="Progress Bar",i={unversionedId:"reference/progress-bar",id:"reference/progress-bar",title:"Progress Bar",description:"aqua >= v1.17.0",source:"@site/docs/reference/progress-bar.md",sourceDirName:"reference",slug:"/reference/progress-bar",permalink:"/docs/reference/progress-bar",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/progress-bar.md",tags:[],version:"current",sidebarPosition:810,frontMatter:{sidebar_position:810},sidebar:"tutorialSidebar",previous:{title:"Lazy Install",permalink:"/docs/reference/lazy-install"},next:{title:"Log Color",permalink:"/docs/reference/log-color"}},u={},p=[],c={toc:p},l="wrapper";function g(e){let{components:a,...r}=e;return(0,t.kt)(l,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"progress-bar"},"Progress Bar"),(0,t.kt)("p",null,"aqua >= ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.17.0"},"v1.17.0")),(0,t.kt)("p",null,"The progress bar was introduced at ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.15.0"},"v1.15.0"),", and was disabled by default at ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.17.0"},"v1.17.0"),"."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"v1.15.0 ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/956"},"#956")," ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/963"},"#963")),(0,t.kt)("li",{parentName:"ul"},"v1.17.0 ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/976"},"#976")," ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/979"},"#979"))),(0,t.kt)("p",null,"The progress bar is disabled by default, because the progress bar isn't essential but it may cause some trouble depending on the environment."),(0,t.kt)("p",null,"You can enable it by setting the environment variable ",(0,t.kt)("inlineCode",{parentName:"p"},"AQUA_PROGRESS_BAR")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"$ export AQUA_PROGRESS_BAR=true\n")),(0,t.kt)("p",null,"The progress bar is powered by ",(0,t.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/schollz/progressbar/v3"},"github.com/schollz/progressbar/v3"),"."),(0,t.kt)("p",null,"e.g."),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/176585183-b8616482-5e3b-4f99-be98-6e7d752c5dbc.png",alt:"image"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=aqua-proxy package_version=v1.1.2 program=aqua registry=\nDownloading aqua-proxy v1.1.2 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| (668/668 kB, 11.270 MB/s)\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/Documents/test/aqua/progress/aquaproj-aqua/bin/aqua-proxy new=../pkgs/github_release/github.com/aquaproj/aqua-proxy/v1.1.2/aqua-proxy_darwin_arm64.tar.gz/aqua-proxy package_name=aqua-proxy package_version=v1.1.2 program=aqua registry=\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/Documents/test/aqua/progress/aquaproj-aqua/bin/aqua-installer new=aqua-proxy package_name=aquaproj/aqua-installer package_version=v1.0.0 program=aqua registry=standard registry_ref=v3.4.0\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/Documents/test/aqua/progress/aquaproj-aqua/bin/tokei new=aqua-proxy package_name=XAMPPRocky/tokei package_version=v12.1.2 program=aqua registry=standard registry_ref=v3.4.0\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/Documents/test/aqua/progress/aquaproj-aqua/bin/terraform new=aqua-proxy package_name=hashicorp/terraform package_version=v1.2.3 program=aqua registry=standard registry_ref=v3.4.0\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/Documents/test/aqua/progress/aquaproj-aqua/bin/tfcmt new=aqua-proxy package_name=suzuki-shunsuke/tfcmt package_version=v3.2.5 program=aqua registry=standard registry_ref=v3.4.0\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v3.2.5 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=XAMPPRocky/tokei package_version=v12.1.2 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=aquaproj/aqua-installer package_version=v1.0.0 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=hashicorp/terraform package_version=v1.2.3 program=aqua registry=standard\nDownloading aquaproj/aqua-installer v1.0.0   0% |                                                                                                            | ( 0/ 0B, ) [0s:0s]\nDownloading XAMPPRocky/tokei v12.1.2 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| (1.5/1.5 MB, 7.936 MB/s)\nDownloading hashicorp/terraform v1.2.3 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| (19/19 MB, 23.924 MB/s)\nDownloading suzuki-shunsuke/tfcmt v3.2.5 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| (3.7/3.7 MB, 2.076 MB/s)\n")))}g.isMDXComponent=!0}}]);