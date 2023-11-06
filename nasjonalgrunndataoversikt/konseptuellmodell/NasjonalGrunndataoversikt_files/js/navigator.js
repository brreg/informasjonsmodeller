Library.load({"js/animate.js":["Graphics"]});var Navigator=function(){var a=contextPath?contextPath:"";if(a!=""&&!/\/$/.test(a)){a=a+"/"}this.slideSpeed=15;this.slideTimer=5;this.leftContainer;this.rightContainer;this.menuLeftImg='url("'+a+'images/navigator/menu_left.gif")';this.menuLeftOverImg='url("'+a+'images/navigator/menu_left_over.gif")';this.menuRightImg='url("'+a+'images/navigator/menu_right.gif")';this.menuRightOverImg='url("'+a+'images/navigator/menu_right_over.gif")';this.menuLeftIcon=this.createMenuLeftIcon();this.menuRightIcon=this.createMenuRightIcon();this.dockImg='url("'+a+'images/navigator/dock.gif")';this.dockOverImg='url("'+a+'images/navigator/dock_over.gif")';this.undockImg='url("'+a+'images/navigator/undock.gif")';this.undockOverImg='url("'+a+'images/navigator/undock_over.gif")';this.dockIcon=this.createDockIcon();this.undockIcon=this.createUnDockIcon();this.miniImg='url("'+a+'images/navigator/minimize.gif")';this.miniOverImg='url("'+a+'images/navigator/minimize_over.gif")';this.maxiImg='url("'+a+'images/navigator/maximize.gif")';this.maxiOverImg='url("'+a+'images/navigator/maximize_over.gif")';this.miniIcon=this.createMinimizeIcon();this.maxiIcon=this.createMaximizeIcon();this.pin=true;this.inProgress=false;window.navigatorObj=this};var SWIPE_W=4;var SWIPE_E=6;Navigator.prototype={repaint:function(){this.menuLeftIcon=this.createMenuLeftIcon();this.menuRightIcon=this.createMenuRightIcon();this.dockIcon=this.createDockIcon();this.undockIcon=this.createUnDockIcon();this.miniIcon=this.createMinimizeIcon();this.maxiIcon=this.createMaximizeIcon()},setImg:function(a){this.img=a},setDockIcon:function(a){this.dockIcon=a},setUnDockIcon:function(a){this.undockIcon=a},getDockIcon:function(){return this.dockIcon},getUnDockIcon:function(){return this.undockIcon},setMinimizeIcon:function(a){this.miniIcon=a},setMaximizeIcon:function(a){this.maxiIcon=a},getMinimizeIcon:function(){return this.miniIcon},getMaximizeIcon:function(){return this.maxiIcon},setMenuLeftIcon:function(a){this.menuLeftIcon=a},setMenuRightIcon:function(a){this.menuRightIcon=a},getMenuLeftIcon:function(){return this.menuLeftIcon},getMenuRightIcon:function(){return this.menuRightIcon},createDockIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Dock this menu";a.style.backgroundImage=this.dockImg;a.style.width="15px";a.style.height="15px";a.style.cssFloat="right";a.style.styleFloat="right";a.style.cursor="pointer";a.onclick=function(){window.navigatorObj.togglePin()};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.dockOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.dockImg};a.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.dockImg};return a},createUnDockIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Undock this menu";a.style.backgroundImage=this.undockImg;a.style.width="15px";a.style.height="15px";a.style.cssFloat="right";a.style.styleFloat="right";a.style.cursor="pointer";a.onclick=function(){window.navigatorObj.togglePin()};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.undockOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.undockImg};a.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.undockImg};return a},createMinimizeIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Hide this menu";a.style.backgroundImage=this.miniImg;a.style.width="15px";a.style.height="15px";a.style.cssFloat="right";a.style.styleFloat="right";a.style.cursor="pointer";a.onclick=function(){window.navigatorObj.toggle()};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.miniOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.miniImg};a.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.miniImg};return a},createMaximizeIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Show this menu";a.style.backgroundImage=this.maxiImg;a.style.width="15px";a.style.height="15px";a.style.cssFloat="right";a.style.styleFloat="right";a.style.cursor="pointer";a.onclick=function(){window.navigatorObj.toggle()};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.maxiOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.maxiImg};return a},createMenuLeftIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Hide this menu";a.style.backgroundImage=this.menuLeftImg;a.style.width="13px";a.style.height="101px";a.style.cursor="pointer";a.style.zIndex=201;a.onclick=function(){window.navigatorObj.toggle(this)};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.menuLeftOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.menuLeftImg};a.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.menuLeftImg};return a},createMenuRightIcon:function(){var a=document.createElement("div");a.className='nm-content';a.title="Show this menu";a.style.backgroundImage=this.menuRightImg;a.style.width="13px";a.style.height="101px";a.style.cursor="pointer";a.style.zIndex=201;a.onclick=function(){window.navigatorObj.toggle(this)};a.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.menuRightOverImg};a.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.menuRightImg};a.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.menuRightImg};return a},togglePin:function(a){if(a){this.pin=a}else{this.pin=!this.pin}this.leftContainer=document.getElementById("splitpane-first");this.rightContainer=document.getElementById("splitpane-second");if(this.pin){window.navigatorObj.dock();this.leftContainer.style.zIndex=this.leftContainer.orgZIndex;removeEvent(document,"mousedown",window.navigatorObj.mouseMove);Cookies.setCookie("Navigator.pin","true",1);this.dockIcon.parentNode.replaceChild(this.undockIcon,this.dockIcon)}else{this.leftContainer.orgZIndex=this.leftContainer.style.zIndex;this.leftContainer.style.zIndex="200";window.navigatorObj.toggle(window.navigatorObj.img);Cookies.setCookie("Navigator.pin","false",1);this.undockIcon.parentNode.replaceChild(this.dockIcon,this.undockIcon)}},mouseMove:function(h){if(!window.navigatorObj||!window.navigatorObj.leftContainer){return}if(window.navigatorObj.inProgress){return}if(!h){h=window.event}var b=0;var a=0;if(h.pageX||h.pageY){b=h.pageX;a=h.pageY}else{if(h.clientX||h.clientY){b=h.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;a=h.clientY+document.body.scrollTop+document.documentElement.scrollTop}}var d=window.navigatorObj.leftContainer.offsetLeft-window.navigatorObj.leftContainer.offsetWidth;var c=window.navigatorObj.leftContainer.offsetLeft+window.navigatorObj.leftContainer.offsetWidth;var g=window.navigatorObj.leftContainer.offsetTop;var f=window.navigatorObj.leftContainer.offsetTop+window.navigatorObj.leftContainer.offsetHeight;if(b<d||b>c||a<g||a>f){window.navigatorObj.toggle(window.navigatorObj.img);removeEvent(document,"mousedown",window.navigatorObj.mouseMove)}},dock:function(){clearTimeout(this.timerId);Graphics.setOpacity(this.leftContainer,100);if(this.pin){this.leftContainer.style.position="static";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.rightContainer.style.width=this.rightContainer.orgWidth+"px";var a=document.getElementById("splitpane-first");if(a.style.visibility!="hidden"){var h=document.getElementById("splitpane-second");var e=document.getElementById("splitpane");var d=document.getElementById("tabs");var g=parseInt(e.offsetWidth);var b=parseInt(d.offsetWidth);var c=b/g*100;var f=100-c;a.style.width=c+"%";h.style.width=f+"%"}}else{Graphics.setOpacity(this.leftContainer,95);this.leftContainer.style.overflow=this.leftContainer.orgOverflow;addEvent(document,"mousedown",this.mouseMove)}this.leftContainer.style.left=this.leftContainer.orgLeft+"px";this.inProgress=false},toggle:function(a,b,c){if(this.inProgress){return}this.inProgress=true;if(a){this.img=a}if(b==null){b=this.slideSpeed}if(c==null){c=this.slideTimer}this.leftContainer=document.getElementById("splitpane-first");this.rightContainer=document.getElementById("splitpane-second");if(this.timerId!=null){clearTimeout(this.timerId)}this.leftContainer.fadeSize=Math.round(100/b);this.interval=c;if(this.leftContainer.style.visibility=="hidden"){this.menuRightIcon.parentNode.replaceChild(this.menuLeftIcon,this.menuRightIcon);this.leftContainer.moveSize=Math.round(this.leftContainer.orgWidth/b);this.leftContainer.style.visibility="visible";this.leftContainer.style.left=(this.leftContainer.offsetLeft+this.leftContainer.moveSize)+"px";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.leftContainer.fade=0;this.timerId=setTimeout("window.navigatorObj.repeatSlide("+SWIPE_E+");",this.interval)}else{this.menuLeftIcon.parentNode.replaceChild(this.menuRightIcon,this.menuLeftIcon);if(!this.leftContainer.orgLeft){this.leftContainer.orgLeft=this.leftContainer.offsetLeft}this.leftContainer.orgWidth=this.leftContainer.offsetWidth;this.leftContainer.orgOverflow=this.leftContainer.style.overflow;this.rightContainer.orgWidth=this.rightContainer.offsetWidth;this.leftContainer.moveSize=Math.round(this.leftContainer.orgWidth/b);this.leftContainer.style.left=(this.leftContainer.orgLeft-this.leftContainer.moveSize)+"px";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.leftContainer.fade=100;this.leftContainer.style.position="absolute";this.leftContainer.style.overflow="hidden";this.rightContainer.style.width="100%";this.timerId=setTimeout("window.navigatorObj.repeatSlide("+SWIPE_W+");",this.interval)}},repeatSlide:function(b){if(this.leftContainer!=null){if(this.leftContainer.offsetLeft<(this.leftContainer.orgLeft-this.leftContainer.orgWidth)){clearTimeout(this.timerId);Graphics.setOpacity(this.leftContainer,0);this.leftContainer.style.visibility="hidden";this.inProgress=false}else{if(this.leftContainer.offsetLeft>=this.leftContainer.orgLeft){window.navigatorObj.dock()}else{var a=0;switch(b){case SWIPE_E:a=this.leftContainer.offsetLeft+this.leftContainer.moveSize;this.leftContainer.fade+=this.leftContainer.fadeSize;if(this.leftContainer.fade<50){Graphics.setOpacity(this.leftContainer,this.leftContainer.fade)}break;case SWIPE_W:a=this.leftContainer.offsetLeft-this.leftContainer.moveSize;this.leftContainer.fade-=this.leftContainer.fadeSize;if(this.leftContainer.fade>50){Graphics.setOpacity(this.leftContainer,this.leftContainer.fade)}break}this.leftContainer.style.left=a+"px";this.timerId=setTimeout("window.navigatorObj.repeatSlide("+b+");",this.interval)}}}}};