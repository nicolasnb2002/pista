import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{o as t,s as n}from"./index-DOwIBola.js";var r=e(n(),1),i=Object.defineProperty,a=(e,t)=>i(e,`name`,{value:t,configurable:!0});function o(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}a(o,`setRef`);function s(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():o(e[t],null)}}}}a(s,`composeRefs`);function c(...e){return r.useCallback(s(...e),e)}a(c,`useComposedRefs`);var l=Object.defineProperty,u=(e,t)=>l(e,`name`,{value:t,configurable:!0});function d(e){let t=r.forwardRef((t,n)=>{let{children:i,...a}=t,o=null,s=!1,l=[];y(i)&&typeof w==`function`&&(i=w(i._payload)),r.Children.forEach(i,e=>{if(_(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;y(n)&&typeof w==`function`&&(n=w(n._payload)),o=m(t,n),l.push(o?.props?.children)}else l.push(e)}),o?o=r.cloneElement(o,void 0,l):!s&&r.Children.count(i)===1&&r.isValidElement(i)&&(o=i);let u=o?g(o):void 0,d=c(n,u);if(!o){if(i||i===0)throw Error(s?C(e):S(e));return i}let f=h(a,o.props??{});return o.type!==r.Fragment&&(f.ref=n?d:u),r.cloneElement(o,f)});return t.displayName=`${e}.Slot`,t}u(d,`createSlot`);var f=d(`Slot`),p=Symbol.for(`radix.slottable`);function ee(e){let t=u(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=p,t}u(ee,`createSlottable`);var m=u((e,t)=>{if(`child`in e.props){let t=e.props.child;return r.isValidElement(t)?r.cloneElement(t,void 0,e.props.children(t.props.children)):null}return r.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function h(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=x(a,i))}return{...e,...n}}u(h,`mergeProps`);function g(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}u(g,`getElementRef`);function _(e){return r.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===p}u(_,`isSlottable`);var v=Symbol.for(`react.lazy`);function y(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===v&&`_payload`in e&&b(e._payload)}u(y,`isLazyComponent`);function b(e){return typeof e==`object`&&!!e&&`then`in e}u(b,`isPromiseLike`);function x(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}u(x,`concatAriaDescribedby`);var S=u(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),C=u(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),w=r.use;function te(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=te(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function ne(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=te(e))&&(r&&(r+=` `),r+=t);return r}var T=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,re=ne,ie=(e,t)=>n=>{if(t?.variants==null)return re(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=T(t)||T(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return re(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},E=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},D=(e,t)=>({classGroupId:e,validator:t}),O=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),k=`-`,A=[],j=`arbitrary..`,ae=e=>{let t=M(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return se(e);let n=e.split(k);return oe(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?E(i,t):t:i||A}return n[e]||A}}},oe=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=oe(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(k):e.slice(t).join(k),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},se=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?j+r:void 0})(),M=e=>{let{theme:t,classGroups:n}=e;return N(n,t)},N=(e,t)=>{let n=O();for(let r in e){let i=e[r];P(i,n,r,t)}return n},P=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];F(i,t,n,r)}},F=(e,t,n,r)=>{typeof e==`string`?ce(e,t,n):typeof e==`function`?I(e,t,n,r):le(e,t,n,r)},ce=(e,t,n)=>{let r=e===``?t:L(t,e);r.classGroupId=n},I=(e,t,n,r)=>{R(e)?P(e(r),t,n,r):(t.validators===null&&(t.validators=[]),t.validators.push(D(n,e)))},le=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];P(o,L(t,a),n,r)}},L=(e,t)=>{let n=e,r=t.split(k),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=O(),n.nextPart.set(t,i)),n=i}return n},R=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,ue=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},z=`!`,de=`:`,fe=[],pe=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),me=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===de){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(z)?(c=s.slice(0,-1),l=!0):s.startsWith(z)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return pe(t,l,c,u)};if(t){let e=t+de,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):pe(fe,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},he=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},ge=e=>({cache:ue(e.cacheSize),parseClassName:me(e),sortModifiers:he(e),postfixLookupClassGroupIds:_e(e),...ae(e)}),_e=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ve=/\s+/,ye=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ve),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:ee}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let m=!!ee,h;if(m){h=r(p.substring(0,ee));let e=h&&o[h]?r(p):void 0;e&&e!==h&&(h=e,m=!1)}else h=r(p);if(!h){if(!m||(h=r(p),!h)){l=t+(l.length>0?` `+l:l);continue}m=!1}let g=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),_=f?g+z:g,v=_+h;if(s.indexOf(v)>-1)continue;s.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];s.push(_+t)}l=t+(l.length>0?` `+l:l)}return l},be=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=xe(n))&&(i&&(i+=` `),i+=r);return i},xe=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=xe(e[r]))&&(n&&(n+=` `),n+=t);return n},Se=(e,...t)=>{let n,r,i,a,o=o=>(n=ge(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=ye(e,n);return i(e,a),a};return a=o,(...e)=>a(be(...e))},Ce=[],B=e=>{let t=t=>t[e]||Ce;return t.isThemeGetter=!0,t.themeKey=e,t},we=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Te=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ee=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,De=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Oe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ke=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Ae=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,je=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,V=e=>Ee.test(e),H=e=>!!e&&!Number.isNaN(Number(e)),U=e=>!!e&&Number.isInteger(Number(e)),Me=e=>e.endsWith(`%`)&&H(e.slice(0,-1)),W=e=>De.test(e),Ne=()=>!0,Pe=e=>Oe.test(e)&&!ke.test(e),Fe=()=>!1,Ie=e=>Ae.test(e),Le=e=>je.test(e),Re=e=>!G(e)&&!q(e),ze=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Be=e=>X(e,et,Fe),G=e=>we.test(e),K=e=>X(e,tt,Pe),Ve=e=>X(e,nt,H),He=e=>X(e,it,Ne),Ue=e=>X(e,rt,Fe),We=e=>X(e,Qe,Fe),Ge=e=>X(e,$e,Le),Ke=e=>X(e,at,Ie),q=e=>Te.test(e),J=e=>Z(e,tt),qe=e=>Z(e,rt),Je=e=>Z(e,Qe),Ye=e=>Z(e,et),Xe=e=>Z(e,$e),Y=e=>Z(e,at,!0),Ze=e=>Z(e,it,!0),X=(e,t,n)=>{let r=we.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Z=(e,t,n=!1)=>{let r=Te.exec(e);return r?r[1]?t(r[1]):n:!1},Qe=e=>e===`position`||e===`percentage`,$e=e=>e===`image`||e===`url`,et=e=>e===`length`||e===`size`||e===`bg-size`,tt=e=>e===`length`,nt=e=>e===`number`,rt=e=>e===`family-name`,it=e=>e===`number`||e===`weight`,at=e=>e===`shadow`,ot=Se(()=>{let e=B(`color`),t=B(`font`),n=B(`text`),r=B(`font-weight`),i=B(`tracking`),a=B(`leading`),o=B(`breakpoint`),s=B(`container`),c=B(`spacing`),l=B(`radius`),u=B(`shadow`),d=B(`inset-shadow`),f=B(`text-shadow`),p=B(`drop-shadow`),ee=B(`blur`),m=B(`perspective`),h=B(`aspect`),g=B(`ease`),_=B(`animate`),v=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],y=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],b=()=>[...y(),q,G],x=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],S=()=>[`auto`,`contain`,`none`],C=()=>[q,G,c],w=()=>[V,`full`,`auto`,...C()],te=()=>[U,`none`,`subgrid`,q,G],ne=()=>[`auto`,{span:[`full`,U,q,G]},U,q,G],T=()=>[U,`auto`,q,G],re=()=>[`auto`,`min`,`max`,`fr`,q,G],ie=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],E=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],D=()=>[`auto`,...C()],O=()=>[V,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...C()],k=()=>[s,V,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...C()],A=()=>[V,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...C()],j=()=>[e,q,G],ae=()=>[...y(),Je,We,{position:[q,G]}],oe=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],se=()=>[`auto`,`cover`,`contain`,Ye,Be,{size:[q,G]}],M=()=>[Me,J,K],N=()=>[``,`none`,`full`,l,q,G],P=()=>[``,H,J,K],F=()=>[`solid`,`dashed`,`dotted`,`double`],ce=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],I=()=>[H,Me,Je,We],le=()=>[``,`none`,ee,q,G],L=()=>[`none`,H,q,G],R=()=>[`none`,H,q,G],ue=()=>[H,q,G],z=()=>[V,`full`,...C()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[W],breakpoint:[W],color:[Ne],container:[W],"drop-shadow":[W],ease:[`in`,`out`,`in-out`],font:[Re],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[W],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[W],shadow:[W],spacing:[`px`,H],text:[W],"text-shadow":[W],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,V,G,q,h]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,q,G]}],"container-named":[ze],columns:[{columns:[H,`auto`,G,q,s]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:b()}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:S()}],"overscroll-x":[{"overscroll-x":S()}],"overscroll-y":[{"overscroll-y":S()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{"inset-s":w(),start:w()}],end:[{"inset-e":w(),end:w()}],"inset-bs":[{"inset-bs":w()}],"inset-be":[{"inset-be":w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[U,`auto`,q,G]}],basis:[{basis:[V,`full`,`auto`,s,...C()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[H,V,`auto`,`initial`,`none`,G]}],grow:[{grow:[``,H,q,G]}],shrink:[{shrink:[``,H,q,G]}],order:[{order:[U,`first`,`last`,`none`,q,G]}],"grid-cols":[{"grid-cols":te()}],"col-start-end":[{col:ne()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":te()}],"row-start-end":[{row:ne()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...ie(),`normal`]}],"justify-items":[{"justify-items":[...E(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...E()]}],"align-content":[{content:[`normal`,...ie()]}],"align-items":[{items:[...E(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...E(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...E(),`baseline`]}],"place-self":[{"place-self":[`auto`,...E()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pbs:[{pbs:C()}],pbe:[{pbe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mbs:[{mbs:D()}],mbe:[{mbe:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":C()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":C()}],"space-y-reverse":[`space-y-reverse`],size:[{size:O()}],"inline-size":[{inline:[`auto`,...k()]}],"min-inline-size":[{"min-inline":[`auto`,...k()]}],"max-inline-size":[{"max-inline":[`none`,...k()]}],"block-size":[{block:[`auto`,...A()]}],"min-block-size":[{"min-block":[`auto`,...A()]}],"max-block-size":[{"max-block":[`none`,...A()]}],w:[{w:[s,`screen`,...O()]}],"min-w":[{"min-w":[s,`screen`,`none`,...O()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...O()]}],h:[{h:[`screen`,`lh`,...O()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...O()]}],"max-h":[{"max-h":[`screen`,`lh`,`none`,...O()]}],"font-size":[{text:[`base`,n,J,K]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Ze,He]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Me,G]}],"font-family":[{font:[qe,Ue,t]}],"font-features":[{"font-features":[G]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,q,G]}],"line-clamp":[{"line-clamp":[H,`none`,q,Ve]}],leading:[{leading:[`none`,a,...C()]}],"list-image":[{"list-image":[`none`,q,G]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,q,G]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...F(),`wavy`]}],"text-decoration-thickness":[{decoration:[H,`from-font`,`auto`,q,K]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[H,`auto`,q,G]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:C()}],"tab-size":[{tab:[U,q,G]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,q,G]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,q,G]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ae()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:se()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},U,q,G],radial:[``,q,G],conic:[``,U,q,G]},Xe,Ge]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:M()}],"gradient-via-pos":[{via:M()}],"gradient-to-pos":[{to:M()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:N()}],"rounded-s":[{"rounded-s":N()}],"rounded-e":[{"rounded-e":N()}],"rounded-t":[{"rounded-t":N()}],"rounded-r":[{"rounded-r":N()}],"rounded-b":[{"rounded-b":N()}],"rounded-l":[{"rounded-l":N()}],"rounded-ss":[{"rounded-ss":N()}],"rounded-se":[{"rounded-se":N()}],"rounded-ee":[{"rounded-ee":N()}],"rounded-es":[{"rounded-es":N()}],"rounded-tl":[{"rounded-tl":N()}],"rounded-tr":[{"rounded-tr":N()}],"rounded-br":[{"rounded-br":N()}],"rounded-bl":[{"rounded-bl":N()}],"border-w":[{border:P()}],"border-w-x":[{"border-x":P()}],"border-w-y":[{"border-y":P()}],"border-w-s":[{"border-s":P()}],"border-w-e":[{"border-e":P()}],"border-w-bs":[{"border-bs":P()}],"border-w-be":[{"border-be":P()}],"border-w-t":[{"border-t":P()}],"border-w-r":[{"border-r":P()}],"border-w-b":[{"border-b":P()}],"border-w-l":[{"border-l":P()}],"divide-x":[{"divide-x":P()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":P()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...F(),`hidden`,`none`]}],"divide-style":[{divide:[...F(),`hidden`,`none`]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...F(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[H,q,G]}],"outline-w":[{outline:[``,H,J,K]}],"outline-color":[{outline:j()}],shadow:[{shadow:[``,`inner`,`none`,u,Y,Ke]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":[`none`,d,Y,Ke]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:P()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[H,K]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":P()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":[`none`,f,Y,Ke]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[H,q,G]}],"mix-blend":[{"mix-blend":[...ce(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":ce()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[H]}],"mask-image-linear-from-pos":[{"mask-linear-from":I()}],"mask-image-linear-to-pos":[{"mask-linear-to":I()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":I()}],"mask-image-t-to-pos":[{"mask-t-to":I()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":I()}],"mask-image-r-to-pos":[{"mask-r-to":I()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":I()}],"mask-image-b-to-pos":[{"mask-b-to":I()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":I()}],"mask-image-l-to-pos":[{"mask-l-to":I()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":I()}],"mask-image-x-to-pos":[{"mask-x-to":I()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":I()}],"mask-image-y-to-pos":[{"mask-y-to":I()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[q,G]}],"mask-image-radial-from-pos":[{"mask-radial-from":I()}],"mask-image-radial-to-pos":[{"mask-radial-to":I()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[H]}],"mask-image-conic-from-pos":[{"mask-conic-from":I()}],"mask-image-conic-to-pos":[{"mask-conic-to":I()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ae()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,q,G]}],filter:[{filter:[``,`none`,q,G]}],blur:[{blur:le()}],brightness:[{brightness:[H,q,G]}],contrast:[{contrast:[H,q,G]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Y,Ke]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:[``,H,q,G]}],"hue-rotate":[{"hue-rotate":[H,q,G]}],invert:[{invert:[``,H,q,G]}],saturate:[{saturate:[H,q,G]}],sepia:[{sepia:[``,H,q,G]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,q,G]}],"backdrop-blur":[{"backdrop-blur":le()}],"backdrop-brightness":[{"backdrop-brightness":[H,q,G]}],"backdrop-contrast":[{"backdrop-contrast":[H,q,G]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,H,q,G]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[H,q,G]}],"backdrop-invert":[{"backdrop-invert":[``,H,q,G]}],"backdrop-opacity":[{"backdrop-opacity":[H,q,G]}],"backdrop-saturate":[{"backdrop-saturate":[H,q,G]}],"backdrop-sepia":[{"backdrop-sepia":[``,H,q,G]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,q,G]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[H,`initial`,q,G]}],ease:[{ease:[`linear`,`initial`,g,q,G]}],delay:[{delay:[H,q,G]}],animate:[{animate:[`none`,_,q,G]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[m,q,G]}],"perspective-origin":[{"perspective-origin":b()}],rotate:[{rotate:L()}],"rotate-x":[{"rotate-x":L()}],"rotate-y":[{"rotate-y":L()}],"rotate-z":[{"rotate-z":L()}],scale:[{scale:R()}],"scale-x":[{"scale-x":R()}],"scale-y":[{"scale-y":R()}],"scale-z":[{"scale-z":R()}],"scale-3d":[`scale-3d`],skew:[{skew:ue()}],"skew-x":[{"skew-x":ue()}],"skew-y":[{"skew-y":ue()}],transform:[{transform:[q,G,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:b()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:z()}],"translate-x":[{"translate-x":z()}],"translate-y":[{"translate-y":z()}],"translate-z":[{"translate-z":z()}],"translate-none":[`translate-none`],zoom:[{zoom:[U,q,G]}],accent:[{accent:j()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,q,G]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":j()}],"scrollbar-track-color":[{"scrollbar-track":j()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mbs":[{"scroll-mbs":C()}],"scroll-mbe":[{"scroll-mbe":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pbs":[{"scroll-pbs":C()}],"scroll-pbe":[{"scroll-pbe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,q,G]}],fill:[{fill:[`none`,...j()]}],"stroke-w":[{stroke:[H,J,K,Ve]}],stroke:[{stroke:[`none`,...j()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`start`,`end`,`right`,`left`],"inset-y":[`inset-bs`,`inset-be`,`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`ps`,`pe`,`pr`,`pl`],py:[`pbs`,`pbe`,`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`ms`,`me`,`mr`,`ml`],my:[`mbs`,`mbe`,`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-s`,`border-w-e`,`border-w-r`,`border-w-l`],"border-w-y":[`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-s`,`border-color-e`,`border-color-r`,`border-color-l`],"border-color-y":[`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-ms`,`scroll-me`,`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-ps`,`scroll-pe`,`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function st(...e){return ot(ne(e))}var ct=t(),lt=ie(`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold min-h-11 transition-opacity disabled:opacity-50`,{variants:{variant:{primary:`bg-brass text-paper hover:opacity-90`,quiet:`border border-line bg-card text-ink hover:border-brass`,ghost:`text-ink hover:bg-brass-soft`}},defaultVariants:{variant:`primary`}});function ut({className:e,variant:t,asChild:n=!1,type:r,...i}){return(0,ct.jsx)(n?f:`button`,{className:st(lt({variant:t}),e),...n?{}:{type:r??`button`},...i})}function dt(e){return e.blocks.reduce((e,t)=>e+t.minutes,0)}var ft=[{n:1,title:`Valores y texto`,outcome:`Nombrás valores, distinguís tipos y armás un texto con un f-string.`,blocks:[{type:`read`,id:`d1-leer`,title:`Un nombre, un valor`,minutes:8,body:[{kind:`p`,text:`Pista no enseña modelos. Enseña lo que AI Engineering da por sabido: leer Python y pedirle cosas a una tabla. El curso entra a prompts, RAG y APIs. Estas diez jornadas son el piso.`},{kind:`p`,text:`Python ejecuta una línea y se acuerda de lo que nombraste. Esto no imprime nada: solo guarda.`},{kind:`code`,text:`nombre = "Luz"
dias = 10`},{kind:`p`,text:"Para ver algo usás `print`. Un f-string mete valores adentro de un texto. La `f` va pegada a la comilla, y las variables van entre llaves."},{kind:`code`,text:`print(f"{nombre} tiene {dias} días")`},{kind:`note`,tone:`course`,title:`Casi todo lo que vuelve de un modelo es texto`,text:'Tokens, precios y temperatura son números. Si sumás texto con texto, `"2" + "2"` da `"22"`, no 4. Ese bug aparece el primer día que parseás una respuesta.'}]},{type:`read`,id:`d1-tipos`,title:`Cinco tipos alcanzan`,minutes:7,body:[{kind:`ul`,items:["`int`: enteros, como `10`.","`float`: con decimal, como `10.5`. `3.0` también es float.",'`str`: texto, siempre entre comillas. `"10"` no es el número 10.',"`bool`: `True` o `False`, con mayúscula.","`None`: no hay valor. No es cero ni un texto vacío."]},{kind:`p`,text:"`type(10)` te dice el tipo. No hace falta declararlo: Python lo mira en el valor."},{kind:`note`,tone:`warn`,title:`True también es un int`,text:"En Python, `bool` es un caso particular de `int`: `True` vale 1 y `False` vale 0. `isinstance(True, int)` da True. Si clasificás un valor, preguntá por bool antes que por int. En JSON, true y 1 no son lo mismo."}]},{type:`python`,id:`d1-lab`,title:`Laboratorio: mirá la salida`,minutes:8,graded:!1,prompt:[{kind:`p`,text:"Corré esto sin cambiarlo. Compará las dos sumas y los tres `type`."}],starter:`print(2 + 2)
print("2" + "2")
print(type(10))
print(type(10.0))
print(type("10"))
nombre = "Luz"
print(f"Hola, {nombre}")
`,tests:``,hint:`No hay nada que corregir. La primera suma es un número. La segunda pega textos.`,solution:`print(2 + 2)
print("2" + "2")
print(type(10))
print(type(10.0))
print(type("10"))
nombre = "Luz"
print(f"Hola, {nombre}")
`},{type:`python`,id:`d1-mensaje`,title:`Armá el mensaje`,minutes:10,graded:!0,prompt:[{kind:`p`,text:"Completá `mensaje` con un f-string. Tiene que valer exactamente `Luz tiene 10 días de pista`. Usá las variables que ya están: no escribas el nombre ni el número a mano dentro del texto."}],starter:`nombre = "Luz"
dias = 10
mensaje = ""
`,tests:`assert "mensaje" in globals(), "Definí la variable mensaje"
assert mensaje == "Luz tiene 10 días de pista", "mensaje vale " + repr(mensaje)
`,hint:`El f-string se escribe f"...{nombre}...{dias}...". Las llaves no llevan comillas.`,solution:`nombre = "Luz"
dias = 10
mensaje = f"{nombre} tiene {dias} días de pista"
`},{type:`python`,id:`d1-clasificar`,title:`Clasificá el valor`,minutes:12,graded:!0,prompt:[{kind:`p`,text:'Escribí `clasificar(valor)`. Devolvé `"int"`, `"float"`, `"str"`, `"bool"` u `"otro"`. `None`, las listas y cualquier otra cosa son `"otro"`.'},{kind:`note`,tone:`tip`,title:`El orden de las preguntas importa`,text:"Si preguntás `isinstance(valor, int)` primero, `True` te va a salir como int. Preguntá por bool antes."}],starter:`def clasificar(valor):
    return "otro"
`,tests:`fn = globals().get("clasificar")
assert fn is not None, "Definí la función clasificar(valor)."
casos = [
    (True, "bool"),
    (False, "bool"),
    (3, "int"),
    (0, "int"),
    (3.0, "float"),
    ("3", "str"),
    ("", "str"),
    (None, "otro"),
    ([1], "otro"),
]
for valor, esperado in casos:
    recibido = fn(valor)
    assert recibido == esperado, "clasificar(" + repr(valor) + ") devolvió " + repr(recibido)
`,hint:`isinstance(valor, bool), después int, después float, después str. Al final, return "otro".`,solution:`def clasificar(valor):
    if isinstance(valor, bool):
        return "bool"
    if isinstance(valor, int):
        return "int"
    if isinstance(valor, float):
        return "float"
    if isinstance(valor, str):
        return "str"
    return "otro"
`},{type:`quiz`,id:`d1-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué imprime print("3" + "4")?`,options:[`7`,`"34"`,`Un error`,`3.4`],answer:1,why:`Las comillas hacen texto. El + de dos str los pega: "34".`},{prompt:`¿Qué tipo tiene 3.0?`,options:[`int`,`float`,`str`,`bool`],answer:1,why:`Tiene punto decimal, aunque el decimal sea cero. Es float.`},{prompt:`¿Por qué clasificar mira bool antes que int?`,options:[`Porque bool no existe en Python`,`Porque True y False también cuentan como int`,`Porque int no se puede comparar`,`Porque print los convierte en texto`],answer:1,why:`bool es una subclase de int. isinstance(True, int) es True.`},{prompt:`¿Qué guarda una variable?`,options:[`Solo números`,`Un nombre apuntando a un valor`,`El texto que después imprime print, sí o sí`,`Una tabla de SQL`],answer:1,why:`Asignar no imprime. El nombre queda apuntando al valor hasta que lo pises.`}]}]},{n:2,title:`Decisiones y bucles`,outcome:`Escribís un if con tres salidas y un for que acumula.`,blocks:[{type:`read`,id:`d2-if`,title:`Preguntar y elegir`,minutes:8,body:[{kind:`p`,text:"Un programa útil decide. La condición es una expresión que da `True` o `False`. `=` asigna. `==` compara. Confundirlos es el error más común de esta semana."},{kind:`code`,text:`score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")`},{kind:`p`,text:"Python usa la sangría, no las llaves. Todo lo que está más adentro pertenece al `if`. `elif` se lee solo si lo de arriba fue falso. `else` agarra el resto."},{kind:`p`,text:"`and`, `or` y `not` combinan condiciones. `>=` incluye el número del borde: 80 entra en `score >= 80`."},{kind:`note`,tone:`course`,title:`Un agente es un if con herramientas`,text:`Si la tool falló, reintentá. Si alcanzó el tope de tokens, cortá. Si el usuario pidió datos, consultá la base. El curso le pone nombre de grafo: por debajo sigue siendo una decisión.`}]},{type:`read`,id:`d2-bucles`,title:`Repetir sin copiar`,minutes:8,body:[{kind:`p`,text:"`for` recorre una colección. `range(3)` produce 0, 1 y 2: el final no entra. Es la forma de decir «hacé esto por cada elemento»."},{kind:`code`,text:`for i in range(3):
    print("vuelta", i)`},{kind:`p`,text:"`while` repite mientras la condición sea verdadera. Algo adentro tiene que cambiarla, si no el bucle no termina. Pista corta esos casos a los pocos segundos."},{kind:`code`,text:`n = 3
while n > 0:
    print(n)
    n = n - 1`},{kind:`note`,tone:`warn`,title:`print no es return`,text:`Si una función imprime el resultado pero no lo devuelve, para el resto del programa ese resultado es None. Los checks de Pista miran el return, no la pantalla.`}]},{type:`python`,id:`d2-lab`,title:`Laboratorio: el semáforo en voz alta`,minutes:6,graded:!1,prompt:[{kind:`p`,text:"Corré el ejemplo. Después cambiá `score` a 40 y a 90 y volvé a correr. Fijate qué rama se imprime."}],starter:`for i in range(3):
    print("vuelta", i)

score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")
`,tests:``,hint:`No hay trampa. 72 no llega a 80 y sí pasa de 50.`,solution:`for i in range(3):
    print("vuelta", i)

score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")
`},{type:`python`,id:`d2-semaforo`,title:`Función semáforo`,minutes:12,graded:!0,prompt:[{kind:`p`,text:'Escribí `semaforo(score)`. Devolvé `"listo"` si el score es 80 o más, `"en camino"` si es 50 o más, y `"repasar"` en cualquier otro caso. No imprimas: devolvé el texto.'}],starter:`def semaforo(score):
    return ""
`,tests:`fn = globals().get("semaforo")
assert fn is not None, "Definí semaforo(score)."
casos = [(100, "listo"), (80, "listo"), (79, "en camino"), (50, "en camino"), (49, "repasar"), (0, "repasar")]
for score, esperado in casos:
    recibido = fn(score)
    assert recibido == esperado, "semaforo(" + repr(score) + ") devolvió " + repr(recibido)
`,hint:`Tres ramas, en ese orden. El 80 y el 50 tienen que entrar en el grupo de arriba, así que usá >=.`,solution:`def semaforo(score):
    if score >= 80:
        return "listo"
    if score >= 50:
        return "en camino"
    return "repasar"
`},{type:`python`,id:`d2-pares`,title:`Sumar solo los pares`,minutes:12,graded:!0,prompt:[{kind:`p`,text:"`sumar_pares(numeros)` recibe una lista de enteros y devuelve la suma de los pares. Un número es par si `n % 2 == 0`. La lista vacía suma 0."}],starter:`def sumar_pares(numeros):
    total = 0
    return total
`,tests:`fn = globals().get("sumar_pares")
assert fn is not None, "Definí sumar_pares(numeros)."
assert fn([1, 2, 3, 4]) == 6, "sumar_pares([1, 2, 3, 4]) debería ser 6"
assert fn([]) == 0, "la lista vacía suma 0"
assert fn([2, 2, 2]) == 6
assert fn([1, 3, 5]) == 0
`,hint:`Arrancá total en 0. Recorré con for. Si es par, sumalo a total. Al final, return total.`,solution:`def sumar_pares(numeros):
    total = 0
    for n in numeros:
        if n % 2 == 0:
            total = total + n
    return total
`},{type:`quiz`,id:`d2-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué hace == ?`,options:[`Asigna un valor`,`Compara dos valores`,`Imprime`,`Define una función`],answer:1,why:`= guarda. == pregunta si son iguales.`},{prompt:`¿Qué valores produce range(3)?`,options:[`1, 2, 3`,`0, 1, 2`,`0, 1, 2, 3`,`3`],answer:1,why:`Empieza en 0 y el final no entra.`},{prompt:`¿Qué le falta a un while que no termina?`,options:[`Un print`,`Un cambio que vuelva falsa la condición`,`Un f-string`,`Una lista`],answer:1,why:`Si la condición sigue en True, el bucle no sale.`},{prompt:`Una función imprime 6 y no tiene return. ¿Qué devuelve?`,options:[`6`,`"6"`,`None`,`True`],answer:2,why:`Sin return, el valor de la función es None. La pantalla no cuenta.`}]}]},{n:3,title:`Listas y diccionarios`,outcome:`Recorrés una lista de diccionarios, que es la forma de los mensajes y de las filas.`,blocks:[{type:`read`,id:`d3-listas`,title:`Listas: orden y posición`,minutes:8,body:[{kind:`p`,text:"Una lista guarda valores en orden. El primero está en la posición 0. El último también se nombra `-1`. Un corte `items[1:3]` incluye el 1 y excluye el 3."},{kind:`code`,text:`items = ["a", "b", "c", "d"]
print(items[0])
print(items[-1])
print(items[1:3])
items.append("e")`},{kind:`p`,text:"`len(items)` dice cuántos hay. `append` agrega al final. Recorrer es un `for item in items`."}]},{type:`read`,id:`d3-dicts`,title:`Diccionarios: un dato con nombre`,minutes:8,body:[{kind:`p`,text:'Un diccionario asocia una clave con un valor. `fila["titulo"]` falla si la clave no está. `fila.get("titulo")` devuelve `None` en vez de explotar. Para datos que vienen de afuera, `.get` es más seguro.'},{kind:`code`,text:`mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))`},{kind:`p`,text:`Una lista de diccionarios es una tabla en memoria. Cada diccionario es una fila. Cada clave es una columna. Los mensajes de un chat tienen exactamente esta forma.`},{kind:`code`,text:`chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]`},{kind:`note`,tone:`course`,title:`Esta estructura no se va más`,text:`Un mensaje a la API, un chunk de RAG y una fila que vuelve de SQL se leen igual: diccionario, o lista de diccionarios. Si este día queda sólido, el resto del curso se lee.`}]},{type:`python`,id:`d3-lab`,title:`Laboratorio: un chat chico`,minutes:6,graded:!1,prompt:[{kind:`p`,text:"Corré y mirá qué imprime `.get` cuando la clave no existe. Después agregá un tercer mensaje y volvé a correr."}],starter:`mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))

chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]
for m in chat:
    print(m["role"], "→", m["content"])
`,tests:``,hint:`tokens no está en el diccionario. get devuelve None y no corta el programa.`,solution:`mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))

chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]
for m in chat:
    print(m["role"], "→", m["content"])
`},{type:`python`,id:`d3-extremos`,title:`Primero y último`,minutes:10,graded:!0,prompt:[{kind:`p`,text:"`primer_y_ultimo(items)` devuelve una lista con el primer elemento y el último. Si hay uno solo, los dos puestos valen ese elemento."}],starter:`def primer_y_ultimo(items):
    return []
`,tests:`fn = globals().get("primer_y_ultimo")
assert fn is not None, "Definí primer_y_ultimo(items)."
assert fn([1, 2, 3, 4]) == [1, 4]
assert fn(["a"]) == ["a", "a"]
assert fn(["hola", "curso"]) == ["hola", "curso"]
`,hint:`El primero es items[0]. El último es items[-1]. Devolvé una lista de dos elementos.`,solution:`def primer_y_ultimo(items):
    return [items[0], items[-1]]
`},{type:`python`,id:`d3-usuario`,title:`El texto del usuario`,minutes:12,graded:!0,prompt:[{kind:`p`,text:'`texto_del_usuario(mensajes)` recibe una lista de diccionarios con `role` y `content`. Devolvé el `content` del primer mensaje cuyo `role` sea `"user"`. Si no hay ninguno, devolvé `None`.'}],starter:`def texto_del_usuario(mensajes):
    return None
