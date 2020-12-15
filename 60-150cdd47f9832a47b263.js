(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1010:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return S}));var t=s(846),o=s.n(t),e=s(840),p=s.n(e),c=s(841),l=s.n(c),i=s(521),u=s.n(i),r=s(842),k=s.n(r),d=s(843),m=s.n(d),g=s(844),h=s.n(g),f=s(845),y=s.n(f),v=s(0),b=s.n(v),w=s(210),D=s(145);function C(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=h()(n);if(a){var o=h()(this).constructor;s=Reflect.construct(t,arguments,o)}else s=t.apply(this,arguments);return m()(this,s)}}var E=function(){var n=function(n){k()(s,n);var a=C(s);function s(){var n;p()(this,s);for(var t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];return n=a.call.apply(a,[this].concat(o)),y()(u()(n),"state",{visible:!1}),y()(u()(n),"triggerDialog",(function(a){n.setState({visible:a})})),n}return l()(s,[{key:"render",value:function(){var n=this;return b.a.createElement("div",null,b.a.createElement(D.Button,{type:"primary",onClick:function(){return n.triggerDialog(!0)}},"Show Dialog"),b.a.createElement(D.Dialog,{visible:this.state.visible,onClose:function(){return n.triggerDialog(!1)},title:"Dialog"},b.a.createElement("p",null,"content"),b.a.createElement("p",null,"other content")))}}]),s}(b.a.Component);return b.a.createElement(n,null)},x=function(){var n=D.Dialog.openDialog,a=D.Dialog.closeDialog,s="my_dialog";return b.a.createElement(D.Button,{type:"primary",onClick:function(){n({dialogId:s,title:"Open the dialog through openDialog",children:b.a.createElement("div",null,"Hello World"),footer:b.a.createElement(D.Button,{onClick:function(){return a(s)}},"Close"),onClose:function(){console.log("outer dialog closed")}})}},"Open")},j=function(){var n=D.Dialog.openDialog,a=b.a.createContext({shared:"This is from context"}),s=function(s){k()(o,s);var t=C(o);function o(){var s;p()(this,o);for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return s=t.call.apply(t,[this].concat(c)),y()(u()(s),"open",(function(){n({parentComponent:u()(s),title:"openDialog support context",children:b.a.createElement(a.Consumer,null,(function(n){var a=n.shared;return b.a.createElement("span",null,a)}))})})),s}return l()(o,[{key:"render",value:function(){return b.a.createElement(D.Button,{type:"primary",onClick:this.open},"Show")}}]),o}(b.a.Component);return b.a.createElement(a.Provider,null,b.a.createElement(s,null))};function B(n){return b.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return b.a.createElement(B,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return b.a.createElement(B,{tag:"style",html:n.style})}var N=function(n){k()(s,n);var a=C(s);function s(){var n;p()(this,s);for(var t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];return n=a.call.apply(a,[this].concat(o)),y()(u()(n),"state",{showCode:!1}),y()(u()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return b.a.createElement("div",{className:"zandoc-react-demo"},b.a.createElement("div",{className:"zandoc-react-demo__preview"},o),b.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.a.createElement("div",{className:"zandoc-react-demo__title"},b.a.createElement("p",null,s||"")),b.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.a.createElement("pre",{className:"zandoc-react-demo__code"},b.a.createElement(B,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(v.Component),S=function(n){k()(s,n);var a=C(s);function s(){return p()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(z,{style:""}),b.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#dialog">¶</a><a href="javascript:void(0)" id="dialog" class="anchor-point"></a>Dialog</h2>\n<p>Dialog is used for opening a floating layer.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>\n<p>Imperative, call <code>openDialog</code> function.</p>\n</li>\n<li>\n<p>Component-based, show/hide the dialog  through <code>visible</code> prop.</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.a.createElement(N,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">triggerDialog</span> <span class="token operator">=</span> <span class="token parameter">visible</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token maybe-class-name">Show</span> <span class="token maybe-class-name">Dialog</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">visible</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>other content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Example</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(E)),b.a.createElement(N,{title:"Set up with openDialog",id:"Demoopen",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog<span class="token punctuation">,</span> closeDialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">\'my_dialog\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dialogId<span class="token operator">:</span> id<span class="token punctuation">,</span> <span class="token comment">// id is used to close the dialog</span>\n    title<span class="token operator">:</span> <span class="token string">\'Open the dialog through openDialog\'</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Hello</span> <span class="token maybe-class-name">World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    footer<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function">closeDialog</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'outer dialog closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Open</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(x)),b.a.createElement(N,{title:"openDialog with context",id:"Democontext",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">DemoContext</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  shared<span class="token operator">:</span> <span class="token string">\'This is from context\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">\'openDialog support context\'</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoContext.Consumer</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> shared <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>shared<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoContext.Consumer</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">open</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token maybe-class-name">Show</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoContext.Provider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Example</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoContext.Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(j)),b.a.createElement(_,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>custom dialog title</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>content of the dialog: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>content of the dialog footer</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>visibility of the dialog</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>visibility of the close button at the upper right corner</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>close callback</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>visibility of the mask</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>wether click on the mask is to close the dialog</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style object</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#opendialog">¶</a><a href="javascript:void(0)" id="opendialog" class="anchor-point"></a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> can contain all props above in addition to <code>visible</code> as well as the following parameters：</strong> </p>\n<table class="table">\n<thead>\n<tr>\n<th>parameter</th>\n<th>description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialogId</td>\n<td>Optional, the id of dialog. The dialog can be closed throuth \n<code>closeDialog(dialogId)</code>\n.</td>\n<td>string</td>\n<td><code>\'random-id\'</code></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Optional, the reference of dialog\'s parent, used to correlate the \n<code>context</code></td>\n<td>ReactInstance</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>A <code>ref</code> function passed to <code>openDialog</code> can provide a reference to the instance, <strong><code>ref</code> in string format is non-supported.</strong></p>\n<blockquote>\n<p>The return value of <code>openDialog</code> is a function which can close the dialog manually, and close the dialog with this function won\'t trigger <code>onClose</code>. <strong>It is recommended to use <code>closeDialog</code>.</strong></p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#closedialog">¶</a><a href="javascript:void(0)" id="closedialog" class="anchor-point"></a>closeDialog</h4>\n<p><code>closeDialog(dialogId: string, options: object): void</code></p>\n<p>If <code>options.triggerOnClose</code> is <code>true</code>, <code>onClose</code> will be triggered when the dialog is closed.</p>\n<h4 class="anchor-heading"><a href="#specify-the-width-of-the-dialo">¶</a><a href="javascript:void(0)" id="specify-the-width-of-the-dialo" class="anchor-point"></a>Specify the width of the Dialog</h4>\n<p>Set a <code>style</code> prop on Dialog can specify its width, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>By default the pop-up window width will adapt its content, meanwhile it has a minimum width and maximum width.</p>'}))}}]),s}(v.Component)}}]);