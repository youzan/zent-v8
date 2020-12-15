(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{947:function(n,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return E}));var s=a(840),t=a.n(s),o=a(841),c=a.n(o),i=a(521),r=a.n(i),l=a(842),p=a.n(l),u=a(843),d=a.n(u),h=a(844),f=a.n(h),m=a(845),g=a.n(m),k=a(846),y=a.n(k),v=a(0),b=a.n(v),w=a(210);function z(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=f()(n);if(e){var t=f()(this).constructor;a=Reflect.construct(s,arguments,t)}else a=s.apply(this,arguments);return d()(this,a)}}function j(n){return b.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return b.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function R(n){return b.a.createElement(j,{tag:"style",html:n.style})}v.Component;var E=function(n){p()(a,n);var e=z(a);function a(){return t()(this,a),e.apply(this,arguments)}return c()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var e=document.querySelector('a[href="'.concat(n,'"]'));e&&Object(w.a)(document.documentElement,0,function n(e,a){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(a+=e.offsetTop),n(e.parentNode,a);return a}(e,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(R,{style:'img[alt="zent-components"] {\n  width: 523px;\n  height: 435px;\n}'}),b.a.createElement(S,{html:'<h1 class="anchor-heading"><a href="#zent">¶</a><a href="javascript:void(0)" id="zent" class="anchor-point"></a>Zent</h1>\n<p>Zent ( \\ˈzent\\ ) is a React component library developed and used at Youzan. Zent provides a collection of essential UI components and lots of useful domain specific components.</p>\n<p>We have more than 50 components for now and we\'re releasing more.</p>\n<p>Our goal is making React development faster and simpler.</p>\n<h3 class="anchor-heading"><a href="#showcase">¶</a><a href="javascript:void(0)" id="showcase" class="anchor-point"></a>Showcase</h3>\n<p><img src="https://img.yzcdn.cn/public_files/2018/04/17/ab32128950146c5932c267cbc19f9363.png" alt="zent-components"></p>\n<h3 class="anchor-heading"><a href="#features">¶</a><a href="javascript:void(0)" id="features" class="anchor-point"></a>Features</h3>\n<ul>\n<li>High quality React components</li>\n<li>Builtin TypeScript support</li>\n<li>Supports custom themes</li>\n<li>Import JavaScript and styles only if they are used</li>\n<li>Handmade icon font</li>\n</ul>\n<h3 class="anchor-heading"><a href="#supported-environments">¶</a><a href="javascript:void(0)" id="supported-environments" class="anchor-point"></a>Supported Environments</h3>\n<ul>\n<li>React >= 16.8</li>\n<li>Supports server-side rendering(SSR)</li>\n</ul>\n<h3 class="anchor-heading"><a href="#browsers">¶</a><a href="javascript:void(0)" id="browsers" class="anchor-point"></a>Browsers</h3>\n<ul>\n<li>Firefox >= 52(ESR)</li>\n<li>Chrome >= 49</li>\n<li>Safari >= 9.1</li>\n<li>No IE support</li>\n</ul>\n<h4 class="anchor-heading"><a href="#polyfills-needed-for-supported">¶</a><a href="javascript:void(0)" id="polyfills-needed-for-supported" class="anchor-point"></a>Polyfills needed for supported browsers</h4>\n<ul>\n<li><code>es6.object.assign</code></li>\n<li><code>es6.object.is</code></li>\n<li><code>es6.string.ends-with</code></li>\n<li><code>es6.string.starts-with</code></li>\n<li><code>es6.string.includes</code></li>\n<li><code>es7.string.trim-left</code></li>\n<li><code>es7.string.trim-right</code></li>\n<li><code>es6.array.from</code></li>\n<li><code>es6.array.of</code></li>\n<li><code>es6.array.fill</code></li>\n<li><code>es6.array.find</code></li>\n<li><code>es6.array.find-index</code></li>\n<li><code>es7.array.includes</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#install">¶</a><a href="javascript:void(0)" id="install" class="anchor-point"></a>Install</h3>\n<pre><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> zent</code></pre>\n<h3 class="anchor-heading"><a href="#using-components">¶</a><a href="javascript:void(0)" id="using-components" class="anchor-point"></a>Using Components</h3>\n<pre><code class="language-jsx"><span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Import style</span>\n<span class="token keyword module">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#import-as-necessary">¶</a><a href="javascript:void(0)" id="import-as-necessary" class="anchor-point"></a>Import as Necessary</h3>\n<p><a href="babel-plugin-zent">babel-plugin-zent</a> is a babel plugin that can help reduce bundle size, it does code transformations like this:</p>\n<pre><code class="language-js"><span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Transforms into</span>\n\n<span class="token keyword module">import</span> <span class="token maybe-class-name">Button</span> <span class="token keyword module">from</span> <span class="token string">\'zent/es/button\'</span><span class="token punctuation">;</span></code></pre>\n<p>This plugin is useful if you are developing a library based on Zent, or if you only use a small part of Zent components.</p>\n<p>You can find detailed instructions in its <a href="babel-plugin-zent">documentation</a>.</p>\n<p>Using ESM with tree-shaking enabled bundler is also possible.</p>\n<h3 class="anchor-heading"><a href="#theme">¶</a><a href="javascript:void(0)" id="theme" class="anchor-point"></a>Theme</h3>\n<p>Please refer to <a href="theme">Themes</a></p>'}))}}]),a}(v.Component)}}]);