`,tests:`fn = globals().get("texto_del_usuario")
assert fn is not None, "Definí texto_del_usuario(mensajes)."
base = [
    {"role": "system", "content": "Sos un tutor."},
    {"role": "user", "content": "¿Qué es un token?"},
]
assert fn(base) == "¿Qué es un token?"
assert fn([{"role": "system", "content": "hola"}]) is None
assert fn([
    {"role": "user", "content": "primero"},
    {"role": "user", "content": "segundo"},
]) == "primero"
`,hint:`Recorré la lista. Si mensaje.get("role") == "user", devolvé el content enseguida. Si el for termina, return None.`,solution:`def texto_del_usuario(mensajes):
    for mensaje in mensajes:
        if mensaje.get("role") == "user":
            return mensaje.get("content")
    return None
`},{type:`python`,id:`d3-tokens`,title:`Sumar tokens de los chunks`,minutes:10,graded:!0,prompt:[{kind:`p`,text:"`total_tokens(chunks)` recibe una lista de diccionarios. Cada uno tiene una clave `tokens` con un entero. Devolvé la suma. Una lista vacía suma 0."}],starter:`def total_tokens(chunks):
    return 0
`,tests:`fn = globals().get("total_tokens")
assert fn is not None, "Definí total_tokens(chunks)."
assert fn([{"tokens": 10}, {"tokens": 5}]) == 15
assert fn([]) == 0
assert fn([{"texto": "hola", "tokens": 3}]) == 3
`,hint:`Igual que sumar pares, pero el número está en chunk["tokens"].`,solution:`def total_tokens(chunks):
    total = 0
    for chunk in chunks:
        total = total + chunk["tokens"]
    return total
