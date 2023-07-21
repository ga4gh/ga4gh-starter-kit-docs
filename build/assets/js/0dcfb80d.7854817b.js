"use strict";(self.webpackChunkga4gh_starter_kit_docs=self.webpackChunkga4gh_starter_kit_docs||[]).push([[815],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:3},s="Run samtools view on WES with DRS URLs as input",i={unversionedId:"cookbooks/samtools-view-drs-wes/run-using-drs-urls",id:"cookbooks/samtools-view-drs-wes/run-using-drs-urls",title:"Run samtools view on WES with DRS URLs as input",description:"In the previous section, we used direct https:// URLs as input BAM files to the samtools view workflow. This is sufficient for multiple use cases, however, we may want to provide an indirect means of referencing workflow inputs, allowing the WES service to resolve the best paths to those inputs based on a number of criteria.",source:"@site/docs/cookbooks/samtools-view-drs-wes/run-using-drs-urls.md",sourceDirName:"cookbooks/samtools-view-drs-wes",slug:"/cookbooks/samtools-view-drs-wes/run-using-drs-urls",permalink:"/docs/cookbooks/samtools-view-drs-wes/run-using-drs-urls",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cookbooks/samtools-view-drs-wes/run-using-drs-urls.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run samtools view on WES with HTTP URLs as input",permalink:"/docs/cookbooks/samtools-view-drs-wes/run-using-http-urls"},next:{title:"In Action - Overview",permalink:"/docs/starter-kit-in-action/overview"}},l={},u=[{value:"Create DRS Objects via the UI",id:"create-drs-objects-via-the-ui",level:2},{value:"Navigate to the form",id:"navigate-to-the-form",level:3},{value:"Create the object",id:"create-the-object",level:3},{value:"Validate and inspect object",id:"validate-and-inspect-object",level:3},{value:"<code>self_uri</code>",id:"self_uri",level:4},{value:"<code>access_methods</code>",id:"access_methods",level:4},{value:"WES workflow run request",id:"wes-workflow-run-request",level:2},{value:"Submit workflow run",id:"submit-workflow-run",level:3},{value:"Monitor workflow run",id:"monitor-workflow-run",level:3},{value:"Summary",id:"summary",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-samtools-view-on-wes-with-drs-urls-as-input"},"Run samtools view on WES with DRS URLs as input"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./run-using-http-urls"},"previous section"),", we used ",(0,o.kt)("strong",{parentName:"p"},"direct")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," URLs as input BAM files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"samtools view")," workflow. This is sufficient for multiple use cases, however, we may want to provide an ",(0,o.kt)("strong",{parentName:"p"},"indirect")," means of referencing workflow inputs, allowing the WES service to ",(0,o.kt)("strong",{parentName:"p"},"resolve")," the best paths to those inputs based on a number of criteria."),(0,o.kt)("p",null,"The Data Repository Service (DRS) provides an indirection layer to data. Each ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object")," served by DRS contains some metadata about a set of bytes (e.g. an input file). ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object"),'s also provide one or more access methods to the raw file bytes. This allows multiple, identical copies of data to be stored on different cloud storage resources (e.g. AWS S3, Google Storage), and in different geographical regions. A resolving service (in this case, WES) can choose where to retrieve the raw data from based on its own capabilities. Different resolving (WES) services have the opportunity to choose the best "mirror" to access the data from. This could be based on regional proximity or supported cloud infrastructure. '),(0,o.kt)("p",null,"Let's run an API call to our DRS Service, requesting the ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object")," with an id of ",(0,o.kt)("inlineCode",{parentName:"p"},"0f8abce3-e161-4bdf-981f-86257d505d69"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:4502/ga4gh/drs/v1/objects/0f8abce3-e161-4bdf-981f-86257d505d69\n")),(0,o.kt)("p",null,"The response from this API call is a ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object")," in JSON format, which contains standardized attributes like ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", etc. In particular is the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_methods")," attribute, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    ...\n    "access_methods": [\n        {\n            "access_id": "b16b6733-5bf7-47c4-b029-a59b564cac23",\n            "type": "https"\n        },\n        {\n            "access_url": {\n                "url": "s3://ga4gh-demo-data/phenopackets/Cao-2018-TGFBR2-Patient_4.json"\n            },\n            "type": "s3",\n            "region": "us-east-2"\n        }\n    ]\n    ...\n}\n')),(0,o.kt)("p",null,"The returned ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object")," has 2 access methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"access_id")," that we can pass back to the server to get a properly formatted URL to the data."),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://")," formatted URL to the data.")),(0,o.kt)("p",null,"If we focus on (2), we see that the raw data for this ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Object")," is stored in an AWS S3 bucket. Any WES service that understands ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://")," URLs could resolve this to a direct HTTP(s) URL as a staging step prior to running the workflow."),(0,o.kt)("p",null,"The Starter Kit WES service is capable of resolving ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://")," URLs. If we set up the tabula muris BAM files as ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Objects"),", we can submit ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS IDs")," to WES as part of the workflow run request, and allow WES to resolve these to direct URLs."),(0,o.kt)("h2",{id:"create-drs-objects-via-the-ui"},"Create DRS Objects via the UI"),(0,o.kt)("h3",{id:"navigate-to-the-form"},"Navigate to the form"),(0,o.kt)("p",null,"Let's create ",(0,o.kt)("inlineCode",{parentName:"p"},"DRS Objects")," for some of the tabula muris BAM files. On a web browser, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4504"),' (where our UI is deployed), then click the following UI buttons to get to the "Create New DRS Object" form:'),(0,o.kt)("p",null,"Enter -> Services -> View -> DRS Objects -> New DRS Object"),(0,o.kt)("p",null,"You may also find the following video helpful to navigate to the form:"),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/video/cookbooks/samtools-view-drs-wes/SamtoolsViewDrsWes-NavigateToCreateForm.mp4",type:"video/mp4"})),(0,o.kt)("h3",{id:"create-the-object"},"Create the object"),(0,o.kt)("p",null,"On the form, we will create one DRS Object representing a single Tabula Muris BAM file stored on the public AWS S3 bucket (at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://s3.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam"),"). Let's enter the following information into the web UI fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Field Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"tabulamuris.A1-B000126-3_39_F-1-1_R1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"Tabula Muris FACS A1-B000126-3_39_F-1-1_R1 BAM file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"description"),(0,o.kt)("td",{parentName:"tr",align:null},"FACS BAM file from Tabula Muris dataset id A1-B000126-3_39_F-1-1_R1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"created time"),(0,o.kt)("td",{parentName:"tr",align:null},"(no update; leave as default)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"updated time"),(0,o.kt)("td",{parentName:"tr",align:null},"(no update; leave as default)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"version"),(0,o.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bundle or blob?"),(0,o.kt)("td",{parentName:"tr",align:null},"blob")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"size"),(0,o.kt)("td",{parentName:"tr",align:null},"29298050")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checksums ","[0]"),(0,o.kt)("td",{parentName:"tr",align:null},"type: md5, checksum: eadcf4e4a9f0b3508c186a3d59002d61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checksums ","[1]"),(0,o.kt)("td",{parentName:"tr",align:null},"type: sha1, checksum: a453b1d4efefa76a3f4f948cefc6853d1b5aa9b4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checksums ","[2]"),(0,o.kt)("td",{parentName:"tr",align:null},"type: sha256, checksum: 66eac14b2563e594030491caedc99160725a7d0d614f9db5ee888dd351e02430")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aws s3 access points ","[0]"),(0,o.kt)("td",{parentName:"tr",align:null},"region: us-east-1, bucket: czbiohub-tabula-muris, key: /facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam")))),(0,o.kt)("p",null,'Once all information has been entered, click "Submit" to create the object.'),(0,o.kt)("p",null,"The following video shows the creation of the DRS Object, followed by validation that the object was created:"),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/video/cookbooks/samtools-view-drs-wes/SamtoolsViewDrsWes-CreateDrsObject.mp4",type:"video/mp4"})),(0,o.kt)("h3",{id:"validate-and-inspect-object"},"Validate and inspect object"),(0,o.kt)("p",null,"Once we've submitted the new DRS Object, we can confirm that it is accessible from the DRS service via HTTP request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:4502/ga4gh/drs/v1/objects/tabulamuris.A1-B000126-3_39_F-1-1_R1\n")),(0,o.kt)("p",null,"should return the following response (",(0,o.kt)("inlineCode",{parentName:"p"},"created_time")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_time")," will be different): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "id": "tabulamuris.A1-B000126-3_39_F-1-1_R1",\n    "description": "FACS BAM file from Tabula Muris dataset id A1-B000126-3_39_F-1-1_R1",\n    "created_time": "2021-09-03T14:46:00Z",\n    "name": "Tabula Muris FACS A1-B000126-3_39_F-1-1_R1 BAM file",\n    "size": 29298050,\n    "updated_time": "2021-09-03T14:46:00Z",\n    "version": "1.0.0",\n    "checksums": [\n        {\n            "checksum": "a453b1d4efefa76a3f4f948cefc6853d1b5aa9b4",\n            "type": "sha1"\n        },\n        {\n            "checksum": "66eac14b2563e594030491caedc99160725a7d0d614f9db5ee888dd351e02430",\n            "type": "sha256"\n        },\n        {\n            "checksum": "eadcf4e4a9f0b3508c186a3d59002d61",\n            "type": "md5"\n        }\n    ],\n    "self_uri": "drs://drs-demo.ga4gh.org/tabulamuris.A1-B000126-3_39_F-1-1_R1",\n    "access_methods": [\n        {\n            "access_url": {\n                "url": "s3://czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam"\n            },\n            "type": "s3",\n            "region": "us-east-1"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Let's inspect both the ",(0,o.kt)("inlineCode",{parentName:"p"},"self_uri")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"access_methods")," attributes further, as they are most important for running the workflow on WES using DRS IDs as input:"),(0,o.kt)("h4",{id:"self_uri"},(0,o.kt)("inlineCode",{parentName:"h4"},"self_uri")),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"self_uri")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"drs://drs-demo.ga4gh.org/tabulamuris.A1-B000126-3_39_F-1-1_R1"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"drs://")," scheme indicates that this is a standardized DRS URI, in which both the server (",(0,o.kt)("inlineCode",{parentName:"p"},"drs-demo.ga4gh.org"),") and the object id (",(0,o.kt)("inlineCode",{parentName:"p"},"tabulamuris.A1-B000126-3_39_F-1-1_R1"),") are indicated. Any service that understands DRS URIs will be able to resolve this to an HTTP URL to obtain the corresponding DRS Object. The Starter Kit WES service can resolve DRS URIs."),(0,o.kt)("h4",{id:"access_methods"},(0,o.kt)("inlineCode",{parentName:"h4"},"access_methods")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"access_methods")," contains a single method pointing to the AWS S3 bucket and key to the BAM file. Again, the Starter Kit WES service can resolve ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://")," based URLs to ",(0,o.kt)("inlineCode",{parentName:"p"},"http(s)")," URLs to make them suitable as input to the workflow. "),(0,o.kt)("h2",{id:"wes-workflow-run-request"},"WES workflow run request"),(0,o.kt)("h3",{id:"submit-workflow-run"},"Submit workflow run"),(0,o.kt)("p",null,"We are ready to rerun our workflow. Now, instead of submitting the input HTTPS URL directly, we will submit the DRS URL as an input parameter to WES, and allow WES to resolve it."),(0,o.kt)("p",null,"Issue the following HTTP request:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method and URL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST http://localhost/ga4gh/wes/v1/runs\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Headers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Content-Type: multipart/form-data\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Form data (body)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workflow_type: NEXTFLOW\nworkflow_type_version: 21.04.0\nworkflow_url: https://github.com/jb-adams/samtools-view-count-nf\nworkflow_params: {"input": "drs://drs-demo.ga4gh.org/tabulamuris.A1-B000126-3_39_F-1-1_R1"}\n')),(0,o.kt)("p",null,"Note that compared to the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request from the previous section, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_params")," have changed."),(0,o.kt)("h3",{id:"monitor-workflow-run"},"Monitor workflow run"),(0,o.kt)("p",null,"If we give the workflow run a minute to complete, we can again monitor its status by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_id")," (in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"940f0c51-2dab-4e02-ab3a-92dfaf68d65f"),") to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /runs/{run_id}")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost/ga4gh/wes/v1/runs/940f0c51-2dab-4e02-ab3a-92dfaf68d65f\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "run_id": "940f0c51-2dab-4e02-ab3a-92dfaf68d65f",\n    "request": {\n        "workflow_params": {\n            "input": "drs://drs-demo.ga4gh.org/tabulamuris.A1-B000126-3_39_F-1-1_R1"\n        },\n        "workflow_type": "NEXTFLOW",\n        "workflow_type_version": "21.04.0",\n        "workflow_url": "https://github.com/jb-adams/samtools-view-count-nf"\n    },\n    "state": "COMPLETE",\n    "run_log": {\n        "name": "jb-adams/samtools-view-count-nf",\n        "cmd": [\n            "#!/bin/bash -ue",\n            "echo \\"Running samtools view on https://s3.us-east-1.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam\\" >&2",\n            "samtools view -c https://s3.us-east-1.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam"\n        ],\n        "start_time": "2021-09-02T19:15:33Z",\n        "end_time": "2021-09-02T19:15:43Z",\n        "stdout": "http://localhost/ga4gh/wes/v1/logs/nextflow/stdout/940f0c51-2dab-4e02-ab3a-92dfaf68d65f?workdirs=0a%2F0838ad17d4486bace1dc908e9e44ca",\n        "stderr": "http://localhost/ga4gh/wes/v1/logs/nextflow/stderr/940f0c51-2dab-4e02-ab3a-92dfaf68d65f?workdirs=0a%2F0838ad17d4486bace1dc908e9e44ca",\n        "exit_code": 0\n    },\n    "task_logs": [\n        {\n            "name": "samtools_view",\n            "cmd": [\n                "#!/bin/bash -ue",\n                "echo \\"Running samtools view on https://s3.us-east-1.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam\\" >&2",\n                "samtools view -c https://s3.us-east-1.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam"\n            ],\n            "start_time": "2021-09-02T19:15:33Z",\n            "end_time": "2021-09-02T19:15:43Z",\n            "stdout": "http://localhost/ga4gh/wes/v1/logs/nextflow/stdout/940f0c51-2dab-4e02-ab3a-92dfaf68d65f/0a/0838ad17d4486bace1dc908e9e44ca",\n            "stderr": "http://localhost/ga4gh/wes/v1/logs/nextflow/stderr/940f0c51-2dab-4e02-ab3a-92dfaf68d65f/0a/0838ad17d4486bace1dc908e9e44ca",\n            "exit_code": 0\n        }\n    ],\n    "outputs": {}\n}\n')),(0,o.kt)("p",null,"Just as before, the response payload tells us that the workflow run completed successfully. If we follow the URL at ",(0,o.kt)("inlineCode",{parentName:"p"},"run_log.stdout"),", we again see the expected read count of ",(0,o.kt)("inlineCode",{parentName:"p"},"848036")," printed to stdout."),(0,o.kt)("p",null,"But there's a key difference between this run and the run launched in the previous section. Let's look at original request parameters we submitted to WES, indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"request.workflow_params"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  ...\n  "request": {\n        "workflow_params": {\n            "input": "drs://drs-demo.ga4gh.org/tabulamuris.A1-B000126-3_39_F-1-1_R1"\n        },\n        ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Here, we see the DRS URL (representing our DRS Object) we submitted. However, when we look at the raw workflow commands under ",(0,o.kt)("inlineCode",{parentName:"p"},"run_log.cmd"),", we see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"samtools view -c https://s3.us-east-1.amazonaws.com/czbiohub-tabula-muris/facs_bam_files/A1-B000126-3_39_F-1-1_R1.mus.Aligned.out.sorted.bam\n")),(0,o.kt)("p",null,"How did WES know to run the workflow using that BAM file URL? Simply put, the WES service performed 2 URL resolutions prior to running the workflow on the ",(0,o.kt)("inlineCode",{parentName:"p"},"drs://")," URL. First, to lookup the contents of the DRS Object, and second, to resolve the S3 access method it found into the final HTTPS URL."),(0,o.kt)("p",null,"While we only explored the resolution of ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://")," URLs, the DRS specification supports many URL schemes (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"file://"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gs://"),"), giving data providers flexibility over the access methods they can support, and giving WES implementations choice over which access method(s) to make use of."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this cookbook, we explored how to use WES and DRS to launch a simple workflow using only HTTP requests. First, by submitting direct URLs as input parameters, and second, by submitting DRS URLs and allowing WES to resolve the DRS Object to a raw URL for fetching bytes."),(0,o.kt)("p",null,"If you wish to explore the concepts covered in this cookbook further, you could:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create more DRS Objects based on the ",(0,o.kt)("a",{parentName:"li",href:"./run-using-http-urls#run-workflow-with-different-inputs"},"table of Tabula Muris S3 BAM objects"),". Register one DRS Object per BAM file via the UI, and attempt to run the workflow using the resulting DRS URL as input. Validate the workflow run outputs the correct number of reads."),(0,o.kt)("li",{parentName:"ol"},"Attempt to run your own Nextflow workflow via WES. Currently, Nextflow workflows tracked on Github can be submitted to Starter Kit WES with one of the following URL structures:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/{user/org}/{repository}")," - runs the workflow at the default branch (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"main"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/{user/org}/{repository}/tree/{branch}")," runs the workflow at the specified branch")))),(0,o.kt)("p",null,"Return to ",(0,o.kt)("a",{parentName:"p",href:"../intro"},"cookbook intro")," to explore more cookbooks."))}c.isMDXComponent=!0}}]);