/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.2 (2019-11-19)
 */
!function(){"use strict";function e(){}function r(e){return function(){return e}}var a=function(e){function t(){return n}var n=e;return{get:t,set:function(e){n=e},clone:function(){return a(t())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(e,t){e.addCommand("mceHelp",t)},s=function(e,t){e.ui.registry.addButton("help",{icon:"help",tooltip:"Help",onAction:t}),e.ui.registry.addMenuItem("help",{text:"Help",icon:"help",shortcut:"Alt+0",onAction:t})},c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function l(o){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.concat(e);return o.apply(null,n)}}function n(){return m}var o,u=r(!1),h=r(!0),m=(o={fold:function(e,t){return e()},is:u,isSome:u,isNone:h,getOr:f,getOrThunk:d,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:r(null),getOrUndefined:r(undefined),or:f,orThunk:d,map:n,each:e,bind:n,exists:u,forall:h,filter:n,equals:p,equals_:p,toArray:function(){return[]},toString:r("none()")},Object.freeze&&Object.freeze(o),o);function p(e){return e.isNone()}function d(e){return e()}function f(e){return e}function g(e,t){return O.call(e,t)}function b(e,t){return-1<g(e,t)}function y(e,t){for(var n=e.length,o=new Array(n),a=0;a<n;a++){var r=e[a];o[a]=t(r,a)}return o}function k(e,o){return e.replace(/\$\{([^{}]*)\}/g,function(e,t){var n=o[t];return function(e){var t=typeof e;return"string"==t||"number"==t}(n)?n.toString():e})}function v(e){var t=F(e);return function(e,t){var n=g(e,t);return-1===n?x.none():x.some(n)}(t,"versions").each(function(e){t.splice(e,1),t.push("versions")}),{tabs:e,names:t}}function w(e,t){var n,o=H(),a=B(),r=D(e),i=L(),s=c(((n={})[o.name]=o,n[a.name]=a,n[r.name]=r,n[i.name]=i,n),t.get());return function(e){return x.from(e.getParam("help_tabs"))}(e).fold(function(){return v(s)},function(e){return function(e,t){var n={},o=y(e,function(e){return"string"==typeof e?(E(t,e)&&(n[e]=t[e]),e):(n[e.name]=e).name});return{tabs:n,names:o}}(e,s)})}function A(a,r){return function(){var e=w(a,r),t=e.tabs,n=e.names,o={type:"tabpanel",tabs:function(e){for(var t=[],n=function(e){t.push(e)},o=0;o<e.length;o++)e[o].each(n);return t}(y(n,function(e){return function(e,t){return E(e,t)?x.from(e[t]):x.none()}(t,e)}))};a.windowManager.open({title:"Help",size:"medium",body:o,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{}})}}var C,T=function(n){function e(){return a}function t(e){return e(n)}var o=r(n),a={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:h,isNone:u,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:e,orThunk:e,map:function(e){return T(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?a:m},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(u,function(e){return t(n,e)})}};return a},x={some:T,none:n,from:function(e){return null===e||e===undefined?m:T(e)}},P=(C="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===C}),M=Array.prototype.slice,O=Array.prototype.indexOf,F=(P(Array.from)&&Array.from,Object.keys),S=Object.hasOwnProperty,E=function(e,t){return S.call(e,t)},I=[{shortcuts:["Meta + B"],action:"Bold"},{shortcuts:["Meta + I"],action:"Italic"},{shortcuts:["Meta + U"],action:"Underline"},{shortcuts:["Meta + A"],action:"Select all"},{shortcuts:["Meta + Y","Meta + Shift + Z"],action:"Redo"},{shortcuts:["Meta + Z"],action:"Undo"},{shortcuts:["Access + 1"],action:"Header 1"},{shortcuts:["Access + 2"],action:"Header 2"},{shortcuts:["Access + 3"],action:"Header 3"},{shortcuts:["Access + 4"],action:"Header 4"},{shortcuts:["Access + 5"],action:"Header 5"},{shortcuts:["Access + 6"],action:"Header 6"},{shortcuts:["Access + 7"],action:"Paragraph"},{shortcuts:["Access + 8"],action:"Div"},{shortcuts:["Access + 9"],action:"Address"},{shortcuts:["Alt + 0"],action:"Open help dialog"},{shortcuts:["Alt + F9"],action:"Focus to menubar"},{shortcuts:["Alt + F10"],action:"Focus to toolbar"},{shortcuts:["Alt + F11"],action:"Focus to element path"},{shortcuts:["Ctrl + F9"],action:"Focus to contextual toolbar"},{shortcuts:["Shift + Enter"],action:"Open popup menu for split buttons"},{shortcuts:["Meta + K"],action:"Insert link (if link plugin activated)"},{shortcuts:["Meta + S"],action:"Save (if save plugin activated)"},{shortcuts:["Meta + F"],action:"Find (if searchreplace plugin activated)"},{shortcuts:["Meta + Shift + F"],action:"Switch to or from fullscreen mode"}],_=tinymce.util.Tools.resolve("tinymce.Env"),j=function(e){var n=_.mac?{alt:"&#x2325;",ctrl:"&#x2303;",shift:"&#x21E7;",meta:"&#x2318;",access:"&#x2303;&#x2325;"}:{meta:"Ctrl ",access:"Shift + Alt "},t=e.split("+"),o=y(t,function(e){var t=e.toLowerCase().trim();return E(n,t)?n[t]:e});return _.mac?o.join("").replace(/\s/,""):o.join("+")},H=function(){return{name:"shortcuts",title:"Handy Shortcuts",items:[{type:"table",header:["Action","Shortcut"],cells:y(I,function(e){var t=y(e.shortcuts,j).join(" or ");return[e.action,t]})}]}},U=tinymce.util.Tools.resolve("tinymce.util.I18n"),W=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"},{key:"advcode",name:"Advanced Code Editor*"},{key:"formatpainter",name:"Format Painter*"},{key:"powerpaste",name:"PowerPaste*"},{key:"tinydrive",name:"Tiny Drive*"},{key:"tinymcespellchecker",name:"Spell Checker Pro*"},{key:"a11ychecker",name:"Accessibility Checker*"},{key:"linkchecker",name:"Link Checker*"},{key:"mentions",name:"Mentions*"},{key:"mediaembed",name:"Enhanced Media Embed*"},{key:"checklist",name:"Checklist*"},{key:"casechange",name:"Case Change*"},{key:"permanentpen",name:"Permanent Pen*"},{key:"pageembed",name:"Page Embed*"},{key:"tinycomments",name:"Tiny Comments*"},{key:"advtable",name:"Advanced Tables*"},{key:"autocorrect",name:"Autocorrect*"}],D=function(e){function r(t,n){return function(e,t){for(var n=0,o=e.length;n<o;n++){var a=e[n];if(t(a,n))return x.some(a)}return x.none()}(W,function(e){return e.key===n}).fold(function(){var e=t.plugins[n].getMetadata;return"function"==typeof e?o(e()):n},function(e){return o({name:e.name,url:"https://www.tiny.cloud/docs/plugins/"+e.key})})}var t,n,o=l(k,'<a href="${url}" target="_blank" rel="noopener">${name}</a>');return{name:"plugins",title:"Plugins",items:[{type:"htmlpanel",presets:"document",html:[(n=e,null==n?"":'<div data-mce-tabstop="1" tabindex="-1">'+function(t){var e=function(e){var t=F(e.plugins);return e.settings.forced_plugins===undefined?t:function(e,t){for(var n=[],o=0,a=e.length;o<a;o++){var r=e[o];t(r,o)&&n.push(r)}return n}(t,function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,e)}}(l(b,e.settings.forced_plugins)))}(t),n=y(e,function(e){return"<li>"+r(t,e)+"</li>"}),o=n.length,a=n.join("");return"<p><b>"+U.translate(["Plugins installed ({0}):",o])+"</b></p><ul>"+a+"</ul>"}(n)+"</div>"),(t=y(["Accessibility Checker","Advanced Code Editor","Advanced Tables","Case Change","Checklist","Tiny Comments","Tiny Drive","Enhanced Media Embed","Format Painter","Link Checker","Mentions","MoxieManager","Page Embed","Permanent Pen","PowerPaste","Spell Checker Pro"],function(e){return"<li>"+U.translate(e)+"</li>"}).join(""),'<div data-mce-tabstop="1" tabindex="-1"><p><b>'+U.translate("Premium plugins:")+"</b></p><ul>"+t+'<li style="list-style: none; margin-top: 1em;"><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+U.translate("Learn more...")+"</a></li></ul></div>")].join("")}]}},N=tinymce.util.Tools.resolve("tinymce.EditorManager"),L=function(){var e,t,n='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+(e=N.majorVersion,t=N.minorVersion,0===e.indexOf("@")?"X.X.X":e+"."+t)+"</a>";return{name:"versions",title:"Version",items:[{type:"htmlpanel",html:"<p>"+U.translate(["You are using {0}",n])+"</p>",presets:"document"}]}},B=function(){return{name:"keyboardnav",title:"Keyboard Navigation",items:[{type:"htmlpanel",html:"<h1>Editor UI keyboard navigation</h1>\n\n<h2>Activating keyboard navigation</h2>\n\n<p>The sections of the outer UI of the editor - the menubar, toolbar, sidebar and footer - are all keyboard navigable. As such, there are multiple ways to activate keyboard navigation:</p>\n<ul>\n  <li>Focus the menubar: Alt + F9 (Windows) or &#x2325;F9 (MacOS)</li>\n  <li>Focus the toolbar: Alt + F10 (Windows) or &#x2325;F10 (MacOS)</li>\n  <li>Focus the footer: Alt + F11 (Windows) or &#x2325;F11 (MacOS)</li>\n</ul>\n\n<p>Focusing the menubar or toolbar will start keyboard navigation at the first item in the menubar or toolbar, which will be highlighted with a gray background. Focusing the footer will start keyboard navigation at the first item in the element path, which will be highlighted with an underline. </p>\n\n<h2>Moving between UI sections</h2>\n\n<p>When keyboard navigation is active, pressing tab will move the focus to the next major section of the UI, where applicable. These sections are:</p>\n<ul>\n  <li>the menubar</li>\n  <li>each group of the toolbar </li>\n  <li>the sidebar</li>\n  <li>the element path in the footer </li>\n  <li>the wordcount toggle button in the footer </li>\n  <li>the branding link in the footer </li>\n</ul>\n\n<p>Pressing shift + tab will move backwards through the same sections, except when moving from the footer to the toolbar. Focusing the element path then pressing shift + tab will move focus to the first toolbar group, not the last.</p>\n\n<h2>Moving within UI sections</h2>\n\n<p>Keyboard navigation within UI sections can usually be achieved using the left and right arrow keys. This includes:</p>\n<ul>\n  <li>moving between menus in the menubar</li>\n  <li>moving between buttons in a toolbar group</li>\n  <li>moving between items in the element path</li>\n</ul>\n\n<p>In all these UI sections, keyboard navigation will cycle within the section. For example, focusing the last button in a toolbar group then pressing right arrow will move focus to the first item in the same toolbar group. </p>\n\n<h1>Executing buttons</h1>\n\n<p>To execute a button, navigate the selection to the desired button and hit space or enter.</p>\n\n<h1>Opening, navigating and closing menus</h1>\n\n<p>When focusing a menubar button or a toolbar button with a menu, pressing space, enter or down arrow will open the menu. When the menu opens the first item will be selected. To move up or down the menu, press the up or down arrow key respectively. This is the same for submenus, which can also be opened and closed using the left and right arrow keys.</p>\n\n<p>To close any active menu, hit the escape key. When a menu is closed the selection will be restored to its previous selection. This also works for closing submenus.</p>\n\n<h1>Context toolbars and menus</h1>\n\n<p>To focus an open context toolbar such as the table context toolbar, press Ctrl + F9 (Windows) or &#x2303;F9 (MacOS).</p>\n\n<p>Context toolbar navigation is the same as toolbar navigation, and context menu navigation is the same as standard menu navigation.</p>\n\n<h1>Dialog navigation</h1>\n\n<p>There are two types of dialog UIs in TinyMCE: tabbed dialogs and non-tabbed dialogs.</p>\n\n<p>When a non-tabbed dialog is opened, the first interactive component in the dialog will be focused. Users can navigate between interactive components by pressing tab. This includes any footer buttons. Navigation will cycle back to the first dialog component if tab is pressed while focusing the last component in the dialog. Pressing shift + tab will navigate backwards.</p>\n\n<p>When a tabbed dialog is opened, the first button in the tab menu is focused. Pressing tab will navigate to the first interactive component in that tab, and will cycle through the tab\u2019s components, the footer buttons, then back to the tab button. To switch to another tab, focus the tab button for the current tab, then use the arrow keys to cycle through the tab buttons.</p>"}]}};!function z(){t.add("help",function(e){var t=a({}),n=function(n){return{addTab:function(e){var t=n.get();t[e.name]=e,n.set(t)}}}(t),o=A(e,t);return s(e,o),i(e,o),e.shortcuts.add("Alt+0","Open help dialog","mceHelp"),n})}()}();