`},{type:`quiz`,id:`d3-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué posición es items[-1]?`,options:[`La primera`,`La última`,`La posición 1`,`Siempre da error`],answer:1,why:`Los índices negativos cuentan desde el final. -1 es el último.`},{prompt:`¿Qué devuelve fila.get("titulo") si la clave no está?`,options:[`Un error`,`""`,`None`,`0`],answer:2,why:`get evita el KeyError y devuelve None. Los corchetes sí explotan.`},{prompt:`¿Qué es, en la práctica, una lista de diccionarios?`,options:[`Un número`,`Una tabla: cada dict es una fila`,`Un archivo SQL`,`Un bucle`],answer:1,why:`Las claves son columnas. El orden de la lista es el orden de las filas.`},{prompt:`¿Qué imprime este corte: ["a", "b", "c"][0:2]?`,options:[`["a", "b", "c"]`,`["a", "b"]`,`["b", "c"]`,`["a"]`],answer:1,why:`El corte incluye el inicio y excluye el fin.`}]}]},{n:4,title:`Funciones`,outcome:`Definís funciones con argumentos, valor por defecto y un return claro.`,blocks:[{type:`read`,id:`d4-func`,title:`Una función es una herramienta con nombre`,minutes:8,body:[{kind:`p`,text:`Una función empaqueta un trabajo. Recibe argumentos, hace una cosa y devuelve un valor. Si el nombre dice qué hace y el cuerpo entra en una pantalla, está bien.`},{kind:`code`,text:`def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))`},{kind:`p`,text:"El argumento con `=` al definir es un valor por defecto. Quien llama puede omitirlo. Los de la izquierda, no."},{kind:`note`,tone:`course`,title:`En el curso, una tool es esto`,text:`Un agente llama funciones: buscar documentos, calcular un costo, guardar un log. FastAPI también: cada ruta es una función. Hoy el músculo es definirlas chicas y devolver un valor.`}]},{type:`read`,id:`d4-hints`,title:`Qué entra, qué sale, qué no se ve`,minutes:6,body:[{kind:`p`,text:"Las anotaciones dicen la intención. No las exige Python al correr: si anotás `int` y pasás un texto, no corta solo."},{kind:`code`,text:`def costo(tokens: int) -> float:
    return tokens / 1_000_000 * 2.5`},{kind:`p`,text:`Una variable creada adentro de la función no existe afuera. Eso es bueno: el desorden no se escapa. Si necesitás el resultado, devolvélo.`},{kind:`p`,text:"El guion bajo en `1_000_000` es solo visual. Python lo lee como un millón."}]},{type:`python`,id:`d4-lab`,title:`Laboratorio: el valor por defecto`,minutes:6,graded:!1,prompt:[{kind:`p`,text:`Corré las dos llamadas. Fijate cuál usó el turno por defecto y cuál lo pisó.`}],starter:`def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))
`,tests:``,hint:`La primera llamada manda un solo argumento. La segunda manda dos.`,solution:`def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))
`},{type:`python`,id:`d4-costo`,title:`Estimar un costo`,minutes:12,graded:!0,prompt:[{kind:`p`,text:"`costo_estimado(tokens, precio_por_millon=2.5)` devuelve los dólares: tokens dividido un millón, por el precio. Si no te pasan precio, usá 2.5."}],starter:`def costo_estimado(tokens, precio_por_millon=2.5):
    return 0
`,tests:`fn = globals().get("costo_estimado")
assert fn is not None, "Definí costo_estimado."
assert abs(fn(1_000_000) - 2.5) < 1e-9, "un millón de tokens a 2.5 debería costar 2.5"
assert abs(fn(500_000, 4) - 2.0) < 1e-9, "medio millón a 4 dólares debería costar 2"
assert abs(fn(0) - 0) < 1e-9
`,hint:`return tokens / 1_000_000 * precio_por_millon. No redondees.`,solution:`def costo_estimado(tokens, precio_por_millon=2.5):
    return tokens / 1_000_000 * precio_por_millon
`},{type:`python`,id:`d4-fila`,title:`Resumir una fila`,minutes:10,graded:!0,prompt:[{kind:`p`,text:"`resumir_fila(fila)` recibe un diccionario con `titulo` y `tokens`. Devolvé un texto con esta forma exacta: `Notas de RAG (1500 tokens)`."}],starter:`def resumir_fila(fila):
    return ""
`,tests:`fn = globals().get("resumir_fila")
assert fn is not None, "Definí resumir_fila(fila)."
assert fn({"titulo": "Notas de RAG", "tokens": 1500}) == "Notas de RAG (1500 tokens)"
assert fn({"titulo": "Guía", "tokens": 0, "extra": 1}) == "Guía (0 tokens)"
`,hint:`Un f-string alcanza: f"{fila['titulo']} ({fila['tokens']} tokens)".`,solution:`def resumir_fila(fila):
    return f"{fila['titulo']} ({fila['tokens']} tokens)"
