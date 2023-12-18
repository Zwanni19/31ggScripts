//============================================= | ALTE ID 5573543
//***********Ehrenmann Counter Kram************  | FUE ZUKUNFT 5614418
//============================================= | NEUE ID 5597336
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function ehrenmannCounter(){
  var fhs = document.createElement('script');
  var fhs_id = "5679518";

  var ref = (''+document.referrer+'');
  var pn =  window.location;var w_h = window.screen.width + " x " + window.screen.height;

 // fhs.src = "//freehostedscripts.net/ocounter.php?site="+fhs_id+""+ref+"&wh="+w_h+"&a=1&pn="+pn+"";
  fhs.src = "//freehostedscripts.net/ocounter.php?site="+fhs_id+"&e1=Ehrenmann anwesend!&e2=Ehrenmänner anwesend!&r="+ref+"&wh="+w_h+"&a=1&pn="+pn+"";
  document.head.appendChild(fhs);
  var spanElem=document.getElementById("o_5679518");
  //console.log(spanElem)
  if (spanElem != null){
    //console.log("Remove")
  	document.getElementById("o_5679518").remove();
  }else{
    document.getElementById("lable").innerText=" Laden..."
  }
  var parent = document.getElementsByClassName("credit")[0];
  //console.log(parent)
  var newSpan = document.createElement("span")  
  newSpan.id="o_"+fhs_id
  newSpan.style="display:none"
  parent.append(newSpan);
  window.setTimeout(function(){
      var userCount = document.getElementById("o_"+fhs_id).innerText.substr(0,document.getElementById("o_"+fhs_id).innerText.indexOf(" "));
    console.log("[Ehrenmänner]"+userCount);
    document.getElementById("counter").innerHTML = userCount
    //console.log("Breite: " + document.body.clientWidth);
    if(userCount!=1 && document.body.clientWidth >= 455){
    	document.getElementById("lable").innerText=""
    }else if (userCount==1 && document.body.clientWidth >= 455){
    	document.getElementById("lable").innerText=""
    }else{
    	document.getElementById("lable").innerText=""
    }
  },1000)
}

//=============================================
//******Javascript Funktionen werden gestartet*
//=============================================
ehrenmannCounter();
window.setInterval(ehrenmannCounter,3000);
changeColor(true);
document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("ContentLoaded");
    addPlayer();
    snowChooser();
    getArticleLink();
    var d = new Date();
    console.log(d.getMonth())
    if ((d.getMonth()==0||d.getMonth()==11) && (d.getDate()==1||d.getDate()==31) && (d.getHours() == 0||d.getHours() >=19)){checkFireworks();
    }else{
        console.log(""+d.getMonth() + d.getDate() + d.getHours());
    }
    document.getElementById("snowChooser").onchange = function(){
    	toggleSnowChooser();
    }
});

//=============================================
//******Konami Code****************************
//=============================================
$("body").keyup(function(event){
    codeTmp.push(event.which);
    if(codeTmp[codeTmp.length-1] == code[codeTmp.length-1]){
        console.log(codeTmp[codeTmp.length-1]);
    }else{
        console.log("emptied");
        codeTmp = [];
    }
    if (codeTmp.length == code.length){
        console.log("Konami Code");
        startDisco = !startDisco;
        if (startDisco) {
            RestartConfetti();
            disco();
            //nomify();
            //loop();
            codeTmp = [];
        }else{
            setTimeout(function(){
                $("body").removeAttr("style")
                DeactivateConfetti();
                changeColor(true);    
                codeTmp = [];
            },10)
        }
        codeTmp = [];
    }
})
$( window ).scroll(function(){
    //console.log($(window).scrollTop())
    $( "canvas" ).offset({top:$(window).scrollTop()});
});



function checkFireworks(){
    var fireworks = false;
    setInterval(function(){
        var d = new Date();
        if (d.getMonth()==0 && d.getDate()==1 && d.getHours() == 0 && !fireworks){
            loop();
            fireworks = true;
            console.log("Ab gehts")
            $("#countdown").html("Frohes Neues Jahr " + d.getFullYear())
        }else if (d.getMonth()==11 && d.getDate()==31 && d.getHours() == 23 && d.getMinutes() == 59 && d.getSeconds() >= 50){
            console.log(60-d.getSeconds())
            $("#countdown").html(60-d.getSeconds())
        }else if (d.getMonth()==0 && d.getDate()==1 && d.getHours() == 0 && fireworks){
            $("#countdown").html("Frohes Neues Jahr " + d.getFullYear())
        }else{
            console.log(""+d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds())
            $("#countdown").html("");
        }    
    },1000)
    
}

