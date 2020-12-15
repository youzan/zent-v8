(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{967:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return T}));var t=s(846),p=s.n(t),e=s(840),o=s.n(e),c=s(841),l=s.n(c),u=s(521),k=s.n(u),i=s(842),r=s.n(i),m=s(843),d=s.n(m),g=s(844),y=s.n(g),w=s(845),f=s.n(w),h=s(0),v=s.n(h),D=s(210),b=s(145);function C(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=y()(n);if(a){var p=y()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return d()(this,s)}}var E=function(){var n=b.Menu.MenuItem;return v.a.createElement(b.Dropdown,{position:b.DropdownPosition.AutoBottomLeft},v.a.createElement(b.DropdownClickTrigger,null,v.a.createElement(b.DropdownButton,{type:"primary"},"Click")),v.a.createElement(b.DropdownContent,null,v.a.createElement(b.Menu,null,v.a.createElement(n,null,"Food"),v.a.createElement(n,null,"Clothing"))))},M=function(){var n=b.Menu.MenuItem;return v.a.createElement(b.Dropdown,{position:b.DropdownPosition.AutoBottomLeft},v.a.createElement(b.DropdownHoverTrigger,null,v.a.createElement(b.DropdownButton,{type:"primary"},"Hover")),v.a.createElement(b.DropdownContent,null,v.a.createElement(b.Menu,null,v.a.createElement(n,null,"Food"),v.a.createElement(n,null,"Clothing"))))},I=function(){var n=b.Menu.MenuItem,a=function(a){r()(t,a);var s=C(t);function t(){var n;o()(this,t);for(var a=arguments.length,p=new Array(a),e=0;e<a;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),f()(k()(n),"state",{visible:!1}),n}return l()(t,[{key:"render",value:function(){var a=this;return v.a.createElement(b.Dropdown,{visible:this.state.visible,onVisibleChange:function(n){return a.setState({visible:n})},position:b.DropdownPosition.AutoBottomLeft},v.a.createElement(b.DropdownClickTrigger,null,v.a.createElement(b.DropdownButton,{type:"primary"},"Click")),v.a.createElement(b.DropdownContent,null,v.a.createElement(b.Menu,{onClick:function(){return a.setState({visible:!1})}},v.a.createElement(n,null,"Close menu"),v.a.createElement(n,null,"Close menu"))))}}]),t}(h.Component);return v.a.createElement(a,null)};function B(n){return v.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function P(n){return v.a.createElement(B,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return v.a.createElement(B,{tag:"style",html:n.style})}var z=function(n){r()(s,n);var a=C(s);function s(){var n;o()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),f()(k()(n),"state",{showCode:!1}),f()(k()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},p),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,s||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(B,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(h.Component),T=function(n){r()(s,n);var a=C(s);function s(){return o()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(D.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(_,{style:""}),v.a.createElement(P,{html:'<h2 class="anchor-heading"><a href="#dropdown">¶</a><a href="javascript:void(0)" id="dropdown" class="anchor-point"></a>Dropdown</h2>\n<p>Dropdown menu, often used with <code>Menu</code>.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.a.createElement(z,{title:"Click to open",id:"Demo01click",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownClickTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Food</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Clothing</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(E)),v.a.createElement(z,{title:"Hover to open",id:"Demo02hover",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownHoverTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownHoverTrigger</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Hover</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownHoverTrigger</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Food</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Clothing</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(M)),v.a.createElement(z,{title:"Click to close",id:"Demo03close",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownClickTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>\n        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">visible</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">v</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token operator">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span> menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span> menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoverDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(I)),v.a.createElement(P,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Please refer to <a href="popover#api">the api doc of <code>Popover</code></a>, <code>Dropdown</code> only sets some default values for props.</p>\n<p><code>DropdownButton</code> supports all <code>Button</code> props, the difference is it is aware of <code>Dropdown</code> content visible changes.</p>\n<h3 class="anchor-heading"><a href="#about-position">¶</a><a href="javascript:void(0)" id="about-position" class="anchor-point"></a>About position</h3>\n<p>It\'s recommanded to use <code>AutoXxxYxx</code> provided by <code>Popover</code> for positioning. E.g. it\'s positioned below the lower left corner, but the position will be adjusted if it\'s out of the screen.</p>\n<p>Alternative ways for positioning can be refered to <a href="popover#position%20api">the position doc of <code>Popover</code></a>。</p>'}))}}]),s}(h.Component)}}]);