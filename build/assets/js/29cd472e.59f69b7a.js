"use strict";(self.webpackChunkga4gh_starter_kit_docs=self.webpackChunkga4gh_starter_kit_docs||[]).push([[491],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_position:1},a="CNest workflow at EBI",l={unversionedId:"starter-kit-in-action/2021/cnest-workflow-ebi",id:"starter-kit-in-action/2021/cnest-workflow-ebi",title:"CNest workflow at EBI",description:"For this demo, we set up the Starter Kit implementations of WES and DRS on a mini-cluster at the European Bioinformatics Institute (EBI), resembling a massively scaled-down version of the core HPC cluster. We connected WES to a Slurm engine, and ran a novel Copy Number Variation and Association workflow, CNest, using API Calls to WES. DRS resolved paths to the input files on an NFS node, enabling us to run the workflow with DRS URIs as input rather than hardcoded paths.",source:"@site/docs/starter-kit-in-action/2021/cnest-workflow-ebi.md",sourceDirName:"starter-kit-in-action/2021",slug:"/starter-kit-in-action/2021/cnest-workflow-ebi",permalink:"/docs/starter-kit-in-action/2021/cnest-workflow-ebi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/starter-kit-in-action/2021/cnest-workflow-ebi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"In Action - Overview",permalink:"/docs/starter-kit-in-action/overview"}},s={},u=[{value:"The CNest Workflow",id:"the-cnest-workflow",level:2},{value:"Starter Kit Setup and Workflow Execution",id:"starter-kit-setup-and-workflow-execution",level:2},{value:"DRS Setup",id:"drs-setup",level:3},{value:"Workflow Submission",id:"workflow-submission",level:3},{value:"Outcomes",id:"outcomes",level:2},{value:"Future Directions",id:"future-directions",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cnest-workflow-at-ebi"},"CNest workflow at EBI"),(0,o.kt)("p",null,"For this demo, we set up the Starter Kit implementations of WES and DRS on a mini-cluster at the European Bioinformatics Institute (EBI), resembling a massively scaled-down version of the core HPC cluster. We connected WES to a Slurm engine, and ran a novel Copy Number Variation and Association workflow, ",(0,o.kt)("em",{parentName:"p"},"CNest"),", using API Calls to WES. DRS resolved paths to the input files on an NFS node, enabling us to run the workflow with DRS URIs as input rather than hardcoded paths."),(0,o.kt)("h2",{id:"the-cnest-workflow"},"The CNest Workflow"),(0,o.kt)("p",null,"CNest is a novel method for copy number variation (CNV) analysis from next generation sequencing (NGS) data. For more information about CNest, see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.biorxiv.org/content/10.1101/2021.08.19.456963v1"},"Fitzgerald, T. & Birney, E. (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tf2/CNest"},"CNest on Github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/smshuai/CNest-nf"},"Nextflow workflow wrapping CNest on Github"))),(0,o.kt)("h2",{id:"starter-kit-setup-and-workflow-execution"},"Starter Kit Setup and Workflow Execution"),(0,o.kt)("p",null,"As mentioned, the goal for this demo was to successfully run the Nextflow-based CNest workflow via a Slurm cluster backend, using API calls made to WES from a hypothetical researcher."),(0,o.kt)("p",null,"Given our requirements, EBI Cluster Services set up a mini-cluster of 4 nodes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"slurm-main"),": A main node functioning as the Slurm orchestrator, can delegate computational tasks to worker nodes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"slurm-node-1"),": A first Slurm worker node to perform jobs submitted to it by the main node "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"slurm-node-2"),": A second Slurm worker node, functionally identical to the first"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"slurm-nfs"),": A 30+ TB storage instance to store the input files (CRAMs and indexes) for the workflow")),(0,o.kt)("p",null,"WES and DRS instances were also spun up on the ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm-main")," node. ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm-main"),' thus acted as the "internet-facing" node for the cluster, receiving WES and DRS API calls from a remote researcher. Figure 1 displays a high-level overview of the mini-cluster architecture. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture Diagram",src:n(4556).Z,width:"1229",height:"843"}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure 1: Architecture of proof-of-concept mini-cluster used to run CNest workflow via Slurm using WES and DRS.")),(0,o.kt)("h3",{id:"drs-setup"},"DRS Setup"),(0,o.kt)("p",null,"The database backing the DRS instance was loaded with the following DRS Objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A single, root bundle, representing the root of the entire project dataset"),(0,o.kt)("li",{parentName:"ul"},"A bundle for each individual in the dataset, containing a child blob for each file associated with the individual"),(0,o.kt)("li",{parentName:"ul"},"A blob-based DRS Object for each CRAM file"),(0,o.kt)("li",{parentName:"ul"},"A blob-based DRS Object for each CRAM index (CRAI) file")),(0,o.kt)("p",null,"Each DRS Object representing a CRAM or CRAI file was associated with the file path to the raw data on the NFS node. This information was relayed back to the client as a ",(0,o.kt)("inlineCode",{parentName:"p"},"file://")," based ",(0,o.kt)("inlineCode",{parentName:"p"},"access_method")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_methods")," array. "),(0,o.kt)("h3",{id:"workflow-submission"},"Workflow Submission"),(0,o.kt)("p",null,"Workflow run submission was initially triggered by a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /runs")," API call to WES. "),(0,o.kt)("p",null,"For this demo, the researcher was not expected to have knowledge of raw file paths to input CRAM and CRAI files. Rather, they were assumed to have knowledge of the DRS URIs representing the DRS Objects for these inputs. The researcher thus submitted DRS URIs as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_params")," payload to WES."),(0,o.kt)("p",null,"Upon receiving the workflow run request, WES interpreted the DRS URI ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_params")," (i.e. starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"drs://"),") as requiring resolution. WES, acting as a client, made API calls to DRS, and resolved the file paths to the raw data (on the NFS node) based on the single ",(0,o.kt)("inlineCode",{parentName:"p"},"access_method")," returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DRSObject"),". WES staged the run by substituting in the resolved file paths as inputs to the Nextflow workflow."),(0,o.kt)("p",null,"Following this, the workflow was launched via Nextflow, using Slurm as the job engine. Figure 2 illustrates the downstream events triggered, such as input path resolution and run submission, by the initial researcher workflow request to WES."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Call Diagram",src:n(7555).Z,width:"2805",height:"1958"}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure 2: Steps to launching CNest workflow upon API call to WES, including input path resolution via DRS.")),(0,o.kt)("h2",{id:"outcomes"},"Outcomes"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Coming soon")),(0,o.kt)("h2",{id:"future-directions"},"Future Directions"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Coming soon")),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"The GA4GH Engineering Team would like to thank the following individuals for making this demo possible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tomas Fitzgerald"),(0,o.kt)("li",{parentName:"ul"},"Shimin Shuai"),(0,o.kt)("li",{parentName:"ul"},"Mohamed Alibi"),(0,o.kt)("li",{parentName:"ul"},"Rafa Grim\xe1n Canto"),(0,o.kt)("li",{parentName:"ul"},"Tim Dyce")))}d.isMDXComponent=!0},7555:function(e,t,n){t.Z=n.p+"assets/images/api-calls-be567faf7c42dfe8d9523f5d2130f922.png"},4556:function(e,t,n){t.Z=n.p+"assets/images/architecture-5120c2d4213e296ae2dc4cb05a6303dc.png"}}]);