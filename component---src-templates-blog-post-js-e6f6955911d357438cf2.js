"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return z},_:function(){return s},a:function(){return l},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(m,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=s(e,g);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,l({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,v);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],S=new Set;let T,_;const N=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,f=s(e,C);const{width:h,height:y,layout:b}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,y,b),{style:w,className:E}=v,k=s(v,x),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,h,y);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(N);if(_&&S.has(N))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:S.has(N),image:n},f)),S.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=s(L.current,N,S,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(N)&&_&&(L.current.innerHTML=_(l({isLoading:S.has(N),isLoaded:S.has(N),image:n},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},w,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:k,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(A=O,function(e){let{src:t,__imageData:a,__error:n}=e,i=s(e,I);return n&&console.warn(n),a?r.createElement(A,l({image:a},i)):(console.warn("Image not loaded",t),null)});var A;z.displayName="StaticImage",z.propTypes=q},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8678:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:i}=e;const l="/"===t.pathname;let s;return s=l?r.createElement(n.Link,{className:"header-link-home",to:"https://oussama-mater.tech/"},"Oussama Mater"):r.createElement(n.Link,{className:"header-link-home",to:"/"},"cd .."),r.createElement("div",{className:"global-wrapper","data-is-root-path":l},r.createElement("header",{className:"global-header"},s),r.createElement("main",null,i))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t,a,i;let{description:l,title:s,children:o}=e;const{site:c}=(0,n.useStaticQuery)("2841359383"),d=l||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?s+" | "+u:s),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:d}),o)}},7828:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return d}});var r=a(7294),n=a(1883),i=a(3723);var l=()=>{var e,t;const l=(0,n.useStaticQuery)("2911190619"),s=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-picture.jpg",width:75,height:75,quality:95,alt:"Profile picture",__imageData:a(1321)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by"," ",r.createElement("a",{target:"_blank",href:""+((null==s?void 0:s.portfolio)||"")},r.createElement("strong",null,s.name))," ",(null==s?void 0:s.summary)||null,r.createElement("br",null),"Find me on ",r.createElement("a",{target:"_blank",href:""+o.linkedin},"Linkedin"),", ",r.createElement("a",{target:"_blank",href:""+o.github},"Github"),", and ",r.createElement("a",{target:"_blank",href:""+o.laracasts},"Laracasts"),"."))},s=a(8678),o=a(9357);const c=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var d=e=>{var t;let{data:{previous:a,next:i,site:o,markdownRemark:c},location:d}=e;const u=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(s.Z,{location:d,title:u},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},c.frontmatter.title),r.createElement("p",null,c.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(l,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,a&&r.createElement(n.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.createElement("li",null,i&&r.createElement(n.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}},1321:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/1ba23e6cf7dbabd1fb7271d2fda04097/d8275/profile-picture.jpg","srcSet":"/static/1ba23e6cf7dbabd1fb7271d2fda04097/d8275/profile-picture.jpg 75w,\\n/static/1ba23e6cf7dbabd1fb7271d2fda04097/b5649/profile-picture.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/1ba23e6cf7dbabd1fb7271d2fda04097/26941/profile-picture.avif 75w,\\n/static/1ba23e6cf7dbabd1fb7271d2fda04097/95309/profile-picture.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/1ba23e6cf7dbabd1fb7271d2fda04097/a18cc/profile-picture.webp 75w,\\n/static/1ba23e6cf7dbabd1fb7271d2fda04097/7ddcc/profile-picture.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e6f6955911d357438cf2.js.map