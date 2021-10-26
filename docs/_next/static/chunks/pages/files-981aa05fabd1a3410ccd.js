(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{60954:function(e,n,t){"use strict";var r,i=t(52209),o=t(92809),a=t(67294),l=t(48237),s=t(29163),c=t(85893);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=a.memo((0,s.ZP)((function(e){return(0,c.jsx)(l.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}))(r||(r=(0,i.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},60649:function(e,n,t){"use strict";var r,i=t(52209),o=t(67294),a=t(76736),l=t(35766),s=t(14309),c=t(8736),u=t(94983),d=t(65382),p=t(11163),f=t(94184),m=t.n(f),g=t(29163),h=t(85893),v=[{path:"/files",icon:"file outline",name:"Upload"},{path:"/docs",icon:"file alternate outline",name:"Docs"},{path:"/setting",icon:"setting",name:"Setting"}];n.Z=o.memo((0,g.ZP)((function(e){var n=(0,p.useRouter)(),t=(0,o.useCallback)((function(t,r){var i=r.index,o=v[i];o.path!==e.path&&n.push(o.path)}),[e.path]);return(0,h.jsxs)(a.Z.Pushable,{as:l.Z,className:m()(e.className,"basic"),children:[(0,h.jsx)(a.Z,{as:l.Z,animation:"push",direction:"left",visible:!0,className:"font1 basic",children:(0,h.jsxs)(s.Z,{textAlign:"center",children:[(0,h.jsx)(s.Z.Row,{columns:1,className:"logoPanel",children:(0,h.jsx)(c.Z,{size:"small",src:"/images/crust_box2x.png"})}),(0,h.jsx)(s.Z.Row,{columns:1,children:(0,h.jsx)(u.Z,{fluid:!0,vertical:!0,borderless:!0,children:v.map((function(n,r){return(0,h.jsx)(u.Z.Item,{position:"left",index:r,active:n.path===e.path,icon:(0,h.jsx)(d.Z,{name:n.icon}),name:n.name,onClick:t,className:"font1"},"side_menu_".concat(r))}))})})]})}),(0,h.jsx)(a.Z.Pusher,{children:e.children})]})}))(r||(r=(0,i.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    .logoPanel {\n      padding: 2rem 0;\n    }\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n\n        &.active {\n          color: var(--main-color);\n        }\n\n        .icon {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - 260px);\n    height: 100vh;\n    overflow: auto !important;\n    background: white;\n  }\n"]))))},56290:function(e,n,t){"use strict";var r,i=t(52209),o=t(67294),a=t(35766),l=t(88188),s=t(4838),c=t(99816),u=t(29163),d=t(85893);function p(e){switch(e){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";default:return""}}n.Z=o.memo((0,u.ZP)((function(e){var n,t=(0,c.WY)(),r=(0,o.useCallback)(t.logout,[t]);return(0,d.jsx)(a.Z,{basic:!0,textAlign:"right",className:e.className,style:{borderBottom:"2px solid #eeeeee"},children:(0,d.jsx)(l.Z.Group,{children:(0,d.jsxs)(l.Z,{style:{justifyContent:"flex-end"},children:[(0,d.jsx)(l.Z.Image,{src:p(t.wallet),size:"tiny"}),(0,d.jsx)(l.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.5rem"},children:(0,d.jsx)(s.Z,{text:(n=t.account,n.length<=8?n:"".concat(n.substr(0,4),"...").concat(n.substr(n.length-4,4))),children:(0,d.jsx)(s.Z.Menu,{children:(0,d.jsx)(s.Z.Item,{text:"Logout",onClick:r})})})})]})})})}))(r||(r=(0,i.Z)(['\n  border-bottom: 2px solid #eeeeee;\n  margin: unset !important;\n\n  .ui.dropdown {\n    .text {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.3rem;\n    }\n  }\n']))))},20478:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});var r=t(67294),i=t(12752),o=t(20640),a=t.n(o);function l(){var e=(0,r.useContext)(i.I).alert;return(0,r.useCallback)((function(n){a()(n),e.alert({msg:"Copied",type:"success"})}),[e])}},65058:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var r=t(67294);function i(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useState)(e),t=n[0],i=n[1],o=(0,r.useCallback)((function(e){i(void 0!==e?e:function(e){return!e})}),[]);return[t,o]}},96006:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return fe}});var r=t(52209),i=t(83789),o=t(80318),a=t(67294),l=t(99816),s=t(35766),c=t(86419),u=t(1300),d=t(71416),p=t(23499),f=t(60649),m=t(93162),g=t.n(m),h=t(92809),v=t(30266),b=t(809),x=t.n(b),j=t(9669),y=t.n(j);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(){var e=(0,p.$)().t,n=(0,a.useMemo)((function(){return function(e){return[{location:e("Singapore"),text:e("DCF"),value:"https://crustipfs.xyz",group:"Public Gateway"},{location:e("United States"),text:e("Crust Network"),value:"https://crustwebsites.net",group:"Public Gateway"},{location:e("United States"),text:e("Crust Network"),value:"https://ipfs-gw.decloud.foundation",group:"Public Gateway"},{location:e("\ufe0f2.5x speed up"),text:e("\ufe0f\u26a1 Thunder Gateway"),value:"https://gw.crustapps.net",group:"Thunder Gateway"}]}(e).map((function(e){var n,t;return Z(Z({},e),{},{text:"".concat(null!==(n=e.text)&&void 0!==n?n:"","(").concat(null!==(t=e.location)&&void 0!==t?t:"",")")})}))}),[e]),t=(0,a.useMemo)((function(){return Math.floor(Math.random()*(n.length-2))}),[]),r=(0,a.useState)(n[t]),i=r[0],o=r[1],l=(0,a.useCallback)((function(e,t){var r=t.value,i=n.find((function(e){return e.value===r}));i&&o(i)}),[n]);return(0,a.useMemo)((function(){return{endpoints:n,endpoint:i,setEndpoint:o,onChangeEndpoint:l}}),[n,i,l])}var C=t(345),P=t(73626),O=t(28258),S=t(37838),N=t(29163),A=t(65382),_=t(28803),E=t(65058);var F,z=t(96486),I=t.n(z),T=t(94184),D=t.n(T),H=t(85893),M="_null",R=function(e){var n=e.expand,t=e.list,r=e.group,i=e.select,o=e.onClickItem,a=e.onClickGroup,l=e.renderGroupTitle,s=void 0===l?null:l,c=r===i.group;return(0,H.jsxs)("div",{className:"group",children:[r!==M&&(s&&s({group:r,select:i,onClickGroup:a})||(0,H.jsxs)("div",{className:D()("title",{active:c}),onClick:a,children:[r," ",(0,H.jsx)(A.Z,{className:"dropIcon",name:"dropdown"})]})),n&&t.map((function(e,n){return(0,H.jsx)("div",{className:D()("item",{active:c&&e.value===i.value}),onClick:function(n){return o(n,{group:r,value:e.value})},children:e.text},"group_item_".concat(n))}))]})};var G,U=a.memo((0,N.ZP)((function(e){var n,t=e.className,r=e.label,i=e.help,l=e.options,s=e.defaultValue,c=e.defaultGroup,u=void 0===c?M:c,d=e.renderGroupTitle,p=(0,a.useState)({value:s,group:u}),f=p[0],m=p[1],g=(0,a.useMemo)((function(){return I().find(l,(function(e){return(e.group||M)===f.group&&e.value===f.value}))}),[l,f]),h=(0,a.useState)(u),v=h[0],b=h[1],x=(0,E.O)(),j=(0,o.Z)(x,2),y=j[0],w=j[1],Z=function(e){var n=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t,r=function(t){n.current&&n.current!==t.target&&!n.current.contains(t.target)&&e&&e(t)};return null===(t=document)||void 0===t||t.addEventListener("mouseup",r),function(){var e;null===(e=document)||void 0===e||e.removeEventListener("mouseup",r)}}),[n.current]),n}((function(){y&&w(!1)})),k=(0,a.useMemo)((function(){return I().groupBy(l,(function(e){return e.group||M}))}),[l]),C=I().keys(k);return(0,H.jsxs)("div",{className:t,onClick:function(){return w()},ref:Z,children:[r&&(0,H.jsxs)("div",{className:"label",children:[r,i&&(0,H.jsx)(_.Z,{position:"top center",trigger:(0,H.jsx)(A.Z,{name:"question circle outline"}),content:i}),(0,H.jsx)(A.Z,{name:"dropdown",className:"dropIcon"})]}),(0,H.jsx)("div",{className:"text",children:null!==(n=null===g||void 0===g?void 0:g.text)&&void 0!==n?n:""}),y&&(0,H.jsx)("div",{className:"options",children:C.map((function(n,t){return(0,H.jsx)(R,{group:n,renderGroupTitle:d,select:f,expand:v===n||n===M,list:k[n],onClickGroup:function(e){b(v===n?M:n),e.stopPropagation()},onClickItem:function(n,t){m(t),e.onChange(n,t)}},"group_".concat(t))}))})]})}))(F||(F=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid var(--line-color);\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n\n  .label {\n    font-size: 1.3rem;\n    white-space: nowrap;\n    color: var(--main-color);\n    margin-bottom: 0.6rem;\n\n    .icon {\n      margin-left: 0.5rem;\n      cursor: pointer;\n    }\n\n    .dropIcon {\n      float: right;\n      right: 0.6rem;\n    }\n  }\n\n  .text {\n    font-size: 1rem;\n    color: var(--secend-color);\n  }\n\n  .options {\n    width: 100%;\n    background: white;\n    position: absolute;\n    top: calc(100% + 1px);\n    left: 0;\n    z-index: 10;\n    border-radius: 4px;\n    border: 1px solid var(--line-color);\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\n\n    .group {\n\n      .title {\n        cursor: pointer;\n        border-top: 1px solid var(--line-color);\n        padding: 0.8rem 1rem;\n        font-size: 1.2rem;\n        font-weight: 500;\n\n        &:hover, &.active {\n          background: var(--line-color);\n        }\n\n        .dropIcon {\n          float: right;\n          right: 0.6rem;\n        }\n      }\n\n      .item {\n        padding: 0.6rem 1.6rem;\n        cursor: pointer;\n\n        &:hover, &.active {\n          background: var(--line-color);\n        }\n      }\n    }\n  }\n"])))),L=t(60954);function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var V=function(){};var q=a.memo((0,N.ZP)((function(e){var n=e.className,t=e.file,r=e.onClose,i=void 0===r?V:r,s=e.onSuccess,c=void 0===s?V:s,u=e.user,d=(0,p.$)().t,f=k(),m=f.endpoint,g=f.endpoints,h=f.onChangeEndpoint,b=function(){var e=(0,p.$)().t,n=(0,a.useMemo)((function(){return function(e){return[{text:e("Crust Pinner"),value:"https://pin.crustcode.com"}]}(e).sort((function(){return Math.random()>.5?-1:1})).map((function(e){var n;return Z(Z({},e),{},{text:"".concat(null!==(n=e.text)&&void 0!==n?n:"Pinner")})}))}),[e]),t=(0,a.useState)(n[0]),r=t[0],i=t[1],o=(0,a.useCallback)((function(e,t){var r=t.value,o=n.find((function(e){return e.value===r}));o&&i(o)}),[n]);return(0,a.useMemo)((function(){return{pinner:r,pins:n,setPinner:i,onChangePinner:o}}),[r,n,o])}(),j=b.onChangePinner,w=b.pinner,N=b.pins,A=(0,a.useState)(""),_=A[0],F=(A[1],(0,a.useState)(!1)),z=F[0],I=F[1],T=(0,a.useMemo)((function(){var e=104857600;if(t.file)return t.file.size>e;if(t.files){var n,r=0,i=W(t.files);try{for(i.s();!(n=i.n()).done;){r+=n.value.size}}catch(o){i.e(o)}finally{i.f()}return r>e}return!1}),[t]),D=(0,a.useState)(""),M=D[0],R=D[1],G=T?d("Do not upload files larger than 100MB!"):M,B=(0,a.useState)({progress:0,up:!1}),$=B[0],q=B[1],Y=(0,a.useState)(null),X=Y[0],K=Y[1],Q=(0,a.useCallback)((function(){X&&X.cancel(),i()}),[X,i]),ee=(0,a.useCallback)((0,v.Z)(x().mark((function e(){var n,r,i,o,a,s,p,f,g,h,v,b,j,Z,k,C,P,O,S;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(""),u.account&&u.sign){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,I(!0),n=(0,l.WJ)(u),r="near"===u.wallet?u.pubKey||"":u.account,e.next=9,u.sign(r,u.account);case 9:if(i=e.sent,o="elrond"===u.wallet?i:"".concat(n,"-").concat(r,":").concat(i),a=window.btoa(o),s="Basic ".concat(a),p="Bearer ".concat(a),f=y().CancelToken.source(),K(f),q({progress:0,up:!0}),g=new FormData,t.file)g.append("file",t.file,t.file.name);else if(t.files){h=W(t.files);try{for(h.s();!(v=h.n()).done;)b=v.value,g.append("file",b,b.webkitRelativePath)}catch(x){h.e(x)}finally{h.f()}}return j=m.value,e.next=22,y().request({cancelToken:f.token,data:g,headers:{Authorization:s},maxContentLength:104857600,method:"POST",onUploadProgress:function(e){var n=e.loaded/e.total;q({progress:Math.round(99*n),up:!0})},params:{pin:!0},url:"".concat(j,"/api/v0/add")});case 22:return"string"===typeof(Z=e.sent).data?(C=Z.data.replaceAll("}\n{","},{"),P=JSON.parse("[".concat(C,"]")),O=P.length-1,k=P[O],delete P[O],k.items=P):k=Z.data,console.info("upResult:",Z),K(null),q({progress:100,up:!1}),S=w.value,e.next=30,y().request({data:{cid:k.Hash,name:k.Name},headers:{Authorization:p},method:"POST",url:"".concat(S,"/psa/pins")});case 30:c(J(J({},k),{},{PinEndpoint:S,PinTime:(new Date).getTime(),UpEndpoint:j})),e.next=39;break;case 33:e.prev=33,e.t0=e.catch(3),q({progress:0,up:!1}),I(!1),console.error(e.t0),R(d("Network Error,Please try to switch a Gateway."));case 39:case"end":return e.stop()}}),e,null,[[3,33]])}))),[u,t,_,w,m,c,d]),ne=(0,E.O)(),te=(0,o.Z)(ne,2),re=te[0],ie=te[1];return(0,H.jsxs)(C.Z,{closeIcon:!0,onClose:Q,open:!0,size:"large",className:n,children:[(0,H.jsx)(C.Z.Header,{children:d(t.dir?"Upload Folder":"Upload File")}),(0,H.jsxs)(C.Z.Content,{children:[(0,H.jsxs)(P.Z.Group,{children:[(0,H.jsx)(P.Z,{fluid:!0,children:(0,H.jsxs)(P.Z.Content,{children:[(0,H.jsx)(P.Z.Header,{content:t.dir?"Folder":"File"}),(0,H.jsx)(P.Z.Description,{content:t.dir?"".concat(t.dir," (").concat(t.files.length," files)"):"".concat(t.file.name," (").concat(t.file.size," bytes)")})]})}),(0,H.jsx)(P.Z,{fluid:!0,children:(0,H.jsx)(U,{fluid:!0,selection:!0,help:d("File streaming and wallet authentication will be processed by the chosen gateway."),disabled:z,label:d("Select a Web3 IPFS Gateway"),onChange:h,options:g,defaultGroup:m.group,defaultValue:m.value})}),(0,H.jsx)(P.Z,{fluid:!0,children:(0,H.jsx)(U,{fluid:!0,selection:!0,help:d("Your file will be pinned to IPFS for long-term storage."),disabled:0===N.length,label:d("Select a Web3 IPFS Pinner"),onChange:j,options:N,defaultValue:w.value})}),(0,H.jsx)(P.Z,{fluid:!0,className:"encryption",children:(0,H.jsxs)(P.Z.Content,{children:[(0,H.jsx)(P.Z.Header,{content:"File Encryption"}),(0,H.jsx)(P.Z.Description,{content:re?"Yes":"No"}),(0,H.jsx)(O.Z,{toggle:!0,defaultChecked:re,onChange:function(){return ie()}})]})})]}),G&&(0,H.jsx)("div",{style:{color:"orangered",padding:"1rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:G})]}),(0,H.jsx)(C.Z.Actions,{children:(0,H.jsxs)("div",{className:"uploading",children:[$.up&&(0,H.jsx)(S.Z,{value:$.progress,total:100,active:!0,color:"orange"}),$.up&&(0,H.jsx)(L.Z,{children:d("Cancel")}),!$.up&&(0,H.jsx)(L.Z,{fluid:!0,onClick:ee,children:d("Sing and Upload")})]})})]})}))(G||(G=(0,r.Z)(['\n\n  .header:nth-child(2) {\n    height: 3.36rem;\n    font-size: 1rem !important;\n    padding: 0 1rem !important;\n    font-weight: unset !important;\n    line-height: 3.36rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n  }\n\n  .ui.cards > .card {\n    margin: 0.5rem !important;\n\n    .content > .header {\n      font-size: 1.14rem;\n      font-weight: unset !important;\n    }\n\n    .content > .description {\n      font-size: 1rem;\n    }\n  }\n\n  .ui.cards > .card:first-child {\n    margin-top: 1rem !important;\n  }\n\n  .actions {\n    height: 4.8rem;\n    padding: 0.5rem 1rem 0 1rem !important;\n    border-top: unset !important;\n    background: unset !important;\n\n    .button {\n      margin-left: unset !important;\n    }\n  }\n\n  .uploading {\n    height: 4rem;\n    display: flex;\n    align-items: center;\n\n    .progress {\n      margin: 0 1rem 0 0 !important;\n      vertical-align: baseline;\n      background: unset !important;\n      border: 1px solid orange;\n      flex: 1;\n\n      .bar {\n        min-width: unset !important;\n        height: 2.5rem;\n      }\n    }\n  }\n\n  .card.encryption {\n    position: relative;\n\n    .toggle {\n      position: absolute;\n      top: calc(50% - 0.75rem);\n      right: 1rem;\n\n      input[type="radio"]:checked + label:before {\n        background-color: #2ED158 !important;\n      }\n    }\n  }\n'])))),Y=t(12752),X=t(56290);var K,Q=t(56755),ee=t.n(Q),ne=t(20478),te=t(66103),re=t(98278);function ie(e){return e}function oe(e){e.current.isActive=!1,e.current.subscriber&&(e.current.subscriber.then((function(e){return e()})).catch(console.error),e.current.subscriber=null)}function ae(e,n,t){var r=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),l=(0,a.useRef)({isActive:!1,serialized:null,subscriber:null}),s=(0,a.useState)((t||{}).defaultValue),c=s[0],u=s[1];return(0,a.useEffect)((function(){return function(){return oe(l)}}),[]),(0,a.useEffect)((function(){if(r.current&&e){var a=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).paramMap,r=void 0===t?ie:t;return[JSON.stringify({f:null===e||void 0===e?void 0:e.name,p:n}),0!==n.length&&n.some((function(e){return(0,te.F)(e)||(0,re.o)(e)}))?null:r(n)]}(e,n||[],t),s=(0,o.Z)(a,2),c=s[0],d=s[1];d&&c!==l.current.serialized&&(l.current.serialized=c,function(e,n,t,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=a.transform,s=void 0===l?ie:l,c=a.withParams,u=a.withParamsTransform,d=r.filter((function(e){return!(0,re.o)(e)}));oe(n),setTimeout((function(){var a;e.current&&(!t||t.meta&&null!==(a=t.meta.type)&&void 0!==a&&a.isDoubleMap&&2!==d.length?n.current.subscriber=null:(n.current.isActive=!0,n.current.subscriber=t.apply(void 0,(0,i.Z)(r).concat([function(t){e.current&&n.current.isActive&&e.current&&n.current.isActive&&o(c?[r,s(t)]:s(u?[r,t]:t))}]))))}),0)}(r,l,e,d,u,t))}}),[e,t,r,n]),c}function le(e,n){var t=n.find((function(n){return n.value===e.UpEndpoint})),r=t&&t.value||n[0].value;return"".concat(r,"/ipfs/").concat(e.Hash,"?filename=").concat(e.Name)}var se=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e.length>2*n?"".concat(e.substr(0,n),"...").concat(e.substr(e.length-n)):e};var ce,ue=a.memo((0,N.ZP)((function(e){var n,t,r=e.file,i=e.className,o=(0,ne.V)(),l=(0,a.useContext)(Y.I).api,s=k().endpoints,c=(0,a.useCallback)((function(){return o(le(r,s))}),[r,s]),d=l&&(null===(n=l.query)||void 0===n?void 0:n.market)&&(null===(t=l.query)||void 0===t?void 0:t.market.files),p=!!d,f=ae(d,[r.Hash]),m=ae(l&&l.derive.chain.bestNumber);m=m&&JSON.parse(JSON.stringify(m));var g={status:"Loading"};if(f){var h=JSON.parse(JSON.stringify(f));if(h){var v=h.expired_at,b=h.reported_replica_count;g.expireTime=h.expired_at,g.amount=h.amount,g.startTime=h.expired_at?h.expired_at-216e3:0,g.fileSize=h.file_size,g.confirmedReplicas=h.reported_replica_count,g.prepaid=h.prepaid,v&&v<m&&(g.status="Expired"),!v&&v>m&&b<1&&(g.status="Waiting"),v&&v>m&&b>0&&(g.status="Success")}else p&&r.PinTime-(new Date).getTime()>=72e5?g.status="Failed":g.status="Waiting"}return(0,H.jsxs)(u.Z.Row,{className:i,children:[(0,H.jsx)(u.Z.Cell,{children:se(r.Name)}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:[se(r.Hash),(0,H.jsx)("span",{onClick:function(){return o(r.Hash)},style:{cursor:"pointer",paddingLeft:10},children:(0,H.jsx)(A.Z,{name:"clone outline"})})]}),(0,H.jsx)(u.Z.Cell,{textAlign:"center",children:ee()(Number(r.Size),{round:2})}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:["Loading"===g.status&&(0,H.jsx)(A.Z,{loading:!0,name:"spinner"}),"Waiting"===g.status&&g.status,"Expired"===g.status&&g.status,"Failed"===g.status&&g.status,"Success"===g.status&&"".concat(g.status," (").concat(g.confirmedReplicas," replicas)")]}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:[(0,H.jsx)("span",{style:{cursor:"pointer"},children:(0,H.jsx)(A.Z,{name:"external"})}),(0,H.jsx)("span",{style:{cursor:"pointer"},onClick:c,children:(0,H.jsx)(A.Z,{name:"clone outline"})})]})]})}))(K||(K=(0,r.Z)(["\n  color: var(--secend-color) !important;\n"]))));function de(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return pe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pe(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){throw e})),f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){l=!0,o=e})),f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function pe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var fe=a.memo((0,N.ZP)((function(e){var n=(0,l.WY)(),t=(0,p.$)().t,r=(0,a.useContext)(Y.I).alert,m=(0,a.useState)(!1),h=m[0],v=m[1],b=(0,l.Yg)(),x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=(0,a.useState)(1),r=t[0],i=t[1];return(0,a.useMemo)((function(){var t=I().chunk(e,n);return{totalPage:t.length,pageList:t[r-1]||[],setPage:i,page:r}}),[e,r])}(b.files,5),j=(0,a.useState)(void 0),y=j[0],w=j[1],Z=(0,a.useRef)(null),k=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Z.current&&(Z.current.webkitdirectory=e,Z.current.multiple=e,Z.current.click())}),[Z]),C=(0,a.useCallback)((function(){return k(!1)}),[k]),P=(0,a.useCallback)((function(){return k(!0)}),[k]),O=(0,a.useCallback)((function(e){var n=e.target.files;if(n)if(n.length>2e3)r.alert({title:t("Upload"),msg:t("Please do not upload more than 2000 files"),type:"error"});else if(0!==n.length){if(e.target.webkitdirectory){if(n.length>=1){for(var i=[],a=0;a<n.length;a++)i.push(n[a]);console.info(i);var l=i[0].webkitRelativePath.split("/"),s=(0,o.Z)(l,1)[0];w({files:i,dir:s}),v(!0)}}else w({file:n[0]}),v(!0);e.target.value=""}else r.alert({title:t("Upload"),msg:t("Please select non-empty folder"),type:"error"})}),[w,v,r,t]),S=(0,a.useRef)(null),N=(0,a.useCallback)((function(){S.current&&S.current.click()}),[S]),A=(0,a.useCallback)((function(e){try{var n=new FileReader,o=e.target.files;if(!o)return;if(n.readAsText(o[0],"UTF-8"),!/(.json)$/i.test(e.target.value))return r.alert({msg:t("File error"),type:"error"});n.onload=function(e){var n,o=JSON.parse(null===(n=e.target)||void 0===n?void 0:n.result);if(!Array.isArray(o))return r.alert({msg:t("File content error"),type:"error"});var a,l=[],s={},c=de(o);try{for(c.s();!(a=c.n()).done;){var u=a.value;u.Hash&&u.Name&&u.UpEndpoint&&u.PinEndpoint&&(l.push(u),s[u.Hash]=!0)}}catch(p){c.e(p)}finally{c.f()}var d=b.files.filter((function(e){return!s[e.Hash]}));b.setFiles([].concat(l,(0,i.Z)(d))),r.alert({msg:t("Import Success"),type:"success"})}}catch(e){r.alert({msg:t("File content error"),type:"error"})}}),[b,r,t]),_=(0,a.useCallback)((function(){v(!1)}),[]),E=(0,a.useCallback)((function(e){v(!1);var n=b.files.filter((function(n){return n.Hash!==e.Hash}));b.setFiles([e].concat((0,i.Z)(n)))}),[b]),F=(0,a.useCallback)((function(){var e=new Blob([JSON.stringify(b.files)],{type:"application/json; charset=utf-8"});g().saveAs(e,"files.json")}),[b]);return(0,H.jsx)(f.Z,{path:"/files",children:(0,H.jsxs)(s.Z,{basic:!0,className:e.className,children:[(0,H.jsx)(X.Z,{}),(0,H.jsxs)(s.Z,{basic:!0,textAlign:"center",className:"font1 uploadPanel",children:[(0,H.jsx)("input",{onChange:O,ref:Z,style:{display:"none"},type:"file"}),(0,H.jsx)("input",{onChange:A,ref:S,style:{display:"none"},type:"file"}),(0,H.jsx)("span",{children:"Upload"}),(0,H.jsx)(c.Z,{animation:"jiggle",duration:800,visible:!0,children:(0,H.jsx)("span",{className:"btn file",onClick:C,children:"File"})}),(0,H.jsx)("span",{children:"or"}),(0,H.jsx)(c.Z,{animation:"jiggle",duration:800,visible:!0,children:(0,H.jsx)("span",{className:"btn folder",onClick:P,children:"Folder"})}),(0,H.jsx)("span",{children:"to IPFS."}),h&&(0,H.jsx)(q,{file:y,user:n,onClose:_,onSuccess:E})]}),(0,H.jsx)("span",{className:"font1 filesTitle",children:"Upload History"}),(0,H.jsxs)(u.Z,{basic:"very",singleLine:!0,children:[(0,H.jsx)(u.Z.Header,{children:(0,H.jsxs)(u.Z.Row,{children:[(0,H.jsx)(u.Z.HeaderCell,{children:"File Name"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"File CID"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"File Size"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"Status"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"Action"})]})}),(0,H.jsx)(u.Z.Body,{children:x.pageList.map((function(e,n){return(0,H.jsx)(ue,{file:e},"files_".concat(n))}))}),(0,H.jsx)(u.Z.Footer,{children:(0,H.jsxs)(u.Z.Row,{children:[(0,H.jsxs)(u.Z.HeaderCell,{colSpan:"2",children:[(0,H.jsx)(L.Z,{onClick:N,children:"Import"}),(0,H.jsx)(L.Z,{onClick:F,children:"Export"})]}),x.totalPage>1&&(0,H.jsx)(u.Z.HeaderCell,{colSpan:"3",textAlign:"right",children:(0,H.jsx)(d.Z,{totalPages:x.totalPage,activePage:x.page,onPageChange:function(e,n){var t=n.activePage;return x.setPage(t)}})})]})})]})]})})}))(ce||(ce=(0,r.Z)(["\n  padding: unset !important;\n\n  .table {\n    padding: 1rem 2rem;\n    thead{\n      font-size: 1.3rem;\n    }\n  }\n  \n  \n  .uploadPanel {\n    font-size: 5rem !important;\n    line-height: 17.14rem;\n    white-space: nowrap;\n    padding: 2rem 1rem;\n    .btn {\n      display: inline-block;\n      width: 18.57rem;\n      height: 17.14rem;\n      text-align: center;\n      margin: 0 10px;\n      border-radius: 50px;\n      cursor: pointer;\n      //transition: all ease-in-out 2s;\n    }\n\n    .file {\n      background: rgba(255, 141, 0, 0.1);\n\n      &:hover {\n        background: rgba(255, 141, 0, 0.2);\n      }\n    }\n\n    .folder {\n      background: rgba(86, 203, 143, 0.1);\n\n      &:hover {\n        background: rgba(86, 203, 143, 0.2);\n      }\n    }\n  }\n\n  .filesTitle {\n    font-size: 2.8rem;\n    margin-left: 2rem;\n    line-height: 60px;\n  }\n"]))))},62356:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files",function(){return t(96006)}])}},function(e){e.O(0,[910,182,66,764,774,888,179],(function(){return n=62356,e(e.s=n);var n}));var n=e.O();_N_E=n}]);