document.addEventListener('DOMContentLoaded', function () {
    const snowflakesContainer = document.getElementById('snowflakes');
    const toggleSnowflakes = document.getElementById('toggleSnowflakes');

    toggleSnowflakes.addEventListener('change', function () {
        if (toggleSnowflakes.checked) {
            generateSnowflakes();
        } else {
            removeSnowflakes();
        }
    });

    function generateSnowflakes() {
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
            snowflakesContainer.appendChild(snowflake);
        }
    }

    function removeSnowflakes() {
        snowflakesContainer.innerHTML = '';
    }
});

/** @license
 * DHTML Snowstorm! JavaScript-based snow for web pages
 * Making it snow on the internets since 2003. You're welcome.
 * -----------------------------------------------------------
 * Version 1.44.20131208 (Previous rev: 1.44.20131125)
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License
 * http://schillmania.com/projects/snowstorm/license.txt
 */

/*jslint nomen: true, plusplus: true, sloppy: true, vars: true, white: true */
/*global window, document, navigator, clearInterval, setInterval */

var snowStorm = (function(window, document) {

  // --- common properties ---

  this.autoStart = true;          // Whether the snow should start automatically or not.
  this.excludeMobile = false;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) Enable at your own risk.
  this.flakesMax = 128;           // Limit total amount of snow made (falling + sticking)
  this.flakesMaxActive = 64;      // Limit amount of snow falling at once (less = lower CPU use)
  this.animationInterval = 50;    // Theoretical "miliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower
  this.useGPU = true;             // Enable transform-based hardware acceleration, reduce CPU load.
  this.className = null;          // CSS class name for further customization on snow elements
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) By default, be nice.
  this.flakeBottom = null;        // Integer for Y axis snow limit, 0 or null for "full-screen" snow effect
  this.followMouse = false;        // Snow movement can respond to the user's mouse
  this.snowColor = '#fff';        // Don't eat (or use?) yellow snow.
  this.snowCharacter = '&bull;';  // &bull; = bullet, &middot; is square on some systems etc.
  this.snowStick = true;          // Whether or not snow should "stick" at the bottom. When off, will never collect.
  this.targetElement = null;      // element which snow will be appended to (null = document.body) - can be an element ID eg. 'myDiv', or a DOM node reference
  this.useMeltEffect = true;      // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
  this.useTwinkleEffect = true;  // Allow snow to randomly "flicker" in and out of view while falling
  this.usePositionFixed = false;  // true = snow does not shift vertically when scrolling. May increase CPU load, disabled by default - if enabled, used only where supported
  this.usePixelPosition = true;  // Whether to use pixel values for snow top/left vs. percentages. Auto-enabled if body is position:relative or targetElement is specified.

  // --- less-used bits ---

  this.freezeOnBlur = false;       // Only snow when the window is in focus (foreground.) Saves CPU.
  this.flakeLeftOffset = 0;       // Left margin/gutter space on edge of container (eg. browser window.) Bump up these values if seeing horizontal scrollbars.
  this.flakeRightOffset = 0;      // Right margin/gutter space on edge of container
  this.flakeWidth = 8;            // Max pixel width reserved for snow element
  this.flakeHeight = 8;           // Max pixel height reserved for snow element
  this.vMaxX = 5;                 // Maximum X velocity range for snow
  this.vMaxY = 4;                 // Maximum Y velocity range for snow
  this.zIndex = 0;                // CSS stacking order applied to each snowflake

  // --- "No user-serviceable parts inside" past this point, yadda yadda ---

  var storm = this,
  features,
  // UA sniffing and backCompat rendering mode checks for fixed position, etc.
  isIE = navigator.userAgent.match(/msie/i),
  isIE6 = navigator.userAgent.match(/msie 6/i),
  isMobile = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
  isBackCompatIE = (isIE && document.compatMode === 'BackCompat'),
  noFixed = (isBackCompatIE || isIE6),
  screenX = null, screenX2 = null, screenY = null, scrollY = null, docHeight = null, vRndX = null, vRndY = null,
  windOffset = 1,
  windMultiplier = 2,
  flakeTypes = 6,
  fixedForEverything = false,
  targetElementIsRelative = false,
  opacitySupported = (function(){
    try {
      document.createElement('div').style.opacity = '0.5';
    } catch(e) {
      return false;
    }
    return true;
  }()),
  didInit = false,
  docFrag = document.createDocumentFragment();

  features = (function() {

    var getAnimationFrame;

    /**
     * hat tip: paul irish
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * https://gist.github.com/838785
     */

    function timeoutShim(callback) {
      window.setTimeout(callback, 1000/(storm.animationInterval || 20));
    }

    var _animationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        timeoutShim);

    // apply to window, avoid "illegal invocation" errors in Chrome
    getAnimationFrame = _animationFrame ? function() {
      return _animationFrame.apply(window, arguments);
    } : null;

    var testDiv;

    testDiv = document.createElement('div');

    function has(prop) {

      // test for feature support
      var result = testDiv.style[prop];
      return (result !== undefined ? prop : null);

    }

    // note local scope.
    var localFeatures = {

      transform: {
        ie:  has('-ms-transform'),
        moz: has('MozTransform'),
        opera: has('OTransform'),
        webkit: has('webkitTransform'),
        w3: has('transform'),
        prop: null // the normalized property value
      },

      getAnimationFrame: getAnimationFrame

    };

    localFeatures.transform.prop = (
      localFeatures.transform.w3 || 
      localFeatures.transform.moz ||
      localFeatures.transform.webkit ||
      localFeatures.transform.ie ||
      localFeatures.transform.opera
    );

    testDiv = null;

    return localFeatures;

  }());

  this.timer = null;
  this.flakes = [];
  this.disabled = false;
  this.active = false;
  this.meltFrameCount = 20;
  this.meltFrames = [];

  this.setXY = function(o, x, y) {

    if (!o) {
      return false;
    }

    if (storm.usePixelPosition || targetElementIsRelative) {

      o.style.left = (x - storm.flakeWidth) + 'px';
      o.style.top = (y - storm.flakeHeight) + 'px';

    } else if (noFixed) {

      o.style.right = (100-(x/screenX*100)) + '%';
      // avoid creating vertical scrollbars
      o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

    } else {

      if (!storm.flakeBottom) {

        // if not using a fixed bottom coordinate...
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.bottom = (100-(y/screenY*100)) + '%';

      } else {

        // absolute top.
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

      }

    }

  };

  this.events = (function() {

    var old = (!window.addEventListener && window.attachEvent), slice = Array.prototype.slice,
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    function getArgs(oArgs) {
      var args = slice.call(oArgs), len = args.length;
      if (old) {
        args[1] = 'on' + args[1]; // prefix
        if (len > 3) {
          args.pop(); // no capture
        }
      } else if (len === 3) {
        args.push(false);
      }
      return args;
    }

    function apply(args, sType) {
      var element = args.shift(),
          method = [evt[sType]];
      if (old) {
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }
    }

    function addEvent() {
      apply(getArgs(arguments), 'add');
    }

    function removeEvent() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      add: addEvent,
      remove: removeEvent
    };

  }());

  function rnd(n,min) {
    if (isNaN(min)) {
      min = 0;
    }
    return (Math.random()*n)+min;
  }

  function plusMinus(n) {
    return (parseInt(rnd(2),10)===1?n*-1:n);
  }

  this.randomizeWind = function() {
    var i;
    vRndX = plusMinus(rnd(storm.vMaxX,0.2));
    vRndY = rnd(storm.vMaxY,0.2);
    if (this.flakes) {
      for (i=0; i<this.flakes.length; i++) {
        if (this.flakes[i].active) {
          this.flakes[i].setVelocities();
        }
      }
    }
  };

  this.scrollHandler = function() {
    var i;
    // "attach" snowflakes to bottom of window if no absolute bottom value was given
    scrollY = (storm.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || (noFixed ? document.body.scrollTop : 0), 10));
    if (isNaN(scrollY)) {
      scrollY = 0; // Netscape 6 scroll fix
    }
    if (!fixedForEverything && !storm.flakeBottom && storm.flakes) {
      for (i=0; i<storm.flakes.length; i++) {
        if (storm.flakes[i].active === 0) {
          storm.flakes[i].stick();
        }
      }
    }
  };

  this.resizeHandler = function() {
    if (window.innerWidth || window.innerHeight) {
      screenX = window.innerWidth - 16 - storm.flakeRightOffset;
      screenY = (storm.flakeBottom || window.innerHeight);
    } else {
      screenX = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0) - storm.flakeRightOffset;
      screenY = storm.flakeBottom || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
    }
    docHeight = document.body.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
  };

  this.resizeHandlerAlt = function() {
    screenX = storm.targetElement.offsetWidth - storm.flakeRightOffset;
    screenY = storm.flakeBottom || storm.targetElement.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
    docHeight = document.body.offsetHeight;
  };

  this.freeze = function() {
    // pause animation
    if (!storm.disabled) {
      storm.disabled = 1;
    } else {
      return false;
    }
    storm.timer = null;
  };

  this.resume = function() {
    if (storm.disabled) {
       storm.disabled = 0;
    } else {
      return false;
    }
    storm.timerInit();
  };

  this.toggleSnow = function() {
    if (!storm.flakes.length) {
      // first run
      storm.start();
    } else {
      storm.active = !storm.active;
      if (storm.active) {
        storm.show();
        storm.resume();
      } else {
        storm.stop();
        storm.freeze();
      }
    }
  };

  this.stop = function() {
    var i;
    this.freeze();
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'none';
    }
    storm.events.remove(window,'scroll',storm.scrollHandler);
    storm.events.remove(window,'resize',storm.resizeHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.remove(document,'focusout',storm.freeze);
        storm.events.remove(document,'focusin',storm.resume);
      } else {
        storm.events.remove(window,'blur',storm.freeze);
        storm.events.remove(window,'focus',storm.resume);
      }
    }
  };

  this.show = function() {
    var i;
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'block';
    }
  };

  this.SnowFlake = function(type,x,y) {
    var s = this;
    this.type = type;
    this.x = x||parseInt(rnd(screenX-20),10);
    this.y = (!isNaN(y)?y:-rnd(screenY)-12);
    this.vX = null;
    this.vY = null;
    this.vAmpTypes = [1,1.2,1.4,1.6,1.8]; // "amplification" for vX/vY (based on flake size/type)
    this.vAmp = this.vAmpTypes[this.type] || 1;
    this.melting = false;
    this.meltFrameCount = storm.meltFrameCount;
    this.meltFrames = storm.meltFrames;
    this.meltFrame = 0;
    this.twinkleFrame = 0;
    this.active = 1;
    this.fontSize = (10+(this.type/5)*10);
    this.o = document.createElement('div');
    this.o.innerHTML = storm.snowCharacter;
    if (storm.className) {
      this.o.setAttribute('class', storm.className);
    }
    this.o.style.color = storm.snowColor;
    this.o.style.position = (fixedForEverything?'fixed':'absolute');
    if (storm.useGPU && features.transform.prop) {
      // GPU-accelerated snow.
      this.o.style[features.transform.prop] = 'translate3d(0px, 0px, 0px)';
    }
    this.o.style.width = storm.flakeWidth+'px';
    this.o.style.height = storm.flakeHeight+'px';
    this.o.style.fontFamily = 'arial,verdana';
    this.o.style.cursor = 'default';
    this.o.style.overflow = 'hidden';
    this.o.style.fontWeight = 'normal';
    this.o.style.zIndex = storm.zIndex;
    docFrag.appendChild(this.o);

    this.refresh = function() {
      if (isNaN(s.x) || isNaN(s.y)) {
        // safety check
        return false;
      }
      storm.setXY(s.o, s.x, s.y);
    };

    this.stick = function() {
      if (noFixed || (storm.targetElement !== document.documentElement && storm.targetElement !== document.body)) {
        s.o.style.top = (screenY+scrollY-storm.flakeHeight)+'px';
      } else if (storm.flakeBottom) {
        s.o.style.top = storm.flakeBottom+'px';
      } else {
        s.o.style.display = 'none';
        s.o.style.bottom = '0%';
        s.o.style.position = 'fixed';
        s.o.style.display = 'block';
      }
    };

    this.vCheck = function() {
      if (s.vX>=0 && s.vX<0.2) {
        s.vX = 0.2;
      } else if (s.vX<0 && s.vX>-0.2) {
        s.vX = -0.2;
      }
      if (s.vY>=0 && s.vY<0.2) {
        s.vY = 0.2;
      }
    };

    this.move = function() {
      var vX = s.vX*windOffset, yDiff;
      s.x += vX;
      s.y += (s.vY*s.vAmp);
      if (s.x >= screenX || screenX-s.x < storm.flakeWidth) { // X-axis scroll check
        s.x = 0;
      } else if (vX < 0 && s.x-storm.flakeLeftOffset < -storm.flakeWidth) {
        s.x = screenX-storm.flakeWidth-1; // flakeWidth;
      }
      s.refresh();
      yDiff = screenY+scrollY-s.y+storm.flakeHeight;
      if (yDiff<storm.flakeHeight) {
        s.active = 0;
        if (storm.snowStick) {
          s.stick();
        } else {
          s.recycle();
        }
      } else {
        if (storm.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random()>0.998) {
          // ~1/1000 chance of melting mid-air, with each frame
          s.melting = true;
          s.melt();
          // only incrementally melt one frame
          // s.melting = false;
        }
        if (storm.useTwinkleEffect) {
          if (s.twinkleFrame < 0) {
            if (Math.random() > 0.97) {
              s.twinkleFrame = parseInt(Math.random() * 8, 10);
            }
          } else {
            s.twinkleFrame--;
            if (!opacitySupported) {
              s.o.style.visibility = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 'hidden' : 'visible');
            } else {
              s.o.style.opacity = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 0 : 1);
            }
          }
        }
      }
    };

    this.animate = function() {
      // main animation loop
      // move, check status, die etc.
      s.move();
    };

    this.setVelocities = function() {
      s.vX = vRndX+rnd(storm.vMaxX*0.12,0.1);
      s.vY = vRndY+rnd(storm.vMaxY*0.12,0.1);
    };

    this.setOpacity = function(o,opacity) {
      if (!opacitySupported) {
        return false;
      }
      o.style.opacity = opacity;
    };

    this.melt = function() {
      if (!storm.useMeltEffect || !s.melting) {
        s.recycle();
      } else {
        if (s.meltFrame < s.meltFrameCount) {
          s.setOpacity(s.o,s.meltFrames[s.meltFrame]);
          s.o.style.fontSize = s.fontSize-(s.fontSize*(s.meltFrame/s.meltFrameCount))+'px';
          s.o.style.lineHeight = storm.flakeHeight+2+(storm.flakeHeight*0.75*(s.meltFrame/s.meltFrameCount))+'px';
          s.meltFrame++;
        } else {
          s.recycle();
        }
      }
    };

    this.recycle = function() {
      s.o.style.display = 'none';
      s.o.style.position = (fixedForEverything?'fixed':'absolute');
      s.o.style.bottom = 'auto';
      s.setVelocities();
      s.vCheck();
      s.meltFrame = 0;
      s.melting = false;
      s.setOpacity(s.o,1);
      s.o.style.padding = '0px';
      s.o.style.margin = '0px';
      s.o.style.fontSize = s.fontSize+'px';
      s.o.style.lineHeight = (storm.flakeHeight+2)+'px';
      s.o.style.textAlign = 'center';
      s.o.style.verticalAlign = 'baseline';
      s.x = parseInt(rnd(screenX-storm.flakeWidth-20),10);
      s.y = parseInt(rnd(screenY)*-1,10)-storm.flakeHeight;
      s.refresh();
      s.o.style.display = 'block';
      s.active = 1;
    };

    this.recycle(); // set up x/y coords etc.
    this.refresh();

  };

  this.snow = function() {
    var active = 0, flake = null, i, j;
    for (i=0, j=storm.flakes.length; i<j; i++) {
      if (storm.flakes[i].active === 1) {
        storm.flakes[i].move();
        active++;
      }
      if (storm.flakes[i].melting) {
        storm.flakes[i].melt();
      }
    }
    if (active<storm.flakesMaxActive) {
      flake = storm.flakes[parseInt(rnd(storm.flakes.length),10)];
      if (flake.active === 0) {
        flake.melting = true;
      }
    }
    if (storm.timer) {
      features.getAnimationFrame(storm.snow);
    }
  };

  this.mouseMove = function(e) {
    if (!storm.followMouse) {
      return true;
    }
    var x = parseInt(e.clientX,10);
    if (x<screenX2) {
      windOffset = -windMultiplier+(x/screenX2*windMultiplier);
    } else {
      x -= screenX2;
      windOffset = (x/screenX2)*windMultiplier;
    }
  };

  this.createSnow = function(limit,allowInactive) {
    var i;
    for (i=0; i<limit; i++) {
      storm.flakes[storm.flakes.length] = new storm.SnowFlake(parseInt(rnd(flakeTypes),10));
      if (allowInactive || i>storm.flakesMaxActive) {
        storm.flakes[storm.flakes.length-1].active = -1;
      }
    }
    storm.targetElement.appendChild(docFrag);
  };

  this.timerInit = function() {
    storm.timer = true;
    storm.snow();
  };

  this.init = function() {
    var i;
    for (i=0; i<storm.meltFrameCount; i++) {
      storm.meltFrames.push(1-(i/storm.meltFrameCount));
    }
    storm.randomizeWind();
    storm.createSnow(storm.flakesMax); // create initial batch
    storm.events.add(window,'resize',storm.resizeHandler);
    storm.events.add(window,'scroll',storm.scrollHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.add(document,'focusout',storm.freeze);
        storm.events.add(document,'focusin',storm.resume);
      } else {
        storm.events.add(window,'blur',storm.freeze);
        storm.events.add(window,'focus',storm.resume);
      }
    }
    storm.resizeHandler();
    storm.scrollHandler();
    if (storm.followMouse) {
      storm.events.add(isIE?document:window,'mousemove',storm.mouseMove);
    }
    storm.animationInterval = Math.max(20,storm.animationInterval);
    storm.timerInit();
  };

  this.start = function(bFromOnLoad) {
    if (!didInit) {
      didInit = true;
    } else if (bFromOnLoad) {
      // already loaded and running
      return true;
    }
    if (typeof storm.targetElement === 'string') {
      var targetID = storm.targetElement;
      storm.targetElement = document.getElementById(targetID);
      if (!storm.targetElement) {
        throw new Error('Snowstorm: Unable to get targetElement "'+targetID+'"');
      }
    }
    if (!storm.targetElement) {
      storm.targetElement = (document.body || document.documentElement);
    }
    if (storm.targetElement !== document.documentElement && storm.targetElement !== document.body) {
      // re-map handler to get element instead of screen dimensions
      storm.resizeHandler = storm.resizeHandlerAlt;
      //and force-enable pixel positioning
      storm.usePixelPosition = true;
    }
    storm.resizeHandler(); // get bounding box elements
    storm.usePositionFixed = (storm.usePositionFixed && !noFixed && !storm.flakeBottom); // whether or not position:fixed is to be used
    if (window.getComputedStyle) {
      // attempt to determine if body or user-specified snow parent element is relatlively-positioned.
      try {
        targetElementIsRelative = (window.getComputedStyle(storm.targetElement, null).getPropertyValue('position') === 'relative');
      } catch(e) {
        // oh well
        targetElementIsRelative = false;
      }
    }
    fixedForEverything = storm.usePositionFixed;
    if (screenX && screenY && !storm.disabled) {
      storm.init();
      storm.active = true;
    }
  };

  function doDelayedStart() {
    window.setTimeout(function() {
      storm.start(true);
    }, 20);
    // event cleanup
    storm.events.remove(isIE?document:window,'mousemove',doDelayedStart);
  }

  function doStart() {
    if (!storm.excludeMobile || !isMobile) {
      doDelayedStart();
    }
    // event cleanup
    storm.events.remove(window, 'load', doStart);
  }

  // hooks for starting the snow
  if (storm.autoStart) {
    storm.events.add(window, 'load', doStart, false);
  }

  return this;

}(window, document));