`},{type:`quiz`,id:`d4-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué pasa si una función no tiene return?`,options:[`Devuelve 0`,`Devuelve ""`,`Devuelve None`,`No se puede definir`],answer:2,why:`El return ausente vale None.`},{prompt:`¿Para qué sirve un argumento con valor por defecto?`,options:[`Obliga a pasar siempre ese valor`,`Quien llama puede omitirlo`,`Convierte el valor en texto`,`Lo guarda en la base`],answer:1,why:`Si no te lo pasan, usás el que escribiste al definir la función.`},{prompt:`¿Python rechaza una llamada si el valor no coincide con la anotación de tipo?`,options:[`Sí, siempre`,`No: la anotación no se exige al correr`,`Solo los domingos`,`Solo si usás print`],answer:1,why:`Los hints son para personas y editores. El intérprete no los valida solo.`},{prompt:`¿Dónde se ve una variable creada adentro de una función?`,options:[`En todo el archivo`,`Solo adentro de esa función, salvo que la devuelvas`,`En SQL`,`En el print anterior`],answer:1,why:`El interior de la función no se escapa. El return es la puerta.`}]}]},{n:5,title:`Errores y JSON`,outcome:`Atrapás un JSON roto y devolvés texto JSON sin perder las tildes.`,blocks:[{type:`read`,id:`d5-errores`,title:`El programa puede fallar y seguir`,minutes:8,body:[{kind:`p`,text:`Cuando algo sale mal, Python corta y muestra un traceback: el tipo de error, el mensaje y la línea. Leelo de abajo hacia arriba. La última línea dice qué pasó. Más arriba, dónde.`},{kind:`p`,text:"`try` intenta. `except` agarra un tipo de error. Si atrapás todo con un `except` pelado, escondés bugs que no eran ese. Nombrá el error que esperás."},{kind:`code`,text:`try:
    data = json.loads(texto)
except json.JSONDecodeError:
    data = None`},{kind:`note`,tone:`course`,title:`Los modelos a veces mandan JSON roto`,text:`Structured outputs y JSON mode bajan esa chance. No la borran. El curso habla de sistemas que aguantan un error: este try es la versión mínima.`}]},{type:`read`,id:`d5-json`,title:`JSON es texto con forma de diccionario`,minutes:8,body:[{kind:`p`,text:"JSON viaja como `str`. `json.loads` lo convierte en dict, lista, número, texto, bool o None. `json.dumps` hace el camino inverso: de un valor Python a texto."},{kind:`ul`,items:[`En JSON las claves van siempre entre comillas dobles.`,"`true`, `false` y `null` en JSON son `True`, `False` y `None` en Python.","Sin `ensure_ascii=False`, `dumps` escribe `\\u00ed` en vez de `í`."]},{kind:`code`,text:`import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))`}]},{type:`python`,id:`d5-lab`,title:`Laboratorio: ida y vuelta`,minutes:6,graded:!1,prompt:[{kind:`p`,text:`Corré el ejemplo. Después rompé el texto a propósito —sacale una comilla— y mirá el traceback. Volvé a dejarlo bien antes de seguir.`}],starter:`import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))
`,tests:``,hint:`loads entra. dumps sale. La clave se lee como un diccionario común.`,solution:`import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))
`},{type:`python`,id:`d5-parsear`,title:`Parsear una respuesta`,minutes:12,graded:!0,prompt:[{kind:`p`,text:"`parsear_respuesta(texto)` recibe un string. Si es JSON válido y el valor es un diccionario con la clave `respuesta`, devolvé ese valor. Si el JSON está roto, no es un diccionario o no tiene la clave, devolvé `None`."}],starter:`def parsear_respuesta(texto):
    return None
`,tests:`fn = globals().get("parsear_respuesta")
assert fn is not None, "Definí parsear_respuesta(texto)."
assert fn('{"respuesta": "hola"}') == "hola"
assert fn('{"respuesta": "día"}') == "día"
assert fn('{"respuesta": 3}') == 3
assert fn("no es json") is None
assert fn('{"otra": 1}') is None
assert fn("[1, 2, 3]") is None
`,hint:`import json. try con json.loads. except json.JSONDecodeError: return None. Después preguntá isinstance(data, dict) y si "respuesta" in data.`,solution:`import json

def parsear_respuesta(texto):
    try:
        data = json.loads(texto)
    except json.JSONDecodeError:
        return None
    if isinstance(data, dict) and "respuesta" in data:
        return data["respuesta"]
    return None
`},{type:`python`,id:`d5-empaquetar`,title:`Empaquetar para mandar`,minutes:10,graded:!0,prompt:[{kind:`p`,text:"`empaquetar(respuesta)` devuelve un string JSON con una sola clave, `respuesta`. Si el valor tiene tildes, el string tiene que mostrarlas: usá `ensure_ascii=False`."}],starter:`import json

def empaquetar(respuesta):
    return json.dumps({})
`,tests:`import json
fn = globals().get("empaquetar")
assert fn is not None, "Definí empaquetar(respuesta)."
raw = fn("día")
assert isinstance(raw, str), "Tiene que devolver un string, no " + type(raw).__name__
assert "día" in raw, "La tilde se escapó. Usá ensure_ascii=False."
assert json.loads(raw) == {"respuesta": "día"}
assert json.loads(fn(3)) == {"respuesta": 3}
`,hint:`return json.dumps({"respuesta": respuesta}, ensure_ascii=False).`,solution:`import json

def empaquetar(respuesta):
    return json.dumps({"respuesta": respuesta}, ensure_ascii=False)
`},{type:`quiz`,id:`d5-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué hace json.loads?`,options:[`Convierte un valor Python en texto`,`Convierte texto JSON en un valor Python`,`Escribe un archivo`,`Cierra un error`],answer:1,why:`loads = load string. dumps hace el camino inverso.`},{prompt:`¿Qué error lanza un JSON inválido?`,options:[`KeyError`,`TypeError`,`json.JSONDecodeError`,`None`],answer:2,why:`Ese es el que tiene sentido atrapar alrededor de loads.`},{prompt:`¿Para qué sirve ensure_ascii=False?`,options:[`Borra las tildes`,`Deja las tildes visibles en el texto JSON`,`Ordena las claves`,`Evita el try`],answer:1,why:`Si no, dumps escribe secuencias \\u en vez del carácter.`},{prompt:`¿Por qué no usar un except pelado?`,options:[`Porque no existe`,`Porque esconde errores que no esperabas`,`Porque solo sirve en SQL`,`Porque print no funciona adentro`],answer:1,why:`Atrapá el error que sabés manejar. El resto tiene que verse.`}]}]}],pt=`
CREATE TABLE documentos (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  fuente TEXT NOT NULL,
  tokens INTEGER NOT NULL,
  coleccion TEXT NOT NULL
);
INSERT INTO documentos (id, titulo, fuente, tokens, coleccion) VALUES
  (1, 'Guía de prompts', 'interno', 800, 'curso'),
  (2, 'Precios de APIs', 'web', 400, 'costos'),
  (3, 'Política de datos', 'interno', 1200, 'legal'),
  (4, 'Notas de RAG', 'interno', 1500, 'curso'),
  (5, 'Changelog del modelo', 'web', 300, 'modelos'),
  (6, 'Manual de onboarding', 'interno', 900, 'curso');
`,mt=`
CREATE TABLE colecciones (
  nombre TEXT PRIMARY KEY,
  responsable TEXT NOT NULL
);
INSERT INTO colecciones (nombre, responsable) VALUES
  ('curso', 'Mora'),
  ('costos', 'Ivan'),
  ('legal', 'Mora'),
  ('modelos', 'Ivan');
`,Q={title:`documentos`,sql:`SELECT id, titulo, fuente, tokens, coleccion FROM documentos ORDER BY id`},ht={title:`colecciones`,sql:`SELECT nombre, responsable FROM colecciones ORDER BY nombre`},gt=`
CREATE TABLE chunks (
  id INTEGER PRIMARY KEY,
  documento_id INTEGER NOT NULL,
  texto TEXT NOT NULL,
  posicion INTEGER NOT NULL
);
INSERT INTO chunks (id, documento_id, texto, posicion) VALUES
  (1, 4, 'RAG busca fragmentos, no el documento entero.', 1),
  (2, 4, 'Sin RAG el modelo solo usa su memoria.', 0),
  (3, 1, 'Un prompt claro pide el formato de salida.', 0),
  (4, 2, 'El costo depende de los tokens de entrada.', 0);
