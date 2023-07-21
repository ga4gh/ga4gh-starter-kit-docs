"use strict";(self.webpackChunkga4gh_starter_kit_docs=self.webpackChunkga4gh_starter_kit_docs||[]).push([[184],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return a?n.createElement(b,i(i({ref:t},l),{},{components:a})):n.createElement(b,i({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6876:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905));const s={sidebar_position:3},i="Starter Kit DRS Test Dataset",o={unversionedId:"starter-kit-apis/drs/drs_test_dataset",id:"starter-kit-apis/drs/drs_test_dataset",title:"Starter Kit DRS Test Dataset",description:"The Starter Kit DRS docker image comes prebundled with a test dataset. The test dataset will be served via the DRS API if no overriding database connection is provided. In this section we will confirm that we can execute HTTP requests to a running Starter Kit DRS service and receive the expected response.",source:"@site/docs/starter-kit-apis/drs/drs_test_dataset.md",sourceDirName:"starter-kit-apis/drs",slug:"/starter-kit-apis/drs/drs_test_dataset",permalink:"/docs/starter-kit-apis/drs/drs_test_dataset",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/starter-kit-apis/drs/drs_test_dataset.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Starter Kit DRS Configuration",permalink:"/docs/starter-kit-apis/drs/drs_configuration"},next:{title:"Editing DRS models via UI",permalink:"/docs/starter-kit-apis/drs/drs_starter_kit_ui"}},c={},d=[{value:"Test HTTP Requests",id:"test-http-requests",level:2},{value:"Test Datasets",id:"test-datasets",level:2},{value:"Test Dataset: Open dataset of 384 Phenopackets",id:"test-dataset-open-dataset-of-384-phenopackets",level:3},{value:"DRS IDs",id:"drs-ids",level:4}],l={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"starter-kit-drs-test-dataset"},"Starter Kit DRS Test Dataset"),(0,r.kt)("p",null,"The Starter Kit DRS docker image comes prebundled with a test dataset. The test dataset will be served via the DRS API if no overriding database connection is provided. In this section we will confirm that we can execute HTTP requests to a running Starter Kit DRS service and receive the expected response."),(0,r.kt)("h2",{id:"test-http-requests"},"Test HTTP Requests"),(0,r.kt)("p",null,"Assuming you have a ",(0,r.kt)("strong",{parentName:"p"},"Starter Kit DRS service running locally with all default properties"),", you may use the following test ID to confirm the service is running as expected: ",(0,r.kt)("inlineCode",{parentName:"p"},"b8cd0667-2c33-4c9f-967b-161b905932c9")),(0,r.kt)("p",null,"Using your preferred API testing tool (e.g. Postman), issue the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:4500/ga4gh/drs/v1/objects/b8cd0667-2c33-4c9f-967b-161b905932c9\n")),(0,r.kt)("p",null,"You should receive a response with a status of ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),", and a response body resembling the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": "b8cd0667-2c33-4c9f-967b-161b905932c9",\n    "description": "Open dataset of 384 phenopackets",\n    "created_time": "2021-03-12T20:00:00Z",\n    "name": "phenopackets.test.dataset",\n    "size": 143601,\n    "updated_time": "2021-03-13T12:30:45Z",\n    "version": "1.0.0",\n    "checksums": [\n        {\n            "checksum": "8711d59ca4264b3e3d0ce16349d94d0ab8ce493e",\n            "type": "sha1"\n        },\n        {\n            "checksum": "930014c944b655323ade3f4b239178022bfb5443ef6b280a7d7d69292867d010",\n            "type": "sha256"\n        },\n        {\n            "checksum": "938b077a59b11ad6e5958f9f34148f18",\n            "type": "md5"\n        }\n    ],\n    "self_uri": "drs://localhost:4500/b8cd0667-2c33-4c9f-967b-161b905932c9",\n    "contents": [\n        {\n            "name": "phenopackets.mundhofir.family",\n            "drs_uri": [\n                "drs://localhost:4500/1af5cdcf-898c-4dbc-944e-1ac95e82c0ea"\n            ],\n            "id": "1af5cdcf-898c-4dbc-944e-1ac95e82c0ea"\n        },\n        {\n            "name": "phenopackets.zhang.family",\n            "drs_uri": [\n                "drs://localhost:4500/355a74bd-6571-4d4a-8602-a9989936717f"\n            ],\n            "id": "355a74bd-6571-4d4a-8602-a9989936717f"\n        },\n        {\n            "name": "phenopackets.cao.family",\n            "drs_uri": [\n                "drs://localhost:4500/a1dd4ae2-8d26-43b0-a199-342b64c7dff6"\n            ],\n            "id": "a1dd4ae2-8d26-43b0-a199-342b64c7dff6"\n        },\n        {\n            "name": "phenopackets.lalani.family",\n            "drs_uri": [\n                "drs://localhost:4500/c69a3d6c-4a28-4b7c-b215-0782f8d62429"\n            ],\n            "id": "c69a3d6c-4a28-4b7c-b215-0782f8d62429"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can also hit the Service Info endpoint by issuing the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:4500/ga4gh/drs/v1/service-info\n")),(0,r.kt)("p",null,"Again, you should receive a response with a status of ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),", and a response body containing information about the service according to the Service Info standard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": "org.ga4gh.starterkit.drs",\n    "name": "GA4GH Starter Kit DRS Service",\n    "description": "An open source, community-driven implementation of the GA4GH Data Repository Service (DRS) API specification.",\n    "contactUrl": "mailto:info@ga4gh.org",\n    "documentationUrl": "https://github.com/ga4gh/ga4gh-starter-kit-drs",\n    "createdAt": "2020-01-15T12:00:00Z",\n    "updatedAt": "2020-01-15T12:00:00Z",\n    "environment": "test",\n    "version": "0.1.0",\n    "type": {\n        "group": "org.ga4gh",\n        "artifact": "drs",\n        "version": "1.1.0"\n    },\n    "organization": {\n        "name": "Global Alliance for Genomics and Health",\n        "url": "https://ga4gh.org"\n    }\n}\n')),(0,r.kt)("h2",{id:"test-datasets"},"Test Datasets"),(0,r.kt)("p",null,"The following datasets / DRS IDs are ideal to begin experimenting with Starter Kit DRS."),(0,r.kt)("h3",{id:"test-dataset-open-dataset-of-384-phenopackets"},"Test Dataset: Open dataset of 384 Phenopackets"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/32755546/"},"Paper"),", ",(0,r.kt)("a",{parentName:"p",href:"https://zenodo.org/record/3905420#.YArkBzpKhPZ"},"Dataset homepage")),(0,r.kt)("p",null,"A subset of the 384 Phenopackets has been applied to the test database. A single root ",(0,r.kt)("inlineCode",{parentName:"p"},"DRS bundle")," (ID: ",(0,r.kt)("inlineCode",{parentName:"p"},"b8cd0667-2c33-4c9f-967b-161b905932c9"),") contains the entire Phenopacket data subset. Intermediate bundles representing all Phenopackets for a single family have also been created."),(0,r.kt)("h4",{id:"drs-ids"},"DRS IDs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"b8cd0667-2c33-4c9f-967b-161b905932c9"),(0,r.kt)("li",{parentName:"ul"},"a1dd4ae2-8d26-43b0-a199-342b64c7dff6"),(0,r.kt)("li",{parentName:"ul"},"1a570e4e-2489-4218-9333-f65549495872"),(0,r.kt)("li",{parentName:"ul"},"4d83ba3f-a476-4c7c-868f-3d1fcf77fe29"),(0,r.kt)("li",{parentName:"ul"},"924901d5-6d31-4c33-b443-7931eadfac4b"),(0,r.kt)("li",{parentName:"ul"},"0f8abce3-e161-4bdf-981f-86257d505d69"),(0,r.kt)("li",{parentName:"ul"},"c69a3d6c-4a28-4b7c-b215-0782f8d62429"),(0,r.kt)("li",{parentName:"ul"},"456e9ee0-5b60-4f38-82b5-83ba5d338038"),(0,r.kt)("li",{parentName:"ul"},"1af6b862-7fc8-411a-86c5-d8e280e5b77a"),(0,r.kt)("li",{parentName:"ul"},"c37b37fd-0450-432d-b6aa-9ffdece35ad0"),(0,r.kt)("li",{parentName:"ul"},"0bb9d297-2710-48f6-ab4d-80d5eb0c9eaa"),(0,r.kt)("li",{parentName:"ul"},"a3bb76d7-76ae-414b-81f7-97e663b02206"),(0,r.kt)("li",{parentName:"ul"},"1af5cdcf-898c-4dbc-944e-1ac95e82c0ea"),(0,r.kt)("li",{parentName:"ul"},"2506f0e1-29e4-4132-9b37-f7452dc8a89b"),(0,r.kt)("li",{parentName:"ul"},"c00c264a-8f17-471f-8ded-1a1f10e965ac"),(0,r.kt)("li",{parentName:"ul"},"355a74bd-6571-4d4a-8602-a9989936717f"),(0,r.kt)("li",{parentName:"ul"},"697907bf-d5bd-433e-aac2-1747f1faf366"),(0,r.kt)("li",{parentName:"ul"},"3a45fab2-f350-445d-a137-4b1f946bf184"),(0,r.kt)("li",{parentName:"ul"},"ac53ca59-46f3-4f61-b1e7-bb75a49bfbfe"),(0,r.kt)("li",{parentName:"ul"},"1275f896-4c8f-47e1-99a1-873a6b2ef5fb"),(0,r.kt)("li",{parentName:"ul"},"8f40acc0-0c54-45c5-8c85-a6f5fb32a1a7"),(0,r.kt)("li",{parentName:"ul"},"41898242-62a9-4129-9a2c-5a4e8f5f0afb"),(0,r.kt)("li",{parentName:"ul"},"6b994f18-6189-4233-bb83-139686490d68")))}u.isMDXComponent=!0}}]);