(window.webpackJsonp=window.webpackJsonp||[]).push([["0556"],{"/a9y":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("/HRN")),i=r(n("WaGi")),u=r(n("ZDA2")),o=r(n("/+P4")),l=r(n("N9n2")),d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=d(n("q1tI")),c=d(n("PgRs")),s={400:"Bad Request",404:"This page could not be found",500:"Internal Server Error",501:"Not Implemented"},p=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=s[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:v.error},f.default.createElement(c.default,null,f.default.createElement("title",null,e,": ",t)),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:v.h1},e):null,f.default.createElement("div",{style:v.desc},f.default.createElement("h2",{style:v.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(f.default.Component);p.displayName="ErrorPage",t.default=p;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04/V":function(e,t,n){var r=n("fYqa"),a=n("G1Wo")("iterator"),i=n("sipE");e.exports=n("p9MR").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||i.hasOwnProperty(r(t))}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),i=r(n("MI3g")),u=r(n("a7VT")),o=r(n("AT/M")),l=r(n("sLSF")),d=r(n("Tit0")),f=r(n("dfwq")),c=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new c.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,a.default)(this,f),r=(0,i.default)(this,(0,u.default)(f).call(this,e)),p&&(t.add((0,o.default)(r)),n((0,o.default)(r))),r}return(0,d.default)(f,r),(0,l.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},IClC:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},PgRs:function(e,t,n){e.exports=n("m/Pd")},"V/f9":function(e,t,n){n("k8Q4"),n("YQlv"),e.exports=n("p9MR").Array.from},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=n("imt6");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n&&(!a||a&&(void 0!==i&&i))}t.isAmp=u,t.useAmp=function(){return u(a.default.useContext(i.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.default.useContext(i.AmpModeContext);return r.enabled=!0,r.hybrid=n,a.default.createElement(e,t)}return r.__nextAmpOnly=!n,r.getInitialProps=e.getInitialProps,r}},YQlv:function(e,t,n){"use strict";var r=n("vCXk"),a=n("0T/a"),i=n("AYVP"),u=n("nJOo"),o=n("widk"),l=n("pasi"),d=n("s+zB"),f=n("8Vlj");a(a.S+a.F*!n("Q2zc")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,c,s=i(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,g=f(s);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),null==g||p==Array&&o(g))for(n=new p(t=l(s.length));t>y;y++)d(n,y,m?h(s[y],y):s[y]);else for(c=g.call(s),n=new p;!(a=c.next()).done;y++)d(n,y,m?u(c,h,[a.value,y],!0):a.value);return n.length=y,n}})},d04V:function(e,t,n){e.exports=n("V/f9")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var i=n("d04V"),u=n.n(i),o=n("yLu3"),l=n.n(o);function d(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return u()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return d})},icr7:function(e,t,n){n("tCzM"),n("k8Q4"),e.exports=n("04/V")},imt6:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpModeContext=a.createContext({})},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n("q1tI")),u=a(n("4hZ1")),o=n("imt6"),l=n("IClC"),d=n("Wziy");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var s=["name","httpEquiv","charSet","viewport","itemProp"];function p(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(c,[]).reverse().concat(f("",t.isAmp)).filter((n=new r.default,a=new r.default,u=new r.default,o={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(a.has(e.type))return!1;a.add(e.type);break;case"meta":for(var t=0,i=s.length;t<i;t++){var l=s[t];if(e.props.hasOwnProperty(l))if("charSet"===l||"viewport"===l){if(u.has(l))return!1;u.add(l)}else{var d=e.props[l],f=o[l]||new r.default;if(f.has(d))return!1;f.add(d),o[l]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return i.default.cloneElement(e,{key:r,className:n})});var n,a,u,o}var v=u.default();function h(e){var t=e.children;return i.default.createElement(o.AmpModeContext.Consumer,null,function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(v,{reduceComponentsToState:p,handleStateChange:n,isAmp:d.isAmp(e)},t)})})}h.rewind=v.rewind,t.default=h},"s+zB":function(e,t,n){"use strict";var r=n("OtwA"),a=n("+EWW");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},yLu3:function(e,t,n){e.exports=n("icr7")}},[["04ac","5d41","9da1"]]]);