`,_t={title:`chunks`,sql:`SELECT id, documento_id, posicion, texto FROM chunks ORDER BY id`},$=pt,vt=`${pt}\n${mt}`,yt=`${pt}\n${gt}`,bt=[{n:6,title:`Consultar una tabla`,outcome:`Leés una tabla con SELECT, WHERE, ORDER BY y LIMIT.`,blocks:[{type:`read`,id:`d6-modelo`,title:`Una tabla es una lista de hechos parecidos`,minutes:10,body:[{kind:`p`,text:"Una base relacional guarda filas en tablas. Cada fila es un hecho. Cada columna es un campo de ese hecho. La clave primaria (`id`) identifica la fila y no se repite."},{kind:`ul`,items:["Tabla: `documentos`.",`Fila: un documento concreto.`,"Columna: `titulo`, `fuente`, `tokens`, `coleccion`.","`NOT NULL` significa que esa columna no puede quedar vacía."]},{kind:`p`,text:"SQL le pregunta a esa tabla. No la modifica si solo usás `SELECT`. Cada corrida de estos ejercicios vuelve a los datos de partida: podés probar sin miedo."},{kind:`note`,tone:`course`,title:`Antes del embedding está el filtro`,text:`En RAG vas a buscar por similitud. Igual, casi siempre filtrás antes: solo documentos internos, solo esta colección, solo lo que entra en el presupuesto de tokens. Ese filtro es SQL, o la misma idea.`}]},{type:`read`,id:`d6-select`,title:`SELECT elige columnas y filas`,minutes:8,body:[{kind:`p`,text:"`SELECT` dice qué columnas querés. `FROM` dice de qué tabla. `WHERE` se queda con algunas filas. `ORDER BY` las ordena. `LIMIT` corta la cantidad. El orden de las palabras es ese, no otro."},{kind:`code`,text:`SELECT titulo, tokens
FROM documentos
WHERE coleccion = 'curso'
ORDER BY tokens DESC;`},{kind:`p`,text:"En SQL las textos van con comillas simples. `DESC` es de mayor a menor. `ASC` es de menor a mayor y es el orden por defecto. `ORDER BY` no cambia lo que está guardado: solo cómo vuelve la respuesta."},{kind:`note`,tone:`tip`,title:`Pedí las columnas por su nombre`,text:`Evitá SELECT *. En estos ejercicios el check compara los nombres de columna que pide el enunciado.`}]},{type:`sql`,id:`d6-curso`,title:`Los del curso, del más largo al más corto`,minutes:12,prompt:[{kind:`p`,text:"Traé `titulo` y `tokens` de los documentos cuya `coleccion` es `curso`. Ordenalos de más tokens a menos."}],starter:`SELECT titulo, tokens
FROM documentos
`,setup:$,previews:[Q],mode:`select`,orderMatters:!0,mustContain:[`where`,`order by`],expected:[{titulo:`Notas de RAG`,tokens:1500},{titulo:`Manual de onboarding`,tokens:900},{titulo:`Guía de prompts`,tokens:800}],hint:`WHERE coleccion = 'curso' y ORDER BY tokens DESC.`,solution:`SELECT titulo, tokens
FROM documentos
WHERE coleccion = 'curso'
ORDER BY tokens DESC;
`},{type:`sql`,id:`d6-cortos`,title:`Los dos más cortos`,minutes:10,prompt:[{kind:`p`,text:"Traé `titulo` y `tokens` de los dos documentos con menos tokens, de menor a mayor."}],starter:`SELECT titulo, tokens
FROM documentos
`,setup:$,previews:[Q],mode:`select`,orderMatters:!0,mustContain:[`order by`,`limit`],expected:[{titulo:`Changelog del modelo`,tokens:300},{titulo:`Precios de APIs`,tokens:400}],hint:`ORDER BY tokens ASC y LIMIT 2. ASC se puede omitir, pero LIMIT no.`,solution:`SELECT titulo, tokens
FROM documentos
ORDER BY tokens ASC
LIMIT 2;
`},{type:`sql`,id:`d6-web`,title:`Solo lo que vino de la web`,minutes:10,prompt:[{kind:`p`,text:"Traé `titulo` y `fuente` de los documentos con `fuente` igual a `web`, ordenados por título de la A a la Z."}],starter:`SELECT titulo, fuente
FROM documentos
`,setup:$,previews:[Q],mode:`select`,orderMatters:!0,mustContain:[`where`,`order by`],expected:[{titulo:`Changelog del modelo`,fuente:`web`},{titulo:`Precios de APIs`,fuente:`web`}],hint:`WHERE fuente = 'web' y ORDER BY titulo.`,solution:`SELECT titulo, fuente
FROM documentos
WHERE fuente = 'web'
ORDER BY titulo;
`},{type:`quiz`,id:`d6-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Para qué sirve la clave primaria?`,options:[`Para ordenar alfabéticamente`,`Para identificar cada fila sin repetirse`,`Para borrar la tabla`,`Para sumar una columna`],answer:1,why:`El id nombra una fila y no se repite.`},{prompt:`¿Qué parte de la consulta elige filas?`,options:[`SELECT`,`WHERE`,`ORDER BY`,`FROM`],answer:1,why:`SELECT elige columnas. WHERE se queda con filas. ORDER BY solo las ordena.`},{prompt:`¿ORDER BY modifica lo que está guardado?`,options:[`Sí, reescribe la tabla`,`No: solo cambia el orden de esta respuesta`,`Solo si usás DESC`,`Solo con LIMIT`],answer:1,why:`Es parte de la pregunta, no un cambio de datos.`},{prompt:`¿Qué hace LIMIT 2?`,options:[`Deja dos columnas`,`Devuelve como máximo dos filas`,`Borra dos filas`,`Agrupa de a dos`],answer:1,why:`Corta la cantidad de filas de la respuesta, después del orden.`}]}]},{n:7,title:`Agrupar y unir`,outcome:`Contás filas por grupo y juntás dos tablas con JOIN.`,blocks:[{type:`read`,id:`d7-filtros`,title:`Filtros que se combinan`,minutes:8,body:[{kind:`p`,text:"`AND` exige las dos condiciones. `OR` alcanza con una. `IN ('a', 'b')` es un OR corto. `LIKE '%RAG%'` busca un texto contenido: los `%` son «cualquier cosa»."},{kind:`code`,text:`SELECT titulo
FROM documentos
WHERE fuente = 'interno'
  AND tokens > 1000;`},{kind:`p`,text:"`COUNT(*)` cuenta filas. `SUM` suma una columna. Solos, resumen toda la tabla. Con `GROUP BY` resumen cada grupo: una fila de resultado por cada valor distinto de esa columna."}]},{type:`read`,id:`d7-unir`,title:`JOIN pega tablas por una clave`,minutes:10,body:[{kind:`p`,text:"Si el responsable vive en otra tabla, no lo copies en cada documento. Guardalo una vez y uní. `JOIN` arma filas nuevas combinando las que coinciden."},{kind:`code`,text:`SELECT documentos.titulo, colecciones.responsable