//==================================================
//Konfetti
// globals
var canvas;
var ctx;
var W;
var H;
var mp = 150; //max particles
var particles = [];
var angle = 0;
var tiltAngle = 0;
var confettiActive = true;
var animationComplete = true;
var deactivationTimerHandler;
var reactivationTimerHandler;
var animationHandler;

// objects
var particleColors = {
    colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
    colorIndex: 0,
    colorIncrementer: 0,
    colorThreshold: 10,
    getColor: function () {
        if (this.colorIncrementer >= 10) {
            this.colorIncrementer = 0;
            this.colorIndex++;
            if (this.colorIndex >= this.colorOptions.length) {
                this.colorIndex = 0;
            }
        }
        this.colorIncrementer++;
        return this.colorOptions[this.colorIndex];
    }
}

function confettiParticle(color) {
    this.x = Math.random() * W; // x-coordinate
    this.y = (Math.random() * H) - H; //y-coordinate
    this.r = RandomFromTo(10, 30); //radius;
    this.d = (Math.random() * mp) + 10; //density;
    this.color = color;
    this.tilt = Math.floor(Math.random() * 10) - 10;
    this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
    this.tiltAngle = 0;

    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = this.r / 2;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
        return ctx.stroke();
    }
}

$(document).ready(function () {
    SetGlobals();
    //InitializeButton();
    //InitializeConfetti();

    $(window).resize(function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });

});

