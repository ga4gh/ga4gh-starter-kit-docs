"use strict";(self.webpackChunkga4gh_starter_kit_docs=self.webpackChunkga4gh_starter_kit_docs||[]).push([[152],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(f,o(o({ref:e},p),{},{components:r})):a.createElement(f,o({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},681:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=r(3117),n=(r(7294),r(3905));const i={sidebar_position:3},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"The GA4GH Starter Kit is not a single, monolithic application, rather it is a suite of tools, with each component in the toolset acting as a server application that fulfills a GA4GH API specification. Users can deploy only the required services for the standardized use case or data sharing scenario at hand.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quickstart Tutorial",permalink:"/docs/getting-started/quickstart"},next:{title:"Contributing Guidelines",permalink:"/docs/getting-started/contribution_guidelines"}},s={},c=[{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Install from source",id:"install-from-source",level:2},{value:"Starter Kit Suite Docs",id:"starter-kit-suite-docs",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The GA4GH Starter Kit is not a single, monolithic application, rather it is a suite of tools, with each component in the toolset acting as a server application that fulfills a GA4GH API specification. Users can deploy only the required services for the standardized use case or data sharing scenario at hand."),(0,n.kt)("p",null,"This article provides a generic overview of how to install apps in the Starter Kit suite. For more detailed instructions on how to install and run a specific API, see the ",(0,n.kt)("a",{parentName:"p",href:"#starter-kit-suite-docs"},"table below"),"."),(0,n.kt)("h2",{id:"install-via-docker"},"Install via Docker"),(0,n.kt)("p",null,"We recommend using Starter Kit Docker images for all deployment contexts where Docker is allowed. Docker ensures that any software dependencies are pre-bundled within the container, eliminating the need to manually install and configure dependencies on the host machine."),(0,n.kt)("p",null,"We'll use ",(0,n.kt)("inlineCode",{parentName:"p"},"ga4gh-starter-kit-drs")," as an example, which implements the Data Repository Service (DRS) specification. To run the ",(0,n.kt)("inlineCode",{parentName:"p"},"ga4gh-starter-kit-drs")," application, we first pull the docker image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull ga4gh/ga4gh-starter-kit-drs:0.2.0\n")),(0,n.kt)("p",null,"Next, we can simply run the application with all default settings by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run ga4gh/ga4gh-starter-kit-drs:0.2.0\n")),(0,n.kt)("p",null,"That's it! A configuration file can be provided to the server application at runtime, modifying the server's behavior (such as the database it connects to). But that's too much to discuss here. See the ",(0,n.kt)("a",{parentName:"p",href:"#starter-kit-suite-docs"},"table below")," for more information on how to configure the specific Starter Kit APIs."),(0,n.kt)("p",null,"Feel free to check out our space on ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/orgs/ga4gh/repositories"},"Docker Hub")," for the full range of available Starter Kit Docker images (all Docker repos have the prefix ",(0,n.kt)("inlineCode",{parentName:"p"},"ga4gh-starter-kit")," in their name)."),(0,n.kt)("h2",{id:"install-from-source"},"Install from source"),(0,n.kt)("p",null,"If a docker-based setup is not possible for the deployment context, we also provide releases on Github. Each release contains the Java code that can build the application from source."),(0,n.kt)("p",null,"Again, let's use ",(0,n.kt)("inlineCode",{parentName:"p"},"ga4gh-starter-kit-drs")," as an example. If we look at the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ga4gh/ga4gh-starter-kit-drs/releases"},"releases")," page, we see a list of artifacts containing the source code. If we wish to build the ",(0,n.kt)("inlineCode",{parentName:"p"},"0.1.9")," release of ",(0,n.kt)("inlineCode",{parentName:"p"},"ga4gh-starter-kit-drs"),", we can download the artifact, and then run the following commands to build the Java archive (JAR):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tar -zxvf ga4gh-starter-kit-drs-0.1.9.tar.gz\ncd ga4gh-starter-kit-drs-0.1.9\n./gradlew bootJar\n")),(0,n.kt)("p",null,"We can then run the JAR by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java -jar build/libs/ga4gh-starter-kit-drs-0.1.9.jar\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Starter Kit Apps are currently tested on Java 12."),(0,n.kt)("h2",{id:"starter-kit-suite-docs"},"Starter Kit Suite Docs"),(0,n.kt)("p",null,"The following table links out to the full installation and configuration instructions for each of the Starter Kit microservice applications:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GA4GH Starter Kit DRS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../starter-kit-apis/drs/drs_overview"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GA4GH Starter Kit WES"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../starter-kit-apis/wes/wes_overview"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GA4GH Starter Kit Data Connect"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../starter-kit-apis/data_connect/data_connect_overview"},"Documentation"))))))}d.isMDXComponent=!0}}]);