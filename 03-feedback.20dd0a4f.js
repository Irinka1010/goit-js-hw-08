function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(O,t),l?y(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=p();if(x(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=r=void 0,a)}function j(){var e=p(),n=x(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},j.flush=function(){return void 0===u?a:h(p())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),submit:document.querySelector("button")};y.form.addEventListener("input",e(t)((e=>{e.preventDefault();const t=y.input.value,n=y.textarea.value,o=localStorage.getItem("feedback-form-state");try{const e=o?JSON.parse(o):{};e.email=t,e.message=n;const r=JSON.stringify(e);localStorage.setItem("feedback-form-state",r)}catch(e){console.log("parsing error")}}),500)),addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");try{const t=JSON.parse(e),{email:n,message:o}=t;y.input.value=n,y.textarea.value=o}catch(e){console.log("parsing error")}})),y.form.addEventListener("submit",(e=>{e.preventDefault();const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),y.input.value="",y.textarea.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.20dd0a4f.js.map