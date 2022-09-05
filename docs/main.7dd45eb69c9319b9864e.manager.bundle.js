(self.webpackChunkfv_react_ui_components=self.webpackChunkfv_react_ui_components||[]).push([[179],{97697:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(92222);var react=__webpack_require__(67294),esm=__webpack_require__(32605),types=__webpack_require__(96899),dist_esm=(__webpack_require__(68309),__webpack_require__(57327),__webpack_require__(47941),__webpack_require__(69600),__webpack_require__(86141)),lib=(__webpack_require__(79753),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(47042),__webpack_require__(91038),__webpack_require__(74855)),lib_default=__webpack_require__.n(lib);__webpack_require__(19601),__webpack_require__(24812);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const NpmInstall_CopyIcon=function CopyIcon(props){return react.createElement("svg",_extends({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),react.createElement("path",{d:"M14.5 0H4.5C3.67156 0 3 0.671562 3 1.5V3H1.5C0.671562 3 0 3.67156 0 4.5V14.5C0 15.3284 0.671562 16 1.5 16H11.5C12.3284 16 13 15.3284 13 14.5V13H14.5C15.3284 13 16 12.3284 16 11.5V1.5C16 0.671562 15.3284 0 14.5 0ZM12 14.5C12 14.7756 11.7756 15 11.5 15H1.5C1.22438 15 1 14.7756 1 14.5V4.5C1 4.22437 1.22438 4 1.5 4H3V11.5C3 12.3284 3.67156 13 4.5 13H12V14.5ZM15 11.5C15 11.7756 14.7756 12 14.5 12H4.5C4.22437 12 4 11.7756 4 11.5V1.5C4 1.22438 4.22437 1 4.5 1H14.5C14.7756 1 15 1.22438 15 1.5V11.5Z",fill:"#000"}))};var react_jss_esm=__webpack_require__(57928);const styles=(0,react_jss_esm.createUseStyles)({codebox:{border:"1px #000 solid",borderRadius:4,backgroundColor:"#E4E7EC",display:"flex",justifyContent:"space-between",maxWidth:700},children:{marginTop:0,marginBottom:0},copyContainer:{padding:10,cursor:"pointer"}});var gaia_react_tooltip=__webpack_require__(58772),gaia_react_tooltip_default=__webpack_require__.n(gaia_react_tooltip);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const NpmInstall_CodeBox=function CodeBox(_ref){var children=_ref.children,_React$useState2=_slicedToArray(react.useState("Press to Copy"),2),copyString=_React$useState2[0],setCopyString=_React$useState2[1],classes=styles();return react.createElement("div",{className:classes.codebox},react.createElement("pre",{className:classes.children},children),react.createElement(gaia_react_tooltip_default(),{title:copyString},react.createElement(lib_default(),{text:children.join(""),onCopy:function onCopy(){return setCopyString("Copied!")}},react.createElement("div",{className:classes.copyContainer,onMouseLeave:function onMouseLeave(){return setCopyString("Press to Copy")}},react.createElement(NpmInstall_CopyIcon,{fill:"#000"})))))},NpmInstall_styles=(0,react_jss_esm.createUseStyles)({container:{padding:"1rem"},title:{marginTop:10,marginBottom:10}});const addons_NpmInstall=function NpmInstall(_ref){var active=_ref.active,pkg=(0,dist_esm.Ut)("pkg",null),classes=NpmInstall_styles();if(!pkg||!active)return null;var name=pkg.name,version=pkg.version,peerDependencies=pkg.peerDependencies,filteredPeerDependencies=peerDependencies?Object.keys(peerDependencies).filter((function(peerName){return"react"!==peerName&&"react-jss"!==peerName&&"classnames"!==peerName})):[];return react.createElement("div",{className:classes.container},react.createElement("h3",{className:classes.title},"To install package:"),react.createElement(NpmInstall_CodeBox,null,"npm install ",name,"@",version),!!filteredPeerDependencies.length&&react.createElement(react.Fragment,null,react.createElement("h3",{className:classes.title},"⚠️ Make sure that all needed peer dependencies are also installed ⚠️:"),react.createElement(NpmInstall_CodeBox,null,"npm install ",filteredPeerDependencies.join(" \\\n"))))};esm.KP.register("npm",(function(){esm.KP.add("npm",{type:types.V.TAB,title:"Npm install",route:function route(_ref){var storyId=_ref.storyId,refId=_ref.refId;return refId?"/npm/".concat(refId,"_").concat(storyId):"/npm/".concat(storyId)},match:function match(_ref2){return"npm"===_ref2.viewMode},render:function render(_ref3){var active=_ref3.active;return react.createElement(addons_NpmInstall,{active})}})}))},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[229],(()=>(__webpack_exec__(37707),__webpack_exec__(7967),__webpack_exec__(78295),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(10566),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(86358),__webpack_exec__(97697))));__webpack_require__.O()}]);