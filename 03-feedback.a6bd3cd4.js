function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=m();if(h(e))return O(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?p(n,i-(e-c)):n}(e))}function O(e){return u=void 0,v&&r?y(e):(r=o=void 0,a)}function j(){var e=m(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},j.flush=function(){return void 0===u?a:O(m())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),submit:document.querySelector("button")},S=localStorage.getItem("feedback-form-state"),h=JSON.parse(S);y.form.addEventListener("input",e(t)((e=>{e.preventDefault();const t=y.input.value,n=y.textarea.value;try{const e=S?JSON.parse(S):{};e.email=t,e.message=n,updatedFeedbackData=JSON.stringify(e),localStorage.setItem("feedback-form-state",updatedFeedbackData)}catch(e){console.log("parsing error")}}),500)),addEventListener("DOMContentLoaded",(()=>{if(null!==S)try{const{email:e,message:t}=h;y.input.value=e,y.textarea.value=t}catch(e){console.log("parsing error")}})),y.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(h),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.a6bd3cd4.js.map
