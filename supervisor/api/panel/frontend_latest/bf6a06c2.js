"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[432],{3432:(e,t,r)=>{r(4577);var i=r(7500),n=r(3550),o=r(4516),s=r(7181),a=(r(8762),r(9381),r(1545),r(2098),r(2511),r(8636));function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!u(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[o])(a)||a);e=d.element,this.addElementPlacement(e,t),d.finisher&&i.push(d.finisher);var l=d.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=f(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function l(e){var t,r=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function v(e,t,r){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},v(e,t,r||e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}!function(e,t,r,i){var n=d();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(p(o.descriptor)||p(n.descriptor)){if(u(o)||u(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(u(o)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(s.d.map(l)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("ha-faded")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({type:Number,attribute:"faded-height"})],key:"fadedHeight",value:()=>102},{kind:"field",decorators:[(0,n.SB)()],key:"_contentShown",value:()=>!1},{kind:"method",key:"render",value:function(){return i.dy`
      <div
        class="container ${(0,a.$)({faded:!this._contentShown})}"
        style=${this._contentShown?"":`max-height: ${this.fadedHeight}px`}
        @click=${this._showContent}
      >
        <slot
          @iron-resize=${this._setShowContent}
        ></slot>
      </div>
    `}},{kind:"get",key:"_slottedHeight",value:function(){var e;return(null===(e=this.shadowRoot.querySelector(".container"))||void 0===e?void 0:e.firstElementChild).assignedElements().reduce(((e,t)=>e+t.offsetHeight),0)||0}},{kind:"method",key:"_setShowContent",value:function(){const e=this._slottedHeight;this._contentShown=0!==e&&e<=this.fadedHeight+50}},{kind:"method",key:"firstUpdated",value:function(e){v(y(r.prototype),"firstUpdated",this).call(this,e),this._setShowContent()}},{kind:"method",key:"_showContent",value:function(){this._contentShown=!0}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      .container {
        display: block;
        height: auto;
        cursor: default;
      }
      .faded {
        cursor: pointer;
        -webkit-mask-image: linear-gradient(
          to bottom,
          black 25%,
          transparent 100%
        );
        mask-image: linear-gradient(to bottom, black 25%, transparent 100%);
        overflow-y: hidden;
      }
    `}}]}}),i.oi);r(3927),r(6255),r(3546),r(4089),r(2039),r(4019);var k=r(4154),g=r(1682),b=r(5460),_=r(9810),w=r(1283),E=r(6765),C=(r(1625),r(10),r(1359),r(4450));function S(){S=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!D(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[o])(a)||a);e=d.element,this.addElementPlacement(e,t),d.finisher&&i.push(d.finisher);var l=d.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function T(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function j(e,t,r){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},j(e,t,r||e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}const I={core:"Home Assistant Core",os:"Home Assistant Operating System",supervisor:"Home Assistant Supervisor"};!function(e,t,r,i){var n=S();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(x(o.descriptor)||x(n.descriptor)){if(D(o)||D(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(D(o)){if(D(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}T(o,n)}else t.push(o)}return t}(s.d.map(P)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("update-available-card")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"addonSlug",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_updateType",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_changelogContent",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_addonInfo",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_updating",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",key:"_addonStoreInfo",value:()=>(0,o.Z)(((e,t)=>t.find((t=>t.slug===e))))},{kind:"method",key:"render",value:function(){if(!this._updateType||"addon"===this._updateType&&!this._addonInfo)return i.dy``;const e=((e,t)=>{if("addon"!==e)return"core"===e?t.includes("dev")?"https://github.com/home-assistant/core/commits/dev":t.includes("b")?"https://next.home-assistant.io/latest-release-notes/":"https://www.home-assistant.io/latest-release-notes/":"os"===e?t.includes("dev")?"https://github.com/home-assistant/operating-system/commits/dev":`https://github.com/home-assistant/operating-system/releases/tag/${t}`:"supervisor"===e?t.includes("dev")?"https://github.com/home-assistant/supervisor/commits/main":`https://github.com/home-assistant/supervisor/releases/tag/${t}`:void 0})(this._updateType,this._version_latest);return i.dy`
      <ha-card
        outlined
        .header=${this.supervisor.localize("update_available.update_name",{name:this._name})}
      >
        <div class="card-content">
          ${this._error?i.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""}
          ${this._version===this._version_latest?i.dy`<p>
                ${this.supervisor.localize("update_available.no_update",{name:this._name})}
              </p>`:this._updating?i.dy`<ha-circular-progress alt="Updating" size="large" active>
                </ha-circular-progress>
                <p class="progress-text">
                  ${this.supervisor.localize("update_available.updating",{name:this._name,version:this._version_latest})}
                </p>`:i.dy`
                ${this._changelogContent?i.dy`
                      <ha-faded>
                        <ha-markdown .content=${this._changelogContent}>
                        </ha-markdown>
                      </ha-faded>
                    `:""}
                <div class="versions">
                  <p>
                    ${this.supervisor.localize("update_available.description",{name:this._name,version:this._version,newest_version:this._version_latest})}
                  </p>
                </div>
                ${["core","addon"].includes(this._updateType)?i.dy`
                      <ha-formfield
                        .label=${this.supervisor.localize("update_available.create_backup")}
                      >
                        <ha-checkbox checked></ha-checkbox>
                      </ha-formfield>
                    `:""}
              `}
        </div>
        ${this._version===this._version_latest||this._updating?"":i.dy`
              <div class="card-actions">
                ${e?i.dy`<a .href=${e} target="_blank" rel="noreferrer">
                      <mwc-button
                        .label=${this.supervisor.localize("update_available.open_release_notes")}
                      >
                      </mwc-button>
                    </a>`:""}
                <span></span>
                <ha-progress-button @click=${this._update} raised>
                  ${this.supervisor.localize("common.update")}
                </ha-progress-button>
              </div>
            `}
      </ha-card>
    `}},{kind:"method",key:"firstUpdated",value:function(e){var t;j($(r.prototype),"firstUpdated",this).call(this,e);const i=null===(t=this.route)||void 0===t?void 0:t.path.substring(1,this.route.path.length),n=["core","os","supervisor"].includes(i)?i:"addon";switch(this._updateType=n,n){case"addon":this.addonSlug||(this.addonSlug=i),this._loadAddonData();break;case"core":this._loadCoreData();break;case"supervisor":this._loadSupervisorData();break;case"os":this._loadOsData()}}},{kind:"get",key:"_shouldCreateBackup",value:function(){var e;if(this._updateType&&!["core","addon"].includes(this._updateType))return!1;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-checkbox");return!t||t.checked}},{kind:"get",key:"_version",value:function(){var e;return this._updateType?"addon"===this._updateType?this._addonInfo.version:(null===(e=this.supervisor[this._updateType])||void 0===e?void 0:e.version)||"":""}},{kind:"get",key:"_version_latest",value:function(){var e;return this._updateType?"addon"===this._updateType?this._addonInfo.version_latest:(null===(e=this.supervisor[this._updateType])||void 0===e?void 0:e.version_latest)||"":""}},{kind:"get",key:"_name",value:function(){return this._updateType?"addon"===this._updateType?this._addonInfo.name:I[this._updateType]:""}},{kind:"method",key:"_loadAddonData",value:async function(){try{this._addonInfo=await(0,k.AD)(this.hass,this.addonSlug)}catch(e){return void(0,E.Ys)(this,{title:this._updateType,text:(0,g.js)(e)})}const e=this._addonInfo.detached||this._addonInfo.available?void 0:this._addonStoreInfo(this._addonInfo.slug,this.supervisor.store.addons);if(this._addonInfo.changelog)try{const e=await(0,k.CH)(this.hass,this.addonSlug);this._changelogContent=(0,C.H)(this._addonInfo,e)}catch(e){return void(this._error=(0,g.js)(e))}!this._addonInfo.available&&e&&((0,C.I)(this.supervisor.info.supported_arch,this._addonInfo.arch)?this._error=this.supervisor.localize("addon.dashboard.not_available_version",{core_version_installed:this.supervisor.core.version,core_version_needed:e.homeassistant}):this._error=this.supervisor.localize("addon.dashboard.not_available_arch"))}},{kind:"method",key:"_loadSupervisorData",value:async function(){try{const e=await(0,_.CP)(this.hass);(0,s.B)(this,"supervisor-update",{supervisor:e})}catch(e){(0,E.Ys)(this,{title:this._updateType,text:(0,g.js)(e)})}}},{kind:"method",key:"_loadCoreData",value:async function(){try{const e=await(0,_.qs)(this.hass);(0,s.B)(this,"supervisor-update",{core:e})}catch(e){(0,E.Ys)(this,{title:this._updateType,text:(0,g.js)(e)})}}},{kind:"method",key:"_loadOsData",value:async function(){try{const e=await(0,b.AP)(this.hass);(0,s.B)(this,"supervisor-update",{os:e})}catch(e){(0,E.Ys)(this,{title:this._updateType,text:(0,g.js)(e)})}}},{kind:"method",key:"_update",value:async function(){if(this._shouldCreateBackup&&"freeze"===this.supervisor.info.state)this._error=this.supervisor.localize("backup.backup_already_running");else{this._error=void 0,this._updating=!0;try{"addon"===this._updateType?await(0,k.V_)(this.hass,this.addonSlug,this._shouldCreateBackup):"core"===this._updateType?await(0,w.y)(this.hass,this._shouldCreateBackup):"os"===this._updateType?await(0,b.Fu)(this.hass):"supervisor"===this._updateType&&await(0,_.CG)(this.hass)}catch(e){if(this.hass.connection.connected&&!(0,g.yz)(e))return this._error=(0,g.js)(e),void(this._updating=!1)}(0,s.B)(this,"update-complete"),this._updating=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host {
        display: block;
      }
      ha-card {
        margin: auto;
      }
      a {
        text-decoration: none;
        color: var(--primary-text-color);
      }
      ha-settings-row {
        padding: 0;
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        border-top: none;
        padding: 0 8px 8px;
      }

      ha-circular-progress {
        display: block;
        margin: 32px;
        text-align: center;
      }

      .progress-text {
        text-align: center;
      }

      ha-markdown {
        padding-bottom: 8px;
      }
    `}}]}}),i.oi)},4450:(e,t,r)=>{r.d(t,{I:()=>i,H:()=>n});const i=(0,r(4516).Z)(((e,t)=>t.some((t=>e.includes(t))))),n=(e,t)=>{if(t.startsWith("# Changelog")&&(t=t.substr(12,t.length)),t.includes(`# ${e.version}`)&&t.includes(`# ${e.version_latest}`)){const r=t.split(`# ${e.version}`)[0];r.includes(`# ${e.version_latest}`)&&(t=r)}return t}}}]);
//# sourceMappingURL=bf6a06c2.js.map