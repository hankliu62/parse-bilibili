(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{18640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}}),n(59579);var a,r=n(5505),l=n.n(r);n(37481);var i=n(7424);n(17688);var s=n(28018),o=n.n(s);n(31438);var c=n(89514),d=n.n(c);n(35761);var u=n(25869),f=n.n(u);n(7538);var x=n(35283),p=n.n(x);n(46245);var h=n(17629),v=n.n(h);n(82133);var m=n(6777),j=n.n(m);n(80718);var w=n(56063);n(82458);var b=n(9391),y=n.n(b),N=n(28237),g=n(30298),k=n.n(g),_=n(57966),I=n.n(_),S=n(75271),C=n(16206),Z=n(40755),E=n(35133),A=n(80704),z=n(85531),B=n(59969),M=n.n(B),O=n(59592);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var X=(a=(0,N.Z)(k().mark(function e(t){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M()(" https://www.mxnzp.com/api/bilibili/video?url=".concat(O.DS.encode(t),"&app_id=").concat("toxcgdhiroiahnxj","&app_secret=").concat("5MXI885FilRyfhkfsXVsHcoLc6RnoguY"),{method:"GET"}).then(function(e){return e.json()}).then(function(e){var t,n=e.data,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return T(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,void 0)}}(e))){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw l}}}}(null==n?void 0:n.list);try{for(a.s();!(t=a.n()).done;)t.value.cover=n.cover}catch(e){a.e(e)}finally{a.f()}return n}).catch(function(e){console.log(e),y().error("请求数据失败")}));case 1:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),F=n(82086),R=n(2753),D=function(){var e=(0,R.Z)();return(0,S.useCallback)(function(t){e?window.location.href="https://hankliu62.github.io/toolkits/":window.top.postMessage({type:"homepage"},"*"),null==t||t.preventDefault()},[e])},P=n(52676);function V(){var e,t,n=(0,S.useState)(),a=n[0],r=n[1],s=(0,S.useState)(!1),c=s[0],u=s[1],x=(0,S.useState)(),h=x[0],m=x[1],b=(0,z.useRouter)(),g=(0,S.useCallback)((0,N.Z)(k().mark(function e(){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=3;break}return y().error("请输入视频地址"),e.abrupt("return");case 3:return u(!0),e.next=6,X(a);case 6:m(e.sent),u(!1);case 9:case"end":return e.stop()}},e)})),[a]),_=(0,S.useMemo)(function(){return[{title:"视频名称",dataIndex:"title",key:"title"},{title:"视频封面",dataIndex:"cover",key:"cover",render:function(e,t){return(0,P.jsx)(w.Z,{src:t.cover,width:80,height:80,onClick:function(){return window.open(t.cover)},className:"cursor-pointer"})}},{title:"视频时长",dataIndex:"durationFormat",key:"durationFormat"},{title:"清晰度",dataIndex:"accept",key:"accept",render:function(e){return null==e?void 0:e.join("、")}},{title:"操作",render:function(e,t){var n;return(0,P.jsx)(j(),{type:"link",href:t.url,download:(null===(n=t.url.split("?"))||void 0===n||null===(n=n[0])||void 0===n||null===(n=n.split("/"))||void 0===n?void 0:n.pop())||t.title+".mp4",children:"下载视频"})}}]},[]),B=D();return(0,S.useEffect)(function(){I().init()},[]),(0,P.jsxs)("div",{className:"relative w-full text-white/75",children:[!!(null!==(e=b.query)&&void 0!==e&&e["with-breadcrumb"])&&(0,P.jsxs)(v(),{className:"!m-6 !text-base",separator:"/",children:[(0,P.jsx)(v().Item,{children:(0,P.jsx)("a",{onClick:B,children:"小工具集合"})}),(0,P.jsx)(v().Item,{children:F.V1.split("-").pop().trim()})]}),(0,P.jsx)("div",{className:"relative z-20 mx-auto mt-6 w-full max-w-[1920px]",children:(0,P.jsxs)("div",{className:"flex flex-col flex-wrap",children:[(0,P.jsx)("div",{"data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,P.jsxs)(d(),{bordered:!0,className:"relative shadow-lg",children:[(0,P.jsx)(p(),{title:"Bilibili 链接",children:(0,P.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,P.jsx)(C.Z,{className:"text-[20px] text-white"})})}),(0,P.jsxs)("div",{className:"relative flex flex-col pt-4",children:[(0,P.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,P.jsx)("div",{className:"flex items-center justify-start",children:(0,P.jsx)("label",{className:"mr-4 text-xl font-medium",children:"Bilibili 链接"})}),(0,P.jsx)("div",{className:"mt-2 w-full",children:(0,P.jsx)(f(),{size:"medium",value:a,onChange:function(e){r(e.target.value)},placeholder:"请输入 Bilibili 链接"})})]}),(0,P.jsx)("div",{className:"mt-8 flex flex-col items-start justify-center",children:(0,P.jsx)(j(),{loading:c,disabled:c,size:"medium",type:"primary",onClick:g,children:"开始处理"})})]})]})}),!!h&&(0,P.jsx)("div",{className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,P.jsxs)(d(),{bordered:!0,className:"relative shadow-lg",children:[(0,P.jsx)(p(),{title:"播放视频",children:(0,P.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,P.jsx)(Z.Z,{className:"text-[20px] text-white"})})}),(0,P.jsx)("div",{className:"relative flex flex-col pt-4",children:c?(0,P.jsx)(o(),{className:"w-full",active:!0}):(0,P.jsxs)("div",{className:"mb-4 flex w-full flex-col",children:[(0,P.jsxs)("div",{className:"mb-2",children:[(0,P.jsx)("div",{className:"text-2xl font-medium",children:null==h?void 0:h.title}),(0,P.jsx)("div",{className:"mt-1 text-sm opacity-60 empty:hidden",children:null==h?void 0:h.desc})]}),(0,P.jsx)("div",{className:"mb-2 flex items-center justify-center text-lg",children:(0,P.jsx)(i.Z,{className:"overflow-hidden rounded",source:null==h||null===(t=h.list)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.url,width:1e3,height:562,download:!0})})]})})]})}),!!h&&(0,P.jsx)("div",{className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,P.jsxs)(d(),{bordered:!0,className:"relative shadow-lg",children:[(0,P.jsx)(p(),{title:"视频详情",children:(0,P.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,P.jsx)(E.Z,{className:"text-[20px] text-white"})})}),(0,P.jsx)("div",{className:"relative flex flex-col pt-4",children:c?(0,P.jsx)(o(),{className:"w-full",active:!0}):(0,P.jsx)("div",{className:"mb-4 flex w-full flex-col",children:(0,P.jsx)(l(),{columns:_,dataSource:(null==h?void 0:h.list)||[],bordered:!0,size:"middle",pagination:!1},"title")})})]})}),(0,P.jsx)("div",{"data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,P.jsxs)(d(),{bordered:!0,className:"relative shadow-lg",children:[(0,P.jsx)(p(),{title:"使用说明",children:(0,P.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,P.jsx)(A.Z,{className:"text-[20px] text-white"})})}),(0,P.jsxs)("div",{className:"relative grid grid-cols-1 gap-4 pt-4",children:[(0,P.jsx)("div",{className:"text-base",children:"数据仅供娱乐，请勿用于商业用途，责任自负。"}),(0,P.jsx)("div",{className:"text-base",children:"在这个神奇的网站上，您将发现更多惊喜与欢笑，让我们一起在Bilibili的潮流中畅游，感受创意的火花与热情的迸发。"}),(0,P.jsx)("div",{className:"text-base",children:"在这片数字的海洋中，我们为您搭建了一座桥梁，连接您与Bilibili丰富多彩的世界，让您尽情沉浸于创意与激情的海洋中。"})]})]})})]})})]})}},6950:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(18640)}])}},function(e){e.O(0,[236,808,324,888,774,179],function(){return e(e.s=6950)}),_N_E=e.O()}]);