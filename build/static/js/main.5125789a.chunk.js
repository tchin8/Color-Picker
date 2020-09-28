(this["webpackJsonpfront-end-applicant-project"]=this["webpackJsonpfront-end-applicant-project"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),o=a(7),s=a(4),u=a(5),c=a(6),d=a(1),m=a(9),h=a(8),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={input:"",backgroundColor:"white",hideList:!1},n.list=[],n.filterColors=n.filterColors.bind(Object(d.a)(n)),n.handleFocus=n.handleFocus.bind(Object(d.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(d.a)(n)),n.handleClickOutside=n.handleClickOutside.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("mouseup",this.handleClick)}},{key:"handleKeyDown",value:function(e){var t=document.getElementsByTagName("input")[0],a=document.getElementsByClassName("each-color");if("Enter"===e.key)for(var n=0;n<a.length;n++){var l=a[n];if(document.activeElement===l){this.setState({backgroundColor:l.getAttribute("id").toLowerCase(),input:l.getAttribute("id")}),document.getElementsByTagName("input")[0].focus();break}}else"Tab"===e.key&&this.list.length?document.activeElement===t&&this.list.length&&setTimeout((function(){return a[0].focus()}),1):"Escape"===e.key&&(document.activeElement.blur(),this.setState({hideList:!0}))}},{key:"handleClickOutside",value:function(){var e=document.getElementsByTagName("input")[0],t=Array.from(document.getElementsByClassName("each-color"));document.activeElement===e||t.some((function(e){return e===document.activeElement}))||this.setState({hideList:!0})}},{key:"handleClick",value:function(){var e=Array.from(document.getElementsByClassName("each-color"));if(e.some((function(e){return e===document.activeElement})))for(var t=0;t<e.length;t++){var a=e[t];if(document.activeElement===a){this.setState({backgroundColor:a.getAttribute("id").toLowerCase(),input:a.getAttribute("id")}),document.getElementsByTagName("input")[0].focus();break}}}},{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(s.a)({},e,a.target.value))}}},{key:"filterColors",value:function(){var e=this.props.list,t=this.state.input,a=null,n=null;if(t.length>0&&t.split("").some((function(e){return" "!==e}))&&!e.some((function(e){return e===t}))){for(var r=t.toLowerCase();r.startsWith(" ");)r=r.slice(1);this.list=e.filter((function(e){return e.toLowerCase().startsWith(r)})),(a=this.list.map((function(e,t){var a=e.slice(0,r.length),n=e.slice(r.length);return l.a.createElement("li",{key:t,className:"each-color",tabIndex:"0",id:e},l.a.createElement("span",{className:"bold"},a),l.a.createElement("span",{className:"normal"},n))}))).length||(n=l.a.createElement("span",{className:"error"},"Oops! Looks like there are no colors that start with those letters. Please try again."," "))}return[a,n]}},{key:"handleFocus",value:function(){document.getElementsByTagName("input")[0]===document.activeElement&&this.setState({hideList:!1})}},{key:"render",value:function(){var e=this.state,t=e.input,a=e.backgroundColor,n=e.hideList,r=this.filterColors(),i=Object(o.a)(r,2),s=i[0],u=i[1];return l.a.createElement("section",{className:"background",style:{backgroundColor:a}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main"},l.a.createElement("span",{className:"title"},"Welcome to Color Finder!"),l.a.createElement("div",{className:"instructions"},l.a.createElement("span",null,"Instructions"),l.a.createElement("span",{className:"mouse"},"with mouse: click to select your color"),l.a.createElement("span",{className:"keyboard"},"with keyboard: use ",l.a.createElement("span",null,"tab")," and ",l.a.createElement("span",null,"shift+tab")),l.a.createElement("span",{className:"keyboard-row-2"},"use ",l.a.createElement("span",null,"enter")," to select")),l.a.createElement("input",{type:"text",placeholder:"Begin typing to find a color...",value:t,className:s&&s.length&&!n?"show-list":"",onFocus:this.handleFocus,onChange:this.update("input")}),s&&!n?l.a.createElement("ul",{className:"colors-list"},s):null,u)))}}]),a}(l.a.Component),y=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root");i.a.render(l.a.createElement(k,{list:y}),e)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.5125789a.chunk.js.map