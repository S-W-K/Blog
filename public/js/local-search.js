// build time:Fri Aug 02 2019 16:42:32 GMT+0900 (JST)
"use strict";$(document).ready(function(){var e=false;var t;var r=true;var n=CONFIG.search.path;if(n.length===0){n="search.xml"}else if(/json$/i.test(n)){r=false}var a=CONFIG.search.root+n;var o=document.getElementById("local-search-input");var i=document.getElementById("local-search-result");function s(e){return String(e).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)}).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function l(e,t,r){var n=e.length;if(n===0){return[]}var a=0,o=[],i=[];if(!r){t=t.toLowerCase();e=e.toLowerCase()}while((o=t.indexOf(e,a))>-1){i.push({position:o,word:e});a=o+n}return i}function c(e,t,r,n,a){var o=n[n.length-1];var i=o.position;var s=o.word;var l=[];var c=0;while(i+s.length<=r&&n.length!==0){if(s===a){c++}l.push({position:i,length:s.length});var h=i+s.length;n.pop();while(n.length!==0){o=n[n.length-1];i=o.position;s=o.word;if(h>i){n.pop()}else{break}}}return{hits:l,start:t,end:r,searchTextCount:c}}function h(e,t){var r="";var n=t.start;t.hits.forEach(function(t){r+=e.substring(n,t.position);var a=t.position+t.length;r+='<b class="search-keyword">'+e.substring(t.position,a)+"</b>";n=a});r+=e.substring(n,t.end);return r}function u(){var e=o.value.trim().toLowerCase();var r=e.split(/[-\s]+/);if(r.length>1){r.push(e)}var n=[];if(e.length>0){t.forEach(function(t){if(!t.title){return}var a=0;var o=t.title.trim();var i=o.toLowerCase();var u=t.content?t.content.trim().replace(/<[^>]+>/g,""):"";if(CONFIG.localsearch.unescape){u=s(u)}var p=u.toLowerCase();var f=decodeURIComponent(t.url).replace(/\/{2,}/g,"/");var v=[];var g=[];r.forEach(function(e){v=v.concat(l(e,i,false));g=g.concat(l(e,p,false))});if(v.length>0||g.length>0){var d=v.length+g.length;[v,g].forEach(function(e){e.sort(function(e,t){if(t.position!==e.position){return t.position-e.position}else{return e.word.length-t.word.length}})});var C=[];if(v.length!==0){var $=c(o,0,o.length,v,e);a+=$.searchTextCountInSlice;C.push($)}var x=[];while(g.length!==0){var w=g[g.length-1];var m=w.position;var y=w.word;var T=m-20;var b=m+80;if(T<0){T=0}if(b<m+y.length){b=m+y.length}if(b>u.length){b=u.length}var $=c(u,T,b,g,e);a+=$.searchTextCountInSlice;x.push($)}x.sort(function(e,t){if(e.searchTextCount!==t.searchTextCount){return t.searchTextCount-e.searchTextCount}else if(e.hits.length!==t.hits.length){return t.hits.length-e.hits.length}else{return e.start-t.start}});var I=parseInt(CONFIG.localsearch.top_n_per_article,10);if(I>=0){x=x.slice(0,I)}var k="";if(C.length!==0){k+='<li><a href="'+f+'" class="search-result-title">'+h(o,C[0])+"</a>"}else{k+='<li><a href="'+f+'" class="search-result-title">'+o+"</a>"}x.forEach(function(e){k+='<a href="'+f+'">'+'<p class="search-result">'+h(u,e)+"...</p></a>"});k+="</li>";n.push({item:k,searchTextCount:a,hitCount:d,id:n.length})}})}if(r.length===1&&r[0]===""){i.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>'}else if(n.length===0){i.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>'}else{n.sort(function(e,t){if(e.searchTextCount!==t.searchTextCount){return t.searchTextCount-e.searchTextCount}else if(e.hitCount!==t.hitCount){return t.hitCount-e.hitCount}else{return t.id-e.id}});var a='<ul class="search-result-list">';n.forEach(function(e){a+=e.item});a+="</ul>";i.innerHTML=a}}function p(n){$.ajax({url:a,dataType:r?"xml":"json",success:function(a){e=true;t=r?$("entry",a).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get():a;$(".local-search-pop-overlay").remove();$("body").css("overflow","");if(n){n()}}})}if(CONFIG.localsearch.preload){p()}function f(){$(".popup").hide();$("#local-search-input").val("");$(".search-result-list").remove();$("#no-result").remove();$(".local-search-pop-overlay").remove();$("body").css("overflow","")}function v(){$("body").append('<div class="search-popup-overlay local-search-pop-overlay"></div>').css("overflow","hidden");$(".search-popup-overlay").click(f);$(".popup").toggle();var e=$("#local-search-input");e.attr("autocapitalize","none");e.attr("autocorrect","off");e.focus()}function g(){$("body").append('<div class="search-popup-overlay local-search-pop-overlay">'+'<div id="search-loading-icon">'+'<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>'+"</div>"+"</div>").css("overflow","hidden");$("#search-loading-icon").css({margin:"20% auto 0 auto","text-align":"center"});p(v)}if(CONFIG.localsearch.trigger==="auto"){o.addEventListener("input",u)}else{$(".search-icon").click(u);o.addEventListener("keypress",function(e){if(e.keyCode===13){u()}})}$(".popup-trigger").click(function(t){t.stopPropagation();if(e===false){g()}else{v()}});$(".popup-btn-close").click(f);$(".popup").click(function(e){e.stopPropagation()});$(document).on("keyup",function(e){var t=e.which===27&&$(".search-popup").is(":visible");if(t){f()}})});
//rebuild by neat 