function InitializeButton() {
    $('#stopButton').click(DeactivateConfetti);
    $('#startButton').click(RestartConfetti);
}

function SetGlobals() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
}

function InitializeConfetti() {
    particles = [];
    animationComplete = false;
    for (var i = 0; i < mp; i++) {
        var particleColor = particleColors.getColor();
        particles.push(new confettiParticle(particleColor));
    }
    StartConfetti();
}

function Draw() {
    ctx.clearRect(0, 0, W, H);
    var results = [];
    for (var i = 0; i < mp; i++) {
        (function (j) {
            results.push(particles[j].draw());
        })(i);
    }
    Update();

    return results;
}

function RandomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}


function Update() {
    var remainingFlakes = 0;
    var particle;
    angle += 0.01;
    tiltAngle += 0.1;

    for (var i = 0; i < mp; i++) {
        particle = particles[i];
        if (animationComplete) return;

        if (!confettiActive && particle.y < -15) {
            particle.y = H + 100;
            continue;
        }

        stepParticle(particle, i);

        if (particle.y <= H) {
            remainingFlakes++;
        }
        CheckForReposition(particle, i);
    }

    if (remainingFlakes === 0) {
        StopConfetti();
    }
}

function CheckForReposition(particle, index) {
    if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
        if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
        {
            repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
        } else {
            if (Math.sin(angle) > 0) {
                //Enter from the left
                repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            } else {
                //Enter from the right
                repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            }
        }
    }
}
function stepParticle(particle, particleIndex) {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
    particle.x += Math.sin(angle);
    particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
}

