﻿;(function(a){a.backstretch=function(p,b,l){function s(){if(p){var b;0==c.length?c=a("<div />").attr("id","backstretch").css({left:0,top:0,position:m?"fixed":"absolute",overflow:"hidden",zIndex:-999999,margin:0,padding:0,height:"100%",width:"100%"}):c.find("img").addClass("deleteable");b=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999,maxWidth:"none"}).bind("load",function(d){var b=a(this),e;b.css({width:"auto",height:"auto"});e=this.width||a(d.target).width();d=this.height||a(d.target).height();n=e/d;q();b.fadeIn(g.speed,function(){c.find(".deleteable").remove();"function"==typeof l&&l()})}).appendTo(c);0==a("body #backstretch").length&&(0===a(window).scrollTop()&&window.scrollTo(0,0),a("body").append(c));c.data("settings",g);b.attr("src",p);a(window).unbind("resize.backstretch").bind("resize.backstretch",function(){"onorientationchange"in window&&window.pageYOffset===0&&window.scrollTo(0,1);q()})}}function q(){try{j={left:0,top:0},rootWidth=h=o.width(),rootHeight=r?window.innerHeight:o.height(),f=h/n,f>=rootHeight?(k=(f-rootHeight)/2,g.centeredY&&(j.top="-"+k+"px")):(f=rootHeight,h=f*n,k=(h-rootWidth)/2,g.centeredX&&(j.left="-"+k+"px")),c.css({width:rootWidth,height:rootHeight}).find("img:not(.deleteable)").css({width:h,height:f}).css(j)}catch(a){}}var t={centeredX:!0,centeredY:!0,speed:0},c=a("#backstretch"),g=c.data("settings")||t;c.data("settings");var o,m,r,n,h,f,k,j;b&&"object"==typeof b&&a.extend(g,b);b&&"function"==typeof b&&(l=b);a(document).ready(function(){var b=window,d=navigator.userAgent,c=navigator.platform,e=d.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],f=d.match(/Fennec\/([0-9]+)/),f=!!f&&f[1],g=d.match(/Opera Mobi\/([0-9]+)/),h=!!g&&g[1],i=d.match(/MSIE ([0-9]+)/),i=!!i&&i[1];o=(m=!((-1<c.indexOf("iPhone")||-1<c.indexOf("iPad")||-1<c.indexOf("iPod"))&&e&&534>e||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||g&&7458>h||-1<d.indexOf("Android")&&e&&533>e||f&&6>f||"palmGetResource"in window&&e&&534>e||-1<d.indexOf("MeeGo")&&-1<d.indexOf("NokiaBrowser/8.5.0")||i&&6>=i))?a(window):a(document);r=m&&window.innerHeight;s()});return this}})(jQuery);