FROM documentos
JOIN colecciones ON documentos.coleccion = colecciones.nombre;`},{kind:`p`,text:"`ON` es la condición del emparejamiento. No es un WHERE: WHERE filtra después. Si el nombre de columna se repite en las dos tablas, anteponé el nombre de la tabla."},{kind:`note`,tone:`course`,title:`Un chunk no vive solo`,text:`En RAG el fragmento apunta al documento padre. Para mostrar la fuente al usuario hacés un JOIN: texto del chunk más título del documento. Mañana lo armás vos.`}]},{type:`sql`,id:`d7-grupo`,title:`Cuántos documentos por colección`,minutes:14,prompt:[{kind:`p`,text:"Devolvé dos columnas: `coleccion` y `cantidad`. `cantidad` es cuántos documentos hay en esa colección. Ordená de más a menos, y si empatan, por el nombre de la colección."}],starter:`SELECT coleccion
FROM documentos
`,setup:$,previews:[Q],mode:`select`,orderMatters:!0,mustContain:[`group by`,`order by`],expected:[{coleccion:`curso`,cantidad:3},{coleccion:`costos`,cantidad:1},{coleccion:`legal`,cantidad:1},{coleccion:`modelos`,cantidad:1}],hint:`COUNT(*) AS cantidad, GROUP BY coleccion, ORDER BY cantidad DESC, coleccion ASC.`,solution:`SELECT coleccion, COUNT(*) AS cantidad
FROM documentos
GROUP BY coleccion
ORDER BY cantidad DESC, coleccion ASC;
`},{type:`sql`,id:`d7-join`,title:`Título y responsable, solo internos`,minutes:14,prompt:[{kind:`p`,text:"Uní `documentos` con `colecciones`. Devolvé `titulo` y `responsable`, solo de los documentos con `fuente` igual a `interno`, ordenados por título."}],starter:`SELECT documentos.titulo
FROM documentos
`,setup:vt,previews:[Q,ht],mode:`select`,orderMatters:!0,mustContain:[`join`,`where`,`order by`],expected:[{titulo:`Guía de prompts`,responsable:`Mora`},{titulo:`Manual de onboarding`,responsable:`Mora`},{titulo:`Notas de RAG`,responsable:`Mora`},{titulo:`Política de datos`,responsable:`Mora`}],hint:`JOIN colecciones ON documentos.coleccion = colecciones.nombre. WHERE documentos.fuente = 'interno'. ORDER BY documentos.titulo.`,solution:`SELECT documentos.titulo, colecciones.responsable
FROM documentos
JOIN colecciones ON documentos.coleccion = colecciones.nombre
WHERE documentos.fuente = 'interno'
ORDER BY documentos.titulo;
`},{type:`quiz`,id:`d7-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué hace GROUP BY coleccion junto con COUNT(*)?`,options:[`Borra las colecciones repetidas`,`Devuelve una fila por colección, con su cantidad`,`Ordena la tabla en disco`,`Une dos tablas`],answer:1,why:`Agrupa y después cuenta dentro de cada grupo.`},{prompt:`¿Qué hace el ON de un JOIN?`,options:[`Dice qué filas de una tabla coinciden con cuáles de la otra`,`Ordena el resultado`,`Cuenta filas`,`Crea una tabla`],answer:0,why:`ON es el emparejamiento. WHERE filtra el resultado ya unido.`},{prompt:`¿Qué filas agarra LIKE '%RAG%'?`,options:[`Solo las que empiezan con RAG`,`Las que contienen RAG en cualquier parte`,`Solo la columna llamada RAG`,`Las que son exactamente RAG`],answer:1,why:`El % de cada lado significa cualquier texto antes o después.`},{prompt:`¿Por qué el responsable está en otra tabla?`,options:[`Porque SQL no permite texto`,`Para no copiar el mismo dato en cada documento`,`Porque JOIN es obligatorio siempre`,`Porque WHERE no funciona con texto`],answer:1,why:`Un dato que se repite vive en un solo lugar y se une por la clave.`}]}]},{n:8,title:`Guardar y modelar`,outcome:`Insertás, actualizás y creás una tabla de chunks.`,blocks:[{type:`read`,id:`d8-modelar`,title:`Diseñar es decidir qué es una fila`,minutes:10,body:[{kind:`p`,text:`Una mala tabla mezcla dos hechos en la misma fila, o parte un hecho en columnas que no significan nada. Una buena fila responde una pregunta: «¿qué es una cosa de estas?».`},{kind:`p`,text:"Un documento es una cosa. Un fragmento de ese documento es otra. Si metés todo el texto en una sola columna gigante, no podés pedirle «el segundo chunk». Por eso aparece una tabla `chunks` con `documento_id`, `texto` y `posicion`."},{kind:`ul`,items:["`INTEGER PRIMARY KEY` identifica la fila.","`TEXT` y `INTEGER` dicen qué tipo de valor entra.","`NOT NULL` obliga a completar ese dato.","La clave que apunta a otra tabla (`documento_id`) es lo que después une el JOIN."]}]},{type:`read`,id:`d8-escribir`,title:`INSERT, UPDATE, DELETE`,minutes:8,body:[{kind:`p`,text:"`INSERT` agrega una fila. `UPDATE` cambia columnas de las filas que cumplen el `WHERE`. `DELETE` borra filas. Sin `WHERE`, el update y el delete tocan la tabla entera."},{kind:`code`,text:`UPDATE documentos
SET tokens = 1000
WHERE id = 4;`},{kind:`note`,tone:`warn`,title:`El WHERE no es opcional cuando escribís`,text:`Un UPDATE sin WHERE le cambia el precio a todos los productos, no al que tenías en la cabeza. En Pista cada corrida vuelve a empezar. En una base real, no.`}]},{type:`sql`,id:`d8-insert`,title:`Agregá la bitácora`,minutes:10,prompt:[{kind:`p`,text:"Insertá el documento `7`. Título: `Bitácora de evals`. Fuente: `interno`. Tokens: `600`. Colección: `curso`."}],starter:`INSERT INTO documentos (id, titulo, fuente, tokens, coleccion)
VALUES (7, '', '', 0, '');
`,setup:$,previews:[Q],mode:`mutate`,orderMatters:!0,checkSql:`SELECT titulo, tokens, fuente, coleccion FROM documentos WHERE id = 7`,mustContain:[`insert`],expected:[{titulo:`Bitácora de evals`,tokens:600,fuente:`interno`,coleccion:`curso`}],hint:`Reemplazá los valores vacíos. El orden de las columnas del INSERT tiene que coincidir con el de VALUES.`,solution:`INSERT INTO documentos (id, titulo, fuente, tokens, coleccion)
VALUES (7, 'Bitácora de evals', 'interno', 600, 'curso');
`},{type:`sql`,id:`d8-update`,title:`Corregí los tokens del 4`,minutes:8,prompt:[{kind:`p`,text:"El documento `4` quedó mal cargado. Dejá sus tokens en `1000`. No toques las demás filas."}],starter:`UPDATE documentos
SET tokens = 1500
WHERE id = 4;
`,setup:$,previews:[Q],mode:`mutate`,orderMatters:!0,checkSql:`SELECT tokens FROM documentos WHERE id = 4`,mustContain:[`update`,`where`],expected:[{tokens:1e3}],hint:`SET tokens = 1000. El WHERE id = 4 ya está: no lo borres.`,solution:`UPDATE documentos
SET tokens = 1000
WHERE id = 4;
`},{type:`sql`,id:`d8-chunks`,title:`Creá la tabla de fragmentos`,minutes:12,prompt:[{kind:`p`,text:"Creá `chunks` con las columnas `id` (clave primaria entera), `documento_id` (entero obligatorio), `texto` (texto obligatorio) y `posicion` (entero obligatorio). Insertá una fila: id `1`, documento `4`, posición `0`, texto `RAG busca fragmentos, no documentos enteros.`"}],starter:`-- CREATE TABLE y después INSERT
`,setup:$,previews:[Q],mode:`mutate`,orderMatters:!0,checkSql:`SELECT documento_id, texto, posicion FROM chunks WHERE id = 1`,mustContain:[`create table`,`insert`],expected:[{documento_id:4,texto:`RAG busca fragmentos, no documentos enteros.`,posicion:0}],hint:`CREATE TABLE chunks (id INTEGER PRIMARY KEY, documento_id INTEGER NOT NULL, texto TEXT NOT NULL, posicion INTEGER NOT NULL); después el INSERT con el texto exacto.`,solution:`CREATE TABLE chunks (
  id INTEGER PRIMARY KEY,
  documento_id INTEGER NOT NULL,
  texto TEXT NOT NULL,
  posicion INTEGER NOT NULL
);
INSERT INTO chunks (id, documento_id, texto, posicion)
VALUES (1, 4, 'RAG busca fragmentos, no documentos enteros.', 0);
`},{type:`quiz`,id:`d8-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Qué hace un UPDATE sin WHERE?`,options:[`No hace nada`,`Cambia todas las filas`,`Solo cambia la primera`,`Borra la tabla`],answer:1,why:`Sin filtro, la asignación aplica a la tabla completa.`},{prompt:`¿Para qué sirve NOT NULL?`,options:[`Ordena la columna`,`Impide guardar una fila sin ese dato`,`Cuenta los vacíos`,`Crea la clave primaria por sí solo`],answer:1,why:`La fila tiene que traer un valor en esa columna.`},{prompt:`¿Por qué el chunk es otra tabla y no una columna más?`,options:[`Porque un documento tiene muchos fragmentos, y cada uno es una fila`,`Porque SQL no guarda texto`,`Porque PRIMARY KEY solo existe en la segunda tabla`,`Porque INSERT no funciona en documentos`],answer:0,why:`Varios hechos del mismo tipo merecen varias filas, no columnas texto1, texto2, texto3.`},{prompt:`¿Qué columna une un chunk con su documento?`,options:[`posicion`,`texto`,`documento_id`,`fuente`],answer:2,why:`documento_id apunta al id del documento. Eso es lo que usa el JOIN.`}]}]},{n:9,title:`Python habla con datos`,outcome:`Filtrás filas en Python y armás una consulta sin pegar texto dentro del SQL.`,blocks:[{type:`read`,id:`d9-dos`,title:`La misma pregunta, dos idiomas`,minutes:8,body:[{kind:`p`,text:"SQL pregunta en la base. Cuando las filas ya están en memoria, Python pregunta con un `for` o una comprensión. Es la misma idea: quedate con las que cumplen, y de esas sacá una columna."},{kind:`code`,text:`SELECT titulo
FROM documentos
WHERE coleccion = 'curso';`},{kind:`code`,text:`[fila["titulo"] for fila in filas if fila["coleccion"] == "curso"]`},{kind:`p`,text:`Un driver —el puente entre Python y la base— te devuelve filas como listas, en el orden de las columnas. El paso siguiente es armar el diccionario: cada columna con su valor. Eso es lo que venís leyendo desde el día 3.`}]},{type:`read`,id:`d9-inyeccion`,title:`No armes SQL pegando texto`,minutes:8,body:[{kind:`p`,text:`Esto parece cómodo y es un agujero:`},{kind:`code`,text:`sql = f"SELECT titulo FROM documentos WHERE coleccion = '{coleccion}'"`},{kind:`p`,text:"Si `coleccion` vale `curso' OR '1'='1`, la condición se vuelve siempre verdadera y te llevás la tabla. Se llama inyección. La forma segura es un placeholder y los valores aparte. La base los trata como datos, no como código."},{kind:`code`,text:`sql = "SELECT titulo FROM documentos WHERE coleccion = ?"
params = (coleccion,)`},{kind:`note`,tone:`course`,title:`Esto ya es una política de seguridad`,text:`El curso habla de seguridad, costos y sistemas que no se caen por un input raro. No concatenar SQL es la primera regla, y aplica igual cuando el texto lo escribió un modelo.`}]},{type:`python`,id:`d9-coleccion`,title:`El WHERE, escrito en Python`,minutes:12,graded:!0,prompt:[{kind:`p`,text:"`de_la_coleccion(filas, nombre)` recibe una lista de diccionarios con `titulo` y `coleccion`. Devolvé los títulos de esa colección, en el mismo orden. Si no hay, devolvé una lista vacía."}],starter:`def de_la_coleccion(filas, nombre):
    return []
`,tests:`fn = globals().get("de_la_coleccion")
assert fn is not None, "Definí de_la_coleccion(filas, nombre)."
filas = [
    {"titulo": "Guía de prompts", "coleccion": "curso"},
    {"titulo": "Precios de APIs", "coleccion": "costos"},
    {"titulo": "Notas de RAG", "coleccion": "curso"},
]
assert fn(filas, "curso") == ["Guía de prompts", "Notas de RAG"]
assert fn(filas, "legal") == []
assert fn([], "curso") == []
`,hint:`Recorré filas. Si fila["coleccion"] == nombre, agregá el título a una lista. Devolvé esa lista.`,solution:`def de_la_coleccion(filas, nombre):
    titulos = []
    for fila in filas:
        if fila["coleccion"] == nombre:
            titulos.append(fila["titulo"])
    return titulos
`},{type:`python`,id:`d9-dicts`,title:`De columnas y valores a diccionarios`,minutes:12,graded:!0,prompt:[{kind:`p`,text:'Así vuelve una consulta: una lista de nombres de columna y una lista de filas. `filas_a_dicts(columnas, valores)` arma la lista de diccionarios. `columnas = ["titulo", "tokens"]` y `valores = [["Guía", 800]]` dan `[{"titulo": "Guía", "tokens": 800}]`.'}],starter:`def filas_a_dicts(columnas, valores):
    return []
`,tests:`fn = globals().get("filas_a_dicts")
assert fn is not None, "Definí filas_a_dicts(columnas, valores)."
assert fn(["titulo", "tokens"], [["Guía", 800], ["Notas", 1500]]) == [
    {"titulo": "Guía", "tokens": 800},
    {"titulo": "Notas", "tokens": 1500},
]
assert fn(["a"], []) == []
assert fn(["id", "ok"], [[1, True]]) == [{"id": 1, "ok": True}]
`,hint:`Por cada fila de valores, armá un dict. enumerate o zip emparejan la columna i con el valor i.`,solution:`def filas_a_dicts(columnas, valores):
    filas = []
    for valor in valores:
        fila = {}
        for i, columna in enumerate(columnas):
            fila[columna] = valor[i]
        filas.append(fila)
    return filas
