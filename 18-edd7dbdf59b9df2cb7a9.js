(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{951:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return T}));var e=s(840),t=s.n(e),o=s(841),c=s.n(o),p=s(521),r=s.n(p),i=s(842),l=s.n(i),u=s(843),d=s.n(u),h=s(844),k=s.n(h),m=s(845),b=s.n(m),f=s(846),g=s.n(f),y=s(0),v=s.n(y),w=s(210);function x(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,e=k()(n);if(a){var t=k()(this).constructor;s=Reflect.construct(e,arguments,t)}else s=e.apply(this,arguments);return d()(this,s)}}function $(n){return v.a.createElement(n.tag,g()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return v.a.createElement($,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return v.a.createElement($,{tag:"style",html:n.style})}y.Component;var T=function(n){l()(s,n);var a=x(s);function s(){return t()(this,s),a.apply(this,arguments)}return c()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(j,{style:""}),v.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#coding-guides">¶</a><a href="javascript:void(0)" id="coding-guides" class="anchor-point"></a>Coding Guides</h2>\n<p>Zent provides some useful SCSS mixins and functions to help write themable style.</p>\n<h3 class="anchor-heading"><a href="#mixins">¶</a><a href="javascript:void(0)" id="mixins" class="anchor-point"></a>Mixins</h3>\n<p>There\'re three mixins defined in  <code>assets/theme/default</code>.</p>\n<h4 class="anchor-heading"><a href="#theme-color">¶</a><a href="javascript:void(0)" id="theme-color" class="anchor-point"></a>theme-color</h4>\n<p><code>theme-color</code> is what you need most of time.</p>\n<p><code>theme-color($property, $category, $index, $opacity: 1)</code>, the last parameter <code>$opacity</code> is optional.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>background-color<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// with opacity</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-border">¶</a><a href="javascript:void(0)" id="theme-border" class="anchor-point"></a>theme-border</h4>\n<p><code>theme-border</code> provides an easy way to define border with theme support.</p>\n<p><code>theme-border($width, $style, $category, $index, $opacity: 1)</code>, again the last parameter <code>$opacity</code> is optional.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// with opacity</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>There\'re four variants corresponding to <code>border-left</code>, <code>border-right</code>, <code>border-top</code> and <code>border-bottom</code>, they all share the definition with <code>theme-border</code>.</p>\n<ul>\n<li><code>theme-border-left</code></li>\n<li><code>theme-border-right</code></li>\n<li><code>theme-border-top</code></li>\n<li><code>theme-border-bottom</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#theme-shadow">¶</a><a href="javascript:void(0)" id="theme-shadow" class="anchor-point"></a>theme-shadow</h4>\n<p>There\'re three predefined shadows: <code>layer</code>, <code>focus</code> and <code>modal</code>. These\'re the possible arguments to <code>theme-shadow($name)</code>.</p>\n<ul>\n<li><code>layer</code> can be used for popup shadow, e.g. <code>Select</code> and <code>Pop</code></li>\n<li><code>focus</code> can be used for input focus highlight</li>\n<li><code>modal</code> can be used for dialog shadow</li>\n</ul>\n<h3 class="anchor-heading"><a href="#functions">¶</a><a href="javascript:void(0)" id="functions" class="anchor-point"></a>Functions</h3>\n<p>There\'re some cases where <code>theme-color</code>, <code>theme-border</code> and <code>theme-shadow</code> can not cover, you can use these functions to help write themable code.</p>\n<h4 class="anchor-heading"><a href="#theme-rgb">¶</a><a href="javascript:void(0)" id="theme-rgb" class="anchor-point"></a>theme-rgb</h4>\n<p><code>theme-rgb($category, $index)</code> this function returns a CSS variable in RGB format.</p>\n<p>For example <code>theme-rgb(stroke, 6)</code> returns something like <code>rgb(var(--theme-stroke-6, 235, 237, 240))</code>.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token variable">$theme-stroke-6</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgb</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-rgba">¶</a><a href="javascript:void(0)" id="theme-rgba" class="anchor-point"></a>theme-rgba</h4>\n<p><code>theme-rgba($category, $index, $opacity)</code> is like <code>theme-rgb</code>, except it accepts an <code>$opacity</code> parameter and returns a CSS variable in RGBA format.</p>\n<p>For example <code>theme-rgb(stroke, 6, 0.8)</code> returns something like <code>rgba(var(--theme-stroke-6, 235, 237, 240), 0.8)</code>.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme-stroke-6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgba</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>'}))}}]),s}(y.Component)}}]);