function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
    particle.x = xCoordinate;
    particle.y = yCoordinate;
    particle.tilt = tilt;
}

function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    (function animloop() {
        if (animationComplete) return null;
        animationHandler = requestAnimFrame(animloop);
        return Draw();
    })();
}

function ClearTimers() {
    clearTimeout(reactivationTimerHandler);
    clearTimeout(animationHandler);
}

function DeactivateConfetti() {
    confettiActive = false;
    ClearTimers();
}

function StopConfetti() {
    animationComplete = true;
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}

function RestartConfetti() {
    ClearTimers();
    StopConfetti();
    reactivationTimerHandler = setTimeout(function () {
        confettiActive = true;
        animationComplete = false;
        InitializeConfetti();
    }, 100);

}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.oRequestAnimationFrame || 
    window.msRequestAnimationFrame || 
    function (callback) {
        return window.setTimeout(callback, 1000 / 60);
    };
})();



function nomify(){
    var shapes={"w_rect":["tumblr_mohxt1V6a91svhqpoo1_500.gif","tumblr_md0q05wMJb1rxis0k.gif","tumblr_ml0nmjWpX41snjjivo1_500.gif","CastDance_322x183.gif", "CookieDawn_322x183.gif", "Painting_322x183.gif"],"t_rect":["CookieMonster-Sitting.jpg","487961_10150955894571587_1215263686_n.jpg","534767_10151516100086587_1790492047_n.jpg","Static.jpg"],"square":["cookie_monster.jpg","935823_10151502554911587_1547641144_n.jpg","902502_10151355606796587_45192127_o.jpg","cookie-monster.jpg","Cookie_250x250.gif"]},
    img_path="https://downloads.cdn.sesame.org/sw/OmNomNomify/";
    function chooseImg(shape){
        return img_path+shapes[shape][Math.floor(Math.random()*shapes[shape].length)]
    }
    function getShape(h,w){
        return h===w?"square":h>w?"t_rect":"w_rect"
    }
    var iframeArr = document.getElementsByTagName('iframe');
    for (var x = 0; x < iframeArr.length;x++){
        
        if ($(iframeArr[x]).attr("id")!=undefined && $(iframeArr[x]).attr("id").indexOf("dsq")>-1){
            iframe = iframeArr[x];
        }
    }
    //console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDocument);
    var imgs=iframeDocument.getElementsByTagName("img"),img,h,w,shape;
    for(var i=0,len=imgs.length;i<len;i++){
        img=imgs[i],h=img.height,w=img.width,s=getShape(h,w);img.setAttribute("height",h);img.setAttribute("width",w);img.src=chooseImg(s);
        return void 0;
    }
}
//$('iframeSelector').contents()
var code = ["38","38","40","40","37","39","37","39","66","65"];
var codeTmp = []
var iframe;
var searchIframe = setInterval(function(){
    var iframeArr = document.getElementsByTagName('iframe');
    console.log("Searching iframe");
    for (var x = 0; x < iframeArr.length;x++){
        if ($(iframeArr[x]).attr("id")!=undefined && $(iframeArr[x]).attr("id").indexOf("dsq")>-1){
            iframe = iframeArr[x];
            clearInterval(searchIframe);
            console.log("Found iframe");
            setTimeout(function(){
                console.log($(iframe).contents());
                $(iframe).contents().find('body').keyup(function(event){
                    console.log("Iframe Keyup");
                });
            },1000)
            
        }
    }
    //console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
},1000);



// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
		// firework collection
		fireworks = [],
		// particle collection
		particles = [],
		// starting hue
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 5,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;
		
// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
	// actual coordinates
	this.x = sx;
	this.y = sy;
	// starting coordinates
	this.sx = sx;
	this.sy = sy;
	// target coordinates
	this.tx = tx;
	this.ty = ty;
	// distance from starting point to target
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 3;
	// populate initial coordinate collection with the current coordinates
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// circle target indicator radius
	this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// speed up the firework
	this.speed *= this.acceleration;
	
	// get the current velocities based on angle and speed
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	// how far will the firework have traveled with velocities applied?
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// remove the firework, use the index passed into the update function to determine which to remove
		fireworks.splice( index, 1 );
	} else {
		// target not reached, keep traveling
		this.x += vx;
		this.y += vy;
	}
}

// draw firework
Firework.prototype.draw = function() {
	ctx.beginPath();
	// move to the last tracked coordinate in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// create particle
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// set a random angle in all possible directions, in radians
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// friction will slow the particle down
	this.friction = 0.95;
	// gravity will be applied and pull the particle down
	this.gravity = 1;
	// set the hue to a random number +-50 of the overall hue variable
	this.hue = random( hue - 50, hue + 50 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	// set how fast the particle fades out
	this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// draw particle
Particle.prototype.draw = function() {
	ctx. beginPath();
	// move to the last tracked coordinates in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
	// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

// main demo loop
function loop() {
	// this function will run endlessly with requestAnimationFrame
	requestAnimFrame( loop );
	
	// increase the hue to get different colored fireworks over time
	//hue += 0.5;
  
  // create random color
  hue= random(0, 360 );
	
	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	ctx.globalCompositeOperation = 'lighter';
	
	// loop over each firework, draw it, update it
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// loop over each particle, draw it, update it
	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );
	}
	
	// launch fireworks automatically to random coordinates, when the mouse isn't down
	if( timerTick >= timerTotal ) {
		if( !mousedown ) {
			// start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
			fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
			timerTick = 0;
		}
	} else {
		timerTick++;
	}
	
	// limit the rate at which fireworks get launched when mouse is down
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});