`},{type:`python`,id:`d9-segura`,title:`Consulta con placeholder`,minutes:12,graded:!0,prompt:[{kind:`p`,text:"`consulta_segura(coleccion)` devuelve dos cosas: el SQL y los parámetros. El SQL pregunta `titulo` en `documentos` filtrando `coleccion`, y usa `?` en vez del valor. Los parámetros son una tupla o una lista con ese valor, solo."},{kind:`p`,text:`El valor no puede aparecer escrito dentro del SQL, ni siquiera si trae comillas.`}],starter:`def consulta_segura(coleccion):
    sql = "SELECT titulo FROM documentos"
    params = ()
    return sql, params
`,tests:`fn = globals().get("consulta_segura")
assert fn is not None, "Definí consulta_segura(coleccion)."

def revisar(valor):
    sql, params = fn(valor)
    assert isinstance(sql, str), "sql tiene que ser texto"
    assert isinstance(params, (tuple, list)), "params tiene que ser tupla o lista"
    assert "?" in sql, "Falta el placeholder ?"
    assert valor not in sql, "El valor quedó pegado dentro del SQL: " + sql
    assert list(params) == [valor], "params debería ser el valor solo, llegó " + repr(params)

revisar("curso")
revisar("curso' OR '1'='1")
`,hint:`sql = "SELECT titulo FROM documentos WHERE coleccion = ?" y params = (coleccion,). La coma en la tupla de un solo elemento es obligatoria.`,solution:`def consulta_segura(coleccion):
    sql = "SELECT titulo FROM documentos WHERE coleccion = ?"
    params = (coleccion,)
    return sql, params
`},{type:`quiz`,id:`d9-quiz`,title:`Cierre del día`,minutes:8,questions:[{prompt:`¿Por qué es peligroso meter una variable dentro del texto SQL?`,options:[`Porque Python no tiene f-strings`,`Porque el valor puede cambiar el sentido de la consulta`,`Porque WHERE no acepta texto`,`Porque las tuplas son lentas`],answer:1,why:`Eso es inyección: el dato se vuelve código.`},{prompt:`¿Qué es el ? de una consulta parametrizada?`,options:[`Un error de tipeo`,`Un lugar que la base rellena con el dato, sin interpretarlo como SQL`,`Un JOIN`,`El nombre de la tabla`],answer:1,why:`El SQL queda fijo. El valor viaja aparte, en params.`},{prompt:`¿Qué equivale en Python a WHERE coleccion = 'curso'?`,options:[`Quedarte con las filas cuyo campo coleccion es curso`,`Borrar las otras tablas`,`Ordenar por curso`,`Crear la columna coleccion`],answer:0,why:`Es un filtro. El for con if, o la comprensión, hacen ese trabajo en memoria.`},{prompt:`¿Cómo conviene convertir las filas crudas del driver?`,options:[`Dejarlas como texto SQL`,`Emparejar cada columna con su valor y armar diccionarios`,`Guardarlas en un solo string`,`Ignorar los nombres de columna`],answer:1,why:`El dict es la forma que ya sabés recorrer.`}]}]},{n:10,title:`Armar contexto`,outcome:`Juntás SQL y Python para preparar lo que se le mandaría a un modelo.`,blocks:[{type:`read`,id:`d10-mision`,title:`No le mandes la biblioteca entera`,minutes:8,body:[{kind:`p`,text:`Un modelo responde mejor si le pasás poco y relevante. El trabajo de hoy es el esqueleto de un RAG, sin embeddings y sin API: elegir fragmentos con SQL y convertirlos en el texto que iría en el prompt.`},{kind:`p`,text:`La base tiene documentos y chunks. Un chunk es un pedazo, con posición, que apunta a su documento. Primero preguntás. Después Python da formato.`},{kind:`note`,tone:`course`,title:`Lo que el curso agrega encima`,text:`Embeddings, vectorstores y reranking eligen mejor que un LIKE. La forma no cambia: entran filas, sale un contexto, y una función lo arma.`}]},{type:`sql`,id:`d10-sql`,title:`Traé los fragmentos que mencionan RAG`,minutes:14,prompt:[{kind:`p`,text:"Uní `chunks` con `documentos`. Devolvé `titulo` y `texto` de los chunks cuyo texto contiene `RAG`. Ordenalos por `posicion`."}],starter:`SELECT d.titulo AS titulo, c.texto AS texto
FROM chunks AS c
JOIN documentos AS d ON d.id = c.documento_id
WHERE c.texto LIKE '%prompt%'
ORDER BY c.posicion;
`,setup:yt,previews:[Q,_t],mode:`select`,orderMatters:!0,mustContain:[`join`,`like`,`order by`],expected:[{titulo:`Notas de RAG`,texto:`Sin RAG el modelo solo usa su memoria.`},{titulo:`Notas de RAG`,texto:`RAG busca fragmentos, no el documento entero.`}],hint:`Cambiá el LIKE a '%RAG%'. El JOIN y el ORDER BY del borrador ya sirven. La posición 0 va antes que la 1.`,solution:`SELECT d.titulo AS titulo, c.texto AS texto
FROM chunks AS c
JOIN documentos AS d ON d.id = c.documento_id
WHERE c.texto LIKE '%RAG%'
ORDER BY c.posicion;
`},{type:`python`,id:`d10-contexto`,title:`Pasá las filas a un prompt`,minutes:14,graded:!0,prompt:[{kind:`p`,text:"`armar_contexto(filas, pregunta)` devuelve un string. Primera línea: `Pregunta: ` y la pregunta. Segunda línea: `Contexto:`. Después, una línea por fila: `- `, el título, `: `, el texto. Las líneas van separadas por un salto de línea, sin una línea vacía al final."},{kind:`p`,text:"En un proyecto real, `filas` sería el resultado del SELECT de arriba. Acá te llegan ya como diccionarios."}],starter:`def armar_contexto(filas, pregunta):
    return ""
`,tests:`fn = globals().get("armar_contexto")
assert fn is not None, "Definí armar_contexto(filas, pregunta)."
filas = [
    {"titulo": "Notas de RAG", "texto": "RAG busca fragmentos."},
    {"titulo": "Notas de RAG", "texto": "El modelo responde con ese contexto."},
]
esperado = """Pregunta: ¿qué es RAG?
Contexto:
- Notas de RAG: RAG busca fragmentos.
- Notas de RAG: El modelo responde con ese contexto."""
recibido = fn(filas, "¿qué es RAG?")
assert recibido == esperado, "Quedó así: " + repr(recibido)
assert fn([], "hola") == "Pregunta: hola\\nContexto:"
`,hint:`Armá una lista de líneas y unila con "\\n".join. La primera es f"Pregunta: {pregunta}". La segunda es "Contexto:". Cada fila suma f"- {fila['titulo']}: {fila['texto']}".`,solution:`def armar_contexto(filas, pregunta):
    lineas = [f"Pregunta: {pregunta}", "Contexto:"]
    for fila in filas:
        lineas.append(f"- {fila['titulo']}: {fila['texto']}")
    return "\\n".join(lineas)
`},{type:`read`,id:`d10-mapa`,title:`Qué te llevás, y qué todavía no`,minutes:10,body:[{kind:`p`,text:`Si llegaste hasta acá con los checks en verde, podés sentarte en la primera clase sin traducir lo básico. Esto es lo que ya hiciste:`},{kind:`ul`,items:[`Leer una función y decir qué devuelve, no qué imprime.`,`Recorrer una lista de diccionarios: mensajes, filas, chunks.`,`Parsear JSON y seguir de largo si viene roto.`,`Filtrar, ordenar, agrupar y unir tablas.`,`Pensar una fila nueva antes de crearla.`,`No pegar variables dentro del SQL.`]},{kind:`p`,text:`El curso de AI Engineering suma, encima de esto, tokens y costos, pedirle JSON a un modelo, embeddings, LangChain, agentes, FastAPI, Docker y un proyecto con RAG. No hace falta saberlo hoy. Si una tool del agente te parece rara, recordá que es una función. Si un vectorstore te parece magia, recordá que la metadata sigue siendo una tabla.`},{kind:`p`,text:`El programa está en [ICARO, AI Engineering](https://icaro.org.ar/producto/ai-engineering/). La hoja de repaso junta la sintaxis en una página.`},{kind:`note`,tone:`tip`,title:`Si un día quedó flojo`,text:`Volvé a los días 3, 5 y 9. Son los que más se parecen a lo que vas a leer en código de otras personas.`}]},{type:`quiz`,id:`d10-quiz`,title:`Último check`,minutes:10,questions:[{prompt:`¿Qué le conviene recibir un modelo?`,options:[`La base completa, por las dudas`,`Pocos fragmentos relevantes, con formato`,`Solo el CREATE TABLE`,`El traceback de un error`],answer:1,why:`Eso es el contexto: poco, elegido, y escrito para que se pueda leer.`},{prompt:`¿Qué es una tool de un agente, en el fondo?`,options:[`Una tabla`,`Una función con argumentos y un return`,`Un JOIN`,`Un f-string`],answer:1,why:`El modelo decide llamarla. La ejecutás vos, en Python.`},{prompt:`¿Qué problema tiene armar el SQL con un f-string?`,options:[`Es más lento siempre`,`El dato puede modificar la consulta`,`Python 3 no tiene f-strings`,`SQLite no tiene WHERE`],answer:1,why:`Por eso el placeholder. El día 9 existe para que esto no se te pase.`},{prompt:`¿Qué todavía no necesitás para empezar el curso?`,options:[`Leer un diccionario`,`Escribir un SELECT con JOIN`,`Entrenar un transformer a mano`,`Saber qué devuelve una función`],answer:2,why:`El curso construye encima de Python y datos. El entrenamiento fino viene más adelante, y no es el piso.`}]}]}],xt=[...ft,...bt],St=new Set;for(let e of xt)for(let t of e.blocks){if(St.has(t.id))throw Error(`Bloque duplicado: ${t.id}`);St.add(t.id)}function Ct(e){return xt.find(t=>t.n===e)}export{st as a,ut as i,Ct as n,dt as